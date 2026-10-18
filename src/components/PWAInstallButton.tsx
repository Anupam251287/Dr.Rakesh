import React from 'react';
import { Download, Smartphone, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'mobile-bar' | 'hero' | 'drawer';
  onOpenModal?: () => void;
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'nav',
  onOpenModal,
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  // If already running in standalone mode, show subtle badge or hide
  if (isInstalled) {
    if (variant === 'nav') {
      return (
        <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md">
          <CheckCircle className="w-3 h-3 text-emerald-600" />
          <span>App Installed</span>
        </span>
      );
    }
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (!outcome && onOpenModal) {
        onOpenModal();
      }
    } else if (onOpenModal) {
      onOpenModal();
    }
  };

  if (variant === 'nav') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold tracking-wide uppercase text-[#10253F] bg-white hover:bg-gray-50 border border-[#10253F]/20 rounded-md transition-colors shadow-2xs ${className}`}
        title="Install Dr. Rakesh Kumar Clinic PWA on iOS, Android & PC"
        aria-label="Install App"
      >
        <Download className="w-3.5 h-3.5 text-[#168C8C]" />
        <span>Install App</span>
      </button>
    );
  }

  if (variant === 'mobile-bar') {
    return (
      <button
        onClick={handleClick}
        className={`flex flex-col items-center justify-center gap-1 text-[10px] font-medium text-[#10253F] hover:text-[#168C8C] transition-colors py-1 ${className}`}
        aria-label="Install App"
      >
        <div className="w-8 h-8 rounded-full bg-[#168C8C]/10 flex items-center justify-center text-[#168C8C]">
          <Download className="w-4 h-4" />
        </div>
        <span className="leading-none whitespace-nowrap">Install App</span>
      </button>
    );
  }

  if (variant === 'drawer') {
    return (
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#10253F] bg-amber-50 border border-amber-300/60 hover:bg-amber-100/80 rounded-md shadow-2xs transition-colors ${className}`}
      >
        <Smartphone className="w-4 h-4 text-[#168C8C]" />
        <span>Install Clinic App (iOS / Android)</span>
      </button>
    );
  }

  // Hero variant
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#10253F] bg-[#FAF6ED] hover:bg-[#F3EBD9] border border-[#D5B77A]/50 rounded-lg shadow-xs transition-all ${className}`}
    >
      <Download className="w-4 h-4 text-[#168C8C]" />
      <span>Install PWA App</span>
    </button>
  );
};
