export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    doctorName: string;
    specialtySub: string;
    about: string;
    areasOfCare: string;
    growthCalculator: string;
    patientResources: string;
    publications: string;
    contactOpd: string;
    appointmentEnquiry: string;
    submitEnquiry: string;
    liveConsult: string;
    parentFaqs: string;
    nutritionCalculator: string;
    clinicalUpdates: string;
    languageToggle: string;
  };
  hero: {
    eyebrowSub: string;
    eyebrowInstitute: string;
    eyebrowType: string;
    heading: string;
    intro: string;
    ctaCare: string;
    ctaResources: string;
    ctaEnquiry: string;
    verifiedCreds: string;
    centerName: string;
    centerLoc: string;
    regTitle: string;
    regDesc: string;
    visualCaptionTitle: string;
    visualCaptionDesc: string;
    floatingRole: string;
    ribbonSpecialtyLabel: string;
    ribbonSpecialtyValue: string;
    ribbonSpecialtySub: string;
    ribbonBaseLabel: string;
    ribbonBaseValue: string;
    ribbonBaseSub: string;
    ribbonAudienceLabel: string;
    ribbonAudienceValue: string;
    ribbonAudienceSub: string;
    ribbonLocLabel: string;
    ribbonLocValue: string;
    ribbonLocSub: string;
  };
  about: {
    eyebrowProfile: string;
    eyebrowPractice: string;
    heading: string;
    subheading: string;
    p1: string;
    p2: string;
    quote: string;
    quoteEthos: string;
    p3: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    instCardTitle: string;
    instCardName: string;
    instCardDesc: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    noticeTitle: string;
    noticeDesc: string;
    viewOpdBtn: string;
    doctorPhotoCaption: string;
    emailDoctorCta: string;
  };
  areasOfCare: {
    eyebrow: string;
    heading: string;
    subheading: string;
    showingText: string;
    bannerEyebrow: string;
    bannerHeading: string;
    bannerDesc: string;
    bannerCta: string;
    categories: {
      all: string;
      growth: string;
      diabetes: string;
      thyroid: string;
      puberty: string;
      adrenalBone: string;
      metabolic: string;
    };
    protocolLabel: string;
    diagnosticTitle: string;
    viewGuideBtn: string;
    enquireBtn: string;
    modalSubtitle: string;
    modalSymptoms: string;
    modalDiagnostic: string;
    modalGuidance: string;
    modalWhenRefer: string;
    modalClose: string;
    modalEnquireCondition: string;
  };
  calculator: {
    eyebrow: string;
    heading: string;
    subheading: string;
    sexLabel: string;
    boy: string;
    girl: string;
    unitLabel: string;
    metric: string;
    imperial: string;
    fatherStature: string;
    motherStature: string;
    currentContext: string;
    ageLabel: string;
    heightLabel: string;
    tannerNote: string;
    projectionTitle: string;
    estimatedTitle: string;
    forLabel: string;
    midpointLabel: string;
    targetRangeLabel: string;
    growthVelocityTitle: string;
    velocity1to2: string;
    velocity4toPuberty: string;
    velocityGirlsPuberty: string;
    velocityBoysPuberty: string;
    consultWhenTitle: string;
    consultWhenDesc: string;
  };
  hypoGuide: {
    badge: string;
    heading: string;
    subheading: string;
    stepPrefix: string;
    targetLabel: string;
    mandatoryActions: string;
    prevStep: string;
    nextStep: string;
  };
  resources: {
    eyebrow: string;
    heading: string;
    subheading: string;
    deskBadge: string;
    deskTitle: string;
    deskDesc: string;
    directAccess: string;
    cloudView: string;
    printOpt: string;
    updatedYear: string;
    readFullBtn: string;
    googleDocsBtn: string;
    shareTooltip: string;
    readerPlanSuffix: string;
    printBtn: string;
    readerDisclaimerTitle: string;
    readerDisclaimerText: string;
    closeReader: string;
    haveQuestions: string;
  };
  publications: {
    eyebrow: string;
    heading: string;
    subheading: string;
    allPubs: string;
    pubmedBtn: string;
    scholarBtn: string;
    authorsLabel: string;
    viewRecord: string;
    noticeTitle: string;
    noticeText: string;
  };
  enquiry: {
    eyebrow: string;
    heading: string;
    subheading: string;
    emergencyTitle: string;
    emergencyText: string;
    regSuccess: string;
    refId: string;
    patientNameLabel: string;
    concernLabel: string;
    guardianLabel: string;
    formatLabel: string;
    whatToBringTitle: string;
    printSummary: string;
    doneBtn: string;
    sec1: string;
    autosaved: string;
    childName: string;
    childAge: string;
    childGender: string;
    guardianName: string;
    guardianPhone: string;
    guardianEmail: string;
    concernDropdown: string;
    durationLabel: string;
    formatPreference: string;
    testsCheckbox: string;
    testsPlaceholder: string;
    referringDocLabel: string;
    preferredDateLabel: string;
    additionalNotesLabel: string;
    notesPlaceholder: string;
    privacyNote: string;
    cancelBtn: string;
    submitBtn: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    card1Title: string;
    card1Desc: string;
    card1Foot: string;
    card2Title: string;
    card2DaysLabel: string;
    card2DaysVal: string;
    card2TokenLabel: string;
    card2TokenVal: string;
    card2HoursLabel: string;
    card2HoursVal: string;
    card2Foot: string;
    card3Title: string;
    card3PhoneLabel: string;
    card3PhoneVal: string;
    card3EmailLabel: string;
    card3EmailVal: string;
    card3DeskLabel: string;
    card3DeskVal: string;
    card3PortalLabel: string;
    card3PortalVal: string;
    card3DoctorPortal: string;
    mapTitle: string;
    mapOpen: string;
    mapTransit: string;
    mapParking: string;
    checkTitle: string;
    checkSub: string;
    check1Title: string;
    check1Desc: string;
    check2Title: string;
    check2Desc: string;
    check3Title: string;
    check3Desc: string;
    check4Title: string;
    check4Desc: string;
    checkSubmitCta: string;
    faqEyebrow: string;
    faqHeading: string;
  };
  doctorReferral: {
    badge: string;
    heading: string;
    subheading: string;
    memoGenerated: string;
    refCodeLabel: string;
    memoGreeting: string;
    printMemo: string;
    close: string;
    secDoctor: string;
    doctorName: string;
    regNo: string;
    hospital: string;
    phoneEmail: string;
    secPatient: string;
    patientName: string;
    patientAge: string;
    patientSex: string;
    clinicalIndication: string;
    findingsNotes: string;
    cancel: string;
    generateSlip: string;
  };
  liveConsultancy: {
    badge: string;
    title: string;
    sub: string;
    instantSlot: string;
    scheduleSlot: string;
    selectReason: string;
    childName: string;
    childAge: string;
    guardianPhone: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    deviceCheckTitle: string;
    cameraCheck: string;
    micCheck: string;
    internetCheck: string;
    joinRoomBtn: string;
    waitingForDoctor: string;
    doctorConnected: string;
    inCallDuration: string;
    muteBtn: string;
    unmuteBtn: string;
    videoOnBtn: string;
    videoOffBtn: string;
    endCallBtn: string;
    chatTab: string;
    reportsTab: string;
    typeMessage: string;
    sendBtn: string;
    uploadLab: string;
    prescriptionTitle: string;
    printPrescription: string;
    closeBtn: string;
  };
  parentFaq: {
    badge: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    searchMatchesFound: string;
    clearSearch: string;
    noResults: string;
    noResultsSub: string;
    resetFilter: string;
    expandAll: string;
    collapseAll: string;
    categories: {
      all: string;
      firstVisit: string;
      followUp: string;
      tests: string;
      medications: string;
      teleconsult: string;
    };
    checklistBtn: string;
    checklistModalTitle: string;
    checklistModalSub: string;
    checklistClose: string;
    checklistPrint: string;
    checklistTip: string;
    keyTakeawayTitle: string;
    stillHaveQuestionsTitle: string;
    stillHaveQuestionsDesc: string;
    bookConsultBtn: string;
    liveVideoBtn: string;
    emergencyCardTitle: string;
    emergencyCardDesc: string;
    emergencyActionBtn: string;
  };
  footer: {
    roleSub: string;
    bio: string;
    address: string;
    regStanding: string;
    navHeading: string;
    inquiriesHeading: string;
    inquiriesDesc: string;
    enquiryBtn: string;
    doctorPortalBtn: string;
    disclaimerTitle: string;
    disclaimerText: string;
    emergencyTitle: string;
    emergencyText: string;
    rightsReserved: string;
    cityCountry: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      doctorName: 'Dr. Rakesh Kumar',
      specialtySub: 'Pediatric Endocrinology · PGIMER Chandigarh',
      about: 'About',
      areasOfCare: 'Areas of Care',
      growthCalculator: 'Growth Calculator',
      patientResources: 'Patient Resources',
      publications: 'Publications',
      contactOpd: 'Contact & OPD',
      appointmentEnquiry: 'Appointment Enquiry',
      submitEnquiry: 'Submit Appointment Enquiry',
      liveConsult: 'Live Video Consult',
      parentFaqs: 'Parent FAQs',
      nutritionCalculator: 'Nutrition & Insulin',
      clinicalUpdates: 'Clinical Updates',
      languageToggle: 'Language',
    },
    hero: {
      eyebrowSub: 'Pediatric Endocrinology',
      eyebrowInstitute: 'PGIMER Chandigarh',
      eyebrowType: 'Tertiary Care',
      heading: 'Supporting Healthy Growth. Building Healthier Futures.',
      intro: 'Specialized clinical care for infants, children, and adolescents navigating growth delays, Type 1 diabetes, thyroid disorders, and hormonal imbalances. We bring tertiary-level clinical expertise together with warmth, family guidance, and evidence-based medicine.',
      ctaCare: 'Explore Areas of Care',
      ctaResources: 'Patient Resources',
      ctaEnquiry: 'Consultation Enquiry',
      verifiedCreds: 'Verified Institutional Affiliation & Credentials',
      centerName: 'Advanced Pediatrics Centre (APC)',
      centerLoc: 'PGIMER, Sector 12, Chandigarh',
      regTitle: 'Registered Medical Practitioner',
      regDesc: 'National Medical Commission (MCI verified)',
      visualCaptionTitle: 'Compassionate Pediatric Care',
      visualCaptionDesc: 'Personalized auxological evaluation, diabetes education, and hormonal care tailored to every child’s developmental stage.',
      floatingRole: 'Pediatric Endocrinology Specialist',
      ribbonSpecialtyLabel: 'Specialty',
      ribbonSpecialtyValue: 'Pediatric Endocrinology',
      ribbonSpecialtySub: 'Growth & Hormonal Disorders',
      ribbonBaseLabel: 'Hospital Base',
      ribbonBaseValue: 'PGIMER Chandigarh',
      ribbonBaseSub: 'Advanced Pediatrics Centre (APC)',
      ribbonAudienceLabel: 'Patient Focus',
      ribbonAudienceValue: 'Infants, Children & Teens',
      ribbonAudienceSub: 'Ages 0 to 18 Years',
      ribbonLocLabel: 'Location',
      ribbonLocValue: 'Sector 12, Chandigarh',
      ribbonLocSub: 'India · Pincode 160012',
    },
    about: {
      eyebrowProfile: 'Verified Physician Profile',
      eyebrowPractice: 'Academic & Clinical Practice',
      heading: 'About Dr. Rakesh Kumar',
      subheading: 'Dedicated pediatric endocrinologist providing specialized diagnostic evaluation and comprehensive therapy at one of India\'s premier apex medical institutes.',
      p1: 'Dr. Rakesh Kumar serves as a specialist in Pediatric Endocrinology at the Advanced Pediatrics Centre (APC), Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh. With dedicated focus on auxology (human growth biology), pediatric diabetology, and pubertal medicine, his clinical work encompasses treating complex endocrine disorders from the neonatal period through late adolescence.',
      p2: 'Endocrine disorders in children carry profound physical, developmental, and psychological significance. Unlike adult conditions, hormonal fluctuations in a growing child directly determine skeletal height, brain maturation, sexual development, and metabolic resilience. Dr. Kumar’s approach prioritizes accurate early diagnosis—preventing misdiagnosis between normal biological variations (such as constitutional delay) and true pathologies (such as pituitary growth hormone deficiency).',
      quote: '“When treating a child, our responsibility extends far beyond laboratory numbers. We must educate the family, support the child\'s self-esteem at school, and ensure every child reaches their true genetic and developmental potential.”',
      quoteEthos: '— Clinical Practice Ethos · Dr. Rakesh Kumar',
      p3: 'At PGIMER Chandigarh, care is delivered in a collaborative multidisciplinary setting involving specialized pediatric nurses, certified diabetes educators, pediatric dietitians, and clinical geneticists, ensuring holistic long-term support for families.',
      val1Title: 'Evidence-Based Care',
      val1Desc: 'Adhering to Indian Society for Pediatric and Adolescent Endocrinology (ISPAE) and international consensus guidelines.',
      val2Title: 'Family Empowerment',
      val2Desc: 'Equipping parents with practical knowledge for home insulin management, growth tracking, and medication safety.',
      instCardTitle: 'Institutional Affiliation',
      instCardName: 'PGIMER Chandigarh',
      instCardDesc: 'Postgraduate Institute of Medical Education and Research · An Institute of National Importance (INI)',
      item1Title: 'Advanced Pediatrics Centre (APC)',
      item1Desc: 'Division of Pediatric Endocrinology, Sector 12, Chandigarh',
      item2Title: 'Medical Licensure & Regulatory Standing',
      item2Desc: 'Registered Medical Practitioner under the National Medical Commission (NMC / erstwhile MCI)',
      item3Title: 'Academic & Research Portfolio',
      item3Desc: 'Contributions in peer-reviewed clinical pediatric endocrine literature, resident training, and clinical audits',
      noticeTitle: 'Notice on Medical Credentials',
      noticeDesc: 'This profile strictly presents verified institutional affiliations at PGIMER Chandigarh. Private consulting details, awards, or personal degree histories are updated only upon official verification.',
      viewOpdBtn: 'View OPD Clinic Hours & Directions',
      doctorPhotoCaption: 'Dr. Rakesh Kumar · Pediatric Endocrinology Specialist, PGIMER Chandigarh',
      emailDoctorCta: 'drrakesh.pgi@gmail.com',
    },
    areasOfCare: {
      eyebrow: 'Clinical Subspecialties',
      heading: 'Areas of Specialized Care',
      subheading: 'Clear, trustworthy clinical evaluation protocols for hormone, growth, and metabolic conditions in infants, children, and adolescents.',
      showingText: 'Clinical Pathways',
      bannerEyebrow: 'Auxology & Developmental Biology',
      bannerHeading: 'The Pediatric Growth Journey',
      bannerDesc: 'From infancy through adolescent growth spurts, continuous tracking on standard growth curves allows early detection of hormonal deficits, nutritional challenges, and genetic conditions.',
      bannerCta: 'Calculate Target Mid-Parental Height',
      categories: {
        all: 'All Specialties',
        growth: 'Growth & Short Stature',
        diabetes: 'Type 1 Diabetes',
        thyroid: 'Thyroid Disorders',
        puberty: 'Puberty Timing',
        adrenalBone: 'Adrenal & Bone',
        metabolic: 'Childhood Metabolic',
      },
      protocolLabel: 'Pediatric Protocol',
      diagnosticTitle: 'Primary Diagnostic Inquiries:',
      viewGuideBtn: 'View Clinical Guide',
      enquireBtn: 'Enquire',
      modalSubtitle: 'Clinical Evaluation Guide',
      modalSymptoms: 'Signs & Symptoms to Observe',
      modalDiagnostic: 'Recommended Diagnostic Protocol',
      modalGuidance: 'Practical Guidance for Parents',
      modalWhenRefer: 'When to Seek Tertiary Endocrine Referral:',
      modalClose: 'Close Guide',
      modalEnquireCondition: 'Submit Consultation Enquiry For This Condition',
    },
    calculator: {
      eyebrow: 'Clinical Auxology Tool',
      heading: 'Child Growth & Target Height Calculator',
      subheading: 'Estimate your child’s genetic target adult height based on parental biology and understand normal childhood growth velocity benchmarks.',
      sexLabel: 'Child\'s Biological Sex',
      boy: 'Boy',
      girl: 'Girl',
      unitLabel: 'Measurement Unit',
      metric: 'Metric (cm)',
      imperial: 'Feet & Inches',
      fatherStature: 'Father\'s Stature',
      motherStature: 'Mother\'s Stature',
      currentContext: 'Child’s Current Stature (Auxological Context)',
      ageLabel: 'Age in Years',
      heightLabel: 'Current Height',
      tannerNote: '* The Tanner Mid-Parental Height calculation is the internationally recognized auxological formula. For boys: (Father + Mother + 13 cm) / 2. For girls: (Father + Mother - 13 cm) / 2. Expected target range is ± 5 cm from the midpoint.',
      projectionTitle: 'Auxological Projection',
      estimatedTitle: 'Estimated Mid-Parental Height',
      forLabel: 'Target adult height calculated for a',
      midpointLabel: 'Target Midpoint',
      targetRangeLabel: 'Target Range (± 5 cm):',
      growthVelocityTitle: 'Normal Annual Growth Velocity',
      velocity1to2: '10 – 12 cm / yr',
      velocity4toPuberty: '5 – 6 cm / yr',
      velocityGirlsPuberty: '8 – 9 cm / yr',
      velocityBoysPuberty: '9 – 10.5 cm / yr',
      consultWhenTitle: 'When to Consult Dr. Rakesh Kumar:',
      consultWhenDesc: 'If your child is growing less than 4 cm per year in childhood, or crossing two major percentile lines downward, bring their previous school height records to PGIMER Chandigarh for stadiometric evaluation.',
    },
    hypoGuide: {
      badge: 'Type 1 Diabetes Pediatric Emergency Protocol',
      heading: 'The "Rule of 15" for Childhood Hypoglycemia',
      subheading: 'Recommended evidence-based protocol for parents, babysitters, and school nurses.',
      stepPrefix: 'Step',
      targetLabel: 'Target: > 70 mg/dL',
      mandatoryActions: 'Mandatory Clinical Actions:',
      prevStep: '← Previous Step',
      nextStep: 'Next Step →',
    },
    resources: {
      eyebrow: 'Caregiver Education & Literature',
      heading: 'Approved Patient & Caregiver Resources',
      subheading: 'Evidence-based clinical guides authored to help families and schools understand pediatric endocrine conditions, treatment regimens, and home monitoring.',
      deskBadge: 'Official Caregiver Literature',
      deskTitle: 'Clinical Guides Stored in Google Docs & Printable Formats',
      deskDesc: 'Every child diagnosed with an endocrine condition deserves clear, jargon-free medical explanations. These guides are structured for parents to review at home, share with school teachers, or download as official PDF/Google Docs documents for the child\'s health file.',
      directAccess: 'Direct Access:',
      cloudView: 'Google Docs Cloud View',
      printOpt: 'Printer-Optimized Layouts',
      updatedYear: 'Updated for 2026 Guidelines',
      readFullBtn: 'Read Full Guide',
      googleDocsBtn: 'Google Docs',
      shareTooltip: 'Share / Copy Link',
      readerPlanSuffix: 'Care Plan',
      printBtn: 'Print',
      readerDisclaimerTitle: 'Clinical Information Notice:',
      readerDisclaimerText: 'This educational resource is for informational and caregiver guidance purposes only and does not replace personalized medical advice, diagnosis, or treatment by a qualified pediatric endocrinologist.',
      closeReader: 'Close Reader',
      haveQuestions: 'Have questions? Contact Clinic →',
    },
    publications: {
      eyebrow: 'Academic Contributions',
      heading: 'Research & Clinical Publications',
      subheading: 'Selected peer-reviewed contributions, auxological trials, and clinical protocols originating from the Division of Pediatric Endocrinology at PGIMER Chandigarh.',
      allPubs: 'All Publications',
      pubmedBtn: 'PubMed Search',
      scholarBtn: 'Google Scholar',
      authorsLabel: 'Authors & Affiliation:',
      viewRecord: 'View Publisher Record',
      noticeTitle: 'Medical Literature Note:',
      noticeText: 'This curated bibliography reflects research areas and clinical studies conducted in association with the Advanced Pediatrics Centre at PGIMER Chandigarh. Full texts are accessible via institutional library portals and PubMed Central.',
    },
    enquiry: {
      eyebrow: 'Clinical Triage & Scheduling',
      heading: 'Appointment & Consultation Enquiry',
      subheading: 'Submit a structured clinical enquiry for pediatric endocrine evaluation by Dr. Rakesh Kumar at the Advanced Pediatrics Centre (APC), PGIMER Chandigarh.',
      emergencyTitle: 'Emergency Advisory (Not for Acute Emergencies):',
      emergencyText: 'If your child has suspected severe low blood sugar (hypoglycemia with altered consciousness), suspected diabetic ketoacidosis (rapid deep breathing, persistent vomiting, extreme weakness), or acute adrenal crisis, please proceed immediately to the Advanced Pediatrics Centre (APC) Emergency Unit at PGIMER Chandigarh (open 24x7) or your nearest emergency medical facility.',
      regSuccess: 'Consultation Enquiry Registered',
      refId: 'Reference ID:',
      patientNameLabel: 'Patient Name:',
      concernLabel: 'Primary Clinical Concern:',
      guardianLabel: 'Parent / Guardian:',
      formatLabel: 'Consultation Format:',
      whatToBringTitle: 'What to Bring on Your Clinic Day to APC PGIMER:',
      printSummary: 'Print Enquiry Confirmation',
      doneBtn: 'Done',
      sec1: 'Section 1: Child & Clinical Profile',
      autosaved: 'Draft autosaved locally',
      childName: 'Child\'s Full Name *',
      childAge: 'Child\'s Age (Years/Months) *',
      childGender: 'Biological Sex *',
      guardianName: 'Parent / Guardian Name *',
      guardianPhone: 'Mobile Phone Number *',
      guardianEmail: 'Email Address *',
      concernDropdown: 'Primary Endocrine Concern *',
      durationLabel: 'Approximate Symptom Duration',
      formatPreference: 'Consultation Format Preference',
      testsCheckbox: 'Previous hormone tests, blood work, or X-rays have already been completed',
      testsPlaceholder: 'e.g. Bone age X-ray (delayed 1.5 yrs), TSH was 6.8 mIU/L, HbA1c 8.2%',
      referringDocLabel: 'Referring Doctor / Clinic (Optional)',
      preferredDateLabel: 'Preferred Appointment Day Window',
      additionalNotesLabel: 'Additional Clinical Notes / Questions for the Doctor',
      notesPlaceholder: 'Share any key context (e.g. family history of thyroid or early puberty, birth weight, school performance)...',
      privacyNote: 'Your clinical details are kept private and confidential.',
      cancelBtn: 'Cancel',
      submitBtn: 'Submit Consultation Enquiry',
    },
    contact: {
      eyebrow: 'Hospital Location & Clinic Timings',
      heading: 'Clinic Contact & Directions',
      subheading: 'Official outpatient consultation details, visiting protocols, and geographical navigation to the Advanced Pediatrics Centre.',
      card1Title: 'Advanced Pediatrics Centre (APC)',
      card1Desc: 'Division of Pediatric Endocrinology, Department of Pediatrics, Postgraduate Institute of Medical Education & Research (PGIMER), Sector 12, Chandigarh, 160012, India.',
      card1Foot: 'Campus Landmark: Near APC Main Gate',
      card2Title: 'OPD Schedule & Registration',
      card2DaysLabel: 'OPD Days:',
      card2DaysVal: 'Specialized Pediatric Endocrine Clinic',
      card2TokenLabel: 'Morning Token Counter:',
      card2TokenVal: '08:00 AM – 11:00 AM',
      card2HoursLabel: 'Consultation Hours:',
      card2HoursVal: '09:00 AM onwards',
      card2Foot: '* Arrive early for smooth biometric & card registration',
      card3Title: 'Communication & Assistance',
      card3PhoneLabel: 'PGIMER EPABX Switchboard:',
      card3PhoneVal: '+91 172 2747585 / 2746018',
      card3EmailLabel: 'Official Clinical & Academic Email:',
      card3EmailVal: 'drrakesh.pgi@gmail.com',
      card3DeskLabel: 'Pediatrics Department Desk:',
      card3DeskVal: 'APC Level 2 Reception',
      card3PortalLabel: 'Online Appointment Portal:',
      card3PortalVal: 'pgimer.edu.in OPD Services',
      card3DoctorPortal: 'Referring Doctor Portal →',
      mapTitle: 'PGIMER Chandigarh, Sector 12 (Map Navigation)',
      mapOpen: 'Open in Google Maps',
      mapTransit: 'Transit: Readily accessible from Chandigarh ISBT-17 (3.5 km) and ISBT-43 (7 km).',
      mapParking: 'Ample visitor parking available at APC front.',
      checkTitle: 'First-Time Consultation Checklist',
      checkSub: 'To make your child\'s visit comfortable and medically thorough, please follow these institutional guidelines:',
      check1Title: 'Central CR Registration:',
      check1Desc: 'Obtain a central CR Number registration card at the APC registration counters on Ground Floor.',
      check2Title: 'Auxology & Growth Stadiometry:',
      check2Desc: 'Your child\'s height and weight will be precisely measured using calibrated stadiometers prior to seeing the physician.',
      check3Title: 'Child Nutrition & Comfort:',
      check3Desc: 'Unless specific fasting blood tests are scheduled, ensure your child has eaten breakfast and is well-hydrated.',
      check4Title: 'Emergency 24x7 Protocol:',
      check4Desc: 'For acute pediatric emergencies (diabetic ketoacidosis, severe seizures, acute lethargy), head directly to the 24-hour APC Emergency entrance.',
      checkSubmitCta: 'Submit Consultation Enquiry First',
      faqEyebrow: 'Caregiver Inquiries',
      faqHeading: 'Frequently Asked Questions',
    },
    doctorReferral: {
      badge: 'Colleague & Physician Referral Portal',
      heading: 'Physician-to-Physician Patient Referral',
      subheading: 'For practicing pediatricians and physicians referring complex endocrine cases to Dr. Rakesh Kumar at PGIMER Chandigarh.',
      memoGenerated: 'Referral Memo Generated',
      refCodeLabel: 'Reference Code:',
      memoGreeting: 'Thank you. Please provide this referral reference code or a printed copy of this memorandum to the patient’s family to present at the Advanced Pediatrics Centre (APC), PGIMER Chandigarh.',
      printMemo: 'Print Referral Memo',
      close: 'Close',
      secDoctor: 'Referring Clinician Details',
      doctorName: 'Doctor Name *',
      regNo: 'State / NMC Reg. No.',
      hospital: 'Hospital / Clinic / City *',
      phoneEmail: 'Contact Phone / Email *',
      secPatient: 'Patient & Case Summary',
      patientName: 'Patient Name *',
      patientAge: 'Age *',
      patientSex: 'Sex',
      clinicalIndication: 'Clinical Indication *',
      findingsNotes: 'Investigation Findings & Clinical Notes',
      cancel: 'Cancel',
      generateSlip: 'Generate Referral Slip',
    },
    liveConsultancy: {
      badge: 'Live Pediatric Video Consultation',
      title: 'Live Appointment & Teleconsultancy',
      sub: 'Connect securely with Dr. Rakesh Kumar for follow-up reviews, diabetes titration, growth evaluation, and remote second opinions.',
      instantSlot: 'Instant Teleconsult Slot',
      scheduleSlot: 'Schedule Preferred Time',
      selectReason: 'Primary Consultation Concern',
      childName: "Child's Full Name",
      childAge: "Child's Age (Years)",
      guardianPhone: "Parent / Guardian Contact Phone",
      step1Title: 'Patient & Slot Selection',
      step2Title: 'Pre-Call Device Check',
      step3Title: 'Live Teleconsultation Room',
      deviceCheckTitle: 'Audio & Video Readiness Test',
      cameraCheck: 'Camera feed active and centered',
      micCheck: 'Microphone detected and calibrated',
      internetCheck: 'Encrypted WebRTC connection ready',
      joinRoomBtn: 'Enter Teleconsultation Room',
      waitingForDoctor: 'Waiting for Dr. Rakesh Kumar to join...',
      doctorConnected: 'Dr. Rakesh Kumar is in the session',
      inCallDuration: 'Session Time',
      muteBtn: 'Mute',
      unmuteBtn: 'Unmute',
      videoOnBtn: 'Video On',
      videoOffBtn: 'Stop Video',
      endCallBtn: 'End Consultation',
      chatTab: 'Live Clinical Chat',
      reportsTab: 'Lab Reports & Records',
      typeMessage: 'Type clinical query or message...',
      sendBtn: 'Send',
      uploadLab: 'Upload Report (PDF/JPG)',
      prescriptionTitle: 'Consultation Summary & Advice Memorandum',
      printPrescription: 'Print Consultation Summary',
      closeBtn: 'Close Session',
    },
    parentFaq: {
      badge: 'Parent Guidance & Consultation FAQs',
      heading: 'Frequently Asked Questions for Parents',
      subheading: 'Clear, compassionate answers regarding first-time pediatric endocrine appointments, follow-up monitoring intervals, diagnostic protocols, and home medication safety.',
      searchPlaceholder: 'Search FAQs by keyword (e.g., fasting, X-ray, growth hormone, follow-up)...',
      searchMatchesFound: 'question(s) match your query',
      clearSearch: 'Clear search',
      noResults: 'No matching questions found',
      noResultsSub: 'Try searching with simpler terms such as "tests", "height", "thyroid", or reset your category filters.',
      resetFilter: 'Reset Filters',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      categories: {
        all: 'All Questions',
        firstVisit: 'First Visit & Prep',
        followUp: 'Follow-ups & Velocity',
        tests: 'Diagnostic Tests',
        medications: 'Medications & Daily Care',
        teleconsult: 'Outstation & Tele-Care',
      },
      checklistBtn: 'Day-of-Visit Packing Checklist',
      checklistModalTitle: 'Parent Packing Checklist for Appointment Day',
      checklistModalSub: 'Keep these essential records and comfort items ready before heading to the Advanced Pediatrics Centre, PGIMER.',
      checklistClose: 'Close Checklist',
      checklistPrint: 'Print Checklist',
      checklistTip: 'Tip: Having physical translucent X-ray sheets and measured parental heights speeds up your child’s diagnostic consultation.',
      keyTakeawayTitle: 'Key Takeaway for Caregivers:',
      stillHaveQuestionsTitle: 'Have a specific question about your child’s care?',
      stillHaveQuestionsDesc: 'If your child has an upcoming appointment, requires outstation follow-up guidance, or you need specialized advice from Dr. Rakesh Kumar:',
      bookConsultBtn: 'Submit Appointment Enquiry',
      liveVideoBtn: 'Join Live Teleconsultation',
      emergencyCardTitle: 'Metabolic & Hypoglycemia Emergencies',
      emergencyCardDesc: 'For acute emergencies (unresponsive low blood sugar, persistent vomiting with diabetic ketoacidosis, or adrenal crisis), bypass outpatient booking and go directly to the 24/7 APC Emergency Unit, PGIMER.',
      emergencyActionBtn: 'View Hypoglycemia Protocol',
    },
    footer: {
      roleSub: 'Pediatric Endocrinology & Diabetes Specialist',
      bio: 'Providing compassionate, evidence-based pediatric endocrine care for infants, children, and adolescents at the Advanced Pediatrics Centre (APC), PGIMER Chandigarh.',
      address: 'Advanced Pediatrics Centre, PGIMER, Sector 12, Chandigarh',
      regStanding: 'NMC / MCI Registered · Department of Pediatrics',
      navHeading: 'Navigation',
      inquiriesHeading: 'Consultation & Inquiries',
      inquiriesDesc: 'For patient consultation enquiries or colleague physician referrals, access the dedicated digital intake forms:',
      enquiryBtn: 'Submit Consultation Enquiry',
      doctorPortalBtn: 'Referring Doctor Portal',
      disclaimerTitle: 'Medical Disclaimer:',
      disclaimerText: 'The educational content, calculators, and clinical guides provided on this medical portfolio website are intended solely for general parental information and caregiver education. They do not constitute individualized medical advice, clinical diagnosis, or therapeutic instruction. Always consult a qualified pediatric endocrinologist or your primary pediatrician for any health concerns regarding your child.',
      emergencyTitle: 'Emergency Services:',
      emergencyText: 'In cases of childhood metabolic emergencies, diabetic ketoacidosis (DKA), severe hypoglycemia, or acute trauma, please proceed directly to the 24-hour Advanced Pediatrics Centre (APC) Emergency Unit, PGIMER, Sector 12, Chandigarh, or call your nearest ambulance emergency service immediately.',
      rightsReserved: '© 2026 Dr. Rakesh Kumar · Advanced Pediatrics Centre, PGIMER Chandigarh. All rights reserved.',
      cityCountry: 'Chandigarh, India',
    },
  },
  hi: {
    nav: {
      doctorName: 'डॉ. राकेश कुमार',
      specialtySub: 'पीडियाट्रिक एंडोक्रिनोलॉजी · पीजीआईएमईआर चंडीगढ़',
      about: 'परिचय',
      areasOfCare: 'उपचार क्षेत्र',
      growthCalculator: 'विकास कैलकुलेटर',
      patientResources: 'रोगी संसाधन',
      publications: 'शोध एवं प्रकाशन',
      contactOpd: 'संपर्क एवं ओपीडी',
      appointmentEnquiry: 'परामर्श पूछताछ',
      submitEnquiry: 'परामर्श हेतु पूछताछ भेजें',
      liveConsult: 'लाइव वीडियो परामर्श',
      parentFaqs: 'अभिभावक सामान्य प्रश्न',
      nutritionCalculator: 'पोषण एवं इंसुलिन',
      clinicalUpdates: 'चिकित्सीय समाचार',
      languageToggle: 'भाषा',
    },
    hero: {
      eyebrowSub: 'पीडियाट्रिक एंडोक्रिनोलॉजी',
      eyebrowInstitute: 'पीजीआईएमईआर चंडीगढ़',
      eyebrowType: 'तृतीयक स्तर की चिकित्सा',
      heading: 'स्वस्थ शारीरिक विकास का संबल। सुरक्षित बचपन का भविष्य।',
      intro: 'शिशुओं, बच्चों और किशोरों में शारीरिक विकास की गति (कद), टाइप 1 डायबिटीज़ (बाल मधुमेह), थायरॉइड तथा हार्मोनल असंतुलन के लिए समर्पित विशेषज्ञ परामर्श। हम साक्ष्य-आधारित आधुनिक चिकित्सा और पारिवारिक संवेदनशीलता के साथ उपचार प्रदान करते हैं।',
      ctaCare: 'उपचार क्षेत्र देखें',
      ctaResources: 'रोगी संसाधन एवं मार्गदर्शिका',
      ctaEnquiry: 'परामर्श पूछताछ',
      verifiedCreds: 'सत्यापित संस्थागत संबद्धता एवं साख',
      centerName: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC)',
      centerLoc: 'पीजीआईएमईआर, सेक्टर 12, चंडीगढ़',
      regTitle: 'पंजीकृत चिकित्सा विशेषज्ञ',
      regDesc: 'राष्ट्रीय चिकित्सा आयोग (एनएमसी / एमसीआई सत्यापित)',
      visualCaptionTitle: 'संवेदनशील बाल चिकित्सा परामर्श',
      visualCaptionDesc: 'प्रत्येक बच्चे की आयु व विकास स्तर के अनुरूप शारीरिक माप (ऑक्सोलॉजी), मधुमेह शिक्षण और हार्मोनल संतुलन की निरंतर देखभाल।',
      floatingRole: 'पीडियाट्रिक एंडोक्रिनोलॉजी विशेषज्ञ',
      ribbonSpecialtyLabel: 'विशिष्टता',
      ribbonSpecialtyValue: 'पीडियाट्रिक एंडोक्रिनोलॉजी',
      ribbonSpecialtySub: 'शारीरिक विकास एवं हार्मोनल विकार',
      ribbonBaseLabel: 'संस्थान',
      ribbonBaseValue: 'पीजीआई चंडीगढ़ (PGIMER)',
      ribbonBaseSub: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC)',
      ribbonAudienceLabel: 'रोगी वर्ग',
      ribbonAudienceValue: 'शिशु, बच्चे एवं किशोर',
      ribbonAudienceSub: 'आयु 0 से 18 वर्ष',
      ribbonLocLabel: 'स्थान',
      ribbonLocValue: 'सेक्टर 12, चंडीगढ़',
      ribbonLocSub: 'भारत · पिनकोड 160012',
    },
    about: {
      eyebrowProfile: 'सत्यापित चिकित्सक विवरण',
      eyebrowPractice: 'शैक्षणिक एवं नैदानिक कार्य',
      heading: 'डॉ. राकेश कुमार के विषय में',
      subheading: 'भारत के शीर्ष चिकित्सा संस्थान पीजीआईएमईआर चंडीगढ़ में समर्पित बाल अंतःस्रावी (पीडियाट्रिक एंडोक्राइन) विशेषज्ञ।',
      p1: 'डॉ. राकेश कुमार पोस्टग्रेजुएट इंस्टीट्यूट ऑफ मेडिकल एजुकेशन एंड रिसर्च (पीजीआईएमईआर), चंडीगढ़ के एडवांस्ड पीडियाट्रिक्स सेंटर (APC) में पीडियाट्रिक एंडोक्रिनोलॉजी के विशेषज्ञ के रूप में कार्यरत हैं। बाल शारीरिक विकास (ऑक्सोलॉजी), बाल डायबिटीज़ और किशोरावस्था से जुड़े हार्मोनल विकारों के सटीक निदान एवं दीर्घकालिक प्रबंधन में उनका विशेष अनुभव है।',
      p2: 'बच्चों में हार्मोनल असंतुलन केवल रक्त परीक्षण की संख्याओं तक सीमित नहीं होता, बल्कि यह उनके शारीरिक कद, मस्तिष्क के विकास, यौन परिपक्वता और आत्मविश्वास को गहराई से प्रभावित करता है। डॉ. कुमार का मुख्य दृष्टिकोण सामान्य जैविक भिन्नता (जैसे देर से होने वाला विकास) और वास्तविक हार्मोनल कमी (जैसे ग्रोथ हार्मोन विकार) के बीच समय पर स्पष्ट विभेद करना है ताकि अनावश्यक दवाओं से बचा जा सके।',
      quote: '“बाल चिकित्सा में हमारा दायित्व केवल रिपोर्ट देखने तक सीमित नहीं है। हमारा संकल्प है कि परिवार को पूरी जानकारी मिले, बच्चे का स्कूल में आत्मविश्वास बना रहे और हर बच्चा अपनी आनुवंशिक ऊंचाई व पूर्ण क्षमता प्राप्त करे।”',
      quoteEthos: '— चिकित्सा दर्शन · डॉ. राकेश कुमार',
      p3: 'पीजीआईएमईआर चंडीगढ़ में उपचार बाल आहार विशेषज्ञों, मधुमेह शिक्षकों और बाल रोग विशेषज्ञों की बहुविषयक (मल्टी-डिसिप्लिनरी) टीम के साथ मिलकर प्रदान किया जाता है ताकि परिवार को घर पर प्रबंधन का पूरा भरोसा मिल सके।',
      val1Title: 'साक्ष्य-आधारित चिकित्सा',
      val1Desc: 'इंडियन सोसाइटी फॉर पीडियाट्रिक एंड एडोलेसेंट एंडोक्रिनोलॉजी (ISPAE) और अंतरराष्ट्रीय दिशा-निर्देशों का पूर्ण अनुपालन।',
      val2Title: 'परिवार का सशक्तिकरण',
      val2Desc: 'घर पर इंसुलिन प्रबंधन, कद की निगरानी और दवा की सटीक मात्रा की सरल भाषा में संपूर्ण जानकारी।',
      instCardTitle: 'संस्थागत संबद्धता',
      instCardName: 'पीजीआईएमईआर चंडीगढ़',
      instCardDesc: 'राष्ट्रीय महत्व का संस्थान (Institute of National Importance - INI)',
      item1Title: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC)',
      item1Desc: 'पीडियाट्रिक एंडोक्रिनोलॉजी प्रभाग, बाल रोग विभाग, सेक्टर 12, चंडीगढ़',
      item2Title: 'चिकित्सा पंजीकरण एवं नियामक मान्यता',
      item2Desc: 'राष्ट्रीय चिकित्सा आयोग (एनएमसी / पूर्व एमसीआई) के अंतर्गत पंजीकृत चिकित्सक',
      item3Title: 'शोध एवं शैक्षणिक योगदान',
      item3Desc: 'राष्ट्रीय व अंतरराष्ट्रीय शोध पत्रिकाओं में बाल हार्मोन व विकास पर प्रकाशित क्लिनिकल अध्ययन',
      noticeTitle: 'चिकित्सा साख पर स्पष्टीकरण',
      noticeDesc: 'यह प्रोफ़ाइल केवल पीजीआईएमईआर चंडीगढ़ की आधिकारिक संस्थागत संबद्धता प्रस्तुत करती है। किसी भी अतिरिक्त निजी विवरण को आधिकारिक सत्यापन के उपरांत ही अद्यतन किया जाता है।',
      viewOpdBtn: 'ओपीडी क्लिनिक समय एवं दिशा-निर्देश देखें',
      doctorPhotoCaption: 'डॉ. राकेश कुमार · पीडियाट्रिक एंडोक्रिनोलॉजी विशेषज्ञ, पीजीआईएमईआर चंडीगढ़',
      emailDoctorCta: 'drrakesh.pgi@gmail.com',
    },
    areasOfCare: {
      eyebrow: 'विशिष्ट उपचार क्षेत्र',
      heading: 'पीडियाट्रिक एंडोक्राइन क्लिनिकल सेवाएं',
      subheading: 'शिशुओं, बच्चों और किशोरों में हार्मोन, कद व चयापचय विकारों के लिए विश्वसनीय नैदानिक प्रक्रिया।',
      showingText: 'उपचार मार्गदर्शिकाएं',
      bannerEyebrow: 'शारीरिक विकास एवं वृद्धि विज्ञान',
      bannerHeading: 'शैशवावस्था से किशोरावस्था तक विकास यात्रा',
      bannerDesc: 'मानक ग्रोथ चार्ट पर नियमित माप से ग्रोथ हार्मोन की कमी, थायरॉइड समस्या या पोषण संबंधी कमियों की शुरुआती पहचान संभव होती है।',
      bannerCta: 'अनुमानित वयस्क कद की गणना करें',
      categories: {
        all: 'सभी विषय',
        growth: 'कम कद व शारीरिक विकास',
        diabetes: 'टाइप 1 डायबिटीज़',
        thyroid: 'थायरॉइड रोग',
        puberty: 'यौवनारंभ (प्यूबर्टी)',
        adrenalBone: 'एड्रिनल व अस्थि रोग',
        metabolic: 'मेटाबॉलिक स्वास्थ्य',
      },
      protocolLabel: 'बाल चिकित्सा प्रोटोकॉल',
      diagnosticTitle: 'प्रमुख जांच एवं परीक्षण:',
      viewGuideBtn: 'संपूर्ण क्लिनिकल गाइड देखें',
      enquireBtn: 'पूछताछ',
      modalSubtitle: 'विस्तृत नैदानिक मूल्यांकन मार्गदर्शिका',
      modalSymptoms: 'ध्यान देने योग्य लक्षण',
      modalDiagnostic: 'अनुशंसित नैदानिक परीक्षण प्रक्रिया',
      modalGuidance: 'अभिभावकों के लिए व्यावहारिक सलाह',
      modalWhenRefer: 'विशेषज्ञ परामर्श कब आवश्यक है:',
      modalClose: 'गाइड बंद करें',
      modalEnquireCondition: 'इस समस्या हेतु परामर्श पूछताछ भेजें',
    },
    calculator: {
      eyebrow: 'बाल विकास टूल',
      heading: 'बाल विकास एवं अनुमानित कद कैलकुलेटर',
      subheading: 'माता-पिता की ऊंचाई (टैनर फॉर्मूला) के आधार पर बच्चे का आनुवंशिक वयस्क कद जानें एवं वार्षिक विकास गति समझें।',
      sexLabel: 'बच्चे का लिंग',
      boy: 'बालक (लड़का)',
      girl: 'बालिका (लड़की)',
      unitLabel: 'माप इकाई',
      metric: 'सेंटीमीटर (cm)',
      imperial: 'फीट व इंच (ft/in)',
      fatherStature: 'पिता की ऊंचाई',
      motherStature: 'माता की ऊंचाई',
      currentContext: 'बच्चे की वर्तमान आयु व ऊंचाई (वैकल्पिक)',
      ageLabel: 'आयु (वर्षों में)',
      heightLabel: 'वर्तमान ऊंचाई',
      tannerNote: '* टैनर मिड-पेरेंटल हाइट अंतरराष्ट्रीय स्तर पर मान्य वैज्ञानिक सूत्र है। बालकों हेतु: (पिता + माता + 13 सेमी) / 2। बालिकाओं हेतु: (पिता + माता - 13 सेमी) / 2। अपेक्षित सीमा मध्यबिंदु से ± 5 सेमी होती है।',
      projectionTitle: 'विकास प्रक्षेपण',
      estimatedTitle: 'अनुमानित आनुवंशिक वयस्क कद',
      forLabel: 'के लिए अनुमानित ऊंचाई',
      midpointLabel: 'मध्य बिंदु',
      targetRangeLabel: 'अनुमानित लक्ष्य सीमा (± 5 सेमी):',
      growthVelocityTitle: 'सामान्य वार्षिक विकास गति',
      velocity1to2: '10 – 12 सेमी / वर्ष',
      velocity4toPuberty: '5 – 6 सेमी / वर्ष',
      velocityGirlsPuberty: '8 – 9 सेमी / वर्ष',
      velocityBoysPuberty: '9 – 10.5 सेमी / वर्ष',
      consultWhenTitle: 'डॉ. राकेश कुमार से कब संपर्क करें:',
      consultWhenDesc: 'यदि आपका बच्चा 4 से 10 वर्ष की आयु में प्रति वर्ष 4 सेमी से कम बढ़ रहा है, या उसका कद सहपाठियों से निरंतर कम हो रहा है, तो पीजीआई चंडीगढ़ में स्टेडियोमेट्रिक जांच हेतु परामर्श लें।',
    },
    hypoGuide: {
      badge: 'टाइप 1 डायबिटीज़ बाल आपातकालीन प्रोटोकॉल',
      heading: 'हाइपोग्लाइसीमिया (निम्न शुगर) के लिए "15 का नियम"',
      subheading: 'अभिभावकों, शिक्षकों एवं देखभालकर्ताओं हेतु व्यावहारिक दिशा-निर्देश।',
      stepPrefix: 'चरण',
      targetLabel: 'लक्ष्य: > 70 mg/dL',
      mandatoryActions: 'अनिवार्य कदम:',
      prevStep: '← पिछला चरण',
      nextStep: 'अगला चरण →',
    },
    resources: {
      eyebrow: 'अभिभावक शिक्षण एवं साहित्य',
      heading: 'सत्यापित रोगी एवं अभिभावक मार्गदर्शिका',
      subheading: 'शिशु व बाल हार्मोनल स्वास्थ्य, इंसुलिन प्रबंधन तथा घरेलू देखभाल की सरल व साक्ष्य-आधारित मार्गदर्शिकाएं।',
      deskBadge: 'आधिकारिक बाल स्वास्थ्य साहित्य',
      deskTitle: 'गूगल डॉक्स एवं प्रिंट-अनुकूल प्रारूप में उपलब्ध सामग्री',
      deskDesc: 'एंडोक्राइन समस्या से ग्रस्त हर बच्चे के परिवार को स्पष्ट, बिना किसी भ्रम की चिकित्सा जानकारी मिलनी चाहिए। ये मार्गदर्शिकाएं घर पर पढ़ने, स्कूल में साझा करने और स्वास्थ्य फ़ाइल में सुरक्षित रखने हेतु तैयार की गई हैं।',
      directAccess: 'सीधी उपलब्धता:',
      cloudView: 'गूगल डॉक्स क्लाउड व्यू',
      printOpt: 'प्रिंट-अनुकूल लेआउट',
      updatedYear: 'नवीनतम 2026 गाइडलाइन्स',
      readFullBtn: 'पूरी गाइड पढ़ें',
      googleDocsBtn: 'गूगल डॉक्स',
      shareTooltip: 'लिंक कॉपी करें',
      readerPlanSuffix: 'केयर प्लान',
      printBtn: 'प्रिंट करें',
      readerDisclaimerTitle: 'चिकित्सा सूचना नोटिस:',
      readerDisclaimerText: 'यह सामग्री केवल सामान्य अभिभावक जागरूकता के लिए है और किसी विशेषज्ञ चिकित्सक के व्यक्तिगत परामर्श का विकल्प नहीं है।',
      closeReader: 'बंद करें',
      haveQuestions: 'कोई प्रश्न है? क्लिनिक से संपर्क करें →',
    },
    publications: {
      eyebrow: 'अकादमिक योगदान',
      heading: 'शोध एवं क्लिनिकल प्रकाशन',
      subheading: 'पीजीआईएमईआर चंडीगढ़ के पीडियाट्रिक एंडोक्रिनोलॉजी प्रभाग से बाल विकास, मधुमेह एवं थायरॉइड पर प्रमुख शोध अध्ययन।',
      allPubs: 'सभी शोध पत्र',
      pubmedBtn: 'पबमेड (PubMed) खोज',
      scholarBtn: 'गूगल स्कॉलर',
      authorsLabel: 'लेखक व संस्था:',
      viewRecord: 'प्रकाशक विवरण देखें',
      noticeTitle: 'शोध साहित्य नोट:',
      noticeText: 'यह संकलन पीजीआईएमईआर चंडीगढ़ के एडवांस्ड पीडियाट्रिक्स सेंटर के अंतर्गत संचालित क्लिनिकल अध्ययनों को दर्शाता है। संपूर्ण लेख पबमेड एवं मेडिकल लाइब्रेरी पोर्टल्स पर उपलब्ध हैं।',
    },
    enquiry: {
      eyebrow: 'क्लिनिकल प्राथमिकता एवं समय निर्धारण',
      heading: 'परामर्श एवं अपॉइंटमेंट पूछताछ',
      subheading: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC), पीजीआईएमईआर चंडीगढ़ में डॉ. राकेश कुमार से बाल एंडोक्राइन परामर्श हेतु विवरण दर्ज करें।',
      emergencyTitle: 'आपातकालीन चेतावनी (अति-गंभीर स्थिति के लिए नहीं):',
      emergencyText: 'यदि बच्चे को अत्यधिक निम्न शुगर (बेहोशी या भ्रम), डायबिटिक कीटोएसिडोसिस (तेज़ गहरी सांसें, बार-बार उल्टी, अत्यधिक शिथिलता) या गंभीर संकट हो, तो तुरंत पीजीआई चंडीगढ़ के 24-घंटे खुले APC इमरजेंसी विभाग अथवा निकटतम आपातकालीन अस्पताल ले जाएं।',
      regSuccess: 'परामर्श पूछताछ सफलतापूर्वक दर्ज हुई',
      refId: 'संदर्भ संख्या (ID):',
      patientNameLabel: 'मरीज का नाम:',
      concernLabel: 'प्रमुख समस्या:',
      guardianLabel: 'अभिभावक:',
      formatLabel: 'परामर्श माध्यम:',
      whatToBringTitle: 'पीजीआई चंडीगढ़ क्लिनिक आते समय आवश्यक दस्तावेज़:',
      printSummary: 'पुष्टि रसीद प्रिंट करें',
      doneBtn: 'संपन्न',
      sec1: 'भाग 1: बच्चे का विवरण एवं स्वास्थ्य समस्या',
      autosaved: 'ड्राफ्ट स्थानीय रूप से सुरक्षित है',
      childName: 'बच्चे का पूरा नाम *',
      childAge: 'बच्चे की आयु (वर्ष/माह) *',
      childGender: 'लिंग *',
      guardianName: 'माता/पिता अथवा अभिभावक का नाम *',
      guardianPhone: 'मोबाइल नंबर *',
      guardianEmail: 'ईमेल पता *',
      concernDropdown: 'प्रमुख अंतःस्रावी (हार्मोन) समस्या *',
      durationLabel: 'समस्या की अनुमानित अवधि',
      formatPreference: 'परामर्श प्राथमिकता',
      testsCheckbox: 'पूर्व में हार्मोन जांच, रक्त परीक्षण अथवा एक्स-रे कराए जा चुके हैं',
      testsPlaceholder: 'उदा. बोन एज एक्स-रे, टीएसएच (TSH 6.8 mIU/L), एचबीए1सी (HbA1c 8.2%) आदि',
      referringDocLabel: 'रेफर करने वाले डॉक्टर / क्लिनिक का नाम (वैकल्पिक)',
      preferredDateLabel: 'सुविधाजनक दिन / समय सीमा',
      additionalNotesLabel: 'अतिरिक्त चिकित्सीय विवरण / डॉक्टर के लिए प्रश्न',
      notesPlaceholder: 'कोई विशेष लक्षण, जन्म के समय का वजन, या परिवार में थायरॉइड/डायबिटीज़ का इतिहास साझा करें...',
      privacyNote: 'आपकी स्वास्थ्य जानकारी पूर्णतः सुरक्षित व गोपनीय रखी जाती है।',
      cancelBtn: 'रद्द करें',
      submitBtn: 'परामर्श पूछताछ जमा करें',
    },
    contact: {
      eyebrow: 'अस्पताल पता एवं ओपीडी समय',
      heading: 'क्लिनिक संपर्क एवं मार्ग निर्देश',
      subheading: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC) पीजीआईएमईआर चंडीगढ़ के ओपीडी परामर्श संबंधी आधिकारिक जानकारी।',
      card1Title: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC)',
      card1Desc: 'पीडियाट्रिक एंडोक्रिनोलॉजी प्रभाग, बाल रोग विभाग, पीजीआईएमईआर, सेक्टर 12, चंडीगढ़, 160012, भारत।',
      card1Foot: 'परिसर पहचान: APC मुख्य द्वार के समीप',
      card2Title: 'ओपीडी कार्यदिवस एवं पंजीकरण',
      card2DaysLabel: 'ओपीडी दिन:',
      card2DaysVal: 'विशेष बाल एंडोक्राइन क्लिनिक',
      card2TokenLabel: 'प्रातः टोकन काउंटर:',
      card2TokenVal: 'प्रातः 08:00 बजे से 11:00 बजे तक',
      card2HoursLabel: 'परामर्श समय:',
      card2HoursVal: 'प्रातः 09:00 बजे से प्रारंभ',
      card2Foot: '* बायोमेट्रिक व कार्ड पंजीकरण हेतु समय पर पहुंचें',
      card3Title: 'सहायता एवं संपर्क केंद्र',
      card3PhoneLabel: 'पीजीआई ईपीएबीएक्स स्विचबोर्ड:',
      card3PhoneVal: '+91 172 2747585 / 2746018',
      card3EmailLabel: 'आधिकारिक क्लिनिकल एवं अकादमिक ईमेल:',
      card3EmailVal: 'drrakesh.pgi@gmail.com',
      card3DeskLabel: 'बाल रोग विभाग डेस्क:',
      card3DeskVal: 'APC द्वितीय तल रिसेप्शन',
      card3PortalLabel: 'ऑनलाइन अपॉइंटमेंट पोर्टल:',
      card3PortalVal: 'pgimer.edu.in ओपीडी सेवाएं',
      card3DoctorPortal: 'चिकित्सक रेफरल पोर्टल →',
      mapTitle: 'पीजीआईएमईआर चंडीगढ़, सेक्टर 12 (गूगल मैप)',
      mapOpen: 'गूगल मैप में खोलें',
      mapTransit: 'यातायात: चंडीगढ़ बस स्टैंड आईएसबीटी-17 से 3.5 किमी एवं आईएसबीटी-43 से 7 किमी।',
      mapParking: 'APC भवन के सामने पर्याप्त पार्किंग उपलब्ध।',
      checkTitle: 'प्रथम आगमन हेतु आवश्यक सूची',
      checkSub: 'परामर्श को सुगम बनाने हेतु कृपया निम्न बिंदुओं का ध्यान रखें:',
      check1Title: 'केंद्रीय सीआर पंजीकरण:',
      check1Desc: 'भूतल पर स्थित APC पंजीकरण काउंटर से केंद्रीय सीआर नंबर कार्ड प्राप्त करें।',
      check2Title: 'शारीरिक माप एवं स्टेडियोमेट्री:',
      check2Desc: 'डॉक्टर से मिलने से पूर्व बच्चे का सही वजन एवं ऊंचाई प्रमाणित उपकरणों से मापी जाएगी।',
      check3Title: 'बाल पोषण व जलपान:',
      check3Desc: 'जब तक खाली पेट जांच न कही गई हो, सुनिश्चित करें कि बच्चे ने सुबह हल्का नाश्ता किया हो।',
      check4Title: '24x7 आपातकालीन सेवा:',
      check4Desc: 'अति-गंभीर स्थिति में सीधे APC इमरजेंसी गेट पर जाएं, जो दिन-रात 24 घंटे खुला रहता है।',
      checkSubmitCta: 'पहले परामर्श पूछताछ भेजें',
      faqEyebrow: 'अभिभावकों के सामान्य प्रश्न',
      faqHeading: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    },
    doctorReferral: {
      badge: 'सहयोगी चिकित्सक रेफरल पोर्टल',
      heading: 'चिकित्सक-से-चिकित्सक रोगी रेफरल',
      subheading: 'जटिल बाल एंडोक्राइन मामलों को डॉ. राकेश कुमार (पीजीआई चंडीगढ़) के पास रेफर करने वाले डॉक्टरों के लिए।',
      memoGenerated: 'रेफरल मेमो तैयार हो गया',
      refCodeLabel: 'रेफरल कोड:',
      memoGreeting: 'धन्यवाद। कृपया यह रेफरल कोड या इस पर्ची का प्रिंट रोगी के परिवार को दें जिसे वे पीजीआईएमईआर APC काउंटर पर प्रस्तुत कर सकें।',
      printMemo: 'रेफरल पर्ची प्रिंट करें',
      close: 'बंद करें',
      secDoctor: 'रेफर करने वाले डॉक्टर का विवरण',
      doctorName: 'डॉक्टर का नाम *',
      regNo: 'राज्य / एनएमसी पंजीकरण संख्या',
      hospital: 'अस्पताल / क्लिनिक / शहर *',
      phoneEmail: 'फोन / ईमेल *',
      secPatient: 'रोगी एवं केस सारांश',
      patientName: 'रोगी (बच्चे) का नाम *',
      patientAge: 'आयु *',
      patientSex: 'लिंग',
      clinicalIndication: 'रेफरल का प्रमुख कारण *',
      findingsNotes: 'प्रमुख जांच रिपोर्ट एवं क्लिनिकल नोट्स',
      cancel: 'रद्द करें',
      generateSlip: 'रेफरल पर्ची तैयार करें',
    },
    liveConsultancy: {
      badge: 'लाइव टेली-कंसल्टेंसी एवं वर्चुअल ओपीडी',
      title: 'ऑनलाइन लाइव वीडियो परामर्श पोर्टल',
      sub: 'पीजीआईएमईआर चंडीगढ़ के राष्ट्रीय टेलीमेडिसिन दिशा-निर्देशों के अनुरूप सुरक्षित, एचडी एन्क्रिप्टेड वीडियो परामर्श।',
      instantSlot: 'तत्काल लाइव रूम में प्रवेश करें',
      scheduleSlot: 'समय स्लॉट बुक करें',
      selectReason: 'परामर्श का मुख्य कारण',
      childName: 'बच्चे का पूरा नाम',
      childAge: 'बच्चे की आयु (वर्ष)',
      guardianPhone: 'अभिभावक का फोन नंबर',
      step1Title: 'रोगी एवं स्लॉट चयन',
      step2Title: 'उपकरण व नेटवर्क जांच',
      step3Title: 'लाइव टेली-कंसल्टेंसी रूम',
      deviceCheckTitle: 'ऑडियो एवं वीडियो तत्परता जांच',
      cameraCheck: 'कैमरा फीड सक्रिय एवं सही स्थिति में',
      micCheck: 'माइक्रोफोन ठीक से काम कर रहा है',
      internetCheck: 'सुरक्षित 256-बिट एन्क्रिप्टेड कनेक्शन तैयार',
      joinRoomBtn: 'परामर्श कक्ष में प्रवेश करें',
      waitingForDoctor: 'डॉ. राकेश कुमार के सत्र में जुड़ने की प्रतीक्षा की जा रही है...',
      doctorConnected: 'डॉ. राकेश कुमार परामर्श सत्र में उपस्थित हैं',
      inCallDuration: 'सत्र की अवधि',
      muteBtn: 'म्यूट करें',
      unmuteBtn: 'अनम्यूट करें',
      videoOnBtn: 'वीडियो चालू',
      videoOffBtn: 'वीडियो बंद',
      endCallBtn: 'परामर्श समाप्त करें',
      chatTab: 'लाइव क्लिनिकल चैट',
      reportsTab: 'जांच रिपोर्ट एवं रिकॉर्ड',
      typeMessage: 'संदेह, लक्षण अथवा संदेश लिखें...',
      sendBtn: 'भेजें',
      uploadLab: 'रिपोर्ट अपलोड करें (PDF/JPG)',
      prescriptionTitle: 'परामर्श सारांश एवं डिजिटल परामर्श पर्ची',
      printPrescription: 'परामर्श सारांश प्रिंट करें',
      closeBtn: 'सत्र समाप्त करें',
    },
    parentFaq: {
      badge: 'अभिभावक मार्गदर्शन एवं परामर्श संबंधी प्रश्न',
      heading: 'अभिभावकों के लिए सामान्य प्रश्न एवं समाधान',
      subheading: 'पहली बार बाल हार्मोन ओपीडी में आने की तैयारी, नियमित फॉलो-अप अंतराल, विशिष्ट परीक्षणों एवं दवाओं के सुरक्षित रख-रखाव से जुड़े संपूर्ण उत्तर।',
      searchPlaceholder: 'कीवर्ड से खोजें (जैसे: फास्टिंग, एक्स-रे, ग्रोथ हार्मोन, फॉलो-अप)...',
      searchMatchesFound: 'प्रश्न आपकी खोज से मेल खाते हैं',
      clearSearch: 'खोज हटाएं',
      noResults: 'कोई मेल खाता प्रश्न नहीं मिला',
      noResultsSub: 'कृपया सरल शब्द जैसे "जांच", "कद", "थायरॉइड" लिखकर खोजें अथवा श्रेणी फिल्टर रीसेट करें।',
      resetFilter: 'फिल्टर रीसेट करें',
      expandAll: 'सभी खोलें',
      collapseAll: 'सभी समेटें',
      categories: {
        all: 'सभी प्रश्न',
        firstVisit: 'प्रथम भेंट व तैयारी',
        followUp: 'फॉलो-अप व विकास दर',
        tests: 'नैदानिक परीक्षण',
        medications: 'दवाएं व दैनिक देखभाल',
        teleconsult: 'दूरदराज के मरीज व टेली-केयर',
      },
      checklistBtn: 'अपॉइंटमेंट बैग पैकिंग चेकलिस्ट',
      checklistModalTitle: 'अभिभावक चेकलिस्ट: ओपीडी के दिन क्या साथ रखें',
      checklistModalSub: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC), पीजीआई चंडीगढ़ आने से पहले इन आवश्यक कागजातों और वस्तुओं की जांच कर लें।',
      checklistClose: 'चेकलिस्ट बंद करें',
      checklistPrint: 'चेकलिस्ट प्रिंट करें',
      checklistTip: 'सुझाव: एक्स-रे की मूल प्लास्टिक शीट और माता-पिता दोनों की नापी गई ऊंचाई साथ रखने से निदान में बहुत सुविधा होती है।',
      keyTakeawayTitle: 'अभिभावकों के लिए मुख्य निष्कर्ष:',
      stillHaveQuestionsTitle: 'क्या आपके मन में बच्चे के उपचार को लेकर कोई विशिष्ट प्रश्न है?',
      stillHaveQuestionsDesc: 'यदि आपके बच्चे का परामर्श निर्धारित है, दूरदराज से फॉलो-अप की सलाह चाहिए अथवा डॉ. राकेश कुमार से मार्गदर्शन लेना चाहते हैं:',
      bookConsultBtn: 'परामर्श पूछताछ भेजें',
      liveVideoBtn: 'लाइव टेलीकंसल्टेंसी से जुड़ें',
      emergencyCardTitle: 'आपातकालीन चयापचय व हाइपो चेतावनी',
      emergencyCardDesc: 'अत्यधिक निम्न शुगर, लगातार उल्टी व कीटोन्स अथवा एड्रिनल संकट में ओपीडी बुकिंग का इंतजार न करें; सीधे 24 घंटे खुली एपीसी (APC) इमरजेंसी पहुंचें।',
      emergencyActionBtn: 'हाइपो इमरजेंसी गाइड देखें',
    },
    footer: {
      roleSub: 'पीडियाट्रिक एंडोक्रिनोलॉजी एवं डायबिटीज़ विशेषज्ञ',
      bio: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC), पीजीआईएमईआर चंडीगढ़ में शिशुओं, बच्चों एवं किशोरों के लिए करुणामयी, साक्ष्य-आधारित बाल हार्मोनल चिकित्सा।',
      address: 'एडवांस्ड पीडियाट्रिक्स सेंटर, पीजीआईएमईआर, सेक्टर 12, चंडीगढ़',
      regStanding: 'एनएमसी / एमसीआई पंजीकृत · बाल रोग विभाग',
      navHeading: 'नेविगेशन',
      inquiriesHeading: 'परामर्श एवं पूछताछ',
      inquiriesDesc: 'मरीज परामर्श पूछताछ अथवा डॉक्टर रेफरल हेतु डिजिटल फॉर्म का उपयोग करें:',
      enquiryBtn: 'परामर्श पूछताछ भेजें',
      doctorPortalBtn: 'रेफरिंग डॉक्टर पोर्टल',
      disclaimerTitle: 'चिकित्सा अस्वीकरण (Disclaimer):',
      disclaimerText: 'इस वेबसाइट पर उपलब्ध सामग्री, कैलकुलेटर एवं मार्गदर्शिकाएं केवल सामान्य अभिभावक जागरूकता व शैक्षणिक उद्देश्य से हैं। यह किसी व्यक्तिगत चिकित्सीय परामर्श का स्थान नहीं लेतीं। अपने बच्चे के स्वास्थ्य संबंधी निर्णय के लिए सदैव योग्य बाल एंडोक्राइनोलॉजिस्ट अथवा बाल रोग विशेषज्ञ से परामर्श लें।',
      emergencyTitle: 'आपातकालीन सेवाएं:',
      emergencyText: 'बाल चयापचय संकट, डायबिटिक कीटोएसिडोसिस, अत्यधिक निम्न शुगर या गंभीर चोट के मामलों में सीधे 24-घंटे खुले APC इमरजेंसी यूनिट, पीजीआईएमईआर सेक्टर 12, चंडीगढ़ पहुंचें या तत्काल एम्बुलेंस को कॉल करें।',
      rightsReserved: '© 2026 डॉ. राकेश कुमार · एडवांस्ड पीडियाट्रिक्स सेंटर, पीजीआईएमईआर चंडीगढ़। सर्वाधिकार सुरक्षित।',
      cityCountry: 'चंडीगढ़, भारत',
    },
  },
};
