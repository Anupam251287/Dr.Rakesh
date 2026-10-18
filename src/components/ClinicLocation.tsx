import React, { useState } from 'react';
import { getFaqs } from '../data/clinicalData';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, Phone, Building2, Navigation, FileCheck, Stethoscope, Mail, Copy, Check } from 'lucide-react';

interface ClinicLocationProps {
  onOpenDoctorReferral: () => void;
}

export const ClinicLocation: React.FC<ClinicLocationProps> = ({ onOpenDoctorReferral }) => {
  const { language, t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = getFaqs(language);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-[#10253F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-2">
            <span>{t.contact.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span>PGIMER Chandigarh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#10253F] tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-base text-[#718096]">
            {t.contact.subheading}
          </p>
        </div>

        {/* Top 3 Institutional Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Hospital Base */}
          <div className="p-6 bg-[#FAFCFE] rounded-xl border border-[#10253F]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#10253F] mb-2">
                {t.contact.card1Title}
              </h3>
              <p className="text-xs text-[#718096] leading-relaxed mb-4">
                {t.contact.card1Desc}
              </p>
            </div>
            <div className="pt-3 border-t border-[#10253F]/10 text-xs text-[#168C8C] font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.contact.card1Foot}</span>
            </div>
          </div>

          {/* Card 2: OPD Timings */}
          <div className="p-6 bg-[#FAFCFE] rounded-xl border border-[#10253F]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#10253F] mb-2">
                {t.contact.card2Title}
              </h3>
              <ul className="text-xs text-[#10253F]/80 space-y-2 mb-4">
                <li className="flex justify-between border-b border-[#10253F]/5 pb-1">
                  <span className="text-[#718096]">{t.contact.card2DaysLabel}</span>
                  <span className="font-semibold">{t.contact.card2DaysVal}</span>
                </li>
                <li className="flex justify-between border-b border-[#10253F]/5 pb-1">
                  <span className="text-[#718096]">{t.contact.card2TokenLabel}</span>
                  <span className="font-mono font-medium">{t.contact.card2TokenVal}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#718096]">{t.contact.card2HoursLabel}</span>
                  <span className="font-mono font-medium">{t.contact.card2HoursVal}</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#10253F]/10 text-xs text-[#718096]">
              {t.contact.card2Foot}
            </div>
          </div>

          {/* Card 3: Approved Channels */}
          <div className="p-6 bg-[#FAFCFE] rounded-xl border border-[#10253F]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#10253F] mb-2">
                {t.contact.card3Title}
              </h3>
              <div className="text-xs text-[#10253F]/80 space-y-2.5 mb-4">
                <div>
                  <span className="text-[#718096] block text-[11px]">{t.contact.card3PhoneLabel}</span>
                  <span className="font-mono font-semibold">{t.contact.card3PhoneVal}</span>
                </div>
                <div>
                  <span className="text-[#718096] block text-[11px]">{t.contact.card3EmailLabel}</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <a
                      href="mailto:drrakesh.pgi@gmail.com"
                      className="font-mono font-semibold text-[#168C8C] hover:underline flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>drrakesh.pgi@gmail.com</span>
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-[#718096] block text-[11px]">{t.contact.card3DeskLabel}</span>
                  <span className="font-mono font-semibold">{t.contact.card3DeskVal}</span>
                </div>
                <div>
                  <span className="text-[#718096] block text-[11px]">{t.contact.card3PortalLabel}</span>
                  <span className="text-[#168C8C] font-medium">{t.contact.card3PortalVal}</span>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-[#10253F]/10">
              <button
                onClick={onOpenDoctorReferral}
                className="text-xs font-semibold text-[#168C8C] hover:text-[#0E6060] inline-flex items-center gap-1"
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>{t.contact.card3DoctorPortal}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Map & Visiting Protocol Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#10253F]/15 bg-white shadow-xs">
            <div className="p-4 bg-[#FAFCFE] border-b border-[#10253F]/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#10253F]">
                <MapPin className="w-4 h-4 text-[#168C8C]" />
                <span>{t.contact.mapTitle}</span>
              </div>
              <a
                href="https://maps.google.com/?q=Advanced+Pediatrics+Centre+PGIMER+Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#168C8C] hover:underline"
              >
                <span>{t.contact.mapOpen}</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full h-[360px] bg-slate-100 relative">
              <iframe
                title="Advanced Pediatrics Centre, PGIMER Chandigarh Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.6262446733227!2d76.77259257626955!3d30.763520184422263!2m3!1f0!2f0!3f0!32m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff292cebaaaab%3A0xe54e17637841c107!2sAdvanced%20Pediatric%20Centre%2C%20PGIMER%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 text-xs text-[#718096] bg-white border-t border-[#10253F]/5 flex flex-wrap items-center justify-between gap-2">
              <span>{t.contact.mapTransit}</span>
              <span className="font-medium text-[#10253F]">{t.contact.mapParking}</span>
            </div>
          </div>

          {/* First-Time Visit Checklist (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAFCFE] rounded-xl border border-[#10253F]/10 p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#168C8C]">
              <FileCheck className="w-4 h-4" />
              <span>{t.contact.checkTitle}</span>
            </div>

            <h3 className="text-xl font-serif font-semibold text-[#10253F]">
              {t.contact.checkTitle}
            </h3>

            <p className="text-xs text-[#718096] leading-relaxed">
              {t.contact.checkSub}
            </p>

            <ul className="space-y-3 text-xs text-[#10253F]/85">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-[#10253F]">{t.contact.check1Title}</strong>
                  <p className="text-[#718096]">{t.contact.check1Desc}</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-[#10253F]">{t.contact.check2Title}</strong>
                  <p className="text-[#718096]">{t.contact.check2Desc}</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-[#10253F]">{t.contact.check3Title}</strong>
                  <p className="text-[#718096]">{t.contact.check3Desc}</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <strong className="text-[#10253F]">{t.contact.check4Title}</strong>
                  <p className="text-[#718096]">{t.contact.check4Desc}</p>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#enquiry-section"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#10253F] hover:bg-[#168C8C] rounded transition-colors"
              >
                {t.contact.checkSubmitCta}
              </a>
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="pt-12 border-t border-[#10253F]/10">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#168C8C] mb-1">
              {t.contact.faqEyebrow}
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#10253F]">
              {t.contact.faqHeading}
            </h3>
          </div>

          <div className="space-y-3 max-w-4xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#10253F]/10 rounded-lg overflow-hidden bg-[#FAFCFE] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-semibold text-sm sm:text-base text-[#10253F] hover:text-[#168C8C] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="font-mono text-xs font-normal text-[#718096] shrink-0">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#10253F]/80 leading-relaxed border-t border-[#10253F]/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
