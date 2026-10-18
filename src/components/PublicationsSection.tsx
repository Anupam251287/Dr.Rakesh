import React, { useState } from 'react';
import { RESEARCH_PUBLICATIONS } from '../data/clinicalData';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Search, BookmarkCheck } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Growth', 'Type 1 Diabetes', 'Thyroid & Adrenal', 'Puberty'];

  const filteredPubs = selectedCategory === 'all'
    ? RESEARCH_PUBLICATIONS
    : RESEARCH_PUBLICATIONS.filter((p) => p.category === selectedCategory);

  return (
    <section id="publications" className="py-16 lg:py-24 bg-white border-b border-[#10253F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-2">
            <span>{t.publications.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span>Peer-Reviewed Clinical Literature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#10253F] tracking-tight">
            {t.publications.heading}
          </h2>
          <p className="mt-3 text-base text-[#718096]">
            {t.publications.subheading}
          </p>
        </div>

        {/* Filter bar and Academic Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#10253F]/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors capitalize ${
                  selectedCategory === cat
                    ? 'bg-[#10253F] text-white shadow-xs'
                    : 'bg-[#FAFCFE] border border-[#10253F]/10 text-[#10253F]/70 hover:text-[#10253F]'
                }`}
              >
                {cat === 'all' ? t.publications.allPubs : cat}
              </button>
            ))}
          </div>

          {/* Academic Portal Search Links */}
          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Rakesh+Kumar+pediatric+endocrinology+PGIMER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#168C8C] hover:text-[#0E6060] font-medium transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{t.publications.pubmedBtn}</span>
              <ExternalLink className="w-3 h-3 text-[#718096]" />
            </a>

            <span className="text-[#10253F]/20">|</span>

            <a
              href="https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#168C8C] hover:text-[#0E6060] font-semibold transition-colors"
            >
              <span>{t.publications.scholarBtn}</span>
              <ExternalLink className="w-3 h-3 text-[#168C8C]" />
            </a>
          </div>

        </div>

        {/* Featured Scholar Citation Profile Callout */}
        <div className="mb-8 p-4 sm:p-5 bg-[#FAFCFE] rounded-xl border border-[#168C8C]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center shrink-0 mt-0.5">
              <ExternalLink className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#168C8C]">Google Scholar Profile</span>
                <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full font-medium">Verified Researcher</span>
              </div>
              <h4 className="font-serif font-semibold text-sm sm:text-base text-[#10253F] mt-0.5">
                Dr. Rakesh Kumar · Citations & Research Metrics
              </h4>
              <p className="text-xs text-[#718096] mt-0.5">
                Comprehensive bibliography, citation indices, and peer-reviewed pediatric endocrinology journal articles at PGIMER Chandigarh.
              </p>
            </div>
          </div>
          <a
            href="https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#10253F] hover:bg-[#168C8C] text-white text-xs font-semibold rounded-lg transition-colors shrink-0 shadow-2xs"
          >
            <span>View Google Scholar Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPubs.map((pub) => (
            <article
              key={pub.id}
              className="p-6 bg-[#FAFCFE] rounded-lg border border-[#10253F]/10 hover:border-[#168C8C]/40 transition-colors"
            >
              {/* Unboxed metadata row */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#718096] mb-2">
                <span className="font-semibold text-[#168C8C]">{pub.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums text-[#10253F] font-semibold">{pub.year}</span>
                <span aria-hidden="true">·</span>
                <span>{pub.journal}</span>
                {pub.pmidPlaceholder && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[#718096]">{pub.pmidPlaceholder}</span>
                  </>
                )}
              </div>

              <h3 className="text-lg font-serif font-semibold text-[#10253F] leading-snug mb-2">
                {pub.title}
              </h3>

              <div className="text-xs text-[#718096] mb-3">
                <span className="font-medium text-[#10253F]/80">{t.publications.authorsLabel} </span>
                {pub.authors}
              </div>

              <p className="text-xs sm:text-sm text-[#10253F]/80 leading-relaxed">
                {pub.abstractSummary}
              </p>

              {pub.doiPlaceholder && (
                <div className="mt-3 pt-3 border-t border-[#10253F]/5 text-[11px] text-[#718096] flex items-center justify-between">
                  <span className="font-mono">DOI: {pub.doiPlaceholder}</span>
                  <a
                    href={`https://doi.org/${pub.doiPlaceholder}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#168C8C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{t.publications.viewRecord}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Academic verification notice */}
        <div className="mt-8 p-4 bg-[#FAF6ED] rounded-lg border border-[#D5B77A]/40 text-xs text-[#10253F]/80 flex items-start gap-2.5">
          <BookmarkCheck className="w-4 h-4 text-[#D5B77A] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#10253F]">{t.publications.noticeTitle} </span>
            {t.publications.noticeText}
          </div>
        </div>

      </div>
    </section>
  );
};
