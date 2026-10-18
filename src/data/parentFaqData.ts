import { ParentFAQItem } from '../types';
import { Language } from '../context/LanguageContext';

export interface ChecklistItem {
  id: string;
  category: 'essential' | 'medical' | 'comfort';
  title: string;
  description: string;
}

export const APPOINTMENT_CHECKLIST_EN: ChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'essential',
    title: 'Growth & Vaccination Booklet (Mamta Card / Baby Book)',
    description: 'All past recordings of height, weight, head circumference, and birth weight milestones from infancy.',
  },
  {
    id: 'chk-2',
    category: 'essential',
    title: 'Biological Parents’ Heights (Measured Accurately)',
    description: 'Measured standing straight against a flat wall without shoes. Needed to compute mid-parental genetic target height.',
  },
  {
    id: 'chk-3',
    category: 'medical',
    title: 'Original Physical X-Ray Films (Left Hand / Wrist)',
    description: 'Bring the actual physical translucent films, not just the typed radiologist paper reports, for precise Greulich-Pyle staging.',
  },
  {
    id: 'chk-4',
    category: 'medical',
    title: 'Past Blood Reports & Referral Letters',
    description: 'Any recent thyroid profile (Free T4/TSH), blood sugar/HbA1c, celiac serology, or doctor prescription memos.',
  },
  {
    id: 'chk-5',
    category: 'comfort',
    title: 'Child’s Light Snack & Water Bottle',
    description: 'In case routine morning fasting blood tests are completed, having a healthy snack on hand prevents child distress.',
  },
  {
    id: 'chk-6',
    category: 'comfort',
    title: 'Comfortable Two-Piece Loose Clothing',
    description: 'Enables quick stadiometer height measurements without shoes, socks, or bulky hair accessories, and easy thyroid/abdomen exam.',
  },
];

export const APPOINTMENT_CHECKLIST_HI: ChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'essential',
    title: 'पुराना टीकाकरण व विकास कार्ड (ममता कार्ड / शिशु पुस्तिका)',
    description: 'जन्म के समय का वजन, प्रारंभिक महीनों की लंबाई-वजन के रिकॉर्ड और सभी टीकाकरण की तारीखें।',
  },
  {
    id: 'chk-2',
    category: 'essential',
    title: 'माता और पिता दोनों की सटीक ऊंचाई का माप',
    description: 'बिना जूते के दीवार के सहारे सीधी खड़ी मुद्रा में नापी गई माता-पिता की वास्तविक ऊंचाई, जो जेनेटिक टारगेट तय करने हेतु अनिवार्य है।',
  },
  {
    id: 'chk-3',
    category: 'medical',
    title: 'बाएं हाथ व कलाई के एक्स-रे की मूल फ़िल्में (Original Films)',
    description: 'केवल कागजी रिपोर्ट नहीं, बल्कि एक्स-रे की मूल प्लास्टिक शीट साथ लाएं ताकि डॉक्टर स्वयं हड्डियों की उम्र (Bone Age) देख सकें।',
  },
  {
    id: 'chk-4',
    category: 'medical',
    title: 'पूर्व रक्त जांच रिपोर्ट एवं डॉक्टर का रेफरल पत्र',
    description: 'हालिया थायरॉइड (TSH/T4), ब्लड शुगर/HbA1c, सीलिएक टेस्ट या प्राथमिक बाल रोग विशेषज्ञ (पीडियाट्रिशियन) का परामर्श पर्चा।',
  },
  {
    id: 'chk-5',
    category: 'comfort',
    title: 'बच्चे के लिए पानी की बोतल एवं हल्का नाश्ता',
    description: 'यदि प्रातः खाली पेट रक्त का नमूना दिया जाता है, तो जांच के तुरंत बाद बच्चे को नाश्ता देने से कमजोरी व चिड़चिड़ापन नहीं होता।',
  },
  {
    id: 'chk-6',
    category: 'comfort',
    title: 'ढीले व आरामदायक दो-टुकड़ा वस्त्र (Two-piece Clothing)',
    description: 'बिना जूते और सिर के भारी हेयरबैंड के सटीक स्टेडियोमीटर माप और पेट व गर्दन की शारीरिक जांच आसानी से हो सके।',
  },
];

export const PARENT_FAQS_EN: ParentFAQItem[] = [
  {
    id: 'faq-first-1',
    category: 'first-visit',
    categoryLabel: 'First Appointment Prep',
    question: 'What documents, records, and items should parents bring to their child’s first consultation?',
    shortSummary: 'Bring all past growth records, birth details, parents’ heights, physical X-ray films, and recent lab reports.',
    detailedParagraphs: [
      'To build a precise diagnostic picture, pediatric endocrinology relies heavily on developmental trajectory over time rather than a single isolated measurement.',
      'Parents should bring: (1) Past growth and immunization records including birth weight and gestational age; (2) Accurate measured heights of both biological parents without shoes; (3) Original physical X-ray films (especially left wrist and hand for bone age, not just paper report impressions); (4) Previous laboratory reports including thyroid function, blood sugars, celiac screening, and complete blood counts; (5) Any referral letters or prescription slips from your primary pediatrician.',
    ],
    keyTips: [
      'Write down a quick chronological timeline of when you first noticed growth slowing, weight changes, or early/late pubertal signs.',
      'Bring all currently prescribed vitamins, supplements, and prescription medications in their original packaging.',
    ],
    highlightBadge: 'Essential for Day 1',
    actionCta: {
      label: 'View Day of Appointment Packing Checklist',
      actionType: 'enquiry',
    },
  },
  {
    id: 'faq-first-2',
    category: 'first-visit',
    categoryLabel: 'First Appointment Prep',
    question: 'Does my child need to come fasting for their initial pediatric endocrine consultation?',
    shortSummary: 'Routine initial OPD visits do NOT require overnight fasting unless explicitly scheduled for fasting lab panels.',
    detailedParagraphs: [
      'For a routine first consultation at the Advanced Pediatrics Centre, fasting is usually not required. Initial consultations focus on comprehensive medical history, family genetics, Tanner pubertal staging, and precision stadiometer growth measurements.',
      'If specific tests (such as fasting blood glucose, lipid profile, or morning fasting cortisol) are required, Dr. Rakesh Kumar will evaluate the child first and clearly instruct you on the exact date and timing for those tests.',
      'Please do not keep your child hungry or thirsty without prior medical instructions, as prolonged fasting can cause hypoglycemia, dehydration, and needless anxiety in young children.',
    ],
    keyTips: [
      'Carry a water bottle and healthy snack in your bag so your child is refreshed during OPD hours.',
      'If you have already planned to give morning fasting blood tests at PGIMER central labs on the same morning, ensure you bring breakfast for immediately after the blood draw.',
    ],
    highlightBadge: 'Fasting Guidelines',
  },
  {
    id: 'faq-first-3',
    category: 'first-visit',
    categoryLabel: 'First Appointment Prep',
    question: 'How can I prepare my child emotionally for the visit so they do not feel frightened?',
    shortSummary: 'Reassure your child that the visit involves measuring height and talking—no surprise injections or painful procedures.',
    detailedParagraphs: [
      'Children often associate hospital visits with painful injections or uncomfortable procedures. You can explain that Dr. Rakesh Kumar is a "growth and energy doctor" who helps children grow taller, run faster, and feel energetic.',
      'Describe what will happen in simple terms: the doctor and nursing staff will measure their height using a special wall ruler (stadiometer), check their weight, measure their arm span, and gently feel their neck (thyroid) and tummy. There are no surprise needles or injections during the clinical consultation room visit.',
    ],
    keyTips: [
      'Avoid telling children "if you misbehave the doctor will give you an injection"—frame the doctor as a supportive friend.',
      'Bring a favorite small storybook or coloring set to keep them engaged while waiting in the OPD lounge.',
    ],
    highlightBadge: 'Child Comfort',
  },
  {
    id: 'faq-first-4',
    category: 'first-visit',
    categoryLabel: 'First Appointment Prep',
    question: 'How long does a consultation take at PGIMER Chandigarh, and what is the typical OPD flow?',
    shortSummary: 'Plan for approximately 2 to 3 hours total at the Advanced Pediatrics Centre due to high clinical precision and teaching review.',
    detailedParagraphs: [
      'PGIMER Chandigarh is a premier national tertiary referral hospital. Each child receives rigorous clinical evaluation, multiple verified auxological measurements, and comprehensive parental counseling.',
      'The general flow includes: (1) Token verification and vital sign recording; (2) Triple stadiometer height and sitting height measurement; (3) Detailed clinical consultation and physical exam; (4) Diagnostic testing coordination (radiology / laboratory) and individualized treatment counseling.',
    ],
    keyTips: [
      'Arrive during morning registration hours (8:00 AM – 11:00 AM) to ensure smooth token processing.',
      'Dress your child in easy-to-remove shoes and simple two-piece clothing without intricate buckles or headpins.',
    ],
    highlightBadge: 'Clinic Workflow',
  },
  {
    id: 'faq-follow-1',
    category: 'follow-up',
    categoryLabel: 'Follow-ups & Monitoring',
    question: 'How frequently does a child need to return for follow-up appointments after starting treatment?',
    shortSummary: 'Follow-up frequency depends strictly on the condition: usually every 3 months for diabetes and growth hormone, and 3 to 6 months for thyroid.',
    detailedParagraphs: [
      'Because children grow and metabolize medications dynamically, dosage is linked to increasing weight, height velocity, and hormonal feedback loops.',
      'Standard recommended follow-up schedules:',
      '• Growth Hormone Deficiency / Short Stature: Every 3 to 6 months to evaluate annualized growth velocity (cm/year), check injection sites, and adjust dose per kilogram.',
      '• Type 1 Diabetes: Every 2 to 3 months for HbA1c review, insulin-to-carbohydrate ratio calibration, sensor data analysis, and lipohypertrophy screening.',
      '• Congenital Hypothyroidism: Every 2 to 3 months in infants under 1 year, and every 4 to 6 months in older children for Free T4 and TSH titration.',
      '• Central Precocious Puberty: Every 3 months to monitor Tanner stage progression, suppression efficacy, and height velocity.',
      '• Congenital Adrenal Hyperplasia (CAH): Every 3 to 4 months for 17-OHP, androstenedione, and electrolyte review.',
    ],
    keyTips: [
      'Never alter prescribed hormone doses (growth hormone, thyroxine, insulin, or hydrocortisone) between follow-ups without clinical confirmation.',
      'If you live in another state, book a teleconsultation interval review between mandatory in-person physical visits.',
    ],
    highlightBadge: 'Follow-up Schedule',
    actionCta: {
      label: 'Explore Tele-Consultancy Option',
      actionType: 'live-consult',
    },
  },
  {
    id: 'faq-follow-2',
    category: 'follow-up',
    categoryLabel: 'Follow-ups & Monitoring',
    question: 'Why does the doctor measure my child’s height three times at every follow-up visit?',
    shortSummary: 'Triple stadiometer measurements are taken to obtain an exact mathematical average and eliminate posture errors.',
    detailedParagraphs: [
      'In pediatric auxology, assessing whether a treatment is working depends on calculating "Growth Velocity"—the number of centimeters gained per year (cm/year).',
      'A variation of just 3 to 4 millimeters caused by poor posture, slouching, or slight head tilt can distort the calculated velocity. Therefore, our team uses a precision wall-mounted Harpenden-style stadiometer with the child’s head in the Frankfort horizontal plane. Three consecutive measurements are recorded, and the exact mean is plotted on the WHO or Indian Academy of Pediatrics (IAP) growth chart.',
    ],
    keyTips: [
      'Remove thick hair clips, tight ponytails, or high hair buns before your child steps onto the stadiometer board.',
      'Heels must touch the base of the vertical board, with feet flat and chin parallel to the floor.',
    ],
    highlightBadge: 'Clinical Precision',
    actionCta: {
      label: 'Calculate Target Height Online',
      actionType: 'growth-calc',
    },
  },
  {
    id: 'faq-follow-3',
    category: 'follow-up',
    categoryLabel: 'Follow-ups & Monitoring',
    question: 'What observations should parents record at home between follow-up appointments?',
    shortSummary: 'Track medication consistency, shoe/clothing size changes, energy levels, and blood sugar logs.',
    detailedParagraphs: [
      'Parental home observations bridge the gap between clinic visits and give the endocrinologist vital real-world context.',
      'Key observations to note in a small notebook or smartphone note:',
      '• Growth: Have trousers or school skirts needed lowering at the hem? Have shoe sizes jumped in the past 6 months?',
      '• Diabetes: Log any unexplained hypoglycemia (low sugars <70 mg/dL), sick days, ketone checks, and daily total insulin units.',
      '• Thyroid & Energy: Note school alertness, fatigue, excessive daytime sleepiness, constipation, or cold intolerance.',
      '• Puberty: Note any early breast tenderness, testicular enlargement, voice deepening, or sudden rapid growth spurts.',
    ],
    keyTips: [
      'Bring your home glucose logbook or download your CGM sensor reports to share during the consultation.',
      'Take photos of unusual skin reactions or injection site lumps to show Dr. Rakesh Kumar.',
    ],
    highlightBadge: 'Parent Diary',
  },
  {
    id: 'faq-tests-1',
    category: 'tests',
    categoryLabel: 'Specialized Diagnostic Tests',
    question: 'What is a Growth Hormone Stimulation Test (Clonidine or Glucagon), and why is it necessary?',
    shortSummary: 'Random blood tests cannot measure Growth Hormone because it is released in short bursts at night. A stimulation test reveals the pituitary’s reserve capacity.',
    detailedParagraphs: [
      'Unlike thyroid hormone or cortisol, Growth Hormone (GH) is not secreted steadily during the day. In healthy children, daytime GH levels are naturally zero or near-undetectable for many hours, only surging in deep sleep.',
      'Therefore, a random single blood draw is clinically useless for diagnosing growth hormone deficiency. A standardized stimulation test is performed in the daycare unit under close medical supervision. The child receives an oral stimulus (like Clonidine) or subcutaneous Glucagon to gently stimulate the pituitary gland.',
      'Blood samples are collected through a single pain-free IV cannula at 0, 30, 60, 90, and 120 minutes. If the peak GH concentration remains below established pediatric cutoffs (<7 to 10 ng/mL on two separate tests), growth hormone deficiency is confirmed.',
    ],
    keyTips: [
      'A topical numbing cream (EMLA) can be applied 45 minutes prior to cannula insertion so the child feels no needle sting.',
      'Mild temporary sleepiness is common after Clonidine, which resolves quickly after a light lunch.',
    ],
    highlightBadge: 'Daycare Procedure',
  },
  {
    id: 'faq-tests-2',
    category: 'tests',
    categoryLabel: 'Specialized Diagnostic Tests',
    question: 'What is a Bone Age X-ray and why is it always taken of the left wrist and hand?',
    shortSummary: 'A left-hand X-ray examines growth plate development to determine biological age and remaining growth potential.',
    detailedParagraphs: [
      'A child’s chronological age (years since birth) does not always match their biological or skeletal maturity. The left wrist and hand contain nearly 30 distinct growth centers (epiphyses) and carpal bones that ossify in a universally documented sequence.',
      'By comparing your child’s radiograph to international reference standards (the Greulich & Pyle or Tanner-Whitehouse atlases), Dr. Rakesh Kumar calculates the exact Bone Age.',
      'If bone age is delayed by 2 years in a short child, it signifies that their growth plates are still young and open, meaning they have more remaining years of growth potential than their peers of the same age.',
    ],
    keyTips: [
      'Radiation exposure from a single hand-wrist X-ray is negligible—less than the natural background radiation received on a 2-hour commercial flight.',
      'Always bring the physical translucent film to your clinic appointment, not just the typed paper report.',
    ],
    highlightBadge: 'Skeletal Maturity',
  },
  {
    id: 'faq-tests-3',
    category: 'tests',
    categoryLabel: 'Specialized Diagnostic Tests',
    question: 'How should parents prepare their child for dynamic tests like the Synacthen test or OGTT?',
    shortSummary: 'Arrive fasting as instructed, keep child hydrated with plain water, and prepare them for a small IV cannula.',
    detailedParagraphs: [
      'Dynamic testing investigates how an endocrine gland responds when challenged. For the Low-Dose or Standard Synacthen (ACTH) test (checking adrenal cortisol reserve), the child arrives after an overnight fast. A baseline sample is drawn, synthetic ACTH is injected, and samples are drawn at 30 and 60 minutes.',
      'For an Oral Glucose Tolerance Test (OGTT), the child drinks a weight-calculated glucose solution over 5 minutes, and blood glucose and insulin levels are measured over 2 hours.',
      'Both tests are safe, routine outpatient procedures conducted with continuous nursing supervision.',
    ],
    keyTips: [
      'Plain drinking water is permitted and encouraged before the test to make veins easily accessible for cannula placement.',
      'Bring quiet distractions: audiobooks, music, tablet games, or favorite toys for the 2-hour daycare stay.',
    ],
    highlightBadge: 'Dynamic Testing',
  },
  {
    id: 'faq-meds-1',
    category: 'medications',
    categoryLabel: 'Medications & Daily Care',
    question: 'How should Growth Hormone (rhGH) pens and cartridges be stored, and how does the cold chain work?',
    shortSummary: 'Growth hormone is a delicate protein that MUST be stored refrigerated at 2°C to 8°C—never frozen and never left in hot cars.',
    detailedParagraphs: [
      'Recombinant human growth hormone is a sensitive biologic peptide. If exposed to temperatures above 25°C or frozen, the protein molecules denature and permanently lose their medical efficacy.',
      'Key storage and handling rules for parents:',
      '• Home Storage: Keep cartridges and pens in the middle compartment of your home refrigerator at 2°C to 8°C. Do not store inside the door shelves (where temperature fluctuates) or near the ice freezer box.',
      '• Travel & Purchasing: Always transport the medicine in an insulated cooling pouch containing reusable frozen gel ice-packs. Ensure the pen does not directly touch ice to prevent freezing.',
      '• Administration: Give the subcutaneous injection once daily at bedtime (mirroring the natural nighttime growth hormone surge) using 4mm or 5mm micro-fine needles.',
      '• Site Rotation: Rotate injection sites every night between thighs, abdomen (2 inches away from navel), buttocks, and upper arms to prevent fatty tissue lumps (lipohypertrophy).',
    ],
    keyTips: [
      'Keep a digital thermometer inside your refrigerator to verify the 2°C – 8°C range.',
      'Inspect the liquid before injecting: it should be crystal clear. If it appears cloudy or contains floating flakes, discard it.',
    ],
    highlightBadge: 'Cold Chain Protocol',
  },
  {
    id: 'faq-meds-2',
    category: 'medications',
    categoryLabel: 'Medications & Daily Care',
    question: 'What is the correct way to give Levothyroxine (Thyroxine) tablets to infants and young children?',
    shortSummary: 'Give early morning on an empty stomach with plain water. Wait 30 to 45 minutes before giving milk, formula, or breakfast.',
    detailedParagraphs: [
      'Levothyroxine absorption in the stomach and upper intestine is extremely sensitive to other foods and minerals.',
      'Administration instructions for parents:',
      '• Older Children: Swallow the exact prescribed microgram dose with plain water first thing upon waking. Wait at least 30 to 45 minutes before eating breakfast or drinking milk.',
      '• Infants & Babies: Crush the small tablet between two clean stainless steel spoons. Dissolve the powder in 5 to 10 mL of plain boiled and cooled water or expressed breast milk, and feed immediately using a small dropper or medicine spoon.',
      '• Critical Rule: Never mix thyroxine with infant formula, cow’s milk, calcium syrups, iron drops, or soy products, because calcium, iron, and soy bind to the hormone and prevent intestinal absorption.',
    ],
    keyTips: [
      'If you forget a morning dose, give it as soon as you remember during the day (maintaining a 2-hour fasting window before/after). Never double the dose the next day without consulting.',
      'Infant blood testing (Free T4 / TSH) should be checked every 2 to 3 months because growing babies rapidly outgrow their microgram dose.',
    ],
    highlightBadge: 'Administration Rule',
  },
  {
    id: 'faq-meds-3',
    category: 'medications',
    categoryLabel: 'Medications & Daily Care',
    question: 'Can Dr. Rakesh Kumar provide medical letters for schools, sports participation, and board examinations?',
    shortSummary: 'Yes, formal clinical certificates and school individualized healthcare plans (IHCP) are provided for all enrolled patients.',
    detailedParagraphs: [
      'Children with Type 1 Diabetes, Congenital Adrenal Hyperplasia, or growth conditions have full rights to participate in sports, school excursions, and examinations without discrimination.',
      'Dr. Rakesh Kumar provides official clinical documentation including:',
      '• School Health Plans: Authorizing permission to carry glucose meters, continuous glucose monitoring (CGM) sensors, fast-acting sugar candies, water bottles, and emergency glucagon in the classroom.',
      '• Board Examination Certificates: Official medical certificates for CBSE, ICSE, and state boards granting extra time, permission to carry snacks into examination halls, and unscheduled blood sugar monitoring breaks.',
      '• Sports Clearance: Written clearances for physical education, football, swimming, and competitive athletics with customized pre-exercise carbohydrate adjustments.',
    ],
    keyTips: [
      'Request board exam letters at least 6 to 8 weeks before the school board submission deadline.',
      'Schedule a brief review appointment so your child’s latest HbA1c and treatment regimen are accurately documented.',
    ],
    highlightBadge: 'School Documentation',
  },
  {
    id: 'faq-tele-1',
    category: 'teleconsult',
    categoryLabel: 'Outstation & Remote Care',
    question: 'We live in Punjab, Haryana, Himachal, J&K, or Rajasthan. Can follow-ups be done via Teleconsultation?',
    shortSummary: 'Yes, established patients with stable conditions can complete interval follow-ups through our secure Live Tele-Consultancy portal.',
    detailedParagraphs: [
      'Many families travel hundreds of kilometers to PGIMER Chandigarh. Once an initial comprehensive physical examination, diagnostic workup, and treatment initiation have taken place at the Advanced Pediatrics Centre, stable routine follow-up can often alternate between in-person visits and remote teleconsultations.',
      'How remote follow-up works:',
      '1. Have your local pediatrician measure your child’s height and weight accurately using a wall stadiometer.',
      '2. Complete any requested interval blood tests (e.g. Free T4, TSH, HbA1c, or electrolytes) at an accredited local laboratory.',
      '3. Book a slot on our Live Tele-Consultancy portal and upload the local reports and height data.',
      '4. Dr. Rakesh Kumar reviews the clinical progress on secure video, discusses adjustments, and generates a digitally signed advice slip.',
    ],
    keyTips: [
      'Mandatory annual or bi-annual physical visits to PGIMER are still recommended for comprehensive skeletal examination and pubertal staging.',
      'Always use a reliable internet connection and have your child present in the room during the video session.',
    ],
    highlightBadge: 'Regional Support',
    actionCta: {
      label: 'Open Live Tele-Consultancy Portal',
      actionType: 'live-consult',
    },
  },
  {
    id: 'faq-tele-2',
    category: 'teleconsult',
    categoryLabel: 'Outstation & Remote Care',
    question: 'When should parents skip routine appointment booking and proceed directly to emergency care?',
    shortSummary: 'In acute metabolic emergencies—severe hypoglycemia unresponsiveness, DKA vomiting, or adrenal crisis—go straight to APC Emergency.',
    detailedParagraphs: [
      'Certain pediatric endocrine conditions can trigger rapid medical emergencies that cannot wait for an OPD token or a scheduled teleconsultation slot.',
      'Proceed immediately to the 24-hour Advanced Pediatrics Centre (APC) Emergency at PGIMER or your closest critical care hospital if your child exhibits:',
      '• Type 1 Diabetes: Persistent vomiting, refusal of fluids, rapid deep sighing breath (Kussmaul breathing), sweet/fruity breath odor, or high urine/blood ketones—these are signs of Diabetic Ketoacidosis (DKA).',
      '• Severe Hypoglycemia: Loss of consciousness, confusion, inability to swallow, or seizures that do not resolve immediately with oral glucose.',
      '• Congenital Adrenal Hyperplasia (CAH): High fever, severe vomiting/diarrhea, extreme lethargy, or circulatory collapse (Adrenal Crisis)—administer intramuscular emergency hydrocortisone immediately and seek urgent emergency transfer.',
    ],
    keyTips: [
      'Always keep Dr. Rakesh Kumar’s Emergency Hypoglycemia Protocol and Sick Day Guidelines saved on your mobile phone.',
      'Ensure family members and caregivers know how to administer emergency injectable hydrocortisone or glucagon.',
    ],
    highlightBadge: 'Red Flag Emergency',
    actionCta: {
      label: 'Read Hypo Emergency Protocol',
      actionType: 'emergency-guide',
    },
  },
];

export const PARENT_FAQS_HI: ParentFAQItem[] = [
  {
    id: 'faq-first-1',
    category: 'first-visit',
    categoryLabel: 'प्रथम परामर्श की तैयारी',
    question: 'बच्चे के पहले परामर्श के समय माता-पिता को कौन से दस्तावेज़, रिपोर्ट और माप साथ लाने चाहिए?',
    shortSummary: 'पुराने विकास चार्ट, जन्म रिकॉर्ड, माता-पिता की ऊंचाई, हाथ के एक्स-रे की मूल फ़िल्में और हालिया रक्त परीक्षण रिपोर्ट साथ लाएं।',
    detailedParagraphs: [
      'पीडियाट्रिक एंडोक्रिनोलॉजी (बाल हार्मोन चिकित्सा) में बच्चे की किसी एक दिन की जांच की तुलना में समय के साथ शारीरिक विकास की गति (Trajectory) कहीं अधिक महत्वपूर्ण होती है।',
      'माता-पिता को ये दस्तावेज़ अवश्य लाने चाहिए: (1) शिशु का जन्म के समय का वजन, सप्ताह (Premature or Full term) और पुराना टीकाकरण व विकास कार्ड; (2) माता और पिता दोनों की बिना जूते नापी गई वास्तविक ऊंचाई; (3) बाएं हाथ और कलाई के एक्स-रे की मूल प्लास्टिक फ़िल्में (हड्डियों की उम्र देखने हेतु, केवल कागजी रिपोर्ट पर्याप्त नहीं); (4) हालिया रक्त रिपोर्ट (जैसे थायरॉइड, ब्लड शुगर, सीलिएक टेस्ट, सीबीसी); (5) स्थानीय बाल रोग विशेषज्ञ का रेफरल पर्चा।',
    ],
    keyTips: [
      'एक कागज़ पर यह क्रमवार लिख लें कि आपने सबसे पहले कब ध्यान दिया कि बच्चे का कद धीरे बढ़ रहा है या वजन में असामान्य बदलाव आ रहा है।',
      'बच्चे द्वारा ली जा रही सभी दवाएं, विटामिन व सिरप उनके मूल डिब्बों सहित साथ लाएं।',
    ],
    highlightBadge: 'पहले दिन अनिवार्य',
    actionCta: {
      label: 'अपॉइंटमेंट बैग पैकिंग चेकलिस्ट देखें',
      actionType: 'enquiry',
    },
  },
  {
    id: 'faq-first-2',
    category: 'first-visit',
    categoryLabel: 'प्रथम परामर्श की तैयारी',
    question: 'क्या पहले परामर्श के दिन बच्चे को सुबह खाली पेट (Fasting) लाना आवश्यक है?',
    shortSummary: 'सामान्य पहली ओपीडी में बच्चे को भूखा रखने की आवश्यकता नहीं है, जब तक कि डॉक्टर ने पूर्व में विशेष फास्टिंग जांच न लिखी हो।',
    detailedParagraphs: [
      'एडवांस्ड पीडियाट्रिक्स सेंटर (APC) में सामान्य प्रथम परामर्श के लिए बच्चे को रात भर भूखा रखने की आवश्यकता नहीं होती। पहली भेंट में विस्तृत पारिवारिक इतिहास, प्यूबर्टी के लक्षण और सटीक स्टेडियोमीटर से शारीरिक माप लिया जाता है।',
      'यदि किसी विशिष्ट परीक्षण (जैसे फास्टिंग ब्लड शुगर, लिपिड प्रोफाइल अथवा सुबह 8 बजे का कॉर्टिसोल) की आवश्यकता होगी, तो डॉ. राकेश कुमार पहले जांच करेंगे और सटीक तारीख व समय निर्धारित करेंगे।',
      'बिना चिकित्सीय निर्देश के छोटे बच्चे को भूखा-प्यासा न रखें, इससे बच्चे में ब्लड शुगर गिरने (हाइपोग्लाइसीमिया), डिहाइड्रेशन और घबराहट का खतरा रहता है।',
    ],
    keyTips: [
      'अपने बैग में पानी की बोतल और हल्का पौष्टिक नाश्ता (फल, बिस्कुट) रखें ताकि ओपीडी के दौरान बच्चा तरोताजा रहे।',
      'यदि आपने उसी दिन सुबह पीजीआई की सेंट्रल लैब में पहले से लिखी फास्टिंग जांच कराने की योजना बनाई है, तो रक्त देने के तुरंत बाद नाश्ता कराएं।',
    ],
    highlightBadge: 'फास्टिंग दिशा-निर्देश',
  },
  {
    id: 'faq-first-3',
    category: 'first-visit',
    categoryLabel: 'प्रथम परामर्श की तैयारी',
    question: 'अस्पताल आने से पहले बच्चे को मानसिक रूप से कैसे तैयार करें ताकि वह डरे नहीं?',
    shortSummary: 'बच्चे को समझाएं कि यह केवल कद नापने और बात करने की जांच है—कोई अप्रत्याशित सुई या दर्दनाक प्रक्रिया नहीं होगी।',
    detailedParagraphs: [
      'अक्सर बच्चे अस्पताल के नाम से इंजेक्शन और दर्द के डर से घबरा जाते हैं। आप अपने बच्चे को प्यार से समझा सकते हैं कि डॉ. राकेश कुमार "विकास और ऊर्जा के डॉक्टर" हैं जो बच्चों को लंबा, मजबूत और फुर्तीला बनने में मदद करते हैं।',
      'उन्हें आसान शब्दों में बताएं: डॉक्टर केवल दीवार पर लगे विशेष पैमाने (स्टेडियोमीटर) से उनकी ऊंचाई नापेंगे, वजन तोलेंगे, दोनों हाथों का फैलाव (आर्म स्पैन) नापेंगे और पेट व गर्दन की साधारण जांच करेंगे। परामर्श कक्ष में कोई अचानक सुई नहीं लगाई जाएगी।',
    ],
    keyTips: [
      'कभी भी बच्चे को डराने के लिए न कहें कि "शरारत करोगे तो डॉक्टर सुई लगा देंगे"—डॉक्टर को बच्चे के मित्र के रूप में प्रस्तुत करें।',
      'प्रतीक्षालय में समय बिताने के लिए बच्चे की मनपसंद कॉमिक्स या रंगों की किताब साथ रखें।',
    ],
    highlightBadge: 'बाल मानसिक संबल',
  },
  {
    id: 'faq-first-4',
    category: 'first-visit',
    categoryLabel: 'प्रथम परामर्श की तैयारी',
    question: 'पीजीआई चंडीगढ़ में परामर्श में कितना समय लगता है और ओपीडी की सामान्य प्रक्रिया क्या है?',
    shortSummary: 'गहन चिकित्सीय जांच और उच्च रोगी संख्या के कारण कुल 2 से 3 घंटे का समय मानकर चलें।',
    detailedParagraphs: [
      'पीजीआईएमईआर चंडीगढ़ एक राष्ट्रीय स्तर का विशिष्ट संस्थान है। यहां प्रत्येक बच्चे का बारीकी से अध्ययन किया जाता है और शारीरिक माप तीन बार सत्यापित किए जाते हैं।',
      'ओपीडी का सामान्य क्रम इस प्रकार है: (1) टोकन सत्यापन व शुरुआती विवरण; (2) प्रशिक्षित स्टाफ द्वारा सटीक स्टेडियोमीटर पर ऊंचाई व बैठने की ऊंचाई का तिहरा माप; (3) डॉ. राकेश कुमार एवं टीम द्वारा विस्तृत परामर्श व शारीरिक परीक्षण; (4) आवश्यक जांचों का समन्वय और अभिभावकों को व्यक्तिगत उपचार योजना समझाना।',
    ],
    keyTips: [
      'टोकन और पंजीकरण प्रक्रिया सुचारू रखने हेतु सुबह 8:00 से 11:00 बजे के बीच समय पर पहुंचें।',
      'बच्चे को ऐसे जूते और कपड़े पहनाएं जिन्हें आसानी से उतारा व पहनाया जा सके, ताकि माप में समय न लगे।',
    ],
    highlightBadge: 'ओपीडी कार्यप्रणाली',
  },
  {
    id: 'faq-follow-1',
    category: 'follow-up',
    categoryLabel: 'फॉलो-अप एवं निगरानी',
    question: 'उपचार शुरू होने के बाद बच्चे को कितनी बार फॉलो-अप (दोबारा जांच) के लिए आना पड़ता है?',
    shortSummary: 'रोग के अनुसार: डायबिटीज़ व ग्रोथ हार्मोन हेतु हर 2-3 माह, थायरॉइड हेतु 3 से 6 माह पर नियमित फॉलो-अप आवश्यक है।',
    detailedParagraphs: [
      'चूंकि बच्चे लगातार बढ़ रहे होते हैं, उनका वजन बदलने से दवाओं की खुराक (Dose per kg) भी समय-समय पर बदलनी पड़ती है।',
      'मानक फॉलो-अप समय-सारणी:',
      '• ग्रोथ हार्मोन उपचार / कद का धीमा विकास: हर 3 से 6 माह में, ताकि वार्षिक विकास दर (cm/year) की गणना हो सके और इंजेक्शन स्थल की जांच की जा सके।',
      '• टाइप 1 डायबिटीज़: हर 2 से 3 माह में HbA1c रिपोर्ट, इंसुलिन खुराक समायोजन, सेंसर ग्राफ समीक्षा और त्वचा के गांठों (Lipohypertrophy) की जांच हेतु।',
      '• जन्मजात थायरॉइड (कंजेनिटल हाइपोथायरॉइडिज़्म): 1 वर्ष से छोटे शिशुओं में हर 2 से 3 माह, तथा बड़े बच्चों में हर 4 से 6 माह पर Free T4 और TSH जांच अनुसार।',
      '• समय पूर्व यौवन (Precocious Puberty): हर 3 माह में प्यूबर्टी के लक्षणों व ग्रोथ स्पर्ट की निगरानी हेतु।',
      '• कंजेनिटल एड्रिनल हाइपरप्लासिया (CAH): हर 3 से 4 माह में 17-OHP और इलेक्ट्रोलाइट्स की निगरानी हेतु।',
    ],
    keyTips: [
      'डॉक्टर की अनुमति के बिना घर पर किसी भी हार्मोनल दवा (इंसुलिन, थायरॉक्सीन, ग्रोथ हार्मोन, हाइड्रोकोर्टिसोन) की खुराक स्वयं न बदलें।',
      'दूरदराज के अभिभावक दो इन-पर्सन दौरों के बीच हमारे टेली-कंसल्टेंसी पोर्टल पर ऑनलाइन समीक्षा करा सकते हैं।',
    ],
    highlightBadge: 'फॉलो-अप अंतराल',
    actionCta: {
      label: 'टेली-कंसल्टेंसी विकल्प देखें',
      actionType: 'live-consult',
    },
  },
  {
    id: 'faq-follow-2',
    category: 'follow-up',
    categoryLabel: 'फॉलो-अप एवं निगरानी',
    question: 'हर फॉलो-अप विजिट पर डॉक्टर मेरे बच्चे का कद तीन बार क्यों नापते हैं?',
    shortSummary: 'मुद्रा (पोस्चर) की त्रुटि दूर करने और सटीक गणितीय औसत निकालने हेतु तिहरा स्टेडियोमीटर माप लिया जाता है।',
    detailedParagraphs: [
      'बाल विकास चिकित्सा में उपचार का असर जांचने के लिए "ग्रोथ वेलोसिटी" (वार्षिक विकास दर—सेमी प्रति वर्ष) की गणना की जाती है।',
      'यदि बच्चा थोड़ा सा भी झुक कर खड़ा हो या सिर का कोण बदल जाए, तो 3 से 4 मिलीमीटर का अंतर आ सकता है जिससे पूरी गणना गलत हो सकती है। इसलिए हमारे केंद्र पर हार्पेंडेन-शैली के दीवार-माउंटेड स्टेडियोमीटर का उपयोग किया जाता है।',
      'बच्चे के सिर को फ्रैंकफर्ट समानांतर तल में रखकर लगातार 3 बार माप लिया जाता है और सटीक औसत निकालकर डब्ल्यूएचओ (WHO) व आईएपी (IAP) के विकास चार्ट पर अंकित किया जाता है।',
    ],
    keyTips: [
      'स्टेडियोमीटर पर खड़े होने से पहले बच्चे के सिर के भारी हेयर क्लिप, ऊंची पोनीटेल या जूड़े खोल दें।',
      'एड़ियां लकड़ी के तल से चिपकी होनी चाहिए, पैर सीधे और ठोड़ी जमीन के समानांतर होनी चाहिए।',
    ],
    highlightBadge: 'वैज्ञानिक शुद्धता',
    actionCta: {
      label: 'ऑनलाइन जेनेटिक टारगेट कद निकालें',
      actionType: 'growth-calc',
    },
  },
  {
    id: 'faq-follow-3',
    category: 'follow-up',
    categoryLabel: 'फॉलो-अप एवं निगरानी',
    question: 'फॉलो-अप के बीच के महीनों में माता-पिता को घर पर किन बातों की डायरी रखनी चाहिए?',
    shortSummary: 'दवाओं की नियमितता, कपड़ों/जूतों के नाप में बदलाव, ऊर्जा स्तर और ब्लड शुगर का ब्यौरा नोट करें।',
    detailedParagraphs: [
      'घर पर माता-पिता का सूक्ष्म अवलोकन डॉक्टर को बहुत महत्वपूर्ण जानकारी देता है जो केवल अस्पताल के 15 मिनट में नहीं मिल सकती।',
      'घर की डायरी में नोट रखने योग्य मुख्य बातें:',
      '• विकास: क्या पिछले 6 माह में बच्चे की पैंट की मोहरी छोटी हुई है? क्या स्कूल के जूतों का नंबर बदला है?',
      '• डायबिटीज़: किसी भी अप्रत्याशित हाइपोग्लाइसीमिया (शुगर <70 mg/dL), बीमारी के दिन, पेशाब में कीटोन्स और कुल दैनिक इंसुलिन खुराक को डायरी में लिखें।',
      '• थायरॉइड एवं ऊर्जा: पढ़ाई में एकाग्रता, दिन में अत्यधिक सुस्ती, कब्ज अथवा ठंड अधिक लगने जैसे लक्षणों पर नजर रखें।',
      '• प्यूबर्टी: यदि 8-9 वर्ष से पहले छाती में उभार, आवाज में भारीपन या अचानक तेजी से कद बढ़ना दिखे तो तुरंत नोट करें।',
    ],
    keyTips: [
      'अपनी शुगर लॉगबुक या ग्लूकोज सेंसर की पीडीएफ रिपोर्ट परामर्श के समय अवश्य साथ लाएं।',
      'इंजेक्शन लगाने के स्थान पर कोई गांठ या दाना दिखे तो उसकी तस्वीर मोबाइल में सुरक्षित रख लें।',
    ],
    highlightBadge: 'घरेलू डायरी',
  },
  {
    id: 'faq-tests-1',
    category: 'tests',
    categoryLabel: 'विशिष्ट नैदानिक परीक्षण',
    question: 'ग्रोथ हार्मोन स्टिमुलेशन टेस्ट (क्लोनिडिन या ग्लूकागॉन) क्या है और यह क्यों आवश्यक है?',
    shortSummary: 'ग्रोथ हार्मोन दिन में लगातार नहीं निकलता, इसलिए सामान्य ब्लड टेस्ट से इसका पता नहीं चलता। स्टिमुलेशन टेस्ट से ग्रंथि की क्षमता जांची जाती है।',
    detailedParagraphs: [
      'थायरॉइड हार्मोन की तरह ग्रोथ हार्मोन (GH) दिन में स्थिर रूप से रक्त में प्रवाहित नहीं होता। स्वस्थ बच्चों में भी दिन के समय ग्रोथ हार्मोन का स्तर लगभग शून्य अथवा मापने योग्य सीमा से नीचे होता है, यह केवल रात में गहरी नींद में स्पंदनों (Pulses) के रूप में निकलता है।',
      'इसलिए दिन में एक बार निकाला गया सामान्य रक्त का नमूना ग्रोथ हार्मोन की कमी साबित नहीं कर सकता। इसके लिए डे-केयर में निगरानी में स्टिमुलेशन टेस्ट किया जाता है, जिसमें बच्चे को क्लोनिडिन की गोली या ग्लूकागॉन दिया जाता है जिससे पिट्यूटरी ग्रंथि उत्तेजित होती है।',
      'एक ही बार लगाए गए दर्द-रहित कैन्युला से 0, 30, 60, 90 और 120 मिनट पर रक्त के नमूने लिए जाते हैं। यदि दो अलग-अलग परीक्षणों में भी उच्चतम स्तर 7 से 10 ng/mL से कम रहता है, तभी ग्रोथ हार्मोन की कमी की पुष्टि होती है।',
    ],
    keyTips: [
      'कैन्युला लगाने से 45 मिनट पूर्व दर्द-निवारक सुन्न करने वाली क्रीम (EMLA) लगाई जा सकती है जिससे बच्चे को सुई का दर्द महसूस न हो।',
      'क्लोनिडिन के बाद बच्चे को थोड़ी देर नींद आ सकती है, जो हल्के नाश्ते के बाद सामान्य हो जाती है।',
    ],
    highlightBadge: 'डे-केयर प्रक्रिया',
  },
  {
    id: 'faq-tests-2',
    category: 'tests',
    categoryLabel: 'विशिष्ट नैदानिक परीक्षण',
    question: 'बोन एज एक्स-रे (Bone Age X-Ray) क्या है और यह हमेशा बाएं हाथ व कलाई का ही क्यों लिया जाता है?',
    shortSummary: 'बाएं हाथ के एक्स-रे से हड्डियों की उम्र आंकी जाती है, जिससे पता चलता है कि बच्चे में भविष्य में बढ़ने की कितनी क्षमता शेष है।',
    detailedParagraphs: [
      'बच्चे की जन्म तिथि वाली उम्र (Chronological Age) और उसकी हड्डियों की परिपक्वता वाली उम्र (Skeletal Age) में अंतर हो सकता है। मनुष्य के बाएं हाथ और कलाई में लगभग 30 विकास केंद्र (Epiphyses) होते हैं जो बचपन से किशोरावस्था तक एक निर्धारित क्रम में सख्त (Ossify) होते हैं।',
      'अंतरराष्ट्रीय एटलस (Greulich & Pyle अथवा Tanner-Whitehouse) से तुलना करके डॉ. राकेश कुमार हड्डियों की वास्तविक आयु निकालते हैं।',
      'यदि किसी छोटे कद के बच्चे की बोन एज उसकी वास्तविक उम्र से 2 वर्ष पीछे है, तो इसका अर्थ है कि उसकी हड्डियों की ग्रोथ प्लेट्स अभी खुली हैं और उसके पास अपनी उम्र के अन्य बच्चों की तुलना में बड़े होने के अधिक वर्ष शेष हैं।',
    ],
    keyTips: [
      'हाथ-कलाई के एक्स-रे से रेडिएशन का खतरा नगण्य होता है—यह सामान्य हवाई यात्रा में मिलने वाले प्राकृतिक रेडिएशन से भी कम है।',
      'परामर्श के समय एक्स-रे की मूल प्लास्टिक शीट जरूर लाएं, केवल कागजी रिपोर्ट न लाएं।',
    ],
    highlightBadge: 'हड्डियों की परिपक्वता',
  },
  {
    id: 'faq-tests-3',
    category: 'tests',
    categoryLabel: 'विशिष्ट नैदानिक परीक्षण',
    question: 'सिनेक्टिन (Synacthen/ACTH) टेस्ट अथवा ओरल ग्लूकोज टॉलरेंस टेस्ट (OGTT) हेतु बच्चे को कैसे तैयार करें?',
    shortSummary: 'निर्देशानुसार सुबह खाली पेट आएं, सादा पानी पीने दें और बच्चे को आश्वस्त करें कि कैन्युला से बार-बार सुई नहीं लगेगी।',
    detailedParagraphs: [
      'डायनामिक परीक्षण यह जांचते हैं कि तनाव या ग्लूकोज के प्रति शरीर की ग्रंथियां कैसे प्रतिक्रिया देती हैं। सिनेक्टिन (ACTH) टेस्ट में एड्रिनल ग्रंथि के कॉर्टिसोल रिजर्व की जांच होती है—खाली पेट शुरुआती नमूना लेकर सिंथेटिक ACTH दिया जाता है और 30 व 60 मिनट पर रक्त लिया जाता है।',
      'OGTT में बच्चे के वजन अनुसार तय किया गया मीठा ग्लूकोज पानी 5 मिनट में पिलाया जाता है और अगले 2 घंटे में शर्करा व इंसुलिन का स्तर मापा जाता है।',
      'ये दोनों परीक्षण पूरी तरह सुरक्षित हैं और प्रशिक्षित नर्सिंग स्टाफ की निरंतर देखरेख में किए जाते हैं।',
    ],
    keyTips: [
      'जांच से पहले सादा पानी पीने की पूरी छूट होती है, इससे नसें आसानी से मिल जाती हैं और कैन्युला लगाना आसान होता है।',
      '2 घंटे के आराम के समय के लिए बच्चे के खिलौने, मोबाइल गेम या कहानी की किताबें साथ रखें।',
    ],
    highlightBadge: 'डायनामिक परीक्षण',
  },
  {
    id: 'faq-meds-1',
    category: 'medications',
    categoryLabel: 'दवाएं एवं दैनिक देखभाल',
    question: 'ग्रोथ हार्मोन (rhGH) पेन और कार्ट्रिज का रखरखाव कैसे करें, और कोल्ड चेन (Cold Chain) क्या है?',
    shortSummary: 'ग्रोथ हार्मोन को 2°C से 8°C के बीच फ्रिज में रखना अनिवार्य है—इसे कभी जमने (Freezer) न दें और धूप/गर्मी से बचाएं।',
    detailedParagraphs: [
      'ग्रोथ हार्मोन एक अत्यंत संवेदनशील प्रोटीन अणु है। यदि इसका तापमान 25°C से अधिक हो जाए या यह डीप-फ्रीजर में जम जाए, तो यह नष्ट हो जाता है और इसका असर समाप्त हो जाता है।',
      'अभिभावकों के लिए मुख्य नियम:',
      '• घर पर भंडारण: कार्ट्रिज और पेन को फ्रिज के बीच वाले शेल्फ में 2°C से 8°C पर रखें। फ्रिज के दरवाजे की जाली में न रखें (क्योंकि दरवाजा बार-बार खुलने से तापमान बदलता है) और फ्रीजर के पास न रखें।',
      '• यात्रा व खरीदारी: दवाई लाते समय हमेशा इंसुलेटेड कूलिंग बैग में जमी हुई जेल आइस-पैक रखें। पेन को सीधे बर्फ के संपर्क में न आने दें ताकि दवाई जमे नहीं।',
      '• लगाने का समय: यह इंजेक्शन प्रतिदिन रात को सोने से पहले दिया जाता है, क्योंकि प्राकृतिक रूप से शरीर में ग्रोथ हार्मोन रात में ही निकलता है।',
      '• स्थल बदलना (Rotation): हर रात सुई लगाने का स्थान बदलें—दाहिनी जांघ, बाईं जांघ, पेट (नाभि से 2 इंच दूर), कूल्हे या बांह—ताकि त्वचा के नीचे चर्बी की गांठें न बनें।',
    ],
    keyTips: [
      'फ्रिज के अंदर एक छोटा डिजिटल थर्मामीटर रखें ताकि 2°C से 8°C तापमान सुनिश्चित रहे।',
      'इंजेक्शन लगाने से पहले तरल देखें: यह बिल्कुल पारदर्शी व साफ होना चाहिए। यदि इसमें धुंधलापन या कण दिखें, तो उपयोग न करें।',
    ],
    highlightBadge: 'कोल्ड चेन नियम',
  },
  {
    id: 'faq-meds-2',
    category: 'medications',
    categoryLabel: 'दवाएं एवं दैनिक देखभाल',
    question: 'शिशुओं और छोटे बच्चों को लेवोथायरोक्सिन (थायरॉइड की गोली) देने का सबसे सही तरीका क्या है?',
    shortSummary: 'सुबह खाली पेट सादे पानी के साथ दें। इसके बाद कम से कम 30 से 45 मिनट तक दूध, फॉर्मूला या नाश्ता न दें।',
    detailedParagraphs: [
      'लेवोथायरोक्सिन का पेट में अवशोषण अन्य खाद्य पदार्थों और खनिजों से बहुत जल्दी प्रभावित होता है।',
      'अभिभावकों के लिए निर्देश:',
      '• बड़े बच्चे: सुबह उठते ही सादे पानी के घूंट के साथ निर्धारित माइक्रोग्राम की पूरी गोली निगलें। इसके 30 से 45 मिनट बाद ही चाय, दूध या नाश्ता लें।',
      '• छोटे शिशु: दो साफ स्टील के चम्मचों के बीच गोली को बारीक पीस लें। इस पाउडर को 5 से 10 मिली उबले व ठंडे किए गए सादे पानी अथवा मां के दूध में घोलकर ड्रॉपर या छोटी चम्मच से तुरंत पिलाएं।',
      '• सख्त मनाही: थायरॉइड की दवा को कभी भी कैल्शियम सिरप, आयरन ड्रॉप्स या सोया फॉर्मूला के साथ न मिलाएं। कैल्शियम और आयरन थायरॉइड हार्मोन को बांध देते हैं जिससे दवा शरीर में सोखी नहीं जाती।',
    ],
    keyTips: [
      'यदि किसी सुबह खुराक छूट जाए, तो याद आते ही दिन में (2 घंटे का खाली पेट रखकर) दें। अगले दिन डॉक्टर से पूछे बिना दोहरी गोली न दें।',
      'बढ़ते शिशुओं में हर 2 से 3 माह में रक्त जांच कराएं क्योंकि वजन बढ़ने के साथ खुराक बढ़ानी पड़ती है।',
    ],
    highlightBadge: 'दवा सेवन नियम',
  },
  {
    id: 'faq-meds-3',
    category: 'medications',
    categoryLabel: 'दवाएं एवं दैनिक देखभाल',
    question: 'क्या डॉ. राकेश कुमार स्कूल, खेलकूद और बोर्ड परीक्षाओं के लिए मेडिकल प्रमाणपत्र व छूट पत्र प्रदान करते हैं?',
    shortSummary: 'हां, सीबीएसई, आईसीएसई एवं राज्य बोर्ड परीक्षाओं तथा स्कूल खेलकूद के लिए औपचारिक मेडिकल प्रमाणपत्र दिए जाते हैं।',
    detailedParagraphs: [
      'टाइप 1 डायबिटीज़, एड्रिनल या विकास संबंधी विकारों से पीड़ित बच्चों को सामान्य बच्चों की तरह खेलकूद और परीक्षाओं में भाग लेने का पूरा अधिकार है।',
      'डॉ. राकेश कुमार द्वारा अधिकृत चिकित्सीय दस्तावेज दिए जाते हैं:',
      '• स्कूल हेल्थ केयर प्लान: कक्षा में ग्लूकोमीटर, कंटीन्यूअस ग्लूकोज सेंसर (CGM), ग्लूकोज कैंडी, पानी की बोतल और इमरजेंसी किट रखने की अनुमति।',
      '• बोर्ड परीक्षा छूट पत्र: सीबीएसई (CBSE) व आईसीएसई के दिशा-निर्देशों अनुसार परीक्षा हॉल में शुगर नापने, बीच में ग्लूकोज लेने और अतिरिक्त समय का अधिकृत पत्र।',
      '• खेलकूद अनापत्ति: फुटबॉल, तैराकी व एथलेटिक्स में भाग लेने हेतु व्यायाम से पूर्व कार्बोहाइड्रेट प्रबंधन की स्पष्ट सलाह।',
    ],
    keyTips: [
      'बोर्ड परीक्षा प्रमाणपत्र हेतु स्कूल की अंतिम तिथि से कम से कम 6 से 8 सप्ताह पूर्व संपर्क करें।',
      'नवीनतम HbA1c रिपोर्ट और उपचार का पर्चा साथ रखें ताकि पत्र में अद्यतन विवरण दर्ज हो सके।',
    ],
    highlightBadge: 'स्कूल दस्तावेज',
  },
  {
    id: 'faq-tele-1',
    category: 'teleconsult',
    categoryLabel: 'दूरदराज के मरीज व टेली-केयर',
    question: 'हम पंजाब, हरियाणा, हिमाचल, जम्मू-कश्मीर या राजस्थान में रहते हैं। क्या फॉलो-अप टेली-कंसल्टेंसी से संभव है?',
    shortSummary: 'हां, स्थिर स्थिति वाले पुराने मरीज हमारे सुरक्षित लाइव वीडियो पोर्टल द्वारा फॉलो-अप समीक्षा करा सकते हैं।',
    detailedParagraphs: [
      'अनेक परिवार सैकड़ों किलोमीटर दूर से पीजीआई चंडीगढ़ आते हैं। एडवांस्ड पीडियाट्रिक्स सेंटर में प्रारंभिक जांच, निदान और दवा शुरू होने के बाद, स्थिर बच्चों का फॉलो-अप इन-पर्सन और टेलीकंसल्टेशन के माध्यम से बारी-बारी से किया जा सकता है।',
      'ऑनलाइन फॉलो-अप की प्रक्रिया:',
      '1. अपने स्थानीय बाल रोग विशेषज्ञ से दीवार के स्टेडियोमीटर पर बच्चे की सही ऊंचाई और वजन का माप कराएं।',
      '2. स्थानीय मान्यता प्राप्त लैब से सुझाई गई रक्त जांच (जैसे TSH, HbA1c, या इलेक्ट्रोलाइट्स) कराएं।',
      '3. हमारे लाइव टेली-कंसल्टेंसी पोर्टल पर समय चुनें और स्थानीय रिपोर्ट व ऊंचाई अपलोड करें।',
      '4. डॉ. राकेश कुमार वीडियो पर बच्चे की समीक्षा करेंगे और डिजिटल सलाह पर्ची तैयार करेंगे।',
    ],
    keyTips: [
      'वर्ष में कम से कम एक बार पीजीआई आकर संपूर्ण शारीरिक व प्यूबर्टी जांच कराना अनिवार्य रहता है।',
      'वीडियो कॉल के दौरान बच्चे का उपस्थित रहना आवश्यक है।',
    ],
    highlightBadge: 'क्षेत्रीय सुविधा',
    actionCta: {
      label: 'लाइव टेली-कंसल्टेंसी पोर्टल खोलें',
      actionType: 'live-consult',
    },
  },
  {
    id: 'faq-tele-2',
    category: 'teleconsult',
    categoryLabel: 'दूरदराज के मरीज व टेली-केयर',
    question: 'माता-पिता को नियमित ओपीडी के बजाय सीधे इमरजेंसी सेवा में कब जाना चाहिए?',
    shortSummary: 'गंभीर शुगर गिरावट, डायबिटिक कीटोएसिडोसिस में लगातार उल्टी या एड्रिनल क्राइसिस में तुरंत एपीसी इमरजेंसी जाएं।',
    detailedParagraphs: [
      'बाल हार्मोनल विकारों में कुछ ऐसी आपात स्थितियां होती हैं जिनमें ओपीडी या टेलीकंसल्टेशन का इंतजार नहीं किया जा सकता।',
      'यदि बच्चे में निम्नलिखित लक्षण दिखें तो तुरंत 24-घंटे खुली रहने वाली एपीसी (APC) इमरजेंसी पीजीआई चंडीगढ़ अथवा निकटतम अस्पताल जाएं:',
      '• टाइप 1 डायबिटीज़: लगातार उल्टी होना, पानी न पचना, तेज गहरी सांसें चलना (Kussmaul breathing), सांस से मीठी गंध आना या पेशाब में उच्च कीटोन्स—यह डायबिटिक कीटोएसिडोसिस (DKA) है।',
      '• गंभीर हाइपोग्लाइसीमिया: बच्चे का बेहोश होना, अत्यधिक भ्रमित होना, निगलने में असमर्थ होना अथवा दौरे पड़ना जो मीठा देने पर तुरंत ठीक न हों।',
      '• कंजेनिटल एड्रिनल हाइपरप्लासिया (CAH): तेज बुखार, उल्टी-दस्त के साथ अत्यधिक सुस्ती या कमजोरी (एड्रिनल क्राइसिस)—तुरंत जांघ में हाइड्रोकोर्टिसोन इंजेक्शन दें और इमरजेंसी पहुंचें।',
    ],
    keyTips: [
      'डॉ. राकेश कुमार की इमरजेंसी हाइपो गाइड और बीमारी के दिनों के नियम हमेशा मोबाइल में सहेज कर रखें।',
      'परिवार के कम से कम दो सदस्यों को इमरजेंसी इंजेक्शन लगाना आना चाहिए।',
    ],
    highlightBadge: 'आपातकालीन चेतावनी',
    actionCta: {
      label: 'हाइपो इमरजेंसी गाइड पढ़ें',
      actionType: 'emergency-guide',
    },
  },
];

export const getParentFaqs = (lang: Language): ParentFAQItem[] => {
  return lang === 'hi' ? PARENT_FAQS_HI : PARENT_FAQS_EN;
};

export const getAppointmentChecklist = (lang: Language): ChecklistItem[] => {
  return lang === 'hi' ? APPOINTMENT_CHECKLIST_HI : APPOINTMENT_CHECKLIST_EN;
};
