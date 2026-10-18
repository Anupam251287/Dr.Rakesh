import { ArrowRight, ShieldCheck, Building2, Stethoscope, Mail, Video, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PWAInstallButton } from './PWAInstallButton';
import heroImg from '../assets/images/hero_pediatric_care_1792075733853.jpg';
import doctorPortrait from '../assets/images/dr_rakesh_kumar_official_1792210425583.jpg';

interface HeroProps {
  onOpenEnquiry: () => void;
  onOpenLiveConsult?: () => void;
  onOpenPWAInstall?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onOpenLiveConsult, onOpenPWAInstall }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#10253F]/10">
      {/* Background subtle radial wash */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#168C8C]/5 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#D5B77A]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Zero-Pill Eyebrow: Unboxed text with subtle typographic separators */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-4">
              <span>{t.hero.eyebrowSub}</span>
              <span aria-hidden="true" className="text-[#718096]">·</span>
              <span className="text-[#10253F]/70">{t.hero.eyebrowInstitute}</span>
              <span aria-hidden="true" className="text-[#718096]">·</span>
              <span className="text-[#718096]">{t.hero.eyebrowType}</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#10253F] leading-[1.15] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              {t.hero.heading}
            </h1>

            {/* Empathetic Introduction */}
            <p className="text-lg sm:text-xl text-[#10253F]/80 leading-relaxed max-w-2xl mb-8 font-normal">
              {t.hero.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={onOpenLiveConsult || onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#10253F] hover:bg-[#0A1829] rounded-md transition-all shadow-md group whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <Video className="w-4 h-4 text-[#D5B77A]" />
                <span className="text-[#FAF6ED]">{t.nav.liveConsult}</span>
              </button>

              <a
                href="#areas-of-care"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-md transition-colors shadow-xs whitespace-nowrap"
              >
                <span>{t.hero.ctaCare}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#patient-resources"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#10253F] bg-white border border-[#10253F]/15 hover:border-[#168C8C] hover:text-[#168C8C] rounded-md transition-colors whitespace-nowrap"
              >
                <span>{t.hero.ctaResources}</span>
              </a>

              <PWAInstallButton
                variant="hero"
                onOpenModal={onOpenPWAInstall}
              />

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-[#718096] hover:text-[#10253F] hover:underline transition-colors whitespace-nowrap"
              >
                <span>{t.hero.ctaEnquiry}</span>
              </button>
            </div>

            {/* Verified Professional Credentials & Affiliations Block */}
            <div className="pt-6 border-t border-[#10253F]/10">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#718096] mb-3">
                {t.hero.verifiedCreds}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#10253F]/80">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-[#168C8C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#10253F]">{t.hero.centerName}</span>
                    <p className="text-[#718096]">{t.hero.centerLoc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#168C8C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#10253F]">{t.hero.regTitle}</span>
                    <p className="text-[#718096]">{t.hero.regDesc}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Presentation (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative subtle hairline border */}
              <div className="relative rounded-xl overflow-hidden bg-white border border-[#10253F]/10 shadow-md">
                <img
                  src={heroImg}
                  alt="Clinical consultation in pediatric endocrinology supporting child growth and family health"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Clear, ethical caption */}
                <div className="p-4 bg-white/95 border-t border-[#10253F]/10">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#168C8C] mb-1">
                    <Stethoscope className="w-3.5 h-3.5 text-[#168C8C]" />
                    <span>{t.hero.visualCaptionTitle}</span>
                  </div>
                  <p className="text-xs text-[#718096] leading-relaxed">
                    {t.hero.visualCaptionDesc}
                  </p>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#10253F] text-white p-3.5 rounded-lg shadow-lg border border-[#D5B77A]/40 max-w-sm items-center gap-3">
                <img
                  src={doctorPortrait}
                  alt="Dr. Rakesh Kumar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D5B77A] shrink-0"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-semibold text-white">{t.nav.doctorName}</div>
                  <div className="text-[11px] text-white/80">{t.hero.floatingRole} · {t.hero.eyebrowInstitute}</div>
                  <a
                    href="mailto:drrakesh.pgi@gmail.com"
                    className="text-[11px] text-[#D5B77A] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <Mail className="w-3 h-3" />
                    <span>drrakesh.pgi@gmail.com</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Operational Utility Ribbon */}
        <div className="mt-14 pt-6 border-t border-[#10253F]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#718096] font-medium mb-1">
              {t.hero.ribbonSpecialtyLabel}
            </div>
            <div className="font-semibold text-[#10253F]">{t.hero.ribbonSpecialtyValue}</div>
            <div className="text-xs text-[#718096]">{t.hero.ribbonSpecialtySub}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[#718096] font-medium mb-1">
              {t.hero.ribbonBaseLabel}
            </div>
            <div className="font-semibold text-[#10253F]">{t.hero.ribbonBaseValue}</div>
            <div className="text-xs text-[#718096]">{t.hero.ribbonBaseSub}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[#718096] font-medium mb-1">
              {t.hero.ribbonAudienceLabel}
            </div>
            <div className="font-semibold text-[#10253F]">{t.hero.ribbonAudienceValue}</div>
            <div className="text-xs text-[#718096]">{t.hero.ribbonAudienceSub}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[#718096] font-medium mb-1">
              {t.hero.ribbonLocLabel}
            </div>
            <div className="font-semibold text-[#10253F]">{t.hero.ribbonLocValue}</div>
            <div className="text-xs text-[#718096]">{t.hero.ribbonLocSub}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
