import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  CheckSquare,
  Sparkles,
  Printer,
  Calendar,
  Video,
  AlertTriangle,
  Lightbulb,
  FileText,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getParentFaqs, getAppointmentChecklist, ChecklistItem } from '../data/parentFaqData';
import { ParentFAQItem } from '../types';

interface ParentFAQProps {
  onOpenEnquiry?: (preselectedCondition?: string) => void;
  onOpenLiveConsult?: () => void;
  onOpenHypoGuide?: () => void;
  onOpenGrowthCalc?: () => void;
}

export const ParentFAQ: React.FC<ParentFAQProps> = ({
  onOpenEnquiry,
  onOpenLiveConsult,
  onOpenHypoGuide,
  onOpenGrowthCalc,
}) => {
  const { language, t } = useLanguage();
  const faqs = useMemo(() => getParentFaqs(language), [language]);
  const checklist = useMemo(() => getAppointmentChecklist(language), [language]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(['faq-first-1', 'faq-follow-1'])
  );
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Category list with labels and counts
  const categories = useMemo(() => [
    { id: 'all', label: t.parentFaq.categories.all, count: faqs.length },
    {
      id: 'first-visit',
      label: t.parentFaq.categories.firstVisit,
      count: faqs.filter((f) => f.category === 'first-visit').length,
    },
    {
      id: 'follow-up',
      label: t.parentFaq.categories.followUp,
      count: faqs.filter((f) => f.category === 'follow-up').length,
    },
    {
      id: 'tests',
      label: t.parentFaq.categories.tests,
      count: faqs.filter((f) => f.category === 'tests').length,
    },
    {
      id: 'medications',
      label: t.parentFaq.categories.medications,
      count: faqs.filter((f) => f.category === 'medications').length,
    },
    {
      id: 'teleconsult',
      label: t.parentFaq.categories.teleconsult,
      count: faqs.filter((f) => f.category === 'teleconsult').length,
    },
  ], [t.parentFaq.categories, faqs]);

  // Filtered FAQs based on category and search query
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'all' || faq.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inQuestion = faq.question.toLowerCase().includes(q);
      const inSummary = faq.shortSummary.toLowerCase().includes(q);
      const inParagraphs = faq.detailedParagraphs.some((p) =>
        p.toLowerCase().includes(q)
      );
      const inTips = faq.keyTips?.some((tip) => tip.toLowerCase().includes(q));

      return inQuestion || inSummary || inParagraphs || inTips;
    });
  }, [faqs, selectedCategory, searchQuery]);

  // Toggle individual question accordion
  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand all currently filtered questions
  const handleExpandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  // Collapse all questions
  const handleCollapseAll = () => {
    setOpenIds(new Set());
  };

  const handlePrintChecklist = () => {
    window.print();
  };

  const toggleChecklistItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle action CTA buttons inside accordion items
  const handleCtaClick = (cta?: ParentFAQItem['actionCta']) => {
    if (!cta) return;
    if (cta.actionType === 'enquiry') {
      if (onOpenEnquiry) onOpenEnquiry();
      else {
        const el = document.getElementById('enquiry-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cta.actionType === 'live-consult') {
      if (onOpenLiveConsult) onOpenLiveConsult();
      else {
        const el = document.getElementById('live-consultancy');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cta.actionType === 'growth-calc') {
      if (onOpenGrowthCalc) onOpenGrowthCalc();
      else {
        const el = document.getElementById('growth-calculator');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cta.actionType === 'emergency-guide') {
      if (onOpenHypoGuide) onOpenHypoGuide();
      else {
        const el = document.getElementById('hypo-guide');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="parent-faqs"
      aria-label="Parent Frequently Asked Questions"
      className="py-16 lg:py-24 bg-white border-b border-[#10253F]/10 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7F7] text-[#168C8C] text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.parentFaq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#10253F] tracking-tight">
            {t.parentFaq.heading}
          </h2>
          <p className="mt-3 text-base text-[#718096] leading-relaxed">
            {t.parentFaq.subheading}
          </p>
        </div>

        {/* Top Control Bar: Search + Quick Packing Checklist CTA */}
        <div className="bg-[#FAFCFE] rounded-2xl border border-[#10253F]/10 p-4 sm:p-6 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Live Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#718096] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.parentFaq.searchPlaceholder}
                className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-[#10253F]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168C8C]/30 focus:border-[#168C8C] transition-all placeholder:text-[#718096]/60 text-[#10253F]"
                aria-label="Search FAQs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label={t.parentFaq.clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718096] hover:text-[#10253F] p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Packing Checklist Modal Trigger */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsChecklistModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#EBF7F7] hover:bg-[#d8f0f0] text-[#168C8C] font-semibold text-xs rounded-lg border border-[#168C8C]/20 transition-colors shadow-2xs"
              >
                <CheckSquare className="w-4 h-4" />
                <span>{t.parentFaq.checklistBtn}</span>
              </button>

              {/* Expand / Collapse All */}
              <div className="inline-flex rounded-lg border border-[#10253F]/15 bg-white p-0.5 text-xs">
                <button
                  onClick={handleExpandAll}
                  className="px-2.5 py-1.5 font-medium text-[#10253F] hover:text-[#168C8C] hover:bg-[#FAFCFE] rounded-md transition-colors"
                  title={t.parentFaq.expandAll}
                >
                  <span className="hidden sm:inline">{t.parentFaq.expandAll}</span>
                  <ChevronDown className="w-3.5 h-3.5 sm:hidden inline" />
                </button>
                <span className="w-px bg-[#10253F]/10 my-1" />
                <button
                  onClick={handleCollapseAll}
                  className="px-2.5 py-1.5 font-medium text-[#718096] hover:text-[#10253F] hover:bg-[#FAFCFE] rounded-md transition-colors"
                  title={t.parentFaq.collapseAll}
                >
                  <span className="hidden sm:inline">{t.parentFaq.collapseAll}</span>
                  <ChevronUp className="w-3.5 h-3.5 sm:hidden inline" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-[#10253F]/8 pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#10253F] text-white shadow-2xs'
                      : 'bg-white text-[#718096] hover:text-[#10253F] hover:bg-slate-100 border border-[#10253F]/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#10253F]/5 text-[#718096]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search match stats */}
          {searchQuery && (
            <div className="pt-3 text-xs text-[#718096] flex items-center justify-between">
              <span>
                {filteredFaqs.length} {t.parentFaq.searchMatchesFound}
              </span>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#168C8C] hover:underline font-medium"
              >
                {t.parentFaq.resetFilter}
              </button>
            </div>
          )}
        </div>

        {/* Accordion Questions List */}
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-[#FAFCFE] rounded-2xl border border-dashed border-[#10253F]/20">
            <HelpCircle className="w-10 h-10 text-[#718096]/50 mx-auto mb-3" />
            <h3 className="text-base font-serif font-semibold text-[#10253F]">
              {t.parentFaq.noResults}
            </h3>
            <p className="text-xs text-[#718096] mt-1 max-w-md mx-auto">
              {t.parentFaq.noResultsSub}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#168C8C] text-white text-xs font-semibold rounded-lg hover:bg-[#0E6060] transition-colors"
            >
              {t.parentFaq.resetFilter}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#168C8C]/40 bg-[#FAFCFE] shadow-xs'
                      : 'border-[#10253F]/10 bg-white hover:border-[#10253F]/25 hover:bg-[#FAFCFE]/50'
                  }`}
                >
                  {/* Accordion Header / Trigger Button */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 transition-colors group"
                  >
                    <div className="flex-1 pr-2">
                      {/* Meta badges: Category & Special Highlight */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-sm bg-[#10253F]/5 text-[#10253F]/80">
                          {faq.categoryLabel}
                        </span>
                        {faq.highlightBadge && (
                          <span
                            className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-sm ${
                              faq.highlightBadge.includes('Emergency') ||
                              faq.highlightBadge.includes('चेतावनी')
                                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                : faq.highlightBadge.includes('Essential') ||
                                  faq.highlightBadge.includes('अनिवार्य')
                                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                : 'bg-[#EBF7F7] text-[#168C8C] border border-[#168C8C]/20'
                            }`}
                          >
                            {faq.highlightBadge}
                          </span>
                        )}
                      </div>

                      {/* Question Text */}
                      <h3 className="font-serif font-semibold text-base sm:text-lg text-[#10253F] group-hover:text-[#168C8C] transition-colors leading-snug">
                        {faq.question}
                      </h3>

                      {/* Closed state snippet preview */}
                      {!isOpen && (
                        <p className="text-xs text-[#718096] mt-1.5 line-clamp-1">
                          {faq.shortSummary}
                        </p>
                      )}
                    </div>

                    {/* Expand/Collapse Chevron Indicator */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#168C8C] text-white rotate-180'
                          : 'bg-[#10253F]/5 text-[#10253F] group-hover:bg-[#168C8C]/10 group-hover:text-[#168C8C]'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Expanded Content */}
                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#10253F]/85 border-t border-[#10253F]/5 animate-in fade-in duration-200"
                    >
                      {/* Short Executive Summary Callout */}
                      <div className="p-3.5 bg-[#EBF7F7]/70 rounded-lg border-l-4 border-[#168C8C] mb-4 text-xs sm:text-sm text-[#10253F] leading-relaxed">
                        <strong className="font-semibold text-[#0E6060] block mb-0.5">
                          {language === 'hi' ? 'संक्षिप्त सारांश:' : 'Quick Summary:'}
                        </strong>
                        <span>{faq.shortSummary}</span>
                      </div>

                      {/* Detailed Clinical Paragraphs */}
                      <div className="space-y-2.5 text-[#10253F]/80 leading-relaxed">
                        {faq.detailedParagraphs.map((para, pIdx) => {
                          const isBullet = para.startsWith('• ');
                          if (isBullet) {
                            return (
                              <div
                                key={pIdx}
                                className="flex items-start gap-2 pl-2 text-xs sm:text-sm"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#168C8C] mt-2 shrink-0" />
                                <span>{para.replace('• ', '')}</span>
                              </div>
                            );
                          }
                          return (
                            <p key={pIdx} className="text-xs sm:text-sm">
                              {para}
                            </p>
                          );
                        })}
                      </div>

                      {/* Key Tips / Takeaway Box */}
                      {faq.keyTips && faq.keyTips.length > 0 && (
                        <div className="mt-5 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                          <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs mb-2">
                            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>{t.parentFaq.keyTakeawayTitle}</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-amber-950">
                            {faq.keyTips.map((tip, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">✓</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action CTA Button if available */}
                      {faq.actionCta && (
                        <div className="mt-5 pt-4 border-t border-[#10253F]/10 flex items-center justify-between flex-wrap gap-3">
                          <button
                            onClick={() => {
                              if (faq.id === 'faq-first-1') {
                                setIsChecklistModalOpen(true);
                              } else {
                                handleCtaClick(faq.actionCta);
                              }
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#168C8C] hover:text-[#0E6060] transition-colors"
                          >
                            <span>{faq.actionCta.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <span className="text-[11px] text-[#718096] italic">
                            {language === 'hi'
                              ? 'सत्यापित बाल हार्मोन चिकित्सा परामर्श · पीजीआई चंडीगढ़'
                              : 'Verified Pediatric Endocrine Care · PGIMER Chandigarh'}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Two-Column Support & Emergency Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
          {/* Card 1: Still Have Questions / Appointment Routing (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAFCFE] rounded-2xl border border-[#10253F]/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#10253F] mb-2">
                {t.parentFaq.stillHaveQuestionsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed mb-6">
                {t.parentFaq.stillHaveQuestionsDesc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#10253F]/10">
              <button
                onClick={() => {
                  if (onOpenEnquiry) onOpenEnquiry();
                  else {
                    const el = document.getElementById('enquiry-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#10253F] hover:bg-[#168C8C] text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.parentFaq.bookConsultBtn}</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenLiveConsult) onOpenLiveConsult();
                  else {
                    const el = document.getElementById('live-consultancy');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#EBF7F7] hover:bg-[#d8f0f0] text-[#168C8C] text-xs font-semibold rounded-lg border border-[#168C8C]/30 transition-colors"
              >
                <Video className="w-4 h-4" />
                <span>{t.parentFaq.liveVideoBtn}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Acute Red Flag Emergency Advisory (5 cols) */}
          <div className="lg:col-span-5 bg-rose-50/70 rounded-2xl border border-rose-200/80 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-rose-950 mb-2">
                {t.parentFaq.emergencyCardTitle}
              </h3>
              <p className="text-xs text-rose-900/90 leading-relaxed mb-6">
                {t.parentFaq.emergencyCardDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-rose-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  if (onOpenHypoGuide) onOpenHypoGuide();
                  else {
                    const el = document.getElementById('hypo-guide');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-800 hover:text-rose-950 underline"
              >
                <span>{t.parentFaq.emergencyActionBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] font-mono text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-sm">
                24/7 APC Emergency
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Day of Visit Packing Checklist Modal */}
      {isChecklistModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#10253F]/70 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full border border-[#10253F]/15 shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-[#FAFCFE] border-b border-[#10253F]/10 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#168C8C] mb-1">
                  <CheckSquare className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'ओपीडी चेकलिस्ट' : 'Clinic Bag Checklist'}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#10253F]">
                  {t.parentFaq.checklistModalTitle}
                </h3>
                <p className="text-xs text-[#718096] mt-1">
                  {t.parentFaq.checklistModalSub}
                </p>
              </div>
              <button
                onClick={() => setIsChecklistModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-[#718096] hover:text-[#10253F]"
                aria-label={t.parentFaq.checklistClose}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Checklist Items */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-3.5 flex-1 text-xs sm:text-sm">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs flex items-start gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{t.parentFaq.checklistTip}</span>
              </div>

              {checklist.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <label
                    key={item.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-[#EBF7F7]/60 border-[#168C8C]/40 text-[#10253F]'
                        : 'bg-[#FAFCFE] border-[#10253F]/10 hover:border-[#168C8C]/30 text-[#10253F]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleChecklistItem(item.id)}
                      className="mt-1 w-4 h-4 rounded text-[#168C8C] focus:ring-[#168C8C] border-gray-300"
                    />
                    <div className="flex-1">
                      <span
                        className={`font-semibold block ${
                          isChecked ? 'line-through text-[#718096]' : 'text-[#10253F]'
                        }`}
                      >
                        {item.title}
                      </span>
                      <p className="text-xs text-[#718096] mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#FAFCFE] border-t border-[#10253F]/10 flex items-center justify-between gap-3">
              <button
                onClick={handlePrintChecklist}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#10253F] hover:text-[#168C8C] border border-[#10253F]/15 rounded-lg bg-white"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t.parentFaq.checklistPrint}</span>
              </button>

              <button
                onClick={() => setIsChecklistModalOpen(false)}
                className="px-4 py-2 bg-[#10253F] hover:bg-[#168C8C] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                {t.parentFaq.checklistClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
