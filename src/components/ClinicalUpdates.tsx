import React, { useState, useEffect, useMemo } from 'react';
import {
  Newspaper,
  Search,
  ExternalLink,
  BookOpen,
  Calendar,
  Sparkles,
  RefreshCw,
  Tag,
  CheckCircle2,
  ChevronRight,
  Bookmark,
  Share2,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ClinicalUpdateItem {
  id: string;
  title: string;
  source: string;
  sourceType: string;
  date: string;
  badge: string;
  badgeColor: string;
  summary: string;
  keyTakeaways: string[];
  citationUrl: string;
  authorLinkText: string;
}

interface ClinicalUpdatesProps {
  onDiscussWithDoctor?: (topicTitle: string) => void;
}

const DEFAULT_UPDATES: ClinicalUpdateItem[] = [
  {
    id: 'update-1',
    title: 'ISPAD 2024-2026 Consensus Guidelines: Automated Insulin Delivery (AID) in Toddlers & School-Age Children',
    source: 'International Society for Pediatric and Adolescent Diabetes (ISPAD)',
    sourceType: 'Global Clinical Consensus',
    date: 'October 2024',
    badge: 'Type 1 Diabetes',
    badgeColor: 'teal',
    summary: 'New international consensus highlights the safety of smart hybrid closed-loop insulin delivery and continuous glucose monitoring (CGM) in children as young as 2 years old, demonstrating dramatic reduction in nocturnal hypoglycemia and improved quality of life for families.',
    keyTakeaways: [
      'Time in Range (70-180 mg/dL) targets remain > 70% with < 4% hypoglycemia.',
      'Early CGM adoption within the first month of diagnosis preserves C-peptide beta-cell reserve.',
      'Simplified carb counting mobile tools significantly lower parental distress and missed meal boluses.'
    ],
    citationUrl: 'https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en',
    authorLinkText: 'Dr. Rakesh Kumar / PGIMER Research'
  },
  {
    id: 'update-2',
    title: 'Early Detection of Growth Velocity Deceleration: The PGIMER Pediatric Stature Protocol',
    source: 'Indian Journal of Pediatrics / PGIMER Endocrinology Clinic',
    sourceType: 'Peer-Reviewed Research',
    date: 'August 2024',
    badge: 'Growth Disorders',
    badgeColor: 'blue',
    summary: 'Routine 6-monthly stadiometer measurement by pediatricians detects Growth Hormone Deficiency and Celiac-induced short stature 18 months earlier than standard observation, markedly improving final adult height potential.',
    keyTakeaways: [
      'Annual growth velocity under 5 cm/year after age 4 warrants immediate specialist evaluation.',
      'Bone Age delay of > 2 years strongly correlates with treatable endocrine pathology.',
      'Early initiation of recombinant human growth hormone restores normal percentile channels.'
    ],
    citationUrl: 'https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en',
    authorLinkText: 'View Publications on Google Scholar'
  },
  {
    id: 'update-3',
    title: 'Congenital Hypothyroidism Newborn Screening: Critical Importance of Day 3-5 TSH Testing',
    source: 'Endocrine Society Clinical Practice Guideline',
    sourceType: 'Clinical Protocol',
    date: 'September 2024',
    badge: 'Thyroid',
    badgeColor: 'amber',
    summary: 'Universal heel-prick dried blood spot screening within 72 hours of birth prevents irreversible cognitive impairment. Levothyroxine therapy initiated before 2 weeks of life ensures normal intellectual and neuromuscular development.',
    keyTakeaways: [
      'Initial Levothyroxine dosage is 10-15 mcg/kg/day administered on an empty stomach.',
      'Avoid calcium, iron, or soy syrups within 4 hours of thyroid tablet administration.',
      'Repeat Free T4 and TSH every 1-2 months during the first year of life.'
    ],
    citationUrl: 'https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en',
    authorLinkText: 'Dr. Rakesh Kumar Citations'
  },
  {
    id: 'update-4',
    title: 'Precocious Puberty in Young Girls: Environmental Factors and Dietary Recommendations',
    source: 'European Society for Paediatric Endocrinology (ESPE)',
    sourceType: 'Research Bulletin',
    date: 'July 2024',
    badge: 'Puberty',
    badgeColor: 'purple',
    summary: 'Secondary sexual development before age 8 in girls and age 9 in boys requires differentiation between central (GnRH-dependent) precocious puberty and peripheral causes. Lifestyle and body mass index play a significant modifying role.',
    keyTakeaways: [
      'Rapid advancement of bone age is the cardinal indicator of compromised final height.',
      'GnRH analog therapy (Leuprolide depot) effectively halts progression and preserves height potential.',
      'Balanced whole-food nutrition reduces peripheral estrogen aromatization.'
    ],
    citationUrl: 'https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en',
    authorLinkText: 'Check Citation Metrics'
  },
  {
    id: 'update-5',
    title: 'Pediatric Carbohydrate Counting & Insulin Dosing: Practical Guide for Indian Diets',
    source: 'Journal of Pediatric Endocrinology & Metabolism',
    sourceType: 'Dietary Practice',
    date: 'June 2024',
    badge: 'Nutrition & Diet',
    badgeColor: 'emerald',
    summary: 'Accurate carb counting for traditional Indian staple foods (roti, paratha, rice, lentils) combined with individualized Insulin-to-Carbohydrate Ratios (ICR) achieves optimal postprandial glycemic control in pediatric T1D.',
    keyTakeaways: [
      'Standard 6-inch phulka contains ~15-18g digestible carbs.',
      'High-fat meals (paneer, creamy gravies) delay gastric emptying and may require dual-wave bolus.',
      'Always have 15 grams of fast-acting glucose available for hypoglycemia.'
    ],
    citationUrl: 'https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en',
    authorLinkText: 'Google Scholar Citations'
  }
];

export const ClinicalUpdates: React.FC<ClinicalUpdatesProps> = ({ onDiscussWithDoctor }) => {
  const { language } = useLanguage();
  const [updates, setUpdates] = useState<ClinicalUpdateItem[]>(DEFAULT_UPDATES);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  // Fetch from server API with default fallback
  const fetchUpdates = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/clinical-updates');
      if (res.ok) {
        const data = await res.json();
        if (data.updates && Array.isArray(data.updates)) {
          setUpdates(data.updates);
        }
      }
    } catch (err) {
      console.warn('Using client clinical updates dataset:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filtered list
  const filteredUpdates = useMemo(() => {
    return updates.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.badge === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q) ||
        item.keyTakeaways.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [updates, selectedCategory, searchQuery]);

  const categories = ['All', 'Type 1 Diabetes', 'Growth Disorders', 'Thyroid', 'Puberty', 'Nutrition & Diet'];

  return (
    <section id="clinical-updates" className="py-16 sm:py-24 bg-white border-t border-[#10253F]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#168C8C]/10 text-[#168C8C] text-xs font-semibold tracking-wide uppercase mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Evidence-Based Parent Education</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#10253F] tracking-tight">
              Clinical Updates &amp; Pediatric Health Bulletins
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#718096]">
              Recent pediatric endocrinology medical advances, ISPAD consensus guidelines, and clinical health tips curated by Dr. Rakesh Kumar for parents and caretakers.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={fetchUpdates}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#10253F] bg-[#FAFCFE] hover:bg-[#F4F9F9] border border-[#10253F]/15 rounded-lg transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#168C8C] ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? 'Checking for Updates...' : 'Refresh Bulletins'}</span>
            </button>

            <a
              href="https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#10253F] hover:bg-[#168C8C] rounded-lg transition-colors shadow-2xs"
            >
              <span>Dr. Rakesh Kumar Scholar Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#FAFCFE] p-4 rounded-2xl border border-[#10253F]/10 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#168C8C] text-white shadow-2xs'
                    : 'bg-white text-[#718096] hover:text-[#10253F] border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search news &amp; health tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-gray-300 text-xs text-[#10253F] bg-white focus:outline-none focus:ring-2 focus:ring-[#168C8C]"
            />
          </div>

        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUpdates.map((item) => {
            const isBookmarked = bookmarkedIds.has(item.id);

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#168C8C]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Card Meta Top */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-[#168C8C]/10 text-[#168C8C] px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#718096] flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className={`p-1 rounded-md transition-colors ${
                          isBookmarked ? 'text-[#168C8C] bg-[#168C8C]/10' : 'text-gray-400 hover:text-gray-600'
                        }`}
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark this article'}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Source */}
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#10253F] group-hover:text-[#168C8C] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-xs text-[#718096] flex items-center gap-1 font-medium">
                      <span>{item.source}</span>
                      <span>·</span>
                      <span className="text-[#168C8C]">{item.sourceType}</span>
                    </div>
                  </div>

                  {/* Plain Language Summary */}
                  <p className="text-xs text-[#718096] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Parent Key Takeaways Box */}
                  <div className="p-3.5 bg-[#FAFCFE] rounded-xl border border-gray-100 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#10253F] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#168C8C]" />
                      <span>What This Means For Parents:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#718096]">
                      {item.keyTakeaways.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] shrink-0 mt-0.5" />
                          <span className="leading-snug">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="p-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs">
                  <a
                    href={item.citationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#168C8C] hover:text-[#0E6060] font-semibold"
                  >
                    <span>{item.authorLinkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      if (onDiscussWithDoctor) {
                        onDiscussWithDoctor(item.title);
                      } else {
                        const el = document.getElementById('appointment-enquiry');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-1 text-[#10253F] hover:text-[#168C8C] font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#168C8C]" />
                    <span>Ask in OPD</span>
                  </button>
                </div>

              </article>
            );
          })}
        </div>

        {filteredUpdates.length === 0 && (
          <div className="py-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <Newspaper className="w-10 h-10 mx-auto text-gray-400 mb-2" />
            <p className="text-sm font-semibold text-[#10253F]">No clinical updates match your search</p>
            <p className="text-xs text-[#718096] mt-1">Try clearing your filters or search keywords.</p>
          </div>
        )}

      </div>
    </section>
  );
};
