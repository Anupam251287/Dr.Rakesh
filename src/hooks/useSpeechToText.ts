import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Define SpeechRecognition interface types for browsers
interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export interface UseSpeechToTextOptions {
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
  onFinalResult?: (text: string) => void;
  onInterimResult?: (text: string) => void;
}

export function useSpeechToText(options: UseSpeechToTextOptions = {}) {
  const { language } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(true);

  const recognitionRef = useRef<any>(null);
  const activeLangRef = useRef<string>(options.lang || (language === 'hi' ? 'hi-IN' : 'en-IN'));

  useEffect(() => {
    activeLangRef.current = options.lang || (language === 'hi' ? 'hi-IN' : 'en-IN');
  }, [language, options.lang]);

  useEffect(() => {
    const win = typeof window !== 'undefined' ? (window as unknown as IWindow) : null;
    const SpeechRecognitionClass = win?.SpeechRecognition || win?.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setIsSupported(false);
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore already stopped
      }
    }
    setIsListening(false);
    setInterimTranscript('');
  }, []);

  const startListening = useCallback((customLang?: string) => {
    setError(null);
    const win = typeof window !== 'undefined' ? (window as unknown as IWindow) : null;
    const SpeechRecognitionClass = win?.SpeechRecognition || win?.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setIsSupported(false);
      setError('Speech recognition is not supported in this browser. Try Chrome, Edge, or Safari.');
      return;
    }

    // If currently running, stop previous instance
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
    }

    try {
      const recognition = new SpeechRecognitionClass();
      recognition.continuous = options.continuous !== undefined ? options.continuous : true;
      recognition.interimResults = options.interimResults !== undefined ? options.interimResults : true;
      recognition.lang = customLang || activeLangRef.current || 'en-IN';

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event: any) => {
        let currentInterim = '';
        let currentFinal = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const item = event.results[i];
          const text = item[0]?.transcript || '';
          if (item.isFinal) {
            currentFinal += text + ' ';
          } else {
            currentInterim += text;
          }
        }

        if (currentFinal) {
          const trimmed = currentFinal.trim();
          setTranscript((prev) => (prev ? `${prev} ${trimmed}` : trimmed));
          if (options.onFinalResult) {
            options.onFinalResult(trimmed);
          }
        }

        setInterimTranscript(currentInterim);
        if (options.onInterimResult) {
          options.onInterimResult(currentInterim);
        }
      };

      recognition.onerror = (event: any) => {
        let errorMsg = 'Speech recognition error occurred.';
        if (event.error === 'not-allowed') {
          errorMsg = 'Microphone permission was denied. Please allow microphone access.';
        } else if (event.error === 'no-speech') {
          errorMsg = 'No speech was detected. Please try speaking again.';
        } else if (event.error === 'network') {
          errorMsg = 'Network issue with speech recognition service.';
        }
        setError(errorMsg);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
        setInterimTranscript('');
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      setError(err?.message || 'Could not start speech recognition.');
      setIsListening(false);
    }
  }, [options]);

  const toggleListening = useCallback((customLang?: string) => {
    if (isListening) {
      stopListening();
    } else {
      startListening(customLang);
    }
  }, [isListening, startListening, stopListening]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
    setError(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {}
      }
    };
  }, []);

  return {
    isSupported,
    isListening,
    transcript,
    interimTranscript,
    error,
    startListening,
    stopListening,
    toggleListening,
    resetTranscript,
  };
}
