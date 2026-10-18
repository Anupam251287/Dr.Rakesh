import React, { useState } from 'react';
import { getPatientResources } from '../data/clinicalData';
import { PatientResource } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { FileText, ExternalLink, Printer, Check, X, BookOpen, Share2 } from 'lucide-react';
import { HypoEmergencyGuide } from './HypoEmergencyGuide';
import deskImg from '../assets/images/medical_desk_resources_1792075734370.jpg';

export const PatientResources: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeResource, setActiveResource] = useState<PatientResource | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const resources = getPatientResources(language);

  const handleCopyLink = (res: PatientResource) => {
    navigator.clipboard.writeText(window.location.origin + '#guide-' + res.id);
    setCopiedId(res.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="patient-resources" className="py-16 lg:py-24 bg-[#FAFCFE] border-b border-[#10253F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-2">
            <span>{t.resources.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span>Google Docs Library</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#10253F] tracking-tight">
            {t.resources.heading}
          </h2>
          <p className="mt-3 text-base text-[#718096]">
            {t.resources.subheading}
          </p>
        </div>

        {/* Hero Card for Resource Desk */}
        <div className="mb-12 bg-white rounded-xl border border-[#10253F]/10 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#168C8C] font-semibold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>{t.resources.deskBadge}</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#10253F]">
              {t.resources.deskTitle}
            </h3>
            <p className="text-sm text-[#718096] leading-relaxed">
              {t.resources.deskDesc}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#10253F]/80">
              <span className="font-medium">{t.resources.directAccess}</span>
              <span>{t.resources.cloudView}</span>
              <span aria-hidden="true" className="text-[#718096]">·</span>
              <span>{t.resources.printOpt}</span>
              <span aria-hidden="true" className="text-[#718096]">·</span>
              <span>{t.resources.updatedYear}</span>
            </div>
          </div>
          <div className="lg:col-span-5 h-[220px] lg:h-full min-h-[220px]">
            <img
              src={deskImg}
              alt="Pediatric growth chart and clinical notes on medical consultation desk"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg border border-[#10253F]/10 p-6 flex flex-col justify-between hover:border-[#168C8C]/50 hover:shadow-md transition-all"
            >
              <div>
                {/* Zero-Pill Header: Unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-[#718096] mb-3">
                  <span className="font-semibold text-[#168C8C]">{resource.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{resource.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate max-w-[180px]">{resource.targetAudience}</span>
                </div>

                <h3 className="text-lg font-serif font-semibold text-[#10253F] leading-snug mb-3 hover:text-[#168C8C] transition-colors">
                  {resource.title}
                </h3>

                <p className="text-sm text-[#718096] leading-relaxed mb-6">
                  {resource.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#10253F]/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveResource(resource)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#10253F] hover:bg-[#168C8C] rounded transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{t.resources.readFullBtn}</span>
                  </button>

                  {resource.googleDocsUrl && (
                    <a
                      href={resource.googleDocsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#168C8C] bg-[#EBF7F7] hover:bg-[#168C8C] hover:text-white rounded transition-colors"
                      title="Open in Google Docs viewer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.resources.googleDocsBtn}</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => handleCopyLink(resource)}
                  className="p-2 text-[#718096] hover:text-[#10253F] rounded hover:bg-slate-100 transition-colors"
                  title={t.resources.shareTooltip}
                  aria-label="Copy guide link"
                >
                  {copiedId === resource.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Hypoglycemia Emergency Guide */}
        <HypoEmergencyGuide />

      </div>

      {/* Full Guide Reader Modal */}
      {activeResource && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10253F]/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#10253F]/20 shadow-2xl p-6 sm:p-10 relative">
            
            {/* Modal Controls Bar */}
            <div className="flex items-center justify-between border-b border-[#10253F]/10 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#168C8C]">
                <span>{activeResource.category} {t.resources.readerPlanSuffix}</span>
                <span aria-hidden="true">·</span>
                <span>{activeResource.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#718096] hover:text-[#10253F] border border-slate-200 rounded transition-colors"
                  title="Print this guide"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.resources.printBtn}</span>
                </button>

                {activeResource.googleDocsUrl && (
                  <a
                    href={activeResource.googleDocsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#168C8C] bg-[#EBF7F7] hover:bg-[#168C8C] hover:text-white rounded transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Google Docs</span>
                  </a>
                )}

                <button
                  onClick={() => setActiveResource(null)}
                  className="p-1.5 text-[#718096] hover:text-[#10253F] rounded hover:bg-slate-100 transition-colors"
                  aria-label="Close document modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Title & Meta */}
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#10253F] mb-3 leading-tight">
                {activeResource.title}
              </h3>
              <div className="text-xs text-[#718096] flex flex-wrap items-center gap-2">
                <span>{activeResource.targetAudience}</span>
                <span aria-hidden="true">·</span>
                <span>Division of Pediatric Endocrinology, PGIMER Chandigarh</span>
              </div>
            </div>

            {/* Structured Document Content */}
            <div className="space-y-8 text-sm sm:text-base text-[#10253F]/85 leading-relaxed">
              {activeResource.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-lg font-serif font-semibold text-[#10253F] border-b border-[#10253F]/10 pb-2">
                    {sec.heading}
                  </h4>
                  <p>{sec.content}</p>

                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-[#10253F]/85">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx}>{bp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Medical Disclaimer inside Doc Reader */}
            <div className="mt-10 pt-6 border-t border-[#10253F]/10 text-xs text-[#718096] bg-[#FAFCFE] p-4 rounded-md">
              <strong className="text-[#10253F] block mb-1">{t.resources.readerDisclaimerTitle}</strong>
              {t.resources.readerDisclaimerText}
            </div>

            {/* Modal Bottom Bar */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setActiveResource(null)}
                className="px-4 py-2 text-xs font-semibold text-[#718096] hover:text-[#10253F]"
              >
                {t.resources.closeReader}
              </button>

              <button
                onClick={() => {
                  setActiveResource(null);
                  window.location.hash = '#contact';
                }}
                className="px-4 py-2 text-xs font-semibold text-[#168C8C] hover:underline"
              >
                {t.resources.haveQuestions}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
