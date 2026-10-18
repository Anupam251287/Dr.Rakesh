import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTOR_PROFILE } from '../data/clinicalData';
import { BookOpen, HeartHandshake, CheckCircle2, ShieldCheck, Stethoscope, Mail, Check, Copy } from 'lucide-react';
import doctorPortrait from '../assets/images/dr_rakesh_kumar_official_1792210425583.jpg';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DOCTOR_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-[#10253F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-2">
            <span>{t.about.eyebrowProfile}</span>
            <span aria-hidden="true">·</span>
            <span>{t.about.eyebrowPractice}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#10253F] tracking-tight">
            {t.about.heading}
          </h2>
          <p className="mt-3 text-base text-[#718096]">
            {t.about.subheading}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#10253F]/85 leading-relaxed text-base">
            <p>{t.about.p1}</p>

            <p>{t.about.p2}</p>

            {/* Curatorial Pull Quote */}
            <div className="py-6 px-6 bg-[#FAFCFE] border border-[#10253F]/10 rounded-lg">
              <blockquote className="text-lg font-serif italic text-[#10253F] leading-snug">
                {t.about.quote}
              </blockquote>
              <div className="mt-3 text-xs text-[#718096] uppercase tracking-wider font-sans font-medium">
                {t.about.quoteEthos}
              </div>
            </div>

            <p>{t.about.p3}</p>

            {/* Core Values / Commitments */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAFCFE] border border-[#10253F]/10 rounded-lg">
                <div className="flex items-center gap-2 font-semibold text-sm text-[#10253F] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#168C8C]" />
                  <span>{t.about.val1Title}</span>
                </div>
                <p className="text-xs text-[#718096]">{t.about.val1Desc}</p>
              </div>

              <div className="p-4 bg-[#FAFCFE] border border-[#10253F]/10 rounded-lg">
                <div className="flex items-center gap-2 font-semibold text-sm text-[#10253F] mb-1">
                  <HeartHandshake className="w-4 h-4 text-[#168C8C]" />
                  <span>{t.about.val2Title}</span>
                </div>
                <p className="text-xs text-[#718096]">{t.about.val2Desc}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Institutional Profile & Portrait Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAFCFE] border border-[#10253F]/10 rounded-xl p-6 sm:p-8 space-y-6">
            
            {/* Official Doctor Photograph with Verified Badge */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-[#10253F]/10">
              <div className="relative shrink-0">
                <img
                  src={doctorPortrait}
                  alt="Dr. Rakesh Kumar, Pediatric Endocrinologist at PGIMER Chandigarh"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg object-cover border-2 border-[#168C8C]/30 shadow-md"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-2 -right-2 bg-[#168C8C] text-white p-1 rounded-full shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-xs font-semibold tracking-wider uppercase text-[#168C8C] mb-1">
                  {t.about.eyebrowProfile}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#10253F]">
                  {DOCTOR_PROFILE.name}
                </h3>
                <p className="text-xs font-medium text-[#718096]">
                  {DOCTOR_PROFILE.role}
                </p>
                <p className="text-[11px] text-[#10253F]/70 mt-1 font-sans">
                  {DOCTOR_PROFILE.center}, {DOCTOR_PROFILE.institutionShort}
                </p>

                {/* Direct Official Email Link */}
                <div className="mt-3 inline-flex items-center gap-1.5 p-1.5 bg-white border border-[#10253F]/15 rounded text-xs text-[#10253F]">
                  <a
                    href={`mailto:${DOCTOR_PROFILE.email}`}
                    className="flex items-center gap-1 text-[#168C8C] hover:text-[#0E6060] font-medium transition-colors"
                    title="Send Email to Dr. Rakesh Kumar"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span className="font-mono text-[11px]">{DOCTOR_PROFILE.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-[#718096] hover:text-[#10253F] transition-colors"
                    title="Copy Email"
                    aria-label="Copy doctor email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-[#10253F]/10 pb-4">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#168C8C] mb-1">
                {t.about.instCardTitle}
              </div>
              <h4 className="text-lg font-serif font-semibold text-[#10253F]">
                {t.about.instCardName}
              </h4>
              <p className="text-xs text-[#718096] mt-0.5">
                {t.about.instCardDesc}
              </p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#10253F]">{t.about.item1Title}</div>
                  <div className="text-[#718096]">{t.about.item1Desc}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#10253F]">{t.about.item2Title}</div>
                  <div className="text-[#718096]">{t.about.item2Desc}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#10253F]">{t.about.item3Title}</div>
                  <div className="text-[#718096]">{t.about.item3Desc}</div>
                </div>
              </div>
            </div>

            {/* Transparent notice with official email confirmation */}
            <div className="p-4 rounded-md bg-[#FAF6ED] border border-[#D5B77A]/40 text-xs text-[#10253F]/80 space-y-1.5">
              <span className="font-semibold text-[#10253F] block">{t.about.noticeTitle}</span>
              <p>{t.about.noticeDesc}</p>
              <div className="pt-1 text-[11px] font-mono text-[#10253F]">
                Official Contact: <a href={`mailto:${DOCTOR_PROFILE.email}`} className="text-[#168C8C] hover:underline font-semibold">{DOCTOR_PROFILE.email}</a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#10253F] bg-white border border-[#10253F]/15 hover:border-[#168C8C] hover:text-[#168C8C] rounded-md transition-colors"
              >
                {t.about.viewOpdBtn}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
