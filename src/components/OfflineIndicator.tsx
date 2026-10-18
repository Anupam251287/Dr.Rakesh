import React from 'react';
import { WifiOff, ShieldCheck } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-[#10253F] text-white px-4 py-3 rounded-xl shadow-2xl border border-amber-400/40 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-4 duration-300"
    >
      <div className="flex items-center gap-3">
        <span className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
          <WifiOff className="w-5 h-5" />
        </span>
        <div className="text-xs sm:text-sm">
          <p className="font-semibold text-white flex items-center gap-1.5">
            Offline Mode Active
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </p>
          <p className="text-white/80 text-[11px] sm:text-xs">
            Clinical tools & Emergency Hypo guide remain available offline.
          </p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-1 rounded shrink-0">
        <ShieldCheck className="w-3.5 h-3.5" />
        Cached
      </span>
    </div>
  );
};
