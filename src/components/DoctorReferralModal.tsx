import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Stethoscope, CheckCircle2, Printer, ArrowRight } from 'lucide-react';
import { VoiceInputButton } from './VoiceInputButton';

interface DoctorReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DoctorReferralModal: React.FC<DoctorReferralModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    doctorName: '',
    doctorRegNo: '',
    hospitalClinic: '',
    doctorPhone: '',
    doctorEmail: '',
    patientName: '',
    patientAge: '',
    patientGender: 'Male',
    clinicalIndication: 'Growth Failure / Short Stature Evaluation',
    diagnosticFindings: '',
    urgencyLevel: 'Standard Outpatient OPD Review',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(`REF-PGIMER-${randomSuffix}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10253F]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#10253F]/20 shadow-2xl p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#718096] hover:text-[#10253F] rounded hover:bg-slate-100 transition-colors"
          aria-label="Close referral dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#168C8C] mb-1">
            <Stethoscope className="w-4 h-4" />
            <span>{t.doctorReferral.badge}</span>
          </div>
          <h3 className="text-2xl font-serif font-semibold text-[#10253F]">
            {t.doctorReferral.heading}
          </h3>
          <p className="text-xs text-[#718096] mt-1">
            {t.doctorReferral.subheading}
          </p>
        </div>

        {submittedRef ? (
          <div className="bg-[#FAFCFE] rounded-lg border border-[#168C8C]/30 p-6 space-y-4">
            <div className="flex items-center gap-3 text-emerald-700">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-serif font-semibold text-base text-[#10253F]">
                  {t.doctorReferral.memoGenerated}
                </h4>
                <p className="text-xs text-[#718096]">
                  {t.doctorReferral.refCodeLabel} <span className="font-mono font-bold text-[#10253F]">{submittedRef}</span>
                </p>
              </div>
            </div>

            <p className="text-xs text-[#10253F]/85 leading-relaxed">
              {t.doctorReferral.memoGreeting}
            </p>

            <div className="p-3 bg-white rounded border border-[#10253F]/10 text-xs space-y-1">
              <div><strong>{language === 'hi' ? 'रोगी:' : 'Patient:'}</strong> {formData.patientName} ({formData.patientAge}, {formData.patientGender})</div>
              <div><strong>{language === 'hi' ? 'कारण:' : 'Indication:'}</strong> {formData.clinicalIndication}</div>
              <div><strong>{language === 'hi' ? 'प्राथमिकता:' : 'Urgency:'}</strong> {formData.urgencyLevel}</div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#10253F] border border-[#10253F]/20 rounded hover:border-[#168C8C]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t.doctorReferral.printMemo}</span>
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold uppercase text-white bg-[#168C8C] rounded"
              >
                {t.doctorReferral.close}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="text-xs font-semibold uppercase tracking-wider text-[#718096] pb-1 border-b border-[#10253F]/10">
              {t.doctorReferral.secDoctor}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#10253F] mb-1">{t.doctorReferral.doctorName}</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Sunita Mehra, MD (Ped)"
                  value={formData.doctorName}
                  onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#10253F] mb-1">{t.doctorReferral.regNo}</label>
                <input
                  type="text"
                  placeholder="e.g. PMC-48210"
                  value={formData.doctorRegNo}
                  onChange={(e) => setFormData({ ...formData, doctorRegNo: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#10253F] mb-1">{t.doctorReferral.hospital}</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Civil Hospital, Ambala / Private Clinic"
                  value={formData.hospitalClinic}
                  onChange={(e) => setFormData({ ...formData, hospitalClinic: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#10253F] mb-1">{t.doctorReferral.phoneEmail}</label>
                <input
                  type="text"
                  required
                  placeholder="doctor@hospital.org"
                  value={formData.doctorEmail}
                  onChange={(e) => setFormData({ ...formData, doctorEmail: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                />
              </div>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-[#718096] pt-2 pb-1 border-b border-[#10253F]/10">
              {t.doctorReferral.secPatient}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold text-[#10253F] mb-1">{t.doctorReferral.patientName}</label>
                <input
                  type="text"
                  required
                  placeholder="Child's Name"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#10253F] mb-1">{t.doctorReferral.patientAge}</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 yrs"
                  value={formData.patientAge}
                  onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#10253F] mb-1">{t.doctorReferral.patientSex}</label>
                <select
                  value={formData.patientGender}
                  onChange={(e) => setFormData({ ...formData, patientGender: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
                >
                  <option value="Male">{language === 'hi' ? 'बालक' : 'Male'}</option>
                  <option value="Female">{language === 'hi' ? 'बालिका' : 'Female'}</option>
                  <option value="Other">{language === 'hi' ? 'अन्य' : 'Other'}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#10253F] mb-1">{t.doctorReferral.clinicalIndication}</label>
              <select
                value={formData.clinicalIndication}
                onChange={(e) => setFormData({ ...formData, clinicalIndication: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
              >
                <option value="Growth Failure / Short Stature Evaluation">Growth Failure / Short Stature Evaluation</option>
                <option value="Poorly Controlled Type 1 Diabetes / Recurrent DKA">Type 1 Diabetes (Complex / Recurrent DKA / CGM Initiation)</option>
                <option value="Abnormal Neonatal Thyroid Screen / Congenital Hypothyroidism">Abnormal Neonatal Thyroid Screen / Congenital Hypothyroidism</option>
                <option value="Precocious Puberty (Rapid Tanner Advancement)">Precocious Puberty (Rapid Tanner Advancement)</option>
                <option value="Delayed Puberty / Suspected Hypogonadism">Delayed Puberty / Suspected Hypogonadism</option>
                <option value="Congenital Adrenal Hyperplasia / Steroid Management">Congenital Adrenal Hyperplasia / Steroid Management</option>
                <option value="Resistant Rickets / Hypocalcemia / Bone Fragility">Resistant Rickets / Hypocalcemia / Bone Fragility</option>
                <option value="Other Endocrine / Syndromic Evaluation">Other Endocrine / Syndromic Evaluation</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-[#10253F]">
                  {t.doctorReferral.findingsNotes}
                </label>
                <VoiceInputButton
                  size="sm"
                  targetFieldLabel="clinical findings"
                  placeholder="Dictate key labs e.g. TSH, bone age, IGF-1..."
                  onTranscript={(spoken) => {
                    setFormData((prev) => ({
                      ...prev,
                      diagnosticFindings: prev.diagnosticFindings ? `${prev.diagnosticFindings} ${spoken}` : spoken,
                    }));
                  }}
                />
              </div>
              <textarea
                rows={3}
                placeholder="Key labs (e.g. TSH, FT4, HbA1c, Bone age, Karyotype), growth velocity, medication doses..."
                value={formData.diagnosticFindings}
                onChange={(e) => setFormData({ ...formData, diagnosticFindings: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs text-[#10253F] focus:outline-none focus:border-[#168C8C]"
              />
            </div>

            <div className="pt-3 border-t border-[#10253F]/10 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-[#718096] hover:text-[#10253F]"
              >
                {t.doctorReferral.cancel}
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#168C8C] hover:bg-[#0E6060] rounded shadow-xs"
              >
                <span>{t.doctorReferral.generateSlip}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
