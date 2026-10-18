export interface ClinicalCondition {
  id: string;
  title: string;
  category: 'growth' | 'diabetes' | 'thyroid' | 'puberty' | 'adrenal-bone' | 'metabolic';
  shortDescription: string;
  fullOverview: string;
  commonSymptoms: string[];
  diagnosticSteps: string[];
  parentGuidance: string[];
  whenToRefer: string;
}

export interface PatientResource {
  id: string;
  title: string;
  category: 'Diabetes' | 'Growth' | 'Thyroid' | 'Puberty' | 'Nutrition';
  description: string;
  readTime: string;
  targetAudience: string;
  googleDocsUrl?: string;
  sections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
  }[];
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string;
  category: 'Growth' | 'Type 1 Diabetes' | 'Thyroid & Adrenal' | 'Puberty';
  pmidPlaceholder?: string;
  doiPlaceholder?: string;
  abstractSummary: string;
}

export interface AppointmentFormData {
  childName: string;
  childAge: string;
  childGender: 'Male' | 'Female' | 'Other';
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  concernCategory: string;
  symptomDuration: string;
  previousTestsDone: boolean;
  previousTestsDetails: string;
  referringDoctor: string;
  preferredConsultationType: 'APC PGIMER OPD (In-Person)' | 'Teleconsultation Review';
  preferredDate: string;
  additionalNotes: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ParentFAQItem {
  id: string;
  category: 'first-visit' | 'follow-up' | 'tests' | 'medications' | 'teleconsult';
  categoryLabel: string;
  question: string;
  shortSummary: string;
  detailedParagraphs: string[];
  keyTips?: string[];
  highlightBadge?: string;
  actionCta?: {
    label: string;
    actionType: 'enquiry' | 'live-consult' | 'emergency-guide' | 'growth-calc';
  };
}

export interface LiveConsultationSlot {
  id: string;
  time: string;
  sessionType: 'Morning OPD Teleconsult' | 'Afternoon Specialist Clinic' | 'Emergency Priority Review';
  available: boolean;
}

export interface LiveChatMessage {
  id: string;
  sender: 'doctor' | 'patient' | 'system';
  senderName: string;
  text: string;
  timestamp: string;
  isReport?: boolean;
}

export interface LivePrescription {
  consultationId: string;
  date: string;
  childName: string;
  childAge: string;
  diagnosis: string;
  vitals: {
    height?: string;
    weight?: string;
    bloodSugar?: string;
    bloodPressure?: string;
  };
  rxAdvice: string[];
  investigationsOrdered: string[];
  followUp: string;
}
