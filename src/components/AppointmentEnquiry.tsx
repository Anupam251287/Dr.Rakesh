import React, { useState, useEffect } from 'react';
import { AppointmentFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircle, CheckCircle2, ShieldCheck, Printer, ArrowRight, X, Video } from 'lucide-react';
import { VoiceInputButton } from './VoiceInputButton';

interface AppointmentEnquiryProps {
  preselectedCondition?: string;
  isModal?: boolean;
  onClose?: () => void;
  onLaunchLiveConsult?: (childName?: string, concern?: string) => void;
}

const STORAGE_KEY = 'dr_rakesh_enquiry_draft_v1';

export const AppointmentEnquiry: React.FC<AppointmentEnquiryProps> = ({
  preselectedCondition,
  isModal = false,
  onClose,
  onLaunchLiveConsult,
}) => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<AppointmentFormData>({
    childName: '',
    childAge: '',
    childGender: 'Male',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    concernCategory: preselectedCondition || 'Short Stature / Growth Delay',
    symptomDuration: '3 to 6 months',
    previousTestsDone: false,
    previousTestsDetails: '',
    referringDoctor: '',
    preferredConsultationType: 'APC PGIMER OPD (In-Person)',
    preferredDate: '',
    additionalNotes: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draftSaved, setDraftSaved] = useState(false);

  // Restore draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          ...parsed,
          concernCategory: preselectedCondition || parsed.concernCategory || prev.concernCategory,
        }));
      }
    } catch {
      // ignore
    }
  }, [preselectedCondition]);

  // Auto-save draft
  const handleChange = (field: keyof AppointmentFormData, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setDraftSaved(true);
      setTimeout(() => setDraftSaved(false), 2000);
    } catch {
      // ignore
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.childName.trim()) {
      newErrors.childName = language === 'hi' ? 'बच्चे का नाम अनिवार्य है' : "Child's name is required";
    }
    if (!formData.childAge.trim()) {
      newErrors.childAge = language === 'hi' ? 'आयु अनिवार्य है' : "Child's age is required";
    }
    if (!formData.guardianName.trim()) {
      newErrors.guardianName = language === 'hi' ? 'अभिभावक का नाम अनिवार्य है' : "Parent/Guardian name is required";
    }
    if (!formData.guardianPhone.trim()) {
      newErrors.guardianPhone = language === 'hi' ? 'फोन नंबर अनिवार्य है' : "Contact phone number is required";
    } else if (formData.guardianPhone.trim().length < 8) {
      newErrors.guardianPhone = language === 'hi' ? 'मान्य फोन नंबर दर्ज करें' : "Please enter a valid phone number";
    }
    if (!formData.guardianEmail.trim()) {
      newErrors.guardianEmail = language === 'hi' ? 'ईमेल पता अनिवार्य है' : "Email address is required for enquiry confirmation";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate unique clinical reference
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refCode = `APC-ENDO-2026-${randomSuffix}`;
    setSubmittedRef(refCode);

    // Clear local storage draft upon success
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handlePrintSummary = () => {
    window.print();
  };

  return (
    <div
      id="enquiry-section"
      className={`${
        isModal
          ? 'bg-white rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#10253F]/20 shadow-2xl p-6 sm:p-8 relative'
          : 'bg-[#FAFCFE] py-16 lg:py-24 border-b border-[#10253F]/10'
      }`}
    >
      <div className={isModal ? '' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}>
        
        {/* Modal Close Button */}
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#718096] hover:text-[#10253F] rounded hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-2">
            <span>{t.enquiry.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span>Pediatric Endocrinology OPD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#10253F] tracking-tight">
            {t.enquiry.heading}
          </h2>
          <p className="mt-2 text-sm text-[#718096]">
            {t.enquiry.subheading}
          </p>
        </div>

        {/* Emergency Notice Callout */}
        <div className="mb-8 p-4 bg-[#FAF6ED] rounded-lg border border-[#D5B77A]/50 text-xs text-[#10253F]/90 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#D5B77A] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-[#10253F] block">
              {t.enquiry.emergencyTitle}
            </span>
            <p>{t.enquiry.emergencyText}</p>
          </div>
        </div>

        {submittedRef ? (
          /* Confirmation State */
          <div className="bg-white rounded-xl border border-[#168C8C]/30 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3 text-emerald-700">
              <CheckCircle2 className="w-8 h-8 shrink-0" />
              <div>
                <h3 className="text-xl font-serif font-semibold text-[#10253F]">
                  {t.enquiry.regSuccess}
                </h3>
                <p className="text-xs text-[#718096]">
                  {t.enquiry.refId} <span className="font-mono font-bold text-[#10253F]">{submittedRef}</span>
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAFCFE] rounded-lg border border-[#10253F]/10 space-y-3 text-xs sm:text-sm text-[#10253F]/85">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#10253F]/10">
                <div>
                  <span className="text-xs text-[#718096] block">{t.enquiry.patientNameLabel}</span>
                  <span className="font-semibold">{formData.childName} ({formData.childAge}, {formData.childGender})</span>
                </div>
                <div>
                  <span className="text-xs text-[#718096] block">{t.enquiry.concernLabel}</span>
                  <span className="font-semibold">{formData.concernCategory}</span>
                </div>
                <div>
                  <span className="text-xs text-[#718096] block">{t.enquiry.guardianLabel}</span>
                  <span>{formData.guardianName} ({formData.guardianPhone})</span>
                </div>
                <div>
                  <span className="text-xs text-[#718096] block">{t.enquiry.formatLabel}</span>
                  <span className="font-semibold text-[#168C8C]">{formData.preferredConsultationType}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#10253F] block mb-2">
                  {t.enquiry.whatToBringTitle}
                </span>
                <ul className="space-y-1.5 text-xs text-[#718096] list-disc pl-4">
                  {language === 'hi' ? (
                    <>
                      <li>टीकाकरण कार्ड एवं जन्म के समय का वजन।</li>
                      <li>पूर्व में ली गई ऊंचाई और वजन के सभी दस्तावेज (स्कूल स्वास्थ्य कार्ड)।</li>
                      <li>हालिया रक्त जांच रिपोर्ट (थायरॉइड TSH, ब्लड शुगर लॉग, HbA1c)।</li>
                      <li>कलाई व हाथ के बोन एज एक्स-रे की मूल फ़िल्में।</li>
                      <li>स्थानीय डॉक्टर का रेफरल पत्र (यदि उपलब्ध हो)।</li>
                    </>
                  ) : (
                    <>
                      <li>Original child immunization and developmental milestone cards.</li>
                      <li>All previous height and weight records (including school health books).</li>
                      <li>Recent laboratory reports (Thyroid TSH/T4, Blood glucose logs, HbA1c, etc.).</li>
                      <li>Original physical X-ray films (especially left wrist bone age X-rays).</li>
                      <li>Referral slip from your primary pediatrician or local physician if available.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* If teleconsultation chosen, offer immediate room entry */}
            {formData.preferredConsultationType === 'Teleconsultation Review' && onLaunchLiveConsult && (
              <div className="p-4 bg-[#EBF7F7] rounded-xl border border-[#168C8C]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#168C8C] text-white flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#10253F]">
                      {language === 'hi' ? 'लाइव टेली-परामर्श कक्ष तैयार है' : 'Live Teleconsultation Room Ready'}
                    </div>
                    <div className="text-[11px] text-[#718096]">
                      {language === 'hi' ? 'डॉ. राकेश कुमार के साथ वीडियो परामर्श सीधे शुरू करें।' : 'Direct encrypted video consultation with Dr. Rakesh Kumar.'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (onClose) onClose();
                    onLaunchLiveConsult(formData.childName, formData.concernCategory);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#10253F] hover:bg-[#0A1829] rounded transition-colors whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{language === 'hi' ? 'लाइव रूम में प्रवेश करें' : 'Launch Live Video Room'}</span>
                </button>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#10253F]/10">
              <button
                onClick={handlePrintSummary}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#10253F] bg-white border border-[#10253F]/20 rounded hover:border-[#168C8C] transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t.enquiry.printSummary}</span>
              </button>

              <button
                onClick={() => {
                  setSubmittedRef(null);
                  if (onClose) onClose();
                }}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#168C8C] hover:bg-[#0E6060] rounded transition-colors"
              >
                {t.enquiry.doneBtn}
              </button>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#10253F]/10 p-6 sm:p-8 shadow-xs space-y-6">
            
            {/* Draft status indicator */}
            <div className="flex items-center justify-between text-[11px] text-[#718096] pb-2 border-b border-[#10253F]/10">
              <span>{t.enquiry.sec1}</span>
              {draftSaved && <span className="text-[#168C8C]">{t.enquiry.autosaved}</span>}
            </div>

            {/* Child Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F]">
                    {t.enquiry.childName}
                  </label>
                  <VoiceInputButton
                    size="sm"
                    targetFieldLabel="child name"
                    placeholder={language === 'hi' ? 'बच्चे का नाम बोलें...' : "Speak child's name..."}
                    onTranscript={(spokenText) => handleChange('childName', spokenText)}
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder={language === 'hi' ? 'उदा. आरव शर्मा' : 'e.g. Aarav Sharma'}
                  value={formData.childName}
                  onChange={(e) => handleChange('childName', e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-[#FAFCFE] border rounded-md text-sm text-[#10253F] focus:outline-none ${
                    errors.childName ? 'border-red-500' : 'border-[#10253F]/15 focus:border-[#168C8C]'
                  }`}
                />
                {errors.childName && <p className="text-red-600 text-[11px] mt-1">{errors.childName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.childAge}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'hi' ? 'उदा. 7 वर्ष' : 'e.g. 7 years'}
                  value={formData.childAge}
                  onChange={(e) => handleChange('childAge', e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-[#FAFCFE] border rounded-md text-sm text-[#10253F] focus:outline-none ${
                    errors.childAge ? 'border-red-500' : 'border-[#10253F]/15 focus:border-[#168C8C]'
                  }`}
                />
                {errors.childAge && <p className="text-red-600 text-[11px] mt-1">{errors.childAge}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.childGender}
                </label>
                <select
                  value={formData.childGender}
                  onChange={(e) => handleChange('childGender', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAFCFE] border border-[#10253F]/15 rounded-md text-sm text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                >
                  <option value="Male">{language === 'hi' ? 'बालक (लड़का)' : 'Male'}</option>
                  <option value="Female">{language === 'hi' ? 'बालिका (लड़की)' : 'Female'}</option>
                  <option value="Other">{language === 'hi' ? 'अन्य' : 'Other'}</option>
                </select>
              </div>
            </div>

            {/* Parent / Guardian Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.guardianName}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'hi' ? 'उदा. प्रिया शर्मा' : 'e.g. Priya Sharma'}
                  value={formData.guardianName}
                  onChange={(e) => handleChange('guardianName', e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-[#FAFCFE] border rounded-md text-sm text-[#10253F] focus:outline-none ${
                    errors.guardianName ? 'border-red-500' : 'border-[#10253F]/15 focus:border-[#168C8C]'
                  }`}
                />
                {errors.guardianName && <p className="text-red-600 text-[11px] mt-1">{errors.guardianName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.guardianPhone}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.guardianPhone}
                  onChange={(e) => handleChange('guardianPhone', e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-[#FAFCFE] border rounded-md text-sm text-[#10253F] focus:outline-none ${
                    errors.guardianPhone ? 'border-red-500' : 'border-[#10253F]/15 focus:border-[#168C8C]'
                  }`}
                />
                {errors.guardianPhone && <p className="text-red-600 text-[11px] mt-1">{errors.guardianPhone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.guardianEmail}
                </label>
                <input
                  type="email"
                  required
                  placeholder="guardian@example.com"
                  value={formData.guardianEmail}
                  onChange={(e) => handleChange('guardianEmail', e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-[#FAFCFE] border rounded-md text-sm text-[#10253F] focus:outline-none ${
                    errors.guardianEmail ? 'border-red-500' : 'border-[#10253F]/15 focus:border-[#168C8C]'
                  }`}
                />
                {errors.guardianEmail && <p className="text-red-600 text-[11px] mt-1">{errors.guardianEmail}</p>}
              </div>
            </div>

            {/* Clinical Concern Selection */}
            <div className="pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                {t.enquiry.concernDropdown}
              </label>
              <select
                value={formData.concernCategory}
                onChange={(e) => handleChange('concernCategory', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAFCFE] border border-[#10253F]/15 rounded-md text-sm text-[#10253F] focus:outline-none focus:border-[#168C8C]"
              >
                {language === 'hi' ? (
                  <>
                    <option value="शारीरिक विकास में कमी (कम कद)">शारीरिक विकास में कमी / कम कद (Short Stature)</option>
                    <option value="टाइप 1 डायबिटीज़ (बाल मधुमेह)">टाइप 1 डायबिटीज़ / बाल मधुमेह (Type 1 Diabetes)</option>
                    <option value="थायरॉइड विकार / कंजेनिटल हाइपोथायरॉइडिज़्म">थायरॉइड विकार / नवजात स्क्रीनिंग समस्या / घेंघा</option>
                    <option value="समय से पूर्व यौवनारंभ (Precocious Puberty)">समय से पूर्व यौवनारंभ (8-9 वर्ष से पहले लक्षण)</option>
                    <option value="विलंबित यौवनारंभ (Delayed Puberty)">विलंबित यौवनारंभ (13-14 वर्ष तक कोई बदलाव न होना)</option>
                    <option value="कंजेनिटल एड्रिनल हाइपरप्लासिया (CAH)">एड्रिनल विकार / कंजेनिटल एड्रिनल हाइपरप्लासिया</option>
                    <option value="रिकेट्स एवं अस्थि स्वास्थ्य">रिकेट्स / कमजोर हड्डियां / कैल्शियम समस्या</option>
                    <option value="बाल मोटापा व इंसुलिन प्रतिरोध">बाल मोटापा व इंसुलिन प्रतिरोध (Metabolic Health)</option>
                    <option value="अन्य हार्मोनल समस्या">अन्य बाल एंडोक्राइन समस्या</option>
                  </>
                ) : (
                  <>
                    <option value="Short Stature / Growth Delay">Short Stature / Slow Linear Growth</option>
                    <option value="Type 1 Diabetes Mellitus">Childhood Diabetes (Type 1 Diabetes / High Sugar)</option>
                    <option value="Congenital or Acquired Hypothyroidism">Thyroid Disorder / Abnormal Newborn Screen / Goitre</option>
                    <option value="Precocious (Early) Puberty">Precocious (Early) Puberty (Breast buds &lt;8y or Testes &lt;9y)</option>
                    <option value="Delayed Puberty">Delayed Pubertal Development (No signs by 13-14y)</option>
                    <option value="Congenital Adrenal Hyperplasia (CAH)">Adrenal Condition / Congenital Adrenal Hyperplasia (CAH)</option>
                    <option value="Calcium, Vitamin D & Rickets">Rickets / Bone Health / Calcium Metabolism</option>
                    <option value="Childhood Metabolic Health & Obesity">Pediatric Weight & Insulin Resistance</option>
                    <option value="Other Pediatric Endocrine Query">Other Pediatric Endocrine Query</option>
                  </>
                )}
              </select>
            </div>

            {/* Symptom Duration & Previous Tests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.durationLabel}
                </label>
                <select
                  value={formData.symptomDuration}
                  onChange={(e) => handleChange('symptomDuration', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAFCFE] border border-[#10253F]/15 rounded-md text-sm text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                >
                  <option value="Less than 1 month">{language === 'hi' ? 'हाल ही में (1 माह से कम)' : 'Recent (Less than 1 month)'}</option>
                  <option value="1 to 6 months">{language === 'hi' ? '1 से 6 महीने' : '1 to 6 months'}</option>
                  <option value="6 to 12 months">{language === 'hi' ? '6 से 12 महीने' : '6 to 12 months'}</option>
                  <option value="Over 1 year">{language === 'hi' ? '1 वर्ष से अधिक समय से' : 'Longstanding (Over 1 year)'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.formatPreference}
                </label>
                <select
                  value={formData.preferredConsultationType}
                  onChange={(e) => handleChange('preferredConsultationType', e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-[#FAFCFE] border border-[#10253F]/15 rounded-md text-sm text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                >
                  <option value="APC PGIMER OPD (In-Person)">
                    {language === 'hi' ? 'पीजीआई चंडीगढ़ APC ओपीडी (प्रत्यक्ष परामर्श)' : 'In-Person OPD at APC, PGIMER Chandigarh'}
                  </option>
                  <option value="Teleconsultation Review">
                    {language === 'hi' ? 'टेलीकंसल्टेशन / रिपोर्ट समीक्षा' : 'Teleconsultation / Records Review Enquiry'}
                  </option>
                </select>
              </div>
            </div>

            {/* Previous Tests Checkbox */}
            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.previousTestsDone}
                  onChange={(e) => handleChange('previousTestsDone', e.target.checked)}
                  className="w-4 h-4 text-[#168C8C] rounded border-[#10253F]/20 focus:ring-[#168C8C]"
                />
                <span className="text-xs font-medium text-[#10253F]">
                  {t.enquiry.testsCheckbox}
                </span>
              </label>

              {formData.previousTestsDone && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-[#718096]">Mention lab findings, TSH, HbA1c, etc.</span>
                    <VoiceInputButton
                      size="sm"
                      targetFieldLabel="test results"
                      placeholder="Speak test findings e.g. TSH 8.5, bone age delay..."
                      onTranscript={(spokenText) => {
                        const current = formData.previousTestsDetails;
                        const combined = current ? `${current} ${spokenText}` : spokenText;
                        handleChange('previousTestsDetails', combined);
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={t.enquiry.testsPlaceholder}
                    value={formData.previousTestsDetails}
                    onChange={(e) => handleChange('previousTestsDetails', e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                  />
                </div>
              )}
            </div>

            {/* Referring Doctor (Optional) & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.referringDocLabel}
                </label>
                <input
                  type="text"
                  placeholder={language === 'hi' ? 'उदा. डॉ. ए. गुप्ता (शिशु रोग विशेषज्ञ, मोहाली)' : 'e.g. Dr. A. Gupta (Pediatrician, Mohali)'}
                  value={formData.referringDoctor}
                  onChange={(e) => handleChange('referringDoctor', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAFCFE] border border-[#10253F]/15 rounded-md text-sm text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-1.5">
                  {t.enquiry.preferredDateLabel}
                </label>
                <input
                  type="text"
                  placeholder={language === 'hi' ? 'उदा. आगामी मंगलवार प्रातः / अगले सप्ताह' : 'e.g. Next Tuesday morning / upcoming week'}
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAFCFE] border border-[#10253F]/15 rounded-md text-sm text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F]">
                  {t.enquiry.additionalNotesLabel}
                </label>
                <VoiceInputButton
                  size="sm"
                  targetFieldLabel="clinical notes"
                  placeholder={language === 'hi' ? 'लक्षण, विकास या सवाल बोलें...' : 'Speak symptoms, growth history or questions...'}
                  onTranscript={(spokenText) => {
                    const current = formData.additionalNotes;
                    const combined = current ? `${current} ${spokenText}` : spokenText;
                    handleChange('additionalNotes', combined);
                  }}
                />
              </div>
              <textarea
                rows={3}
                placeholder={t.enquiry.notesPlaceholder}
                value={formData.additionalNotes}
                onChange={(e) => handleChange('additionalNotes', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAFCFE] border border-[#10253F]/15 rounded-md text-sm text-[#10253F] focus:outline-none focus:border-[#168C8C]"
              />
            </div>

            {/* Form Footer & Submit */}
            <div className="pt-4 border-t border-[#10253F]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-[11px] text-[#718096] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#168C8C]" />
                <span>{t.enquiry.privacyNote}</span>
              </div>

              <div className="flex items-center gap-3">
                {isModal && onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-[#718096] hover:text-[#10253F] transition-colors"
                  >
                    {t.enquiry.cancelBtn}
                  </button>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-md transition-colors shadow-xs"
                >
                  <span>{t.enquiry.submitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
