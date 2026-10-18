import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, HeartPulse } from 'lucide-react';

export const HypoEmergencyGuide: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepsEn = [
    {
      step: 1,
      title: 'Recognize Hypo Symptoms',
      badge: 'Immediate Recognition',
      desc: 'Blood glucose < 70 mg/dL or child exhibits early signs: trembling, pallor, cold sweating, irritability, hunger, dizziness, or headache.',
      actionPoints: [
        'Confirm with fingerstick glucometer or continuous glucose monitor (CGM).',
        'Have child sit down immediately in a safe, supervised place.',
        'Never send a child to a school clinic or bathroom alone.',
      ],
    },
    {
      step: 2,
      title: 'Administer 15 Grams Fast-Acting Carbs',
      badge: 'Fast-Acting Glucose',
      desc: 'Do not give chocolate or high-fat pastries (fat delays stomach emptying and glucose absorption). Use pure fast sugar:',
      actionPoints: [
        '1/2 cup (120 ml) fruit juice or regular (non-diet) soda',
        '3 to 4 glucose tablets or 1 pouch glucose gel',
        '3 teaspoons of white sugar dissolved in half a cup of water',
        '4 to 5 jelly candies / hard candies',
      ],
    },
    {
      step: 3,
      title: 'Wait 15 Minutes Quietly',
      badge: 'Observation Window',
      desc: 'Allow time for sugar to be absorbed into the bloodstream. Do not give additional food during this window to avoid rebound hyperglycemia.',
      actionPoints: [
        'Keep child seated in a quiet resting position.',
        'Keep a close watch on level of alertness.',
        'Do not give insulin for this corrective sugar treatment.',
      ],
    },
    {
      step: 4,
      title: 'Recheck Blood Glucose',
      badge: 'Evaluation & Resolution',
      desc: 'Recheck fingerstick glucose after exactly 15 minutes of rest:',
      actionPoints: [
        'If still < 70 mg/dL: Repeat Step 2 (give another 15g fast carbs) and wait another 15 min.',
        'If ≥ 70 mg/dL: Follow immediately with child’s scheduled meal or a complex carbohydrate snack (roti, bread, milk, or crackers) to sustain glucose levels.',
        'Severe Unconscious Child: Do not give anything by mouth. Place in recovery position and administer Emergency Glucagon (Baqsimi nasal spray or Glucagon injection) and contact emergency services.',
      ],
    },
  ];

  const stepsHi = [
    {
      step: 1,
      title: 'लक्षणों की तुरंत पहचान करें',
      badge: 'त्वरित पहचान',
      desc: 'रक्त शर्करा (शुगर) < 70 mg/dL अथवा शुरुआती लक्षण: हाथ कांपना, पसीना आना, चेहरा पीला पड़ना, चिड़चिड़ापन, चक्कर आना या सिरदर्द।',
      actionPoints: [
        'ग्लूकोमीटर से अंगुली चुभोकर तुरंत शुगर की पुष्टि करें।',
        'बच्चे को तुरंत सुरक्षित स्थान पर आराम से बैठाएं।',
        'शुगर कम होने पर बच्चे को स्कूल में अकेला कभी न छोड़ें।',
      ],
    },
    {
      step: 2,
      title: '15 ग्राम त्वरित असरकारी मीठा दें',
      badge: 'फास्ट-एक्टिंग ग्लूकोज',
      desc: 'चॉकलेट या वसायुक्त बिस्कुट न दें (चिकनाई से शुगर सोखने में देरी होती है)। केवल शुद्ध चीनी या ग्लूकोज दें:',
      actionPoints: [
        '1/2 कप (120 मिली) ताज़ा फलों का रस या सामान्य मीठा पेय',
        '3 से 4 ग्लूकोज की गोलियां या 1 पाउच ग्लूकोज जेल',
        '3 छोटे चम्मच चीनी आधे कप सादे पानी में घोलकर',
        '4 से 5 मीठी गोलियां (कैंडी)',
      ],
    },
    {
      step: 3,
      title: 'शांत बैठाकर ठीक 15 मिनट प्रतीक्षा करें',
      badge: 'अवलोकन समय',
      desc: 'शरीर को रक्त में ग्लूकोज अवशोषित करने का समय दें। अधिक भोजन देने से बचें ताकि शुगर अत्यधिक न बढ़ जाए।',
      actionPoints: [
        'बच्चे को बिना दौड़-भाग के शांत बैठाए रखें।',
        'बच्चे की सजगता और व्यवहार पर निरंतर नजर रखें।',
        'इस सुधारात्मक शर्करा के लिए कभी भी इंसुलिन न लगाएं।',
      ],
    },
    {
      step: 4,
      title: '15 मिनट बाद पुनः शुगर जांचें',
      badge: 'पुनः मूल्यांकन एवं समाधान',
      desc: 'ठीक 15 मिनट बाद ग्लूकोमीटर से रक्त शर्करा दोबारा जांचें:',
      actionPoints: [
        'यदि अभी भी < 70 mg/dL है: तो चरण 2 दोहराएं (पुनः 15 ग्राम मीठा दें) और 15 मिनट और प्रतीक्षा करें।',
        'यदि ≥ 70 mg/dL हो गई है: तो तुरंत बच्चे का नियमित भोजन (रोटी, दाल, दूध या ब्रेड) दें ताकि शुगर दोबारा न गिरे।',
        'अति-गंभीर स्थिति (बेहोशी): मुंह से कुछ न दें, करवट के बल लिटाएं और तुरंत इमरजेंसी ग्लूकागॉन देकर निकटतम अस्पताल ले जाएं।',
      ],
    },
  ];

  const steps = language === 'hi' ? stepsHi : stepsEn;
  const cur = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <div className="bg-[#FAF6ED] border border-[#D5B77A]/40 rounded-xl p-6 sm:p-8 my-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#D5B77A]/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#168C8C] mb-1">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>{t.hypoGuide.badge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#10253F]">
            {t.hypoGuide.heading}
          </h3>
          <p className="text-xs text-[#718096] mt-0.5">
            {t.hypoGuide.subheading}
          </p>
        </div>

        {/* Step Selector Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {steps.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                activeStep === s.step
                  ? 'bg-[#10253F] text-white shadow-xs'
                  : 'bg-white/80 text-[#10253F]/70 hover:bg-white hover:text-[#10253F]'
              }`}
            >
              {t.hypoGuide.stepPrefix} {s.step}
            </button>
          ))}
        </div>
      </div>

      {/* Active Step Card */}
      <div className="bg-white rounded-lg border border-[#D5B77A]/30 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-[#168C8C] uppercase tracking-wider">
            {t.hypoGuide.stepPrefix} {cur.step} / 4 · {cur.badge}
          </span>
          <span className="text-xs font-mono text-[#718096]">
            {t.hypoGuide.targetLabel}
          </span>
        </div>

        <h4 className="text-lg font-serif font-semibold text-[#10253F] mb-2">
          {cur.title}
        </h4>

        <p className="text-xs sm:text-sm text-[#10253F]/80 leading-relaxed mb-4">
          {cur.desc}
        </p>

        <div className="bg-[#FAFCFE] rounded-md p-4 border border-[#10253F]/5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#718096] block mb-2">
            {t.hypoGuide.mandatoryActions}
          </span>
          <ul className="space-y-2 text-xs text-[#10253F]/85">
            {cur.actionPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stepper Navigation */}
        <div className="mt-5 pt-4 border-t border-[#10253F]/5 flex items-center justify-between">
          <button
            disabled={activeStep === 1}
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            className="text-xs font-medium text-[#718096] disabled:opacity-40 hover:text-[#10253F] transition-colors"
          >
            {t.hypoGuide.prevStep}
          </button>

          <button
            disabled={activeStep === 4}
            onClick={() => setActiveStep((prev) => Math.min(4, prev + 1))}
            className="text-xs font-semibold text-[#168C8C] disabled:opacity-40 hover:text-[#0E6060] transition-colors"
          >
            {t.hypoGuide.nextStep}
          </button>
        </div>
      </div>
    </div>
  );
};
