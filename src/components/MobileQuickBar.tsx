import React from 'react';
import {
  AlertTriangle,
  Calendar,
  Video,
  Download,
  Phone,
  Ruler
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface MobileQuickBarProps {
  onOpenEnquiry: () => void;
  onOpenLiveConsult: () => void;
  onOpenPWAInstall: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenEnquiry,
  onOpenLiveConsult,
  onOpenPWAInstall,
}) => {
  const { isInstalled, isInstallable, install } = usePWAInstall();

  const handlePWAAction = async () => {
    if (isInstallable) {
      const success = await install();
      if (!success) {
        onOpenPWAInstall();
      }
    } else {
      onOpenPWAInstall();
    }
  };

  const scrollToGrowth = () => {
    const el = document.getElementById('growth-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHypo = () => {
    const el = document.getElementById('hypo-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If inside AreasOfCare, find hypo anchor
      const alt = document.querySelector('[href="#hypo-guide"]') || document.getElementById('parent-faqs');
      alt?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAFCFE]/95 backdrop-blur-md border-t border-[#10253F]/15 shadow-[0_-4px_20px_rgba(16,37,63,0.1)] px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom,0.6rem))] transition-all">
      <div className="grid grid-cols-5 items-center gap-1 text-[#10253F]">
        {/* Hypo Emergency Shortcut */}
        <button
          onClick={scrollToHypo}
          className="flex flex-col items-center justify-center py-1 text-center group"
          title="Emergency Hypoglycemia Protocol"
        >
          <div className="w-8 h-8 rounded-full bg-red-100 group-active:scale-95 flex items-center justify-center text-red-600 transition-transform">
            <AlertTriangle className="w-4 h-4 animate-pulse" />
          </div>
          <span className="text-[10px] font-semibold text-red-700 tracking-tight mt-0.5 whitespace-nowrap">
            Hypo Alert
          </span>
        </button>

        {/* Growth Calculator Shortcut */}
        <button
          onClick={scrollToGrowth}
          className="flex flex-col items-center justify-center py-1 text-center group"
          title="Growth & Height Calculator"
        >
          <div className="w-8 h-8 rounded-full bg-[#168C8C]/10 group-active:scale-95 flex items-center justify-center text-[#168C8C] transition-transform">
            <Ruler className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium text-[#10253F] tracking-tight mt-0.5 whitespace-nowrap">
            Growth Calc
          </span>
        </button>

        {/* Center Primary Action: Live Teleconsult / Book Enquiry */}
        <button
          onClick={onOpenLiveConsult}
          className="flex flex-col items-center justify-center -mt-3.5 group"
          title="Live Video Teleconsultation"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#10253F] to-[#168C8C] text-white flex items-center justify-center shadow-md group-active:scale-95 transition-transform border-2 border-white">
            <Video className="w-5 h-5 text-emerald-300" />
          </div>
          <span className="text-[10px] font-bold text-[#168C8C] tracking-tight mt-0.5 whitespace-nowrap">
            Live Consult
          </span>
        </button>

        {/* Book Appointment Enquiry */}
        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-1 text-center group"
          title="Book OPD Appointment"
        >
          <div className="w-8 h-8 rounded-full bg-[#168C8C]/10 group-active:scale-95 flex items-center justify-center text-[#168C8C] transition-transform">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium text-[#10253F] tracking-tight mt-0.5 whitespace-nowrap">
            Book OPD
          </span>
        </button>

        {/* Install PWA or Call OPD */}
        {!isInstalled ? (
          <button
            onClick={handlePWAAction}
            className="flex flex-col items-center justify-center py-1 text-center group"
            title="Install App on iPhone or Android"
          >
            <div className="w-8 h-8 rounded-full bg-amber-100 group-active:scale-95 flex items-center justify-center text-amber-700 transition-transform">
              <Download className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-amber-800 tracking-tight mt-0.5 whitespace-nowrap">
              Install App
            </span>
          </button>
        ) : (
          <a
            href="tel:+911722755655"
            className="flex flex-col items-center justify-center py-1 text-center group"
            title="Call PGIMER Advanced Pediatrics Centre"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 group-active:scale-95 flex items-center justify-center text-emerald-700 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-medium text-emerald-800 tracking-tight mt-0.5 whitespace-nowrap">
              Call OPD
            </span>
          </a>
        )}
      </div>
    </div>
  );
};
