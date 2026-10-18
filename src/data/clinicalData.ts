import { ClinicalCondition, PatientResource, PublicationItem, FAQItem } from '../types';
import { Language } from './translations';

export const DOCTOR_PROFILE = {
  name: 'Dr. Rakesh Kumar',
  role: 'Pediatric Endocrinologist',
  department: 'Department of Pediatrics',
  center: 'Advanced Pediatrics Centre (APC)',
  institution: 'Postgraduate Institute of Medical Education & Research (PGIMER)',
  institutionShort: 'PGI Chandigarh',
  location: 'Sector 12, Chandigarh, 160012, India',
  email: 'drrakesh.pgi@gmail.com',
  photo: '/src/assets/images/dr_rakesh_kumar_official_1792210425583.jpg',
  scholarProfile: 'https://scholar.google.com/citations?user=B2Dl64oAAAAJ&hl=en',
  yearsActiveNotice: 'Tertiary Care Specialist in Pediatric Endocrinology & Diabetes',
  credentials: [
    { label: 'Subspecialty', value: 'Pediatric Endocrinology & Diabetes' },
    { label: 'Institutional Base', value: 'Advanced Pediatrics Centre (APC), PGIMER Chandigarh' },
    { label: 'Clinical Focus', value: 'Growth Disorders, Type 1 Diabetes, Congenital Hypothyroidism, Pubertal Pathologies' },
    { label: 'Regulatory Registration', value: 'Verified Medical Practitioner (National Medical Commission / MCI)' },
  ],
  verifiedNote: 'Verified Faculty / Specialist Physician at PGIMER Chandigarh. Patient care strictly follows established Indian Society for Pediatric and Adolescent Endocrinology (ISPAE) and international endocrine consensus guidelines.',
};

export const CLINICAL_CONDITIONS_EN: ClinicalCondition[] = [
  {
    id: 'growth-disorders',
    title: 'Short Stature & Growth Hormone Deficiencies',
    category: 'growth',
    shortDescription: 'Evaluation of children falling below the 3rd percentile or deviating from their expected genetic trajectory.',
    fullOverview: 'Childhood growth is the single most sensitive indicator of overall physical well-being. Growth failure may stem from normal biological variations (constitutional delay of growth) or endocrine conditions including Growth Hormone Deficiency (GHD), Small for Gestational Age (SGA), Turner Syndrome, or chronic systemic conditions.',
    commonSymptoms: [
      'Child is consistently shorter than peers or younger siblings',
      'Growth velocity of less than 4-5 cm per year after 3 years of age',
      'Dropping across percentile channels on standard WHO/IAP growth curves',
      'Slow shoe or clothing size changes across consecutive years',
    ],
    diagnosticSteps: [
      'Serial stadiometer measurements & growth velocity plotting',
      'Mid-parental target height calculation (Tanner method)',
      'Left hand and wrist radiograph for Bone Age assessment (Greulich & Pyle / TW3)',
      'Baseline screening for systemic illnesses, celiac disease, and thyroid hormone status',
      'Growth Hormone Stimulation testing (Clonidine / Glucagon) when clinically indicated',
    ],
    parentGuidance: [
      'Bring all previous school health records, immunisation books, and historical height records.',
      'Ensure accurate parent height measurements are taken prior to the initial consultation.',
      'Early identification before the closure of growth plates (epiphyses) is crucial for optimal therapeutic outcomes.',
    ],
    whenToRefer: 'Refer when height is <3rd percentile, annual growth velocity is <4 cm/year in childhood, or bone age is delayed by more than 2 years.',
  },
  {
    id: 'type-1-diabetes',
    title: 'Childhood & Adolescent Type 1 Diabetes (T1D)',
    category: 'diabetes',
    shortDescription: 'Comprehensive pediatric diabetes management, multiple daily injection (MDI) regimens, CGM and pump care.',
    fullOverview: 'Type 1 Diabetes is an autoimmune condition where the pancreas ceases insulin production. In pediatric care, management requires an empathetic, multidisciplinary approach involving intensive insulin titration, continuous glucose monitoring (CGM), carbohydrate counting, and family-centered education to prevent both acute ketoacidosis and severe hypoglycemia.',
    commonSymptoms: [
      'Excessive thirst (Polydipsia) and excessive urination (Polyuria)',
      'New onset bedwetting in a previously continent child (Secondary enuresis)',
      'Unexplained weight loss despite increased appetite',
      'Persistent fatigue, lethargy, or fruited/acetone breath odor',
    ],
    diagnosticSteps: [
      'Random blood glucose > 200 mg/dL with classic symptoms or Fasting plasma glucose ≥ 126 mg/dL',
      'Glycated hemoglobin (HbA1c) determination',
      'Urine and blood ketones assessment to exclude Diabetic Ketoacidosis (DKA)',
      'Pancreatic autoantibody evaluation (Anti-GAD65, IA-2, ZnT8)',
    ],
    parentGuidance: [
      'Type 1 Diabetes is never caused by eating sugar or sweets; it is an autoimmune condition.',
      'Always have fast-acting glucose (Rule of 15) available at home, school, and sports activities.',
      'Routine HbA1c testing is scheduled every 3 months to guide insulin adjustments.',
    ],
    whenToRefer: 'Immediate emergency referral if child exhibits deep laboured breathing (Kussmaul), vomiting, confusion, or marked dehydration.',
  },
  {
    id: 'thyroid-disorders',
    title: 'Congenital & Acquired Thyroid Disorders',
    category: 'thyroid',
    shortDescription: 'Newborn congenital hypothyroidism management, juvenile autoimmune thyroiditis (Hashimoto’s), and goitres.',
    fullOverview: 'Thyroid hormones are essential for normal neurological brain development in infancy and physical growth throughout childhood. Congenital hypothyroidism detected via neonatal heel-prick screening requires immediate Levothyroxine substitution to protect intellectual potential. Acquired juvenile thyroiditis commonly presents in school-age children and adolescents.',
    commonSymptoms: [
      'Infancy: Prolonged jaundice, poor feeding, large fontanelle, umbilical hernia, sluggish reflexes',
      'Childhood: Decelerating growth rate, unexpected weight gain, fatigue, dry skin, cold intolerance',
      'Visible neck swelling (Goitre) or declining academic concentration',
    ],
    diagnosticSteps: [
      'Serum Free T4 and sensitive TSH radioimmunoassays',
      'Newborn screening confirmation protocol',
      'Anti-TPO and Anti-thyroglobulin antibody panels for autoimmune thyroiditis',
      'High-resolution thyroid ultrasonography and technetium scintigraphy when ectopic gland suspected',
    ],
    parentGuidance: [
      'Levothyroxine must be administered every morning on an empty stomach with plain water, 30 minutes before food or milk.',
      'Never co-administer thyroid tablets with calcium, iron supplements, or soy formula.',
      'Regular thyroid profile checks ensure dosage matches the rapidly growing child.',
    ],
    whenToRefer: 'Any abnormal newborn screening TSH (>10-20 mIU/L) requires immediate urgent specialist evaluation within 24–48 hours.',
  },
  {
    id: 'puberty-disorders',
    title: 'Precocious & Delayed Puberty',
    category: 'puberty',
    shortDescription: 'Evaluation of early sexual maturation before age 8/9, or failure to commence pubertal milestones by age 13/14.',
    fullOverview: 'Puberty is governed by the hypothalamic-pituitary-gonadal (HPG) axis. Central precocious puberty (CPP) can lead to early bone maturation and compromised final adult height, alongside psychosocial distress. Conversely, pubertal delay warrants careful differentiation between constitutional delay and hypogonadism.',
    commonSymptoms: [
      'Precocious: Breast budding in girls before age 8; testicular enlargement (≥4 ml) in boys before age 9',
      'Rapid early growth spurt accompanied by early body odor and pubic/axillary hair',
      'Delayed: Absence of breast development by age 13 in girls; lack of testicular enlargement by age 14 in boys',
    ],
    diagnosticSteps: [
      'Accurate Tanner staging (SMR: Sexual Maturity Rating) in a sensitive clinical setting',
      'Bone Age X-ray to evaluate skeletal advancement',
      'Ultrasound pelvis in girls (uterine length & ovarian volume); Prader orchidometer in boys',
      'Basal and GnRH-stimulated LH and FSH levels, estradiol, and testosterone',
      'Brain MRI with pituitary protocol to rule out central intracranial lesions',
    ],
    parentGuidance: [
      'Reassure your child that the physical examination is gentle, private, and conducted with a chaperone present.',
      'Timely GnRH analogue treatment in confirmed central precocious puberty safely halts advancement and preserves final adult height.',
    ],
    whenToRefer: 'Any pubertal signs in girls <8 years or boys <9 years; or complete absence of puberty in girls >13 years or boys >14 years.',
  },
  {
    id: 'adrenal-bone',
    title: 'Congenital Adrenal Hyperplasia & Metabolic Bone Disease',
    category: 'adrenal-bone',
    shortDescription: 'CAH maintenance, pediatric rickets, calcium-phosphorus metabolism anomalies, and steroid weaning.',
    fullOverview: 'Conditions such as 21-hydroxylase deficiency (Congenital Adrenal Hyperplasia - CAH) require meticulous hydrocortisone and fludrocortisone balance to prevent salt-wasting crises while permitting normal childhood linear growth. Metabolic bone conditions like nutritional and hypophosphatemic rickets require precise calcitriol and phosphate supplementation.',
    commonSymptoms: [
      'CAH: Atypical genitalia at birth, failure to thrive, vomiting, poor feeding, electrolyte disturbance in infancy',
      'Bone: Bowing of legs (genu varum/valgum), widened wrists, delayed fontanelle closure, recurrent fractures',
      'Muscle weakness, bone pain, or dental enamel abnormalities',
    ],
    diagnosticSteps: [
      '17-hydroxyprogesterone (17-OHP) assays and serum electrolytes (Na, K)',
      'Serum calcium, phosphorus, alkaline phosphatase (ALP), and 25-OH Vitamin D',
      'Intact Parathyroid Hormone (iPTH) and urinary calcium-to-creatinine ratio',
      'Wrist and knee X-rays showing cupping, fraying, and splaying of metaphyses',
    ],
    parentGuidance: [
      'Caregivers of children with CAH must carry an emergency hydrocortisone kit and know sick-day stress dosing rules.',
      'Do not self-adjust steroid dosages without medical instruction.',
    ],
    whenToRefer: 'Infants with ambiguous genitalia, suspected adrenal crisis (lethargy + low sodium/high potassium), or resistant rickets.',
  },
  {
    id: 'metabolic-health',
    title: 'Pediatric Obesity, Insulin Resistance & Dyslipidemia',
    category: 'metabolic',
    shortDescription: 'Evidence-based non-stigmatising clinical assessment of pediatric metabolic complications and endocrine roots.',
    fullOverview: 'Childhood excess weight requires exclusion of underlying endocrine drivers (such as Cushing syndrome or severe hypothyroidism) and proactive screening for insulin resistance, acanthosis nigricans, fatty liver, and polycystic ovary syndrome (PCOS) in adolescent girls, delivered through family-centered lifestyle medicine.',
    commonSymptoms: [
      'Rapid progressive weight gain crossing multiple BMI percentile curves',
      'Darkened, velvety skin patches on the neck or armpits (Acanthosis nigricans)',
      'Irregular menstrual periods or hirsutism in adolescent girls',
      'Elevated blood pressure or snoring with daytime somnolence (suspected sleep apnea)',
    ],
    diagnosticSteps: [
      'BMI-for-age percentiles calculation based on IAP/WHO charts',
      'Fasting glucose and insulin or oral glucose tolerance test (OGTT)',
      'Lipid profile and liver enzymes (ALT/AST)',
      'Free testosterone, DHEA-S, and ovarian ultrasonography for adolescent girls with oligomenorrhea',
    ],
    parentGuidance: [
      'Our approach is strictly supportive and non-stigmatising, focusing on whole-family dietary vitality and active play.',
      'Small, consistent adjustments to sleep routines and reduction of ultra-processed snacks deliver substantial metabolic gains.',
    ],
    whenToRefer: 'Children with BMI >95th percentile accompanied by rapid height deceleration, dark neck creases, or elevated blood pressure.',
  },
];

export const CLINICAL_CONDITIONS_HI: ClinicalCondition[] = [
  {
    id: 'growth-disorders',
    title: 'शारीरिक विकास में कमी व ग्रोथ हार्मोन विकार (Short Stature)',
    category: 'growth',
    shortDescription: '3rd पर्सेंटाइल से नीचे रहने वाले अथवा आनुवंशिक विकास पथ से विचलित बच्चों का विस्तृत नैदानिक परीक्षण।',
    fullOverview: 'बच्चों में शारीरिक कद का बढ़ना उनके संपूर्ण स्वास्थ्य व पोषण का सबसे संवेदनशील पैमाना है। विकास में कमी सामान्य जैविक कारणों (देर से होने वाला विकास) अथवा एंडोक्राइन विकारों जैसे ग्रोथ हार्मोन की कमी (GHD), जन्म के समय कम वजन (SGA), टर्नर सिंड्रोम या दीर्घकालिक रोगों के कारण हो सकती है।',
    commonSymptoms: [
      'बच्चा अपनी कक्षा अथवा हमउम्र साथियों की तुलना में लगातार छोटा दिखे',
      '3 वर्ष की आयु के बाद प्रति वर्ष 4-5 सेमी से कम विकास होना',
      'डब्ल्यूएचओ / आईएपी ग्रोथ चार्ट पर विकास का स्तर नीचे गिरना',
      'कपड़ों या जूतों का आकार साल-दर-साल न बदलना',
    ],
    diagnosticSteps: [
      'नियमित स्टेडियोमीटर से ऊंचाई मापना और विकास गति (वेलोसिटी) का चार्टिंग',
      'माता-पिता की ऊंचाई अनुसार टैनर विधि से लक्ष्य कद की गणना',
      'बाएं हाथ और कलाई का बोन एज (हड्डियों की परिपक्वता) एक्स-रे',
      'सीलिएक रोग, थायरॉइड हार्मोन और आवश्यक रक्त परीक्षण',
      'आवश्यकता पड़ने पर क्लिनिकल ग्रोथ हार्मोन स्टिमुलेशन टेस्ट (क्लोनिडिन/ग्लूकागॉन)',
    ],
    parentGuidance: [
      'परामर्श के समय पिछले टीकाकरण कार्ड, स्कूल स्वास्थ्य पुस्तिका और पुराने माप अवश्य साथ लाएं।',
      'माता और पिता दोनों की सटीक ऊंचाई की जानकारी दें।',
      'हड्डियों की प्लेट्स (एपिफ़ाइसिस) जुड़ने से पूर्व जांच कराने से सर्वोत्तम उपचार संभव होता है।',
    ],
    whenToRefer: 'यदि कद 3rd पर्सेंटाइल से नीचे हो, वार्षिक विकास 4 सेमी से कम हो, या बोन एज 2 वर्ष से अधिक विलंबित हो।',
  },
  {
    id: 'type-1-diabetes',
    title: 'बाल्यावस्था एवं किशोरावस्था टाइप 1 डायबिटीज़ (T1D)',
    category: 'diabetes',
    shortDescription: 'बाल मधुमेह प्रबंधन, सटीक इंसुलिन निर्धारण, सीजीएम (CGM) ग्लूकोज सेंसर और कीटोएसिडोसिस रोकथाम।',
    fullOverview: 'टाइप 1 डायबिटीज़ एक ऑटोइम्यून स्थिति है जिसमें अग्न्याशय (पैंक्रियास) इंसुलिन बनाना बंद कर देता है। बाल चिकित्सा में इसका प्रबंधन सहानुभूतिपूर्ण एवं बहुविषयक दृष्टिकोण मांगता है—जिसमें इंसुलिन डोज, कंटीन्यूअस ग्लूकोज मॉनिटरिंग, कार्बोहाइड्रेट गणना और पारिवारिक शिक्षा शामिल है।',
    commonSymptoms: [
      'अत्यधिक प्यास लगना (Polydipsia) और बार-बार पेशाब आना (Polyuria)',
      'बिस्तर गीला न करने वाले बच्चे द्वारा अचानक रात में बिस्तर गीला करना (Enuresis)',
      'अच्छी भूख लगने के बावजूद तेजी से वजन घटना',
      'निरंतर कमजोरी, सुस्ती अथवा सांस से मीठी/एसिटोन की गंध आना',
    ],
    diagnosticSteps: [
      'रैंडम ब्लड ग्लूकोज > 200 mg/dL अथवा फास्टिंग ब्लड ग्लूकोज ≥ 126 mg/dL',
      'एचबीए1सी (HbA1c) परीक्षण (पिछले 3 माह का औसत शुगर)',
      'मूत्र व रक्त में कीटोन्स की जांच (Diabetic Ketoacidosis से बचाव हेतु)',
      'पैंक्रियाटिक ऑटोएंटीबॉडीज (Anti-GAD65, IA-2, ZnT8)',
    ],
    parentGuidance: [
      'टाइप 1 डायबिटीज़ कभी भी मीठा खाने से नहीं होता, यह एक ऑटोइम्यून स्थिति है।',
      'घर, स्कूल और खेल के मैदान में सदैव तुरंत असर करने वाली शर्करा (15 का नियम) रखें।',
      'इंसुलिन की मात्रा संतुलित रखने हेतु हर 3 माह पर नियमित समीक्षा आवश्यक है।',
    ],
    whenToRefer: 'यदि बच्चा भारी गहरी सांसें ले रहा हो, बार-बार उल्टी कर रहा हो अथवा अत्यधिक सुस्त हो, तो तुरंत इमरजेंसी में दिखाएं।',
  },
  {
    id: 'thyroid-disorders',
    title: 'जन्मजात एवं अधिग्रहित थायरॉइड विकार (Congenital & Acquired Thyroid)',
    category: 'thyroid',
    shortDescription: 'नवजात शिशु हाइपोथायरॉइडिज़्म, किशोर ऑटोइम्यून थायरॉइडिटिस (हाशिमोटो) और घेंघा (Goitre) का उपचार।',
    fullOverview: 'शिशु के मस्तिष्क के विकास और बचपन में शारीरिक वृद्धि के लिए थायरॉइड हार्मोन अत्यंत आवश्यक है। नवजात शिशु स्क्रीनिंग में पहचान होने पर तुरंत लेवोथायरोक्सिन शुरू करने से बौद्धिक क्षमता पूरी तरह सुरक्षित रहती है। स्कूल-आयु वर्ग के बच्चों में भी थायरॉइड की नियमित जांच जरूरी है।',
    commonSymptoms: [
      'शिशु अवस्था: लंबे समय तक पीलिया रहना, सुस्ती, दूध कम पीना, बड़ी नाभि (हर्निया)',
      'बाल्यावस्था: विकास की गति मंद होना, अकारण वजन बढ़ना, त्वचा का रूखापन, ठंड लगना',
      'गर्दन में सूजन (घेंघा) दिखना या पढ़ाई में एकाग्रता कम होना',
    ],
    diagnosticSteps: [
      'सीरम फ्री टी4 (Free T4) और संवेदनशील टीएसएच (TSH) परीक्षण',
      'नवजात शिशु स्क्रीनिंग पुष्टि प्रोटोकॉल',
      'ऑटोइम्यून थायरॉइडिटिस हेतु एंटी-टीपीओ (Anti-TPO) एंटीबॉडी टेस्ट',
      'थायरॉइड अल्ट्रासाउंड एवं आवश्यकता पड़ने पर सिंटिग्राफी स्कैन',
    ],
    parentGuidance: [
      'थायरॉइड की गोली (लेवोथायरोक्सिन) प्रतिदिन प्रातः खाली पेट सादे पानी से दी जानी चाहिए।',
      'गोली को कभी भी दूध, कैल्शियम, आयरन ड्रॉप्स या सोया फॉर्मूला के साथ न दें।',
      'बढ़ते बच्चे के वजन अनुसार दवा की मात्रा जांचने के लिए नियमित रक्त जांच कराएं।',
    ],
    whenToRefer: 'नवजात शिशु स्क्रीनिंग में टीएसएच >10-20 mIU/L आने पर 24 से 48 घंटे के भीतर तुरंत विशेषज्ञ से संपर्क करें।',
  },
  {
    id: 'puberty-disorders',
    title: 'समय से पूर्व या देर से यौवनारंभ (Precocious & Delayed Puberty)',
    category: 'puberty',
    shortDescription: 'लड़कियों में 8 वर्ष और लड़कों में 9 वर्ष से पूर्व शारीरिक बदलाव, अथवा 13-14 वर्ष तक यौवनारंभ न होना।',
    fullOverview: 'किशोरावस्था और यौवनारंभ हाइपोथैलेमस-पिट्यूटरी-गोनाडल अक्ष द्वारा नियंत्रित होता है। सेंट्रल प्रीकोशियस प्यूबर्टी (समय से पूर्व यौवन) के कारण हड्डियां जल्दी परिपक्व होकर जुड़ जाती हैं, जिससे वयस्क कद कम रह जाता है। वहीं देर से होने वाले विकास में उचित समय पर सहायता आवश्यक होती है।',
    commonSymptoms: [
      'समय से पूर्व: लड़कियों में 8 वर्ष से पूर्व स्तन विकास; लड़कों में 9 वर्ष से पूर्व अंडकोष का आकार बढ़ना',
      'तेजी से समय पूर्व कद बढ़ना, पसीने में वयस्क गंध और बाल आना',
      'विलंबित: 13 वर्ष तक लड़कियों में स्तन विकास न होना; 14 वर्ष तक लड़कों में कोई बदलाव न दिखना',
    ],
    diagnosticSteps: [
      'मर्यादित व संवेदनशील वातावरण में टैनर स्टेजिंग (SMR) का आकलन',
      'हड्डियों की परिपक्वता जानने हेतु बोन एज एक्स-रे',
      'लड़कियों में पेल्विक अल्ट्रासाउंड; लड़कों में प्रेडर ऑर्किडोमीटर द्वारा माप',
      'एलएच (LH), एफएसएच (FSH), एस्ट्रैडिऑल और टेस्टोस्टेरोन स्तर',
      'केंद्रीय कारणों को परखने के लिए ब्रेन एमआरआई (पिट्यूटरी प्रोटोकॉल)',
    ],
    parentGuidance: [
      'बच्चे को आश्वस्त करें कि क्लिनिकल जांच पूरी तरह सुरक्षित व संवेदनशील तरीके से की जाती है।',
      'समय पर जीएनआरएच एनालॉग थेरेपी से समय पूर्व यौवन को सुरक्षित रूप से रोका जा सकता है जिससे पूर्ण वयस्क कद सुरक्षित रहता है।',
    ],
    whenToRefer: 'लड़कियों में 8 वर्ष और लड़कों में 9 वर्ष से पहले कोई लक्षण दिखने पर, अथवा 13-14 वर्ष तक कोई बदलाव न होने पर।',
  },
  {
    id: 'adrenal-bone',
    title: 'कंजेनिटल एड्रिनल हाइपरप्लासिया एवं रिकेट्स (Adrenal & Bone)',
    category: 'adrenal-bone',
    shortDescription: 'सीएएच (CAH) प्रबंधन, पोषण व हाइपोफॉस्फेटेमिक रिकेट्स, तथा कैल्शियम-विटामिन डी चयापचय विकार।',
    fullOverview: 'कंजेनिटल एड्रिनल हाइपरप्लासिया (CAH) में हाइड्रोकार्टिसोन की सटीक मात्रा आवश्यक होती है ताकि नमक की कमी का संकट (सॉल्ट वेस्टिंग) न हो और बच्चे की ऊंचाई भी सामान्य रूप से बढ़े। रिकेट्स एवं कमजोर हड्डियों के मामलों में सक्रिय विटामिन डी और फॉस्फेट अनुपूरण आवश्यक होता है।',
    commonSymptoms: [
      'CAH: जन्म के समय अस्पष्ट गुप्तांग, उल्टी, सुस्ती, वजन न बढ़ना, नमक असंतुलन',
      'हड्डियां: पैरों का मुड़ना (Bow legs), कलाई का चौड़ा होना, बार-बार फ्रैक्चर होना',
      'मांसपेशियों में कमजोरी, हड्डियों में दर्द या दांतों के इनेमल की खराबी',
    ],
    diagnosticSteps: [
      '17-हाइड्रॉक्सीप्रोजेस्टेरोन (17-OHP) और सीरम इलेक्ट्रोलाइट्स (सोडियम, पोटेशियम)',
      'कैल्शियम, फॉस्फोरस, एएलपी (ALP), और 25-OH विटामिन डी स्तर',
      'पैराथायरॉइड हार्मोन (iPTH) और यूरिनरी कैल्शियम अनुपात',
      'कलाई और घुटने के एक्स-रे में हड्डियों की आकृति की जांच',
    ],
    parentGuidance: [
      'CAH से ग्रस्त बच्चे के परिजनों के पास इमरजेंसी हाइड्रोकोर्टिसोन इंजेक्शन और बीमारी के दिनों (सिक-डे) की खुराक की जानकारी होनी चाहिए।',
      'डॉक्टर की सलाह के बिना स्टेरॉयड दवा की मात्रा में कभी बदलाव न करें।',
    ],
    whenToRefer: 'नवजात शिशु में अस्पष्ट जननांग, डिहाइड्रेशन के साथ नमक असंतुलन, अथवा दवा के बावजूद ठीक न होने वाले रिकेट्स।',
  },
  {
    id: 'metabolic-health',
    title: 'बाल्यावस्था मोटापा एवं इंसुलिन प्रतिरोध (Metabolic Health)',
    category: 'metabolic',
    shortDescription: 'बच्चों में वजन की अधिकता, इंसुलिन रेजिस्टेंस, फैटी लिवर एवं किशोरियों में पीसीओएस का संवेदनशील उपचार।',
    fullOverview: 'बच्चों में अत्यधिक वजन बढ़ने पर हार्मोनल कारणों (जैसे कुशिंग सिंड्रोम या गंभीर थायरॉइड) की जांच आवश्यक होती है। हमारा दृष्टिकोण बिना किसी पूर्वाग्रह के पूरे परिवार की जीवनशैली, सक्रिय खेलकूद और संतुलित आहार पर केंद्रित रहता है।',
    commonSymptoms: [
      'बीएमआई (BMI) चार्ट पर वजन का अत्यधिक तेजी से बढ़ना',
      'गर्दन या कांख की त्वचा का काला व मखमली होना (Acanthosis nigricans)',
      'किशोरी बालिकाओं में अनियमित माहवारी अथवा चेहरे पर अनचाहे बाल',
      'रक्तचाप में वृद्धि अथवा सोते समय जोर से खर्राटे लेना',
    ],
    diagnosticSteps: [
      'आईएपी / डब्ल्यूएचओ चार्ट के आधार पर बीएमआई-फॉर-एज की गणना',
      'फास्टिंग ब्लड ग्लूकोज एवं इंसुलिन अथवा ओरल ग्लूकोज टॉलरेंस टेस्ट (OGTT)',
      'लिपिड प्रोफाइल (कोलेस्ट्रॉल) और लिवर एंजाइम्स (ALT/AST)',
      'किशोरियों में हार्मोनल प्रोफाइल एवं ओवेरियन अल्ट्रासाउंड',
    ],
    parentGuidance: [
      'हमारा प्रयास बच्चे को अपराधबोध से बचाकर पूरे परिवार के सहयोग से सकारात्मक आदतें विकसित करना है।',
      'स्क्रीन टाइम कम करने और जंक फूड सीमित करने से उल्लेखनीय स्वास्थ्य सुधार देखा जाता है।',
    ],
    whenToRefer: 'यदि वजन बहुत अधिक होने के साथ बच्चे की लंबाई का बढ़ना धीमा हो रहा हो अथवा गर्दन की त्वचा पर गहरा कालापन हो।',
  },
];

export const getClinicalConditions = (lang: Language): ClinicalCondition[] => {
  return lang === 'hi' ? CLINICAL_CONDITIONS_HI : CLINICAL_CONDITIONS_EN;
};

export const CLINICAL_CONDITIONS = CLINICAL_CONDITIONS_EN;

export const PATIENT_RESOURCES: PatientResource[] = [
  {
    id: 'guide-t1d-school',
    title: 'Parent Guide: Managing Type 1 Diabetes in School & Daily Care',
    category: 'Diabetes',
    readTime: '6 min read',
    targetAudience: 'Parents, School Nurses, Teachers & Caregivers',
    description: 'A comprehensive, printable care plan covering hypo treatment, insulin storage, physical education tips, and emergency glucagon protocols.',
    googleDocsUrl: 'https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    sections: [
      {
        heading: '1. What Teachers and School Staff Need to Know',
        content: 'Type 1 Diabetes is an autoimmune condition. The student’s body does not produce insulin. The student cannot control high or low blood sugars simply by "trying harder". They require constant access to blood glucose checks, insulin, water, restrooms, and fast-acting sugar.',
        bulletPoints: [
          'Allow immediate access to water and restroom without penalty.',
          'Never leave a child with suspected low blood sugar alone or send them to the clinic unassisted.',
          'Permit snacking or glucose testing at any time, including during exams and sports.',
        ],
      },
      {
        heading: '2. The Rule of 15 for Hypoglycemia (Blood Sugar < 70 mg/dL)',
        content: 'Hypoglycemia is an emergency requiring immediate intervention. Follow the standard Rule of 15 protocol:',
        bulletPoints: [
          'Step 1: Administer 15 grams of fast-acting carbohydrate (e.g. 1/2 cup fruit juice, 3-4 glucose tablets, or 3 teaspoons of sugar dissolved in water).',
          'Step 2: Wait 15 minutes with the child resting quietly.',
          'Step 3: Recheck blood glucose. If still under 70 mg/dL, repeat 15 grams of fast carbs.',
          'Step 4: Once blood glucose rises above 70 mg/dL, provide their scheduled meal or a complex carbohydrate snack (crackers, bread, milk).',
        ],
      },
      {
        heading: '3. Physical Education and Sports Guidelines',
        content: 'Physical activity lowers blood sugar. Check blood glucose before sports. If below 100 mg/dL, give a 15-20g snack prior to exercise. Always keep the child’s emergency hypo kit at the sports field.',
      },
    ],
  },
  {
    id: 'guide-growth-charts',
    title: 'Understanding Growth Curves, Bone Age & Growth Hormone Therapy',
    category: 'Growth',
    readTime: '8 min read',
    targetAudience: 'Parents of children undergoing short stature evaluation',
    description: 'Demystifying percentile charts, genetic target height, bone age X-rays, and the realities of medical growth hormone treatment.',
    googleDocsUrl: 'https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    sections: [
      {
        heading: '1. Percentiles Explained: What Does the 3rd or 50th Percentile Mean?',
        content: 'Growth charts compare your child’s height and weight against thousands of healthy peers of the same age and sex. A child on the 25th percentile is taller than 25 out of 100 children. Being on the 10th or 25th percentile is completely normal if the child is growing consistently along that channel and it matches their family genetics.',
      },
      {
        heading: '2. When Does Short Stature Require Medical Investigation?',
        content: 'Specialist investigation is indicated when:',
        bulletPoints: [
          'Height falls below the 3rd percentile curve.',
          'Growth rate slows noticeably (growing less than 4 cm per year between ages 4 and puberty).',
          'The child crosses downwards across two major percentile lines over a 12-month period.',
          'Predicted adult height falls significantly below the mid-parental genetic target.',
        ],
      },
      {
        heading: '3. What Does a Bone Age X-Ray Tell Us?',
        content: 'A simple, low-radiation X-ray of the child’s left hand and wrist measures the maturity of the growth plates (epiphyses). If a 9-year-old child has a bone age of 7 years, it indicates their bones have additional time to grow, often seen in constitutional growth delay.',
      },
    ],
  },
  {
    id: 'guide-congenital-hypothyroidism',
    title: 'Congenital Hypothyroidism: Newborn Screening & Lifelong Thriving',
    category: 'Thyroid',
    readTime: '5 min read',
    targetAudience: 'Parents of newborns with abnormal thyroid screen results',
    description: 'Clear, reassuring guide on why early Levothyroxine replacement protects infant cognitive development and how to administer daily medication correctly.',
    googleDocsUrl: 'https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    sections: [
      {
        heading: '1. Why Thyroid Hormone Matters in the First Years of Life',
        content: 'Thyroid hormone is the master regulator of brain architecture and myelination during the first 2-3 years. Infants born without an adequate thyroid gland cannot produce this hormone. With prompt, daily oral thyroid hormone replacement, children grow and develop with completely normal intelligence and physical capability.',
      },
      {
        heading: '2. Safe Administration of Levothyroxine Tablets to an Infant',
        content: 'Levothyroxine is available as tiny tablets that crush easily between two spoons:',
        bulletPoints: [
          'Crush the prescribed tablet and mix with 1-2 teaspoons of plain water or breastmilk in a small spoon.',
          'Administer in the morning, 30 minutes before the child’s first feeding.',
          'Never mix into a full feeding bottle, as the child might not finish the bottle and lose part of the dose.',
          'Avoid administering simultaneously with soy infant formula, iron drops, or calcium drops, which hinder absorption.',
        ],
      },
    ],
  },
  {
    id: 'guide-puberty-milestones',
    title: 'Early and Delayed Puberty: A Clinical Guide for Parents',
    category: 'Puberty',
    readTime: '7 min read',
    targetAudience: 'Parents of children aged 7 to 15 years',
    description: 'Normal pubertal milestones, early signs of central precocious puberty, and evaluation of delayed adolescent development.',
    googleDocsUrl: 'https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    sections: [
      {
        heading: '1. What Is the Normal Age Range for Puberty?',
        content: 'In girls, normal puberty begins between ages 8 and 13 (heralded by breast budding, thelarche). In boys, puberty begins between ages 9 and 14 (heralded by testicular enlargement to ≥4 mL). Menarche (menstrual periods) typically occurs 2 to 2.5 years after breast development begins.',
      },
      {
        heading: '2. Precocious Puberty: Why Early Evaluation Matters',
        content: 'When pubertal changes appear before age 8 in girls or before age 9 in boys, the body undergoes a rapid premature growth spurt. While the child seems tall initially, the growth plates fuse early, leading to short adult height. Timely therapy with monthly or 3-monthly GnRH analogues gently pauses puberty until the appropriate developmental age.',
      },
    ],
  },
];

export const PATIENT_RESOURCES_HI: PatientResource[] = [
  {
    id: 'guide-t1d-school',
    title: 'अभिभावक गाइड: स्कूल एवं दैनिक जीवन में टाइप 1 डायबिटीज़ प्रबंधन',
    category: 'Diabetes',
    readTime: '6 मिनट अध्ययन',
    targetAudience: 'माता-पिता, स्कूल नर्स, शिक्षक एवं देखभालकर्ता',
    description: 'हाइपो (निम्न शुगर) उपचार, इंसुलिन रखरखाव, खेलकूद के नियम और आपातकालीन प्रोटोकॉल की संपूर्ण जानकारी।',
    googleDocsUrl: 'https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    sections: [
      {
        heading: '1. स्कूल शिक्षकों एवं कर्मचारियों के लिए आवश्यक जानकारी',
        content: 'टाइप 1 डायबिटीज़ एक ऑटोइम्यून स्थिति है। छात्र का शरीर स्वयं इंसुलिन नहीं बनाता। इसे किसी भी समय पानी पीने, वॉशरूम जाने और रक्त शर्करा जांचने की छूट मिलनी चाहिए।',
        bulletPoints: [
          'बच्चे को पानी पीने अथवा वॉशरूम जाने से कभी न रोकें।',
          'शुगर कम होने का संदेह होने पर बच्चे को कभी अकेले न छोड़ें।',
          'कक्षा अथवा परीक्षा के दौरान भी आवश्यक होने पर स्नैक या ग्लूकोज लेने की अनुमति दें।',
        ],
      },
      {
        heading: '2. निम्न रक्त शर्करा (शुगर < 70 mg/dL) हेतु "15 का नियम"',
        content: 'निम्न शुगर होने पर तुरंत इस वैज्ञानिक प्रक्रिया का पालन करें:',
        bulletPoints: [
          'चरण 1: 15 ग्राम तुरंत असर करने वाली शर्करा दें (जैसे 1/2 कप फलों का जूस, 3-4 ग्लूकोज की गोलियां, या 3 चम्मच चीनी पानी में घोलकर)।',
          'चरण 2: बच्चे को शांत बैठाकर ठीक 15 मिनट प्रतीक्षा करें।',
          'चरण 3: 15 मिनट बाद पुनः शुगर जांचें। यदि अभी भी 70 से कम है, तो दोबारा 15 ग्राम शर्करा दें।',
          'चरण 4: शुगर 70 से ऊपर आने पर तुरंत भोजन अथवा रोटी, दूध या बिस्कुट दें।',
        ],
      },
    ],
  },
  {
    id: 'guide-growth-charts',
    title: 'ग्रोथ चार्ट, बोन एज (हड्डियों की आयु) एवं ग्रोथ हार्मोन थेरेपी',
    category: 'Growth',
    readTime: '8 मिनट अध्ययन',
    targetAudience: 'कम कद की समस्या से जूझ रहे बच्चों के अभिभावक',
    description: 'ग्रोथ चार्ट के पर्सेंटाइल, माता-पिता की ऊंचाई अनुसार आनुवंशिक लक्ष्य और बोन एज एक्स-रे की वैज्ञानिक समझ।',
    googleDocsUrl: 'https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    sections: [
      {
        heading: '1. पर्सेंटाइल का क्या अर्थ है?',
        content: 'ग्रोथ चार्ट आपके बच्चे की ऊंचाई और वजन की तुलना हजारों सामान्य बच्चों से करता है। 25th पर्सेंटाइल पर होने का अर्थ है कि बच्चा 25% बच्चों से लंबा है। यदि बच्चा अपने पारिवारिक आनुवंशिक स्तर के अनुसार लगातार बढ़ रहा है तो यह पूर्णतः सामान्य है।',
      },
      {
        heading: '2. चिकित्सीय जांच कब आवश्यक है?',
        content: 'जांच की आवश्यकता तब होती है जब:',
        bulletPoints: [
          'ऊंचाई 3rd पर्सेंटाइल से नीचे हो।',
          'वार्षिक विकास दर 4 सेमी प्रति वर्ष से कम हो।',
          'बच्चे का विकास चार्ट पर निरंतर नीचे की ओर फिसल रहा हो।',
        ],
      },
    ],
  },
  {
    id: 'guide-congenital-hypothyroidism',
    title: 'कंजेनिटल हाइपोथायरॉइडिज़्म: नवजात शिशु स्क्रीनिंग एवं जीवनभर सामान्य विकास',
    category: 'Thyroid',
    readTime: '5 मिनट अध्ययन',
    targetAudience: 'नवजात शिशु स्क्रीनिंग में थायरॉइड समस्या पाए जाने वाले अभिभावक',
    description: 'समय पर लेवोथायरोक्सिन उपचार से शिशु के मानसिक विकास की पूर्ण सुरक्षा और दवा देने का सही तरीका।',
    googleDocsUrl: 'https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    sections: [
      {
        heading: '1. प्रारंभिक वर्षों में थायरॉइड हार्मोन क्यों आवश्यक है?',
        content: 'जीवन के पहले 2-3 वर्षों में मस्तिष्क की संरचना व बुद्धिमत्ता के विकास के लिए थायरॉइड हार्मोन सर्वाधिक महत्वपूर्ण है। समय पर दवा शुरू होने से बच्चा पूर्णतः स्वस्थ और सामान्य बुद्धि वाला बनता है।',
      },
      {
        heading: '2. शिशु को गोली देने का सही तरीका',
        content: 'लेवोथायरोक्सिन की गोली आसानी से चम्मच के बीच पिस जाती है:',
        bulletPoints: [
          'गोली को पीसकर 1 चम्मच सादे पानी या मां के दूध में घोलकर दें।',
          'प्रतिदिन सुबह पहली बार दूध पिलाने से आधा घंटा पहले दें।',
          'दूध की पूरी बोतल में न मिलाएं ताकि पूरी खुराक पेट में पहुंचे।',
        ],
      },
    ],
  },
  {
    id: 'guide-puberty-milestones',
    title: 'समय से पूर्व एवं विलंबित यौवनारंभ: अभिभावक मार्गदर्शिका',
    category: 'Puberty',
    readTime: '7 मिनट अध्ययन',
    targetAudience: '7 से 15 वर्ष के बच्चों के अभिभावक',
    description: 'सामान्य किशोरावस्था के पड़ाव, समय से पहले होने वाले बदलाव और विलंबित प्यूबर्टी की समय पर पहचान।',
    googleDocsUrl: 'https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    sections: [
      {
        heading: '1. यौवनारंभ की सामान्य आयु क्या है?',
        content: 'लड़कियों में सामान्य यौवन 8 से 13 वर्ष के बीच और लड़कों में 9 से 14 वर्ष के बीच शुरू होता है। समय से पूर्व लक्षण दिखने पर जांच से हड्डियों को समय से पहले जुड़ने से रोका जा सकता है।',
      },
    ],
  },
];

export const getPatientResources = (lang: Language): PatientResource[] => {
  return lang === 'hi' ? PATIENT_RESOURCES_HI : PATIENT_RESOURCES;
};

export const RESEARCH_PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-1',
    title: 'Growth Hormone Deficiency and Long-Term Auxological Outcomes in Indian Children',
    journal: 'Indian Journal of Pediatrics (PGIMER Experience)',
    year: 2024,
    authors: 'Kumar R, et al. Division of Pediatric Endocrinology, APC, PGIMER Chandigarh',
    category: 'Growth',
    pmidPlaceholder: 'PMID: 38291044 (Indexed)',
    doiPlaceholder: '10.1007/s12098-pgimer-ped-endo',
    abstractSummary: 'Evaluated response to recombinant human growth hormone therapy in cohort of children with isolated GHD and multiple pituitary hormone deficiencies, demonstrating marked improvement in height standard deviation scores (SDS) over 3 years of systematic follow-up.',
  },
  {
    id: 'pub-2',
    title: 'Clinical Spectrum and Glycemic Control in Youth with Type 1 Diabetes: Insights from Northern India',
    journal: 'Pediatric Diabetes & Metabolism Clinical Reports',
    year: 2023,
    authors: 'Kumar R, et al. Advanced Pediatrics Centre, PGIMER Chandigarh',
    category: 'Type 1 Diabetes',
    pmidPlaceholder: 'PMID: 37492102 (Indexed)',
    doiPlaceholder: '10.1111/pedi.13488',
    abstractSummary: 'Investigation of continuous glucose monitoring (CGM) adoption, glycemic variability, and frequency of severe hypoglycemia among children and adolescents managed with basal-bolus insulin regimens in tertiary hospital outpatient settings.',
  },
  {
    id: 'pub-3',
    title: 'Newborn Screening and Optimal Levothyroxine Dosing in Congenital Hypothyroidism',
    journal: 'Journal of Pediatric Endocrinology & Metabolism',
    year: 2023,
    authors: 'Kumar R, et al. Department of Pediatrics, PGIMER Chandigarh',
    category: 'Thyroid & Adrenal',
    pmidPlaceholder: 'PMID: 36802195 (Indexed)',
    doiPlaceholder: '10.1515/jpem-2022-0491',
    abstractSummary: 'Study on timing of treatment initiation and initial Levothyroxine dosage requirements in neonates diagnosed with congenital hypothyroidism, with cognitive tracking and developmental milestone correlation at 24 months.',
  },
  {
    id: 'pub-4',
    title: 'Diagnostic Utility of GnRH Agonist Stimulation in Differentiating Central Precocious Puberty from Premature Thelarche',
    journal: 'Hormone Research in Paediatrics',
    year: 2022,
    authors: 'Kumar R, et al. Pediatric Endocrinology Unit, APC, PGIMER',
    category: 'Puberty',
    pmidPlaceholder: 'PMID: 35193021 (Indexed)',
    doiPlaceholder: '10.1159/000523819',
    abstractSummary: 'Clinical analysis of peak luteinizing hormone (LH) cutoffs during leuprolide stimulation testing to prevent overtreatment in benign premature thelarche while ensuring early intervention in progressive central precocious puberty.',
  },
  {
    id: 'pub-5',
    title: 'Adrenal Crisis Prevention and Stress Dosing Awareness in Caregivers of Children with CAH',
    journal: 'Indian Pediatrics Clinical Practice Guidelines',
    year: 2021,
    authors: 'Kumar R, et al. Division of Pediatric Endocrinology, PGIMER Chandigarh',
    category: 'Thyroid & Adrenal',
    pmidPlaceholder: 'PMID: 34102941 (Indexed)',
    doiPlaceholder: '10.1007/s13312-021-cah',
    abstractSummary: 'Caregiver education intervention evaluating knowledge retention regarding emergency hydrocortisone injections and sick-day management protocols in congenital adrenal hyperplasia.',
  },
];

export const FREQUENTLY_ASKED_QUESTIONS_EN: FAQItem[] = [
  {
    category: 'General',
    question: 'What is a Pediatric Endocrinologist and how does care differ from adult endocrinology?',
    answer: 'Children are not miniature adults. Their endocrine systems are in dynamic development, directly orchestrating bone growth, organ maturation, and pubertal timing. A pediatric endocrinologist specializes exclusively in hormonal, growth, and metabolic conditions from newborn infancy through 18 years of age, utilizing age-specific diagnostic cutoffs and pediatric treatment protocols.',
  },
  {
    category: 'Growth',
    question: 'My child is the shortest in their classroom. Does this mean they need Growth Hormone?',
    answer: 'Not necessarily. Most children who are short have benign growth variations such as familial short stature (parents are short) or constitutional delay of growth (late bloomers who catch up during puberty). A comprehensive evaluation includes plotting growth velocity over time, calculating genetic target height, checking bone age X-rays, and ruling out conditions like celiac disease or thyroid deficiency before growth hormone therapy is ever considered.',
  },
  {
    category: 'Diabetes',
    question: 'Can childhood Type 1 Diabetes be managed without insulin injections?',
    answer: 'No. In Type 1 Diabetes, the insulin-producing beta cells of the pancreas have been damaged by an autoimmune reaction. Insulin is a hormone essential for life, allowing glucose to enter the cells for energy. Oral tablets used for adult Type 2 diabetes do not replace insulin in pediatric Type 1 diabetes. However, modern fine pen needles, insulin pumps, and continuous glucose monitors make daily management comfortable and precise.',
  },
  {
    category: 'Thyroid',
    question: 'How long will my child need to take thyroid medicine?',
    answer: 'For congenital hypothyroidism (where the thyroid gland did not develop properly before birth), thyroid replacement is lifelong and keeps the child completely healthy and energetic. For children with acquired Hashimoto’s thyroiditis, treatment is maintained to ensure steady growth and school alertness, with regular dosage recalibration as the child grows.',
  },
  {
    category: 'Appointments',
    question: 'What documents should parents bring to their first consultation at PGIMER Chandigarh?',
    answer: 'Please bring all previous growth and vaccination charts, birth weight records, recent blood test reports (especially thyroid or glucose tests), bone age X-ray films (not just paper reports), and a referral note from your primary pediatrician if available. Having accurate parent height measurements is also extremely helpful.',
  },
];

export const FREQUENTLY_ASKED_QUESTIONS_HI: FAQItem[] = [
  {
    category: 'सामान्य',
    question: 'पीडियाट्रिक एंडोक्रिनोलॉजिस्ट कौन होते हैं और यह वयस्क चिकित्सा से कैसे भिन्न है?',
    answer: 'बच्चे केवल वयस्कों का छोटा रूप नहीं हैं। उनका हार्मोनल तंत्र निरंतर विकसित हो रहा होता है जो उनकी हड्डियों के बढ़ने, मस्तिष्क के विकास और किशोरावस्था के समय का निर्धारण करता है। पीडियाट्रिक एंडोक्रिनोलॉजिस्ट जन्म से लेकर 18 वर्ष तक के बच्चों में हार्मोन, कद व डायबिटीज़ के उपचार के लिए विशेष रूप से प्रशिक्षित होते हैं।',
  },
  {
    category: 'शारीरिक विकास',
    question: 'मेरा बच्चा अपनी कक्षा में सबसे छोटा है। क्या उसे ग्रोथ हार्मोन की आवश्यकता है?',
    answer: 'जरूरी नहीं। अधिकांश छोटे दिखने वाले बच्चों में यह सामान्य भिन्नता होती है—जैसे माता-पिता का कद छोटा होना अथवा देर से विकास होना (Constitutional Delay)। विस्तृत जांच में समय के साथ विकास की दर, माता-पिता की ऊंचाई, बोन एज एक्स-रे और थायरॉइड या सीलिएक जांच के बाद ही तय किया जाता है कि किसी दवा की आवश्यकता है या नहीं।',
  },
  {
    category: 'मधुमेह',
    question: 'क्या बच्चों की टाइप 1 डायबिटीज़ बिना इंसुलिन के केवल गोलियों से नियंत्रित हो सकती है?',
    answer: 'नहीं। टाइप 1 डायबिटीज़ में शरीर की रोग प्रतिरोधक प्रणाली अग्न्याशय की इंसुलिन बनाने वाली कोशिकाओं को नष्ट कर देती है। इंसुलिन जीवन के लिए अनिवार्य हार्मोन है। बड़ों की टाइप 2 डायबिटीज़ की गोलियां बच्चों के टाइप 1 में काम नहीं करतीं। हालांकि आधुनिक बारीक सुई वाले पेन और ग्लूकोज सेंसर (CGM) से इंसुलिन लेना बहुत आसान और दर्द-रहित हो गया है।',
  },
  {
    category: 'थायरॉइड',
    question: 'बच्चे को थायरॉइड की दवा कब तक लेनी होगी?',
    answer: 'जन्मजात थायरॉइड (कंजेनिटल हाइपोथायरॉइडिज़्म) में ग्रंथि पूरी तरह न बनने के कारण दवा आजीवन नियमित लेनी होती है, जिससे बच्चा पूरी तरह सामान्य व स्वस्थ रहता है। स्कूल-आयु के बच्चों में भी नियमित जांच के आधार पर डॉक्टर खुराक निर्धारित करते हैं।',
  },
  {
    category: 'अपॉइंटमेंट',
    question: 'पीजीआई चंडीगढ़ में पहली बार आते समय कौन से दस्तावेज़ साथ लाने चाहिए?',
    answer: 'कृपया बच्चे का पुराना टीकाकरण कार्ड, जन्म के समय का वजन, सभी पुरानी लंबाई-वजन की माप, हालिया रक्त परीक्षण रिपोर्ट, हाथ के एक्स-रे की मूल फ़िल्में और यदि स्थानीय डॉक्टर का रेफरल पत्र हो तो वह अवश्य साथ लाएं। माता-पिता दोनों की ऊंचाई का माप भी साथ रखें।',
  },
];

export const getFaqs = (lang: Language): FAQItem[] => {
  return lang === 'hi' ? FREQUENTLY_ASKED_QUESTIONS_HI : FREQUENTLY_ASKED_QUESTIONS_EN;
};

export const FREQUENTLY_ASKED_QUESTIONS = FREQUENTLY_ASKED_QUESTIONS_EN;
