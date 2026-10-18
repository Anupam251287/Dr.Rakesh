import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTOR_PROFILE } from '../data/clinicalData';
import { LiveChatMessage, LivePrescription, LiveConsultationSlot } from '../types';
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  PhoneOff,
  MessageSquare,
  FileText,
  ShieldCheck,
  Clock,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Share2,
  Printer,
  Sparkles,
  Users,
  Send,
  UploadCloud,
  Mail,
  ChevronRight,
  Stethoscope,
  X,
  Volume2
} from 'lucide-react';
import doctorPortrait from '../assets/images/dr_rakesh_kumar_official_1792210425583.jpg';
import { VoiceInputButton } from './VoiceInputButton';
import { GoogleMeetPortal } from './GoogleMeetPortal';

interface LiveConsultancyProps {
  isModal?: boolean;
  onClose?: () => void;
  prefilledChildName?: string;
  prefilledConcern?: string;
}

const SAMPLE_SLOTS: LiveConsultationSlot[] = [
  { id: 'slot-1', time: '10:00 AM - 10:20 AM', sessionType: 'Morning OPD Teleconsult', available: true },
  { id: 'slot-2', time: '11:00 AM - 11:20 AM', sessionType: 'Morning OPD Teleconsult', available: false },
  { id: 'slot-3', time: '11:30 AM - 11:50 AM', sessionType: 'Morning OPD Teleconsult', available: true },
  { id: 'slot-4', time: '02:30 PM - 02:50 PM', sessionType: 'Afternoon Specialist Clinic', available: true },
  { id: 'slot-5', time: '03:30 PM - 03:50 PM', sessionType: 'Afternoon Specialist Clinic', available: true },
  { id: 'slot-6', time: '04:30 PM - 04:50 PM', sessionType: 'Emergency Priority Review', available: true },
];

export const LiveConsultancy: React.FC<LiveConsultancyProps> = ({
  isModal = false,
  onClose,
  prefilledChildName = '',
  prefilledConcern = '',
}) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'room' | 'google-meet' | 'schedule' | 'guidelines'>('room');

  // Room state
  const [roomStep, setRoomStep] = useState<'check' | 'in_call' | 'post_call'>('check');
  const [childName, setChildName] = useState(prefilledChildName || '');
  const [childAge, setChildAge] = useState('');
  const [concern, setConcern] = useState(prefilledConcern || 'Growth Delay / Short Stature');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');

  // Call media state
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [activeSideTab, setActiveSideTab] = useState<'chat' | 'records' | 'prescription'>('chat');

  // Video element ref
  const userVideoRef = useRef<HTMLVideoElement | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // Chat state
  const [messages, setMessages] = useState<LiveChatMessage[]>([
    {
      id: 'm-1',
      sender: 'system',
      senderName: 'PGIMER Telehealth System',
      text: 'Encrypted end-to-end teleconsultation session initiated with Dr. Rakesh Kumar (APC PGIMER Chandigarh).',
      timestamp: '10:00 AM',
    },
    {
      id: 'm-2',
      sender: 'doctor',
      senderName: 'Dr. Rakesh Kumar',
      text: 'Namaste. Welcome to the Pediatric Endocrinology teleconsultation. Please ensure you have recent growth charts or lab reports ready.',
      timestamp: '10:01 AM',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Schedule booking state
  const [selectedSlot, setSelectedSlot] = useState<string | null>('slot-1');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Digital Prescription state
  const [generatedRx, setGeneratedRx] = useState<LivePrescription | null>(null);

  // Initialize camera for self-view preview
  useEffect(() => {
    let stream: MediaStream | null = null;
    if (roomStep === 'check' || (roomStep === 'in_call' && !isVideoOff)) {
      navigator.mediaDevices
        ?.getUserMedia({ video: true, audio: true })
        .then((s) => {
          stream = s;
          if (userVideoRef.current) {
            userVideoRef.current.srcObject = s;
            userVideoRef.current.play().catch(() => {});
          }
          setCameraActive(true);
          setCameraError(null);
        })
        .catch(() => {
          setCameraActive(false);
          setCameraError('Camera access not granted. Audio/Simulated video fallback enabled.');
        });
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [roomStep, isVideoOff]);

  // Call timer
  useEffect(() => {
    let interval: any = null;
    if (roomStep === 'in_call') {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(interval);
  }, [roomStep]);

  // Format seconds into MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleStartConsultation = () => {
    if (!childName.trim()) {
      alert(language === 'hi' ? 'कृपया बच्चे का नाम दर्ज करें' : "Please enter the child's name");
      return;
    }
    setRoomStep('in_call');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMsg: LiveChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'patient',
      senderName: childName ? `Parent of ${childName}` : 'Parent',
      text: newMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setNewMessage('');

    // Simulate doctor prompt response after 1.5 seconds
    setTimeout(() => {
      const doctorReply: LiveChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'doctor',
        senderName: 'Dr. Rakesh Kumar',
        text: 'Received. Reviewing these clinical details. Let us discuss the growth velocity and current dosage regimen.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, doctorReply]);
    }, 1500);
  };

  const handleEndCall = () => {
    // Generate digital prescription
    const rx: LivePrescription = {
      consultationId: `TELE-RK-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      childName: childName || 'Master Aarav',
      childAge: childAge || '7 Years',
      diagnosis: concern,
      vitals: {
        height: '114.5 cm (10th-25th percentile)',
        weight: '20.2 kg',
        bloodSugar: '112 mg/dL (Random capillary)',
      },
      rxAdvice: [
        'Maintain daily growth and dietary protein record (minimum 1.2 g/kg/day).',
        'Serial 6-monthly standing stadiometer height plotting at local clinic or APC PGIMER.',
        'Complete baseline Serum Free T4, TSH, and Celiac serology (Anti-tTG IgA) before follow-up.',
        'Ensure adequate outdoor daylight exposure and Vitamin D3 supplementation as advised.',
      ],
      investigationsOrdered: [
        'Left Hand & Wrist X-ray (Bone Age Assessment - Greulich & Pyle standard)',
        'Serum IGF-1 & IGFBP-3 Baseline',
        'Morning 8 AM Serum Cortisol (if fatigue persists)',
      ],
      followUp: 'Follow-up in 3 months with repeat height record and laboratory reports.',
    };

    setGeneratedRx(rx);
    setRoomStep('post_call');
  };

  const handleBookSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName.trim() || !parentPhone.trim()) {
      alert(language === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें' : 'Please fill all required fields');
      return;
    }
    const code = `PGIMER-TELE-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(code);
    setBookingConfirmed(true);
  };

  return (
    <div
      id="live-consultancy"
      className={`${
        isModal
          ? 'bg-white rounded-2xl max-w-5xl w-full max-h-[94vh] overflow-y-auto border border-[#10253F]/20 shadow-2xl p-4 sm:p-6 lg:p-8 relative'
          : 'bg-[#FAFCFE] py-16 lg:py-24 border-b border-[#10253F]/10'
      }`}
    >
      <div className={isModal ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        
        {/* Modal Close Button */}
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#718096] hover:text-[#10253F] rounded-lg hover:bg-slate-100 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#10253F]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.liveConsultancy.badge}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#10253F]/70">PGIMER APC Telemedicine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#10253F] tracking-tight">
              {t.liveConsultancy.title}
            </h2>
            <p className="mt-2 text-sm text-[#718096] max-w-2xl">
              {t.liveConsultancy.sub}
            </p>
          </div>

          {/* OPD Live Status & Direct Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white p-3.5 rounded-xl border border-[#10253F]/10 shadow-xs">
            <div className="flex items-center gap-2.5">
              <img
                src={doctorPortrait}
                alt="Dr. Rakesh Kumar"
                className="w-10 h-10 rounded-full object-cover border border-[#168C8C]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-[#10253F]">
                  <span>Dr. Rakesh Kumar</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800">
                    Online
                  </span>
                </div>
                <div className="text-[11px] text-[#718096]">
                  Live Queue: <span className="font-semibold text-[#168C8C]">Token #14</span> (Wait ~8 min)
                </div>
              </div>
            </div>

            <div className="sm:border-l sm:border-[#10253F]/10 sm:pl-3 pt-2 sm:pt-0 text-xs">
              <span className="text-[10px] text-[#718096] block uppercase tracking-wider">Clinical Queries</span>
              <a
                href={`mailto:${DOCTOR_PROFILE.email}`}
                className="font-mono text-[11px] font-medium text-[#168C8C] hover:underline flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                <span>{DOCTOR_PROFILE.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-8 border-b border-[#10253F]/10 overflow-x-auto pb-px">
          <button
            onClick={() => setActiveTab('room')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'room'
                ? 'border-[#168C8C] text-[#168C8C]'
                : 'border-transparent text-[#718096] hover:text-[#10253F]'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>{t.liveConsultancy.instantSlot}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          </button>

          <button
            onClick={() => setActiveTab('google-meet')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'google-meet'
                ? 'border-[#168C8C] text-[#168C8C]'
                : 'border-transparent text-[#718096] hover:text-[#10253F]'
            }`}
          >
            <svg viewBox="0 0 48 48" className="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg">
              <path fill="#00832d" d="M37 24l8.5-6.5v13L37 24z"/>
              <path fill="#0066da" d="M5 33.5V14.5A3.5 3.5 0 0 1 8.5 11h25a3.5 3.5 0 0 1 3.5 3.5v19a3.5 3.5 0 0 1-3.5 3.5h-25A3.5 3.5 0 0 1 5 33.5z"/>
            </svg>
            <span>Google Meet (Multilingual)</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#EBF7F7] text-[#168C8C] border border-[#168C8C]/20">
              6 Languages
            </span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'schedule'
                ? 'border-[#168C8C] text-[#168C8C]'
                : 'border-transparent text-[#718096] hover:text-[#10253F]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{t.liveConsultancy.scheduleSlot}</span>
          </button>

          <button
            onClick={() => setActiveTab('guidelines')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'guidelines'
                ? 'border-[#168C8C] text-[#168C8C]'
                : 'border-transparent text-[#718096] hover:text-[#10253F]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Telehealth Guidelines & Triage</span>
          </button>
        </div>

        {/* TAB 1: LIVE CONSULTATION ROOM */}
        {activeTab === 'room' && (
          <div>
            {/* Step 1: Pre-call Setup & Readiness Test */}
            {roomStep === 'check' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Device & Camera Preview */}
                <div className="lg:col-span-7 bg-[#10253F] rounded-2xl p-6 text-white overflow-hidden shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#D5B77A] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t.liveConsultancy.deviceCheckTitle}</span>
                    </div>
                    <span className="text-xs text-white/70 bg-white/10 px-2.5 py-1 rounded-full font-mono">
                      256-Bit Encrypted
                    </span>
                  </div>

                  {/* Video Preview Box */}
                  <div className="relative aspect-video rounded-xl bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center mb-5">
                    {cameraActive ? (
                      <video
                        ref={userVideoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-6 space-y-3">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#D5B77A]">
                          <Video className="w-8 h-8" />
                        </div>
                        <div className="text-sm font-medium">Self-View Camera Preview</div>
                        <p className="text-xs text-white/60 max-w-sm">
                          {cameraError || 'Camera stream will activate upon device permission. Telehealth audio and encrypted consultation will connect seamlessly.'}
                        </p>
                      </div>
                    )}

                    {/* Overlay Badges */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>HD Ready (720p / 30fps)</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-black/50 backdrop-blur-md p-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Mic className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px]">Audio Meter: Calibrated</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-3 bg-emerald-400 rounded-xs animate-pulse"></span>
                        <span className="w-1.5 h-4 bg-emerald-400 rounded-xs animate-pulse"></span>
                        <span className="w-1.5 h-2 bg-emerald-400 rounded-xs"></span>
                      </div>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5 text-xs text-white/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.liveConsultancy.cameraCheck}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.liveConsultancy.micCheck}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.liveConsultancy.internetCheck}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Patient Triage & Entry Form */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-[#10253F]/10 p-6 sm:p-7 shadow-xs space-y-5">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[#10253F]">
                      {t.liveConsultancy.step1Title}
                    </h3>
                    <p className="text-xs text-[#718096] mt-1">
                      Provide the child’s basic medical information before launching the encrypted telehealth room.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-medium text-[#10253F]">
                          {t.liveConsultancy.childName} *
                        </label>
                        <VoiceInputButton
                          size="sm"
                          targetFieldLabel="child name"
                          placeholder="Speak child's name..."
                          onTranscript={(spoken) => setChildName(spoken)}
                        />
                      </div>
                      <input
                        type="text"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="e.g. Master Aarav Sharma"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-[#10253F] mb-1">
                          {t.liveConsultancy.childAge} *
                        </label>
                        <input
                          type="text"
                          value={childAge}
                          onChange={(e) => setChildAge(e.target.value)}
                          placeholder="e.g. 8 years"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#10253F] mb-1">
                          Consult Type
                        </label>
                        <select
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                        >
                          <option>Follow-up Review</option>
                          <option>Growth Stature Evaluation</option>
                          <option>Type 1 Diabetes Log Review</option>
                          <option>Thyroid Report Check</option>
                          <option>Second Opinion</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#10253F] mb-1">
                        {t.liveConsultancy.selectReason}
                      </label>
                      <select
                        value={concern}
                        onChange={(e) => setConcern(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                      >
                        <option value="Growth Delay / Short Stature">Growth Delay / Falling below percentile</option>
                        <option value="Childhood Type 1 Diabetes">Type 1 Diabetes (Insulin Titration / CGM)</option>
                        <option value="Congenital Hypothyroidism">Thyroid Dysfunction (High TSH / Low T4)</option>
                        <option value="Early or Delayed Puberty">Early / Delayed Puberty</option>
                        <option value="Adrenal or Bone Health">Adrenal / Bone Metabolism (Rickets)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#10253F] mb-1">
                        {t.liveConsultancy.guardianPhone} *
                      </label>
                      <input
                        type="tel"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleStartConsultation}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-xl shadow-md transition-all group"
                    >
                      <Video className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{t.liveConsultancy.joinRoomBtn}</span>
                    </button>
                    <p className="text-[11px] text-[#718096] text-center mt-2">
                      Connected to PGIMER Advanced Pediatrics Centre Telehealth Portal
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Active In-Call Telehealth Session */}
            {roomStep === 'in_call' && (
              <div className="bg-[#0A1829] rounded-2xl overflow-hidden border border-[#10253F]/30 shadow-2xl">
                {/* In-Call Header Ribbon */}
                <div className="bg-[#10253F] px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/10 text-white">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <div>
                      <div className="text-sm font-semibold flex items-center gap-2">
                        <span>{t.liveConsultancy.doctorConnected}</span>
                        <span className="text-[11px] font-mono text-[#D5B77A] bg-white/10 px-2 py-0.5 rounded">
                          {formatTime(callDuration)}
                        </span>
                      </div>
                      <div className="text-[11px] text-white/70">
                        Patient: {childName || 'Master Aarav'} ({childAge || 'Age 7'}) · APC PGIMER Telehealth
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleEndCall}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors shadow-xs"
                    >
                      <PhoneOff className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{t.liveConsultancy.endCallBtn}</span>
                    </button>
                  </div>
                </div>

                {/* Call Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
                  {/* Video Stage (8 cols) */}
                  <div className="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between relative bg-black/40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                      
                      {/* Doctor Video Tile */}
                      <div className="relative rounded-xl overflow-hidden bg-slate-900 border-2 border-[#168C8C] shadow-lg flex flex-col justify-between p-4">
                        <img
                          src={doctorPortrait}
                          alt="Dr. Rakesh Kumar, Pediatric Endocrinologist"
                          className="absolute inset-0 w-full h-full object-cover opacity-90"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                        {/* Top Badges */}
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            <span>Consulting Live</span>
                          </span>
                          <span className="bg-black/60 text-white/80 text-[10px] px-2 py-0.5 rounded">
                            PGIMER APC
                          </span>
                        </div>

                        {/* Bottom Info */}
                        <div className="relative z-10 text-white">
                          <div className="text-sm font-semibold flex items-center gap-1.5">
                            <Stethoscope className="w-4 h-4 text-[#168C8C]" />
                            <span>Dr. Rakesh Kumar</span>
                          </div>
                          <div className="text-[11px] text-white/80">
                            Pediatric Endocrinologist · Verified Faculty
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-300">
                            <Volume2 className="w-3 h-3 animate-pulse" />
                            <span>Active Audio Stream</span>
                          </div>
                        </div>
                      </div>

                      {/* Patient Video Tile */}
                      <div className="relative rounded-xl overflow-hidden bg-slate-800 border border-white/10 shadow-lg flex flex-col justify-between p-4">
                        {isVideoOff ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-white/60 text-center p-4">
                            <div>
                              <VideoOff className="w-10 h-10 mx-auto mb-2 text-white/40" />
                              <div className="text-xs">Your Camera is Off</div>
                            </div>
                          </div>
                        ) : cameraActive ? (
                          <video
                            ref={userVideoRef}
                            autoPlay
                            playsInline
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-white/70 text-center p-4">
                            <div>
                              <div className="w-12 h-12 rounded-full bg-[#168C8C]/20 border border-[#168C8C] flex items-center justify-center mx-auto mb-2 text-white font-bold">
                                {childName ? childName.charAt(0) : 'P'}
                              </div>
                              <div className="text-xs font-medium">{childName || 'Child Patient'}</div>
                              <div className="text-[10px] text-white/50">Encrypted Telehealth Feed</div>
                            </div>
                          </div>
                        )}

                        <div className="relative z-10 flex items-center justify-between">
                          <span className="bg-black/60 px-2 py-0.5 rounded text-[11px] text-white">
                            You (Patient)
                          </span>
                          {isMuted && (
                            <span className="bg-rose-600/80 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                              <MicOff className="w-3 h-3" /> Muted
                            </span>
                          )}
                        </div>

                        <div className="relative z-10 text-white">
                          <div className="text-xs font-semibold">{childName || 'Aarav Sharma'}</div>
                          <div className="text-[10px] text-white/70">Concern: {concern}</div>
                        </div>
                      </div>

                    </div>

                    {/* Bottom In-Call Controls Bar */}
                    <div className="mt-4 pt-3 flex items-center justify-center gap-3">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className={`p-3 rounded-full transition-all ${
                          isMuted ? 'bg-rose-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                        title={isMuted ? t.liveConsultancy.unmuteBtn : t.liveConsultancy.muteBtn}
                        aria-label="Toggle mute"
                      >
                        {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      </button>

                      <button
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        className={`p-3 rounded-full transition-all ${
                          isVideoOff ? 'bg-rose-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                        title={isVideoOff ? t.liveConsultancy.videoOnBtn : t.liveConsultancy.videoOffBtn}
                        aria-label="Toggle video"
                      >
                        {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                      </button>

                      <button
                        onClick={() => setIsScreenSharing(!isScreenSharing)}
                        className={`p-3 rounded-full transition-all ${
                          isScreenSharing ? 'bg-[#168C8C] text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                        title="Share Growth Chart / Lab Report"
                        aria-label="Share reports"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>

                      <button
                        onClick={handleEndCall}
                        className="px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-md"
                        aria-label="End consultation"
                      >
                        <PhoneOff className="w-4 h-4" />
                        <span>{t.liveConsultancy.endCallBtn}</span>
                      </button>
                    </div>
                  </div>

                  {/* Clinical Collaboration Side Panel (4 cols) */}
                  <div className="lg:col-span-4 bg-slate-900 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between text-white">
                    {/* Side Tabs */}
                    <div className="flex border-b border-white/10">
                      <button
                        onClick={() => setActiveSideTab('chat')}
                        className={`flex-1 py-3 text-xs font-medium text-center transition-colors ${
                          activeSideTab === 'chat'
                            ? 'bg-white/10 text-[#168C8C] border-b-2 border-[#168C8C]'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 inline mr-1" />
                        <span>{t.liveConsultancy.chatTab}</span>
                      </button>
                      <button
                        onClick={() => setActiveSideTab('records')}
                        className={`flex-1 py-3 text-xs font-medium text-center transition-colors ${
                          activeSideTab === 'records'
                            ? 'bg-white/10 text-[#168C8C] border-b-2 border-[#168C8C]'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5 inline mr-1" />
                        <span>{t.liveConsultancy.reportsTab}</span>
                      </button>
                    </div>

                    {/* Side Tab Content */}
                    <div className="flex-1 p-3.5 overflow-y-auto max-h-[340px] space-y-3">
                      {activeSideTab === 'chat' ? (
                        <div className="space-y-2.5">
                          {messages.map((m) => (
                            <div
                              key={m.id}
                              className={`p-2.5 rounded-lg text-xs ${
                                m.sender === 'doctor'
                                  ? 'bg-[#168C8C]/20 border border-[#168C8C]/40 text-white'
                                  : m.sender === 'system'
                                  ? 'bg-white/5 text-white/70 italic text-[11px]'
                                  : 'bg-white/10 text-white ml-4'
                              }`}
                            >
                              <div className="flex items-center justify-between text-[10px] text-white/50 mb-1">
                                <span className="font-semibold text-white/80">{m.senderName}</span>
                                <span>{m.timestamp}</span>
                              </div>
                              <p className="leading-relaxed">{m.text}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-3 text-xs">
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <div className="font-semibold text-[#D5B77A] mb-1">Upload Laboratory Reports</div>
                            <p className="text-[11px] text-white/70 mb-3">
                              Share Thyroid panels, Bone Age X-rays, or Glucometer logs directly with Dr. Rakesh Kumar during the call.
                            </p>
                            <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-white/20 hover:border-[#168C8C] rounded-lg cursor-pointer transition-colors text-white/80 hover:text-white">
                              <UploadCloud className="w-4 h-4 text-[#168C8C]" />
                              <span className="text-xs">{t.liveConsultancy.uploadLab}</span>
                              <input type="file" className="hidden" />
                            </label>
                          </div>

                          <div className="p-2.5 bg-white/5 rounded text-[11px] text-white/70">
                            <div className="font-medium text-white mb-0.5">Attached Records:</div>
                            <div>• Previous Height Velocity: 4.2 cm/yr (Delayed)</div>
                            <div>• Serum TSH: 3.4 mIU/L (Within Normal Range)</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chat Input */}
                    {activeSideTab === 'chat' && (
                      <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 flex items-center gap-2">
                        <VoiceInputButton
                          size="sm"
                          targetFieldLabel="chat message"
                          placeholder="Speak message to doctor..."
                          onTranscript={(spoken) => {
                            setNewMessage((prev) => (prev ? `${prev} ${spoken}` : spoken));
                          }}
                        />
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder={t.liveConsultancy.typeMessage}
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#168C8C]"
                        />
                        <button
                          type="submit"
                          className="p-2 bg-[#168C8C] hover:bg-[#0E6060] text-white rounded-lg transition-colors shrink-0"
                          aria-label="Send message"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Post-Call Digital Advice Slip & Prescription */}
            {roomStep === 'post_call' && generatedRx && (
              <div className="bg-white rounded-2xl border border-[#168C8C]/30 p-6 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#10253F]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center shrink-0">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#168C8C]">
                        Teleconsultation Memorandum
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-[#10253F]">
                        {t.liveConsultancy.prescriptionTitle}
                      </h3>
                      <div className="text-xs text-[#718096]">
                        Ref: <span className="font-mono font-semibold text-[#10253F]">{generatedRx.consultationId}</span> · Date: {generatedRx.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#10253F] bg-white border border-[#10253F]/20 hover:border-[#168C8C] rounded-lg transition-colors shadow-xs"
                    >
                      <Printer className="w-3.5 h-3.5 text-[#168C8C]" />
                      <span>{t.liveConsultancy.printPrescription}</span>
                    </button>
                    <button
                      onClick={() => setRoomStep('check')}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-lg transition-colors"
                    >
                      {t.liveConsultancy.closeBtn}
                    </button>
                  </div>
                </div>

                {/* Patient & Doctor Header Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#FAFCFE] rounded-xl border border-[#10253F]/10 text-xs sm:text-sm">
                  <div>
                    <span className="text-[#718096] block text-[11px] uppercase tracking-wider">Patient Details</span>
                    <span className="font-semibold text-[#10253F]">{generatedRx.childName}</span> ({generatedRx.childAge})
                    <div className="text-xs text-[#718096] mt-0.5">Primary Indication: {generatedRx.diagnosis}</div>
                  </div>
                  <div>
                    <span className="text-[#718096] block text-[11px] uppercase tracking-wider">Consulting Pediatrician</span>
                    <span className="font-semibold text-[#10253F]">Dr. Rakesh Kumar</span>
                    <div className="text-xs text-[#718096] mt-0.5">APC, PGIMER Sector 12, Chandigarh</div>
                    <div className="text-xs text-[#168C8C] font-mono mt-0.5">{DOCTOR_PROFILE.email}</div>
                  </div>
                </div>

                {/* Vitals & Clinical Advice */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-semibold text-[#10253F] uppercase tracking-wider text-xs mb-2">
                      Clinical Vitals & Growth Status
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="p-3 bg-white rounded border border-[#10253F]/10">
                        <span className="text-[11px] text-[#718096] block">Stature / Height</span>
                        <span className="font-semibold text-[#10253F]">{generatedRx.vitals.height}</span>
                      </div>
                      <div className="p-3 bg-white rounded border border-[#10253F]/10">
                        <span className="text-[11px] text-[#718096] block">Weight</span>
                        <span className="font-semibold text-[#10253F]">{generatedRx.vitals.weight}</span>
                      </div>
                      <div className="p-3 bg-white rounded border border-[#10253F]/10">
                        <span className="text-[11px] text-[#718096] block">Blood Glucose</span>
                        <span className="font-semibold text-[#10253F]">{generatedRx.vitals.bloodSugar}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#10253F] uppercase tracking-wider text-xs mb-2">
                      Clinical Recommendations & Advice
                    </h4>
                    <ul className="space-y-1.5 list-disc pl-5 text-xs text-[#10253F]/85 leading-relaxed">
                      {generatedRx.rxAdvice.map((a, idx) => (
                        <li key={idx}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#10253F] uppercase tracking-wider text-xs mb-2">
                      Ordered Investigations
                    </h4>
                    <ul className="space-y-1.5 list-disc pl-5 text-xs text-[#718096] leading-relaxed">
                      {generatedRx.investigationsOrdered.map((inv, idx) => (
                        <li key={idx}>{inv}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-[#FAF6ED] rounded-lg border border-[#D5B77A]/40 text-xs text-[#10253F]">
                    <span className="font-semibold">Review / Follow-up: </span>
                    <span>{generatedRx.followUp}</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#718096] border-t border-[#10253F]/10 pt-4 flex flex-col sm:flex-row justify-between gap-2">
                  <span>Issued via PGIMER Telemedicine Practice Guidelines compliance.</span>
                  <span>Direct Queries: drrakesh.pgi@gmail.com</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: GOOGLE MEET MULTILINGUAL APPOINTMENT PORTAL */}
        {activeTab === 'google-meet' && (
          <GoogleMeetPortal
            prefilledChildName={childName}
            prefilledConcern={concern}
          />
        )}

        {/* TAB 3: SCHEDULE A VIDEO SLOT */}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-2xl border border-[#10253F]/10 p-6 sm:p-8 shadow-xs">
            {bookingConfirmed ? (
              <div className="max-w-xl mx-auto text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#10253F]">
                  Teleconsultation Slot Confirmed
                </h3>
                <p className="text-sm text-[#718096]">
                  Your appointment booking has been registered for <span className="font-semibold text-[#10253F]">{childName}</span>.
                </p>
                <div className="p-4 bg-[#FAFCFE] rounded-xl border border-[#10253F]/10 font-mono text-sm text-[#168C8C] font-semibold">
                  Access Code: {bookingRef}
                </div>
                <p className="text-xs text-[#718096]">
                  A calendar invite and SMS link have been dispatched. Confirmation copy sent to <span className="text-[#10253F] font-semibold">drrakesh.pgi@gmail.com</span>.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setActiveTab('room');
                      setRoomStep('check');
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-lg transition-colors"
                  >
                    Go To Teleconsultation Room
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookSlot} className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-[#10253F]">
                    Select Dedicated Teleconsultation Slot
                  </h3>
                  <p className="text-xs text-[#718096] mt-1">
                    Book a scheduled 20-minute video consultation with Dr. Rakesh Kumar for comprehensive pediatric endocrinology evaluations.
                  </p>
                </div>

                {/* Available Slots Grid */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#718096] mb-3">
                    Available Slots for Tomorrow
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SAMPLE_SLOTS.map((s) => (
                      <button
                        type="button"
                        key={s.id}
                        disabled={!s.available}
                        onClick={() => setSelectedSlot(s.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          !s.available
                            ? 'bg-slate-50 border-slate-200 opacity-50 cursor-not-allowed'
                            : selectedSlot === s.id
                            ? 'bg-[#EBF7F7] border-[#168C8C] text-[#10253F] shadow-xs'
                            : 'bg-white border-[#10253F]/15 hover:border-[#168C8C]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold mb-1">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#168C8C]" />
                            {s.time}
                          </span>
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${s.available ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}`}>
                            {s.available ? 'Available' : 'Booked'}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#718096]">{s.sessionType}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Child & Parent Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#10253F]/10">
                  <div>
                    <label className="block text-xs font-medium text-[#10253F] mb-1">
                      {t.liveConsultancy.childName} *
                    </label>
                    <input
                      type="text"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Master Aarav Sharma"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#10253F] mb-1">
                      {t.liveConsultancy.childAge} *
                    </label>
                    <input
                      type="text"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      placeholder="e.g. 7 years"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#10253F] mb-1">
                      {t.liveConsultancy.guardianPhone} *
                    </label>
                    <input
                      type="tel"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#10253F] mb-1">
                      Parent Email Address
                    </label>
                    <input
                      type="email"
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      placeholder="e.g. parent@example.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#10253F]/20 focus:outline-none focus:border-[#168C8C]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#10253F]/10">
                  <div className="text-xs text-[#718096]">
                    Direct OPD Notification: <span className="font-mono text-[#168C8C]">drrakesh.pgi@gmail.com</span>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-lg transition-colors shadow-xs"
                  >
                    <span>Confirm Scheduled Slot</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 3: GUIDELINES & TRIAGE */}
        {activeTab === 'guidelines' && (
          <div className="bg-white rounded-2xl border border-[#10253F]/10 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-serif font-semibold text-[#10253F]">
                Telemedicine Clinical Scope & Emergency Triage
              </h3>
              <p className="text-xs text-[#718096] mt-1">
                Issued in accordance with the National Medical Commission (NMC) Telemedicine Practice Guidelines and PGIMER outpatient clinical protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Telehealth Appropriate */}
              <div className="p-5 bg-[#EBF7F7]/60 rounded-xl border border-[#168C8C]/30 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-sm text-[#168C8C]">
                  <CheckCircle2 className="w-5 h-5 text-[#168C8C]" />
                  <span>Conditions Suitable for Teleconsultancy</span>
                </div>
                <ul className="space-y-2 text-xs text-[#10253F]/85 list-disc pl-4 leading-relaxed">
                  <li>Periodic auxological growth review and mid-parental height trajectory analysis.</li>
                  <li>Type 1 Diabetes log review, continuous glucose monitoring (CGM) trend evaluations, and insulin carb-ratio titration.</li>
                  <li>Stable congenital hypothyroidism thyroid function test (TSH / Free T4) follow-ups.</li>
                  <li>Review of preliminary bone age X-rays and growth hormone workups.</li>
                  <li>Dietary, nutrition, and exercise lifestyle counselling for pediatric obesity.</li>
                </ul>
              </div>

              {/* Emergency Inappropriate */}
              <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-200 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-sm text-rose-800">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <span>Mandatory Emergency Hospital Presentation</span>
                </div>
                <ul className="space-y-2 text-xs text-rose-950 list-disc pl-4 leading-relaxed">
                  <li>Suspected Diabetic Ketoacidosis (DKA) with persistent vomiting, deep breathing, or heavy lethargy.</li>
                  <li>Severe Hypoglycemia with loss of consciousness or seizures.</li>
                  <li>Adrenal crisis with acute dehydration, low blood pressure, or hyperkalemia.</li>
                  <li>Neonatal hypoglycemia or acute hypocalcemic tetany.</li>
                </ul>
                <div className="mt-3 p-3 bg-white rounded-lg border border-rose-300 text-xs font-semibold text-rose-800">
                  Immediate Emergency: Proceed directly to the 24x7 Emergency Unit at Advanced Pediatrics Centre (APC), PGIMER Chandigarh.
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAFCFE] rounded-xl border border-[#10253F]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#718096]">
                <ShieldCheck className="w-4 h-4 text-[#168C8C]" />
                <span>Verified Specialist Physician: Dr. Rakesh Kumar (MD, Pediatric Endocrinology)</span>
              </div>
              <a
                href={`mailto:${DOCTOR_PROFILE.email}`}
                className="font-mono text-[#168C8C] hover:underline"
              >
                drrakesh.pgi@gmail.com
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
