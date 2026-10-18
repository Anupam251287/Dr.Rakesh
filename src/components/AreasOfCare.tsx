import React, { useState } from 'react';
import { getClinicalConditions } from '../data/clinicalData';
import { ClinicalCondition } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Activity, FileText, Sparkles, AlertCircle, X } from 'lucide-react';
import milestonesImg from '../assets/images/growth_milestones_art_1792075734255.jpg';

interface AreasOfCareProps {
  onSelectConditionForEnquiry: (conditionTitle: string) => void;
}

export const AreasOfCare: React.FC<AreasOfCareProps> = ({ onSelectConditionForEnquiry }) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<ClinicalCondition | null>(null);

  const conditions = getClinicalConditions(language);

  const categories = [
    { id: 'all', label: t.areasOfCare.categories.all },
    { id: 'growth', label: t.areasOfCare.categories.growth },
    { id: 'diabetes', label: t.areasOfCare.categories.diabetes },
    { id: 'thyroid', label: t.areasOfCare.categories.thyroid },
    { id: 'puberty', label: t.areasOfCare.categories.puberty },
    { id: 'adrenal-bone', label: t.areasOfCare.categories.adrenalBone },
    { id: 'metabolic', label: t.areasOfCare.categories.metabolic },
  ];

  const filteredConditions = activeCategory === 'all'
    ? conditions
    : conditions.filter((c) => c.category === activeCategory);

  return (
    <section id="areas-of-care" className="py-16 lg:py-24 bg-[#FAFCFE] border-b border-[#10253F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-2">
              <span>{t.areasOfCare.eyebrow}</span>
              <span aria-hidden="true">·</span>
              <span>Pediatric Endocrine Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#10253F] tracking-tight">
              {t.areasOfCare.heading}
            </h2>
            <p className="mt-3 text-base text-[#718096]">
              {t.areasOfCare.subheading}
            </p>
          </div>

          <div className="text-xs text-[#718096] font-medium hidden md:block">
            <span className="text-[#10253F] font-semibold">{filteredConditions.length}</span> {t.areasOfCare.showingText}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#10253F] text-white shadow-xs'
                  : 'bg-white border border-[#10253F]/10 text-[#10253F]/70 hover:text-[#10253F] hover:border-[#168C8C]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Growth Milestones Feature Banner */}
        <div className="mb-12 rounded-xl overflow-hidden bg-white border border-[#10253F]/10 shadow-xs grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#168C8C] mb-2">
              <span>{t.areasOfCare.bannerEyebrow}</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#10253F] mb-3">
              {t.areasOfCare.bannerHeading}
            </h3>
            <p className="text-sm text-[#718096] leading-relaxed mb-6">
              {t.areasOfCare.bannerDesc}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#growth-calculator"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#168C8C] hover:text-[#0E6060]"
              >
                <span>{t.areasOfCare.bannerCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#FAF6ED] min-h-[220px]">
            <img
              src={milestonesImg}
              alt="Pediatric growth milestone journey and developmental care illustration"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition) => (
            <div
              key={condition.id}
              className="bg-white rounded-lg border border-[#10253F]/10 p-6 flex flex-col justify-between hover:border-[#168C8C]/50 hover:shadow-md transition-all group"
            >
              <div>
                {/* Zero-Pill Header: Clean unboxed metadata with separator */}
                <div className="flex items-center gap-2 text-xs text-[#718096] mb-3">
                  <span className="capitalize font-medium text-[#168C8C]">{condition.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.areasOfCare.protocolLabel}</span>
                </div>

                <h3 className="text-lg font-serif font-semibold text-[#10253F] group-hover:text-[#168C8C] transition-colors leading-snug mb-3">
                  {condition.title}
                </h3>

                <p className="text-sm text-[#718096] leading-relaxed mb-6 line-clamp-3">
                  {condition.shortDescription}
                </p>

                {/* Key Diagnostic Anchor */}
                <div className="mb-6 pt-4 border-t border-[#10253F]/5">
                  <span className="text-[11px] uppercase tracking-wider text-[#718096] font-semibold block mb-2">
                    {t.areasOfCare.diagnosticTitle}
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#10253F]/80">
                    {condition.diagnosticSteps.slice(0, 2).map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#168C8C] font-bold text-xs">·</span>
                        <span className="line-clamp-1">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#10253F]/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCondition(condition)}
                  className="text-xs font-semibold text-[#168C8C] hover:text-[#0E6060] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{t.areasOfCare.viewGuideBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectConditionForEnquiry(condition.title)}
                  className="text-xs font-medium text-[#718096] hover:text-[#10253F] transition-colors"
                >
                  {t.areasOfCare.enquireBtn}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Comprehensive Condition Modal */}
      {selectedCondition && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10253F]/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#10253F]/20 shadow-2xl p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCondition(null)}
              className="absolute top-6 right-6 p-2 text-[#718096] hover:text-[#10253F] rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Close condition modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Zero-Pill Header */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#168C8C] mb-2">
              <span className="capitalize">{selectedCondition.category}</span>
              <span aria-hidden="true">·</span>
              <span>{t.areasOfCare.modalSubtitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#10253F] pr-8 mb-4">
              {selectedCondition.title}
            </h3>

            <p className="text-base text-[#10253F]/80 leading-relaxed mb-6">
              {selectedCondition.fullOverview}
            </p>

            <div className="space-y-6 border-t border-[#10253F]/10 pt-6">
              
              {/* Symptoms */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#10253F] mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#168C8C]" />
                  <span>{t.areasOfCare.modalSymptoms}</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#10253F]/85">
                  {selectedCondition.commonSymptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#FAFCFE] p-2.5 rounded border border-[#10253F]/5">
                      <span className="text-[#168C8C] font-bold">✓</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnostic Evaluation */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#10253F] mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#168C8C]" />
                  <span>{t.areasOfCare.modalDiagnostic}</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#10253F]/85">
                  {selectedCondition.diagnosticSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#168C8C] font-mono font-semibold">[{idx + 1}]</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Parent Reassurance & Guidance */}
              <div className="bg-[#FAF6ED] p-4 rounded-lg border border-[#D5B77A]/30">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D5B77A]" />
                  <span>{t.areasOfCare.modalGuidance}</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[#10253F]/80">
                  {selectedCondition.parentGuidance.map((guide, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D5B77A] font-bold">·</span>
                      <span>{guide}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* When to Refer */}
              <div className="bg-[#EBF7F7] p-4 rounded-lg border border-[#168C8C]/20 text-xs text-[#10253F]">
                <div className="flex items-center gap-2 font-semibold text-[#0E6060] mb-1">
                  <AlertCircle className="w-4 h-4 text-[#168C8C]" />
                  <span>{t.areasOfCare.modalWhenRefer}</span>
                </div>
                <p className="text-[#10253F]/85 leading-relaxed">
                  {selectedCondition.whenToRefer}
                </p>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-[#10253F]/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setSelectedCondition(null)}
                className="px-4 py-2 text-xs font-medium text-[#718096] hover:text-[#10253F] rounded-md transition-colors"
              >
                {t.areasOfCare.modalClose}
              </button>

              <button
                onClick={() => {
                  const title = selectedCondition.title;
                  setSelectedCondition(null);
                  onSelectConditionForEnquiry(title);
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-md transition-colors shadow-xs"
              >
                {t.areasOfCare.modalEnquireCondition}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
