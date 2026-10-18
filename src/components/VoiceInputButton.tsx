import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Globe, AlertCircle, Check } from 'lucide-react';
import { useSpeechToText } from '../hooks/useSpeechToText';
import { useLanguage } from '../context/LanguageContext';

interface VoiceInputButtonProps {
  onTranscript: (text: string) => void;
  targetFieldLabel?: string;
  placeholder?: string;
  className?: string;
  mode?: 'append' | 'replace';
  size?: 'sm' | 'md';
}

export const VoiceInputButton: React.FC<VoiceInputButtonProps> = ({
  onTranscript,
  targetFieldLabel = 'input',
  placeholder = 'Speak clearly into your microphone...',
  className = '',
  mode = 'append',
  size = 'md',
}) => {
  const { language } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<'en-IN' | 'hi-IN'>(
    language === 'hi' ? 'hi-IN' : 'en-IN'
  );

  const {
    isSupported,
    isListening,
    interimTranscript,
    error,
    toggleListening,
    stopListening,
  } = useSpeechToText({
    lang: selectedLang,
    onFinalResult: (finalText) => {
      onTranscript(finalText);
    },
  });

  const handleToggleLang = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = selectedLang === 'en-IN' ? 'hi-IN' : 'en-IN';
    setSelectedLang(next);
    if (isListening) {
      stopListening();
    }
  };

  const handleMicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleListening(selectedLang);
  };

  if (!isSupported) {
    return (
      <span
        title="Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari."
        className="inline-flex items-center text-xs text-gray-400 opacity-60 cursor-not-allowed"
      >
        <MicOff className="w-3.5 h-3.5" />
      </span>
    );
  }

  const isSmall = size === 'sm';

  return (
    <div className={`relative inline-flex items-center gap-1.5 ${className}`}>
      {/* Speech language badge */}
      <button
        type="button"
        onClick={handleToggleLang}
        title={`Voice Language: ${selectedLang === 'hi-IN' ? 'Hindi (हिन्दी)' : 'English (India)'}. Click to switch.`}
        className="px-1.5 py-0.5 text-[10px] font-semibold font-mono tracking-wider rounded bg-gray-100 hover:bg-gray-200 text-[#10253F] border border-gray-200 transition-colors"
      >
        {selectedLang === 'hi-IN' ? 'हिन्दी' : 'EN'}
      </button>

      {/* Main Microphone Button */}
      <button
        type="button"
        onClick={handleMicClick}
        aria-label={isListening ? `Stop recording voice for ${targetFieldLabel}` : `Speak to type for ${targetFieldLabel}`}
        title={isListening ? 'Click to stop listening' : `Click to speak (${selectedLang === 'hi-IN' ? 'Hindi' : 'English'})`}
        className={`relative inline-flex items-center justify-center rounded-lg transition-all shadow-2xs group ${
          isSmall ? 'p-1.5 text-xs' : 'px-2.5 py-1.5 text-xs font-medium'
        } ${
          isListening
            ? 'bg-rose-600 text-white shadow-rose-300 shadow-md ring-2 ring-rose-400 ring-offset-1 animate-pulse'
            : 'bg-[#EBF7F7] hover:bg-[#d5eeee] text-[#168C8C] border border-[#168C8C]/30'
        }`}
      >
        {isListening ? (
          <>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-400 animate-ping" />
            <MicOff className={`${isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-white shrink-0`} />
            {!isSmall && <span className="ml-1.5 font-semibold text-white">Listening...</span>}
          </>
        ) : (
          <>
            <Mic className={`${isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-[#168C8C] group-hover:scale-110 transition-transform shrink-0`} />
            {!isSmall && <span className="ml-1.5">Voice Type</span>}
          </>
        )}
      </button>

      {/* Active Listening Floating Banner & Audio Wave */}
      {isListening && (
        <div className="absolute right-0 top-full mt-2 z-50 w-72 sm:w-80 p-3 bg-[#10253F] text-white rounded-xl shadow-2xl border border-[#168C8C]/40 animate-in fade-in slide-in-from-top-1">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>Listening in {selectedLang === 'hi-IN' ? 'Hindi' : 'English'}...</span>
            </div>
            <button
              type="button"
              onClick={stopListening}
              className="text-[10px] text-white/70 hover:text-white px-1.5 py-0.5 rounded bg-white/10"
            >
              Done (Stop)
            </button>
          </div>

          <p className="text-xs text-white/90 italic min-h-[36px] bg-white/5 p-2 rounded border border-white/10">
            {interimTranscript ? `"${interimTranscript}"` : placeholder}
          </p>

          <div className="flex items-center justify-between mt-2 text-[10px] text-white/60">
            <span>Speech is automatically transcribed</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <Volume2 className="w-3 h-3 animate-pulse" />
              Mic Active
            </span>
          </div>
        </div>
      )}

      {/* Error notification */}
      {error && !isListening && (
        <div className="absolute right-0 top-full mt-1 z-50 w-64 p-2 bg-amber-50 text-amber-900 text-[11px] rounded-lg border border-amber-300 shadow-lg flex items-start gap-1.5 animate-in fade-in">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
