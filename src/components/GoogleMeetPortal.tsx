import React, { useState, useEffect } from 'react';
import {
  Video,
  Globe,
  Calendar,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
  UserCheck,
  LogOut,
  AlertCircle,
  Share2,
  Subtitles,
  CheckCircle2,
  X,
  Mic,
  CalendarCheck
} from 'lucide-react';
import {
  initAuth,
  googleSignIn,
  logout,
  getAccessToken
} from '../services/googleWorkspaceAuth';
import {
  createGoogleMeetSpace,
  generateInstantClinicMeetRoom,
  scheduleGoogleCalendarMeetEvent,
  getGoogleCalendarWebLink,
  SUPPORTED_MEET_LANGUAGES,
  MeetLanguage,
  MeetSpaceResponse
} from '../services/googleMeetService';
import { User } from 'firebase/auth';
import { VoiceInputButton } from './VoiceInputButton';

interface GoogleMeetPortalProps {
  isModal?: boolean;
  onClose?: () => void;
  prefilledChildName?: string;
  prefilledConcern?: string;
}

export const GoogleMeetPortal: React.FC<GoogleMeetPortalProps> = ({
  isModal = false,
  onClose,
  prefilledChildName = '',
  prefilledConcern = '',
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Meeting states
  const [selectedLanguage, setSelectedLanguage] = useState<MeetLanguage>('en');
  const [childName, setChildName] = useState(prefilledChildName || 'Aarav Sharma');
  const [childAge, setChildAge] = useState('7 Years');
  const [concern, setConcern] = useState(prefilledConcern || 'Growth Stature & Thyroid Review');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);
  const [activeMeeting, setActiveMeeting] = useState<MeetSpaceResponse | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedInvite, setCopiedInvite] = useState(false);

  // Calendar booking states
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [bookingDate, setBookingDate] = useState(tomorrowStr);
  const [bookingTimeSlot, setBookingTimeSlot] = useState('10:00 AM - 10:20 AM');
  const [isSchedulingCalendar, setIsSchedulingCalendar] = useState(false);
  const [scheduledCalendarEvent, setScheduledCalendarEvent] = useState<{
    htmlLink: string;
    meetUri: string;
    summary: string;
  } | null>(null);

  // User Confirmation modal for Google Calendar mutation (per Google Workspace guidelines)
  const [showCalendarConfirmModal, setShowCalendarConfirmModal] = useState(false);

  // Initialize auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setCurrentUser(user);
        setAccessToken(token);
        if (user.email && !parentEmail) {
          setParentEmail(user.email);
        }
      },
      () => {
        setCurrentUser(null);
        setAccessToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  // Initialize with an instant clinic room by default
  useEffect(() => {
    if (!activeMeeting) {
      setActiveMeeting(generateInstantClinicMeetRoom(childName));
    }
  }, []);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setAuthError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setCurrentUser(result.user);
        setAccessToken(result.accessToken);
        if (result.user.email) {
          setParentEmail(result.user.email);
        }
      }
    } catch (err: any) {
      console.error('Google Sign In failed:', err);
      setAuthError(err?.message || 'Could not sign in with Google. Check permissions.');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    setCurrentUser(null);
    setAccessToken(null);
    setScheduledCalendarEvent(null);
  };

  const handleCreateOfficialSpace = async () => {
    setIsCreatingRoom(true);
    setAuthError(null);
    try {
      if (accessToken) {
        const space = await createGoogleMeetSpace();
        setActiveMeeting(space);
      } else {
        const instant = generateInstantClinicMeetRoom(childName);
        setActiveMeeting(instant);
      }
    } catch (err: any) {
      console.warn('Could not create Google Meet space via API, generating fallback:', err);
      setActiveMeeting(generateInstantClinicMeetRoom(childName));
    } finally {
      setIsCreatingRoom(false);
    }
  };

  const handleCopyLink = () => {
    if (!activeMeeting?.meetingUri) return;
    navigator.clipboard.writeText(activeMeeting.meetingUri);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const langInfo = SUPPORTED_MEET_LANGUAGES[selectedLanguage];

  const handleCopyInvite = () => {
    if (!activeMeeting?.meetingUri) return;
    const inviteText = `📹 Google Meet Teleconsultation with Dr. Rakesh Kumar (Pediatric Endocrinologist, PGIMER Chandigarh)\n` +
      `Child: ${childName} (${childAge}) | Topic: ${concern}\n` +
      `Language: ${langInfo.name} (${langInfo.nativeName})\n\n` +
      `Join Google Meet:\n${activeMeeting.meetingUri}\n\n` +
      `Instructions (${langInfo.name}):\n${langInfo.instructions.welcome}\n` +
      `${langInfo.instructions.captionTip}\n\n` +
      `Advanced Pediatrics Centre, PGIMER Chandigarh`;

    navigator.clipboard.writeText(inviteText);
    setCopiedInvite(true);
    setTimeout(() => setCopiedInvite(false), 2200);
  };

  // Trigger confirmation dialog for Google Calendar
  const handleRequestScheduleCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName.trim()) {
      alert("Please enter child's name");
      return;
    }
    setShowCalendarConfirmModal(true);
  };

  // Perform confirmed Google Calendar mutation
  const handleConfirmCalendarBooking = async () => {
    setShowCalendarConfirmModal(false);
    setIsSchedulingCalendar(true);
    setAuthError(null);

    try {
      if (accessToken) {
        const res = await scheduleGoogleCalendarMeetEvent({
          childName,
          childAge,
          concern,
          selectedLanguage,
          dateStr: bookingDate,
          timeSlot: bookingTimeSlot,
          parentEmail,
          parentPhone,
        });

        setScheduledCalendarEvent({
          htmlLink: res.htmlLink,
          meetUri: res.meetUri,
          summary: res.summary,
        });

        // Update active meeting room to the calendar meet link
        setActiveMeeting({
          name: `spaces/${res.meetingCode}`,
          meetingUri: res.meetUri,
          meetingCode: res.meetingCode,
        });
      } else {
        // Fallback: open Google Calendar Web Template in browser
        const fallbackUrl = getGoogleCalendarWebLink({
          childName,
          concern,
          dateStr: bookingDate,
          timeSlot: bookingTimeSlot,
          meetUri: activeMeeting?.meetingUri,
        });
        window.open(fallbackUrl, '_blank');
      }
    } catch (err: any) {
      console.error('Google Calendar Scheduling error:', err);
      setAuthError(err?.message || 'Could not schedule event on Google Calendar.');
    } finally {
      setIsSchedulingCalendar(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-[#10253F]/15 shadow-xl overflow-hidden ${isModal ? 'max-w-3xl w-full max-h-[92vh] flex flex-col' : 'my-8'}`}>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#10253F] via-[#0E6060] to-[#168C8C] text-white p-5 sm:p-6 flex items-start justify-between relative">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-white p-2 shadow-md flex items-center justify-center shrink-0">
            {/* Official Google Meet Camera Icon Colors */}
            <svg viewBox="0 0 48 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path fill="#00832d" d="M37 24l8.5-6.5v13L37 24z"/>
              <path fill="#0066da" d="M5 33.5V14.5A3.5 3.5 0 0 1 8.5 11h25a3.5 3.5 0 0 1 3.5 3.5v19a3.5 3.5 0 0 1-3.5 3.5h-25A3.5 3.5 0 0 1 5 33.5z"/>
              <path fill="#e51c23" d="M37 14.5L25 24l12 9.5z" opacity=".2"/>
            </svg>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" />
              Official Google Meet &amp; Calendar Integration
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
              Google Meet Teleconsultation
            </h3>
            <p className="text-white/80 text-xs sm:text-sm">
              Multilingual teleconsults with Dr. Rakesh Kumar (PGIMER Chandigarh)
            </p>
          </div>
        </div>

        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Main Content Body */}
      <div className={`p-5 sm:p-7 space-y-6 ${isModal ? 'overflow-y-auto' : ''}`}>
        
        {/* Language Selection Row */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#10253F] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#168C8C]" />
              <span>Select Consultation &amp; Subtitle Language (6 Languages):</span>
            </label>
            <span className="text-[11px] font-medium text-[#168C8C]">
              {langInfo.flag} {langInfo.name} ({langInfo.nativeName})
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {Object.values(SUPPORTED_MEET_LANGUAGES).map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setSelectedLanguage(item.code)}
                className={`p-2 rounded-xl border text-xs font-medium transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedLanguage === item.code
                    ? 'bg-[#168C8C] text-white border-[#168C8C] shadow-xs'
                    : 'bg-gray-50 text-[#10253F] border-gray-200 hover:border-[#168C8C]/50 hover:bg-white'
                }`}
              >
                <span className="text-base">{item.flag}</span>
                <span className="font-semibold text-[11px]">{item.nativeName}</span>
                <span className="text-[9px] opacity-75">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Google Workspace Account Connection Banner */}
        <div className="bg-[#FAFCFE] rounded-xl border border-[#10253F]/10 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#168C8C]/10 text-[#168C8C] flex items-center justify-center shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              {currentUser ? (
                <div>
                  <p className="text-xs font-semibold text-[#10253F]">
                    Connected as {currentUser.displayName || currentUser.email}
                  </p>
                  <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Google Workspace Calendar &amp; Meet Authorized
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-semibold text-[#10253F]">
                    Google Workspace Integration
                  </p>
                  <p className="text-[11px] text-[#718096]">
                    Sign in with Google to create Meet spaces and sync events directly to your Google Calendar.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="shrink-0 self-end sm:self-center">
            {currentUser ? (
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Disconnect</span>
              </button>
            ) : (
              /* Official "Sign in with Google" Button Styling */
              <button
                onClick={handleSignIn}
                disabled={isSigningIn}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium text-xs rounded-lg border border-gray-300 shadow-2xs transition-all disabled:opacity-50"
              >
                <svg className="w-4 h-4" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span>{isSigningIn ? 'Connecting...' : 'Sign in with Google'}</span>
              </button>
            )}
          </div>
        </div>

        {authError && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{authError}</span>
          </div>
        )}

        {/* Scheduled Calendar Event Confirmation Banner */}
        {scheduledCalendarEvent && (
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl space-y-2 animate-in fade-in">
            <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
              <CalendarCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Event Scheduled to your Google Calendar!</span>
            </div>
            <p className="text-xs text-emerald-800">
              {scheduledCalendarEvent.summary}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={scheduledCalendarEvent.htmlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 text-white rounded text-xs font-semibold hover:bg-emerald-800 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Open in Google Calendar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={scheduledCalendarEvent.meetUri}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#168C8C] text-white rounded text-xs font-semibold hover:bg-[#0E6060] transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Test Meet Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Active Meeting Room Details & Action Buttons */}
        <div className="bg-[#EBF7F7]/60 rounded-2xl border-2 border-[#168C8C]/30 p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#168C8C]/20 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#168C8C]">
                Ready to Join
              </span>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#10253F] mt-0.5">
                Dr. Rakesh Kumar Clinical Meet Room
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCreateOfficialSpace}
                disabled={isCreatingRoom}
                className="px-3 py-1.5 text-xs font-semibold text-[#10253F] bg-white hover:bg-gray-50 border border-[#10253F]/15 rounded-lg transition-colors shadow-2xs"
              >
                {isCreatingRoom ? 'Generating...' : 'Generate New Link'}
              </button>
            </div>
          </div>

          {/* Meeting URL card */}
          <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Video className="w-4 h-4" />
              </div>
              <div className="truncate">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">
                  Google Meet Link
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-[#10253F] truncate block">
                  {activeMeeting?.meetingUri || 'https://meet.google.com/apc-endo-meet'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyLink}
                className="p-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-1"
                title="Copy Google Meet Link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleCopyInvite}
                className="p-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-1"
                title={`Copy Invitation in ${langInfo.name}`}
              >
                {copiedInvite ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedInvite ? 'Invite Copied' : 'Share'}</span>
              </button>

              <a
                href={activeMeeting?.meetingUri || 'https://meet.google.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#168C8C] hover:bg-[#0E6060] text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <Video className="w-4 h-4" />
                <span>Join Google Meet</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Multilingual Patient Instructions in Selected Language */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#10253F]">
              <span className="text-base">{langInfo.flag}</span>
              <span>{langInfo.instructions.welcome}</span>
            </div>

            <ul className="text-xs text-gray-600 space-y-1.5 pl-4 list-disc">
              {langInfo.instructions.howToJoin.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>

            {/* Live Subtitles / Caption Hint in Chosen Language */}
            <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
              <Subtitles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Subtitles &amp; Live Translation in {langInfo.name}: </strong>
                <span>{langInfo.instructions.captionTip}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Consultation Details Form with Speech-to-Text */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-serif font-bold text-sm text-[#10253F] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#168C8C]" />
              <span>Schedule or Customize Teleconsultation Details</span>
            </h4>
            <span className="text-[11px] text-gray-500">Voice-to-Text enabled 🎙️</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-gray-600 font-medium">
                  Child&apos;s Full Name: *
                </label>
                <VoiceInputButton
                  size="sm"
                  targetFieldLabel="child full name"
                  placeholder="Speak child's name..."
                  onTranscript={(text) => setChildName(text)}
                />
              </div>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="e.g. Master Aarav Sharma"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#168C8C]"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Child&apos;s Age / Gender:
              </label>
              <input
                type="text"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                placeholder="e.g. 7 years (Male)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#168C8C]"
              />
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center justify-between mb-1">
                <label className="text-gray-600 font-medium">
                  Primary Endocrine Concern / Reason: *
                </label>
                <VoiceInputButton
                  size="sm"
                  targetFieldLabel="clinical concern"
                  placeholder="Speak clinical concern or symptoms..."
                  onTranscript={(text) => setConcern(text)}
                />
              </div>
              <input
                type="text"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                placeholder="e.g. Short Stature / Type 1 Diabetes insulin titration / Thyroid"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#168C8C]"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Preferred Consultation Date:
              </label>
              <input
                type="date"
                value={bookingDate}
                min={tomorrowStr}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#168C8C]"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Preferred Time Slot:
              </label>
              <select
                value={bookingTimeSlot}
                onChange={(e) => setBookingTimeSlot(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#168C8C]"
              >
                <option value="10:00 AM - 10:20 AM">10:00 AM - 10:20 AM (Morning Tele-OPD)</option>
                <option value="11:00 AM - 11:20 AM">11:00 AM - 11:20 AM (Morning Tele-OPD)</option>
                <option value="11:30 AM - 11:50 AM">11:30 AM - 11:50 AM (Morning Tele-OPD)</option>
                <option value="02:30 PM - 02:50 PM">02:30 PM - 02:50 PM (Afternoon Specialty)</option>
                <option value="03:30 PM - 03:50 PM">03:30 PM - 03:50 PM (Afternoon Specialty)</option>
                <option value="04:30 PM - 04:50 PM">04:30 PM - 04:50 PM (Priority Review)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Parent Email (for Calendar invitation):
              </label>
              <input
                type="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                placeholder="e.g. parent@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#168C8C]"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Parent Contact Phone:
              </label>
              <input
                type="tel"
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#168C8C]"
              />
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100">
            <span className="text-[11px] text-gray-500">
              Synchronizes meeting event and Google Meet link into your calendar.
            </span>

            <button
              type="button"
              onClick={handleRequestScheduleCalendar}
              disabled={isSchedulingCalendar}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#10253F] hover:bg-[#0A1829] text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D5B77A]" />
              <span>{isSchedulingCalendar ? 'Adding to Calendar...' : 'Add to Google Calendar & Meet'}</span>
            </button>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
          <p>
            Official Postgraduate Institute of Medical Education and Research (PGIMER) Chandigarh
          </p>
          <span className="flex items-center gap-1 font-medium text-emerald-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            End-to-End Encrypted Video
          </span>
        </div>
      </div>

      {/* Mandatory User Confirmation Dialog for mutating Google Calendar (per Google Workspace guidelines) */}
      {showCalendarConfirmModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#10253F]">
                  Add Consultation to Google Calendar?
                </h4>
                <p className="text-xs text-gray-500">
                  This will create an appointment in your primary Google Calendar.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-gray-50 rounded-xl text-xs space-y-1.5 border border-gray-200">
              <div className="text-gray-700">
                <strong className="text-[#10253F]">Event:</strong> Pediatric Teleconsultation ({childName})
              </div>
              <div className="text-gray-700">
                <strong className="text-[#10253F]">Date &amp; Time:</strong> {bookingDate} · {bookingTimeSlot}
              </div>
              <div className="text-gray-700">
                <strong className="text-[#10253F]">Doctor:</strong> Dr. Rakesh Kumar (PGIMER Chandigarh)
              </div>
              <div className="text-gray-700">
                <strong className="text-[#10253F]">Language:</strong> {langInfo.name} ({langInfo.nativeName})
              </div>
              <div className="text-gray-700">
                <strong className="text-[#10253F]">Conferencing:</strong> Google Meet Space attached
              </div>
            </div>

            <p className="text-[11px] text-gray-500">
              The event will include the direct Google Meet video link, patient preparation checklist, and reminder notifications.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowCalendarConfirmModal(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmCalendarBooking}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#168C8C] hover:bg-[#0E6060] rounded-lg transition-colors shadow-xs flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Confirm &amp; Add to Calendar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
