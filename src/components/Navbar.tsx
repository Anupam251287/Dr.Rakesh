import React, { useState } from 'react';
import { Menu, X, Calendar, Video } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { PWAInstallButton } from './PWAInstallButton';
import drRakeshKumarPhoto from '../assets/images/citations.jpg';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenLiveConsult?: () => void;
  onOpenPWAInstall?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenLiveConsult,
  onOpenPWAInstall,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#FAFCFE]/95 backdrop-blur-md border-b border-[#10253F]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adheres to Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav links) - Zone 3 (1 primary CTA + language switch) */}
        <div className="flex items-center justify-between gap-6 lg:gap-8 h-20">
          {/* Zone 1: Single element wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 text-lg font-serif font-semibold tracking-tight text-[#10253F] hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-9 h-9 rounded-md bg-[#10253F] text-[#FAF6ED] font-serif font-bold text-sm flex items-center justify-center tracking-wider group-hover:bg-[#168C8C] transition-colors shadow-2xs shrink-0">
                RK
              </span>
              <img
                src={drRakeshKumarPhoto}
                alt="Dr. Rakesh Kumar"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#168C8C]/40 shadow-xs group-hover:border-[#168C8C] group-hover:scale-105 transition-all shrink-0"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight">{t.nav.doctorName}</span>
              <span className="text-[11px] font-sans font-normal text-[#718096] tracking-normal">
                {t.nav.specialtySub}
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#10253F]/80">
            <a
              href="#about"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.about}
            </a>
            <a
              href="#areas-of-care"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.areasOfCare}
            </a>
            <a
              href="#growth-calculator"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.growthCalculator}
            </a>
            <a
              href="#live-consultancy"
              className="flex items-center gap-1.5 text-[#168C8C] font-semibold hover:text-[#0E6060] transition-colors whitespace-nowrap shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.nav.liveConsult}</span>
            </a>
            <a
              href="#patient-resources"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.patientResources}
            </a>
            <a
              href="#publications"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.publications}
            </a>
            <a
              href="#nutrition-calculator"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.nutritionCalculator}
            </a>
            <a
              href="#clinical-updates"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.clinicalUpdates}
            </a>
            <a
              href="#parent-faqs"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.parentFaqs}
            </a>
            <a
              href="#contact"
              className="hover:text-[#168C8C] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.contactOpd}
            </a>
          </nav>

          {/* Zone 3: Language switch + PWA Install + Live Teleconsult button + primary action */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
            <LanguageSwitcher variant="nav" />

            <PWAInstallButton
              variant="nav"
              onOpenModal={onOpenPWAInstall}
            />

            <button
              onClick={onOpenLiveConsult || onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold tracking-wide uppercase text-[#10253F] bg-[#EBF7F7] hover:bg-[#d8f1f1] border border-[#168C8C]/30 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Join or Book Live Video Teleconsultation"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <Video className="w-3.5 h-3.5 text-[#168C8C]" />
              <span>{t.nav.liveConsult}</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-md transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#168C8C] whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.appointmentEnquiry}</span>
            </button>
          </div>

          {/* Mobile menu trigger & compact language switch */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <LanguageSwitcher variant="nav" />
            <button
              onClick={() => onOpenPWAInstall?.()}
              className="p-1.5 text-[#168C8C] bg-[#168C8C]/10 hover:bg-[#168C8C]/20 rounded-md flex items-center justify-center"
              aria-label="Install App"
              title="Install App"
            >
              <span className="text-[11px] font-bold px-1">App ⬇</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#10253F] hover:text-[#168C8C] focus-visible:outline-2 focus-visible:outline-[#168C8C] rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#10253F]/10 bg-[#FAFCFE] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="pb-2 border-b border-[#10253F]/10 flex items-center justify-between">
            <span className="text-xs text-[#718096] font-medium">{t.nav.languageToggle}:</span>
            <LanguageSwitcher variant="nav" />
          </div>

          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.about}
          </a>
          <a
            href="#areas-of-care"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.areasOfCare}
          </a>
          <a
            href="#growth-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.growthCalculator}
          </a>
          <a
            href="#live-consultancy"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 text-base font-semibold text-[#168C8C] bg-[#EBF7F7] rounded-md"
          >
            <span className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[#168C8C]" />
              <span>{t.nav.liveConsult}</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </a>
          <a
            href="#patient-resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.patientResources}
          </a>
          <a
            href="#publications"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.publications}
          </a>
          <a
            href="#nutrition-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.nutritionCalculator}
          </a>
          <a
            href="#clinical-updates"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.clinicalUpdates}
          </a>
          <a
            href="#parent-faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.parentFaqs}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#10253F] hover:bg-[#EBF7F7] hover:text-[#168C8C] rounded-md"
          >
            {t.nav.contactOpd}
          </a>
          <div className="pt-2 space-y-2">
            <PWAInstallButton
              variant="drawer"
              onOpenModal={() => {
                setMobileMenuOpen(false);
                onOpenPWAInstall?.();
              }}
            />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenLiveConsult) onOpenLiveConsult();
                else onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide uppercase text-[#10253F] bg-[#EBF7F7] border border-[#168C8C]/40 hover:bg-[#d8f1f1] rounded-md shadow-xs transition-colors"
            >
              <Video className="w-4 h-4 text-[#168C8C]" />
              <span>{t.nav.liveConsult}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide uppercase text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-md shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.submitEnquiry}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
