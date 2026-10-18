import React, { useState } from 'react';
import {
  Smartphone,
  Share,
  PlusSquare,
  CheckCircle2,
  X,
  Download,
  Laptop,
  Check,
  Shield,
  Zap,
  WifiOff,
  Sparkles
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [activeTab, setActiveTab] = useState<'ios' | 'android' | 'desktop'>(
    isIOS ? 'ios' : isAndroid ? 'android' : 'android'
  );
  const [installedSuccess, setInstalledSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNativeInstall = async () => {
    const success = await install();
    if (success) {
      setInstalledSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1800);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#10253F]/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FAFCFE] rounded-2xl shadow-2xl border border-[#10253F]/15 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header with App Branding */}
        <div className="bg-gradient-to-r from-[#10253F] to-[#0E6060] text-white p-5 sm:p-6 flex items-start justify-between relative">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs p-1.5 border border-white/20 shadow-inner flex items-center justify-center shrink-0">
              <img
                src="/icon.svg"
                alt="Dr. Rakesh Kumar App Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                Progressive Web App (PWA)
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                Install Clinic App
              </h3>
              <p className="text-white/80 text-xs sm:text-sm">
                Fast home-screen access on iOS, Android & Desktop
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Benefits bar */}
        <div className="bg-[#EBF7F7] border-b border-[#168C8C]/20 px-4 py-2.5 flex items-center justify-around text-xs text-[#0E6060] font-medium">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#168C8C]" />
            Instant Launch
          </span>
          <span className="flex items-center gap-1.5">
            <WifiOff className="w-3.5 h-3.5 text-[#168C8C]" />
            Offline Tools
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#168C8C]" />
            No App Store Needed
          </span>
        </div>

        {/* Platform Selector Tabs */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex rounded-lg bg-gray-100 p-1 text-xs font-semibold text-gray-600">
            <button
              onClick={() => setActiveTab('android')}
              className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'android'
                  ? 'bg-white text-[#10253F] shadow-xs'
                  : 'hover:text-[#10253F]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android / Chrome</span>
            </button>
            <button
              onClick={() => setActiveTab('ios')}
              className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'ios'
                  ? 'bg-white text-[#10253F] shadow-xs'
                  : 'hover:text-[#10253F]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Apple iOS (iPhone/iPad)</span>
            </button>
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'desktop'
                  ? 'bg-white text-[#10253F] shadow-xs'
                  : 'hover:text-[#10253F]'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>PC / Mac / Tablet</span>
            </button>
          </div>

          {/* Android Tab Content */}
          {activeTab === 'android' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#10253F]">
                      One-Click Direct Installation
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Install directly to your home screen or app drawer without taking device storage.
                    </p>
                  </div>
                </div>

                {isInstallable ? (
                  <button
                    onClick={handleNativeInstall}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#168C8C] hover:bg-[#0E6060] text-white font-semibold text-sm rounded-xl shadow-md transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Install App on Android Now</span>
                  </button>
                ) : isInstalled ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-800 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Application is already installed on this device!</span>
                  </div>
                ) : (
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 space-y-2">
                    <p className="font-medium text-[#10253F]">
                      If install prompt is not showing automatically:
                    </p>
                    <ol className="list-decimal pl-4 space-y-1 text-gray-600">
                      <li>Tap the <strong>three dots (⋮)</strong> in Chrome / Samsung Internet at top right.</li>
                      <li>Select <strong>&quot;Install app&quot;</strong> or <strong>&quot;Add to Home screen&quot;</strong>.</li>
                      <li>Confirm to pin to your home launcher.</li>
                    </ol>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600">
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#168C8C]" />
                  <span>Works on Samsung, Pixel, OnePlus, Xiaomi</span>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#168C8C]" />
                  <span>Zero battery drain & lightweight</span>
                </div>
              </div>
            </div>
          )}

          {/* iOS Tab Content */}
          {activeTab === 'ios' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#10253F] flex items-center gap-1.5">
                      Tap the Safari Share Button
                      <Share className="w-4 h-4 text-blue-600 inline" />
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      In Safari browser on your iPhone or iPad, tap the <strong>Share</strong> button located at the bottom toolbar (or top bar on iPad).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#10253F] flex items-center gap-1.5">
                      Select &quot;Add to Home Screen&quot;
                      <PlusSquare className="w-4 h-4 text-[#168C8C] inline" />
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Scroll down through the share options menu and tap <strong>&quot;Add to Home Screen&quot;</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#10253F]">
                      Tap &quot;Add&quot; in the Top-Right
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      The official Dr. Rakesh Kumar medical icon will appear on your iPhone screen for immediate full-screen opening.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                <span className="text-base">💡</span>
                <p>
                  <strong>Note for iOS Chrome or Firefox users:</strong> Apple iOS requires PWAs to be added via Apple Safari browser to enable standalone full-screen capabilities.
                </p>
              </div>
            </div>
          )}

          {/* Desktop Tab Content */}
          {activeTab === 'desktop' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs space-y-3">
                <h4 className="font-semibold text-sm text-[#10253F]">
                  Install on Windows PC, Mac, or Chromebook
                </h4>
                <p className="text-xs text-gray-600">
                  You can install this clinical portal as an app on your computer for quick consultation management and prescription reference.
                </p>
                <div className="p-3 bg-gray-50 rounded-lg text-xs space-y-1.5 text-gray-700">
                  <p>
                    <strong>In Chrome / Edge:</strong> Look for the <strong>Install App icon (⊕ or ⬇)</strong> on the right side of the URL address bar, or click Menu (⋮) → &quot;Save and Share&quot; → &quot;Install Dr. Rakesh Kumar&quot;.
                  </p>
                </div>
                {isInstallable && (
                  <button
                    onClick={handleNativeInstall}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#168C8C] hover:bg-[#0E6060] text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Install on This Computer</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {installedSuccess && (
            <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Installation successful! Launching from your home screen.</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <p className="text-[11px] text-gray-500">
            Official Pediatric Endocrinology Clinic App
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
