import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Building2, ShieldCheck, Mail, Smartphone } from 'lucide-react';
import doctorPortrait from '../assets/images/dr_rakesh_kumar_official_1792210425583.jpg';

interface FooterProps {
  onOpenEnquiry: () => void;
  onOpenDoctorReferral: () => void;
  onOpenLiveConsult?: () => void;
  onOpenPWAInstall?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEnquiry,
  onOpenDoctorReferral,
  onOpenLiveConsult,
  onOpenPWAInstall,
}) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#10253F] text-white pt-16 pb-12 border-t border-[#10253F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Specialty (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={doctorPortrait}
                  alt="Dr. Rakesh Kumar"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#D5B77A] shrink-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-xl font-serif font-semibold text-white">{t.nav.doctorName}</h3>
                  <p className="text-xs text-[#D5B77A]">{t.footer.roleSub}</p>
                </div>
              </div>

            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              {t.footer.bio}
            </p>

            <div className="pt-2 text-xs text-white/70 space-y-1.5">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#168C8C]" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#168C8C]" />
                <span>{t.footer.regStanding}</span>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <Mail className="w-3.5 h-3.5 text-[#D5B77A]" />
                <a
                  href="mailto:drrakesh.pgi@gmail.com"
                  className="font-mono text-[#D5B77A] hover:underline"
                >
                  drrakesh.pgi@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#D5B77A]">
              {t.footer.navHeading}
            </div>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#about" className="hover:text-[#168C8C] transition-colors">{t.nav.about}</a>
              </li>
              <li>
                <a href="#areas-of-care" className="hover:text-[#168C8C] transition-colors">{t.nav.areasOfCare}</a>
              </li>
              <li>
                <a href="#growth-calculator" className="hover:text-[#168C8C] transition-colors">{t.nav.growthCalculator}</a>
              </li>
              <li>
                <a href="#live-consultancy" className="hover:text-[#168C8C] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{t.nav.liveConsult}</span>
                </a>
              </li>
              <li>
                <a href="#patient-resources" className="hover:text-[#168C8C] transition-colors">{t.nav.patientResources}</a>
              </li>
              <li>
                <a href="#publications" className="hover:text-[#168C8C] transition-colors">{t.nav.publications}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#168C8C] transition-colors">{t.nav.contactOpd}</a>
              </li>
            </ul>
          </div>

          {/* Clinical Portals & Actions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#D5B77A]">
              {t.footer.inquiriesHeading}
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {t.footer.inquiriesDesc}
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={onOpenLiveConsult || onOpenEnquiry}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#10253F] bg-[#FAF6ED] hover:bg-[#ede5d0] rounded transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>{t.nav.liveConsult}</span>
              </button>

              <button
                onClick={onOpenEnquiry}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#168C8C] hover:bg-[#0E6060] rounded transition-colors shadow-xs"
              >
                {t.footer.enquiryBtn}
              </button>

              <button
                onClick={onOpenDoctorReferral}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF6ED] bg-white/10 hover:bg-white/20 border border-white/10 rounded transition-colors"
              >
                {t.footer.doctorPortalBtn}
              </button>

              {onOpenPWAInstall && (
                <button
                  onClick={onOpenPWAInstall}
                  className="w-full text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Install App on iOS / Android</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Ethical Medical Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] text-white/60 leading-relaxed space-y-2">
          <p>
            <strong className="text-white/80">{t.footer.disclaimerTitle} </strong>
            {t.footer.disclaimerText}
          </p>
          <p>
            <strong className="text-white/80">{t.footer.emergencyTitle} </strong>
            {t.footer.emergencyText}
          </p>
        </div>

        {/* Bottom Bar with Footer Language Switcher */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            {t.footer.rightsReserved}
          </div>
          <div className="flex items-center gap-4 text-xs">
            <LanguageSwitcher variant="footer" />
            <span aria-hidden="true">·</span>
            <span>{t.footer.cityCountry}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
