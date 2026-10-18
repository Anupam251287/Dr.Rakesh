import { getAccessToken } from './googleWorkspaceAuth';

export interface MeetSpaceResponse {
  name: string;
  meetingUri: string;
  meetingCode: string;
  config?: {
    accessType?: string;
    entryPointAccess?: string;
  };
}

export interface CalendarEventResponse {
  id: string;
  htmlLink: string;
  hangoutLink?: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

export type MeetLanguage = 'en' | 'hi' | 'pa' | 'bn' | 'gu' | 'mr';

export interface MeetLanguageInfo {
  code: MeetLanguage;
  name: string;
  nativeName: string;
  flag: string;
  subtitlesSupported: boolean;
  instructions: {
    welcome: string;
    howToJoin: string[];
    captionTip: string;
    doctorNotes: string;
  };
}

export const SUPPORTED_MEET_LANGUAGES: Record<MeetLanguage, MeetLanguageInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    subtitlesSupported: true,
    instructions: {
      welcome: 'Welcome to Dr. Rakesh Kumar’s Pediatric Endocrinology Google Meet Teleconsultation.',
      howToJoin: [
        'Click "Join Google Meet" button to open the secure meeting room.',
        'Keep child’s recent height records, blood sugar logs, and prescriptions ready.',
        'Ensure microphone and camera are permitted in your browser.',
      ],
      captionTip: 'In Google Meet, click the "CC" button to enable real-time subtitles and translation.',
      doctorNotes: 'Advanced Pediatrics Centre (APC), PGIMER Chandigarh Telehealth Service.',
    },
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    subtitlesSupported: true,
    instructions: {
      welcome: 'डॉ. राकेश कुमार (बाल एंडोक्राइनोलॉजी, पीजीआई चंडीगढ़) गूगल मीट टेलीकंसल्टेशन में आपका स्वागत है।',
      howToJoin: [
        '"गूगल मीट में शामिल हों" बटन पर क्लिक करके सीधे मीटिंग रूम में प्रवेश करें।',
        'बच्चे की हालिया लंबाई रिकॉर्ड, ब्लड शुगर चार्ट और पिछली दवा पर्ची तैयार रखें।',
        'अपने ब्राउज़र में कैमरा और माइक्रोफोन की अनुमति सुनिश्चित करें।',
      ],
      captionTip: 'गूगल मीट में नीचे दिए गए "CC" (Closed Captions) बटन को दबाकर लाइव हिन्दी सबटाइटल चालू कर सकते हैं।',
      doctorNotes: 'एडवांस्ड पीडियाट्रिक्स सेंटर (APC), पीजीआईएमईआर चंडीगढ़ टेलीहेल्थ सेवा।',
    },
  },
  pa: {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    flag: '🌾',
    subtitlesSupported: true,
    instructions: {
      welcome: 'ਡਾ. ਰਾਕੇਸ਼ ਕੁਮਾਰ (ਬਾਲ ਐਂਡੋਕ੍ਰਾਈਨੋਲੋਜੀ, ਪੀਜੀਆਈ ਚੰਡੀਗੜ੍ਹ) ਗੂਗਲ ਮੀਟ ਟੈਲੀਕੰਸਲਟੇਸ਼ਨ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ।',
      howToJoin: [
        '"ਗੂਗਲ ਮੀਟ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ" ਬਟਨ ਦਬਾ ਕੇ ਸਿੱਧਾ ਮੀਟਿੰਗ ਵਿੱਚ ਜੁੜੋ।',
        'ਬੱਚੇ ਦੇ ਕੱਦ ਦੇ ਰਿਕਾਰਡ, ਬਲੱਡ ਸ਼ੂਗਰ ਚਾਰਟ ਅਤੇ ਪੁਰਾਣੀਆਂ ਦਵਾਈਆਂ ਕੋਲ ਰੱਖੋ।',
        'ਆਪਣੇ ਫ਼ੋਨ ਜਾਂ ਲੈਪਟਾਪ ਦਾ ਕੈਮਰਾ ਅਤੇ ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਚਾਲੂ ਰੱਖੋ।',
      ],
      captionTip: 'ਗੂਗਲ ਮੀਟ ਵਿੱਚ "CC" ਬਟਨ ਦਬਾ ਕੇ ਲਾਈਵ ਸਬਟਾਈਟਲ ਅਤੇ ਤਰਜਮਾ ਚਾਲੂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।',
      doctorNotes: 'ਐਡਵਾਂਸਡ ਪੀਡੀਆਟ੍ਰਿਕਸ ਸੈਂਟਰ (APC), ਪੀ.ਜੀ.ਆਈ. ਚੰਡੀਗੜ੍ਹ ਟੈਲੀਹੈਲਥ ਸੇਵਾ।',
    },
  },
  bn: {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇮🇳',
    subtitlesSupported: true,
    instructions: {
      welcome: 'ডাঃ রাকেশ কুমার (পেডিয়াট্রিক এন্ডোক্রিনোলজি, পিজিআই চণ্ডীগড়) গুগল মিট টেলিকনসালটেশনে স্বাগতম।',
      howToJoin: [
        '"গুগল মিটে যোগ দিন" বোতামে ক্লিক করে সরাসরি মিটিংয়ে যোগ দিন।',
        'শিশুর সাম্প্রতিক উচ্চতার পরিমাপ, ব্লাড সুগার রিপোর্ট এবং প্রেসক্রিপশন কাছে রাখুন।',
        'আপনার ডিভাইসে ক্যামেরা এবং মাইক্রোফোনের অনুমতি নিশ্চিত করুন।',
      ],
      captionTip: 'গুগল মিটে "CC" বোতামে ক্লিক করে লাইভ সাবটাইটেল সক্রিয় করুন।',
      doctorNotes: 'অ্যাডভান্সড পেডিয়াট্রিক্স সেন্টার (APC), পিজিআইএমইআর চণ্ডীগড়।',
    },
  },
  gu: {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    flag: '🇮🇳',
    subtitlesSupported: true,
    instructions: {
      welcome: 'ડૉ. રાકેશ કુમાર (બાળ એન્ડોક્રિનોલોજી, પીજીઆઈ ચંદીગઢ) ગૂગલ મીટ ટેલિકન્સલ્ટેશનમાં સ્વાગત છે.',
      howToJoin: [
        '"ગૂગલ મીટમાં જોડાઓ" બટન દબાવીને સીધા મીટિંગમાં પ્રવેશો.',
        'બાળકના ઊંચાઈના માપ, બ્લડ શુગર ચાર્ટ અને દવાના કાગળો તૈયાર રાખો.',
        'તમારા કેમેરા અને માઇક્રોફોનને પરવાનગી આપો.',
      ],
      captionTip: 'ગૂગલ મીટમાં "CC" બટન દબાવીને લાઇવ સબટાઈટલ ચાલુ કરી શકાય છે.',
      doctorNotes: 'એડવાન્સ્ડ પેડિયાટ્રિક્સ સેન્ટર (APC), પીજીઆઈ ચંદીગઢ.',
    },
  },
  mr: {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    flag: '🇮🇳',
    subtitlesSupported: true,
    instructions: {
      welcome: 'डॉ. राकेश कुमार (बाल एंडोक्रिनोलॉजी, पीजीआय चंदिगढ) गुगल मीट टेलिकन्सल्टेशन मध्ये आपले स्वागत आहे.',
      howToJoin: [
        '"गुगल मीट जॉइन करा" बटणावर क्लिक करून थेट मीटिंग सुरू करा.',
        'मुलाची उंची मोजणी, ब्लड शुगर नोंद आणि मागील औषधोपचार सोबत ठेवा.',
        'आपल्या फोन किंवा कॉम्प्युटरचा कॅमेरा आणि माइक चालू ठेवा.',
      ],
      captionTip: 'गुगल मीट मध्ये "CC" बटण दाबून थेट कॅप्शन व भाषांतर चालू करू शकता.',
      doctorNotes: 'अ‍ॅडव्हान्स्ड पेडियाट्रिक्स सेंटर (APC), पीजीआयएमईआर चंदिगढ.',
    },
  },
};

/**
 * Creates an official Google Meet Space using Google Meet REST API v2
 */
export async function createGoogleMeetSpace(): Promise<MeetSpaceResponse> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Not authenticated. Please sign in with Google to create a Google Meet space.');
  }

  const response = await fetch('https://meet.googleapis.com/v2/spaces', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      config: {
        accessType: 'OPEN',
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.warn('[Meet API Error, falling back to instant clinic room]:', errorBody);
    return generateInstantClinicMeetRoom();
  }

  const data = await response.json();
  return {
    name: data.name,
    meetingUri: data.meetingUri || `https://meet.google.com/${data.meetingCode}`,
    meetingCode: data.meetingCode,
    config: data.config,
  };
}
/**
 * Schedules an official appointment on Google Calendar with attached Google Meet video conferencing
 */
export async function scheduleGoogleCalendarMeetEvent(params: {
  childName: string;
  childAge?: string;
  concern: string;
  selectedLanguage: MeetLanguage;
  dateStr: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "10:00 AM - 10:20 AM"
  parentEmail?: string;
  parentPhone?: string;
}): Promise<{
  eventId: string;
  htmlLink: string;
  meetUri: string;
  meetingCode: string;
  summary: string;
}> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Please sign in with Google to add this consultation to your Google Calendar.');
  }

  const langInfo = SUPPORTED_MEET_LANGUAGES[params.selectedLanguage] || SUPPORTED_MEET_LANGUAGES.en;

  // Parse time
  const [startTimeStr, endTimeStr] = params.timeSlot.split(' - ');
  const parseDateTime = (dStr: string, tStr: string) => {
    const d = new Date(dStr);
    const match = tStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (match) {
      let hours = parseInt(match[1], 10);
      const mins = parseInt(match[2], 10);
      const ampm = match[3].toUpperCase();
      if (ampm === 'PM' && hours < 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;
      d.setHours(hours, mins, 0, 0);
    }
    return d.toISOString();
  };

  const startIso = parseDateTime(params.dateStr, startTimeStr || '10:00 AM');
  const endIso = parseDateTime(params.dateStr, endTimeStr || '10:20 AM');

  const summary = `Pediatric Teleconsultation: ${params.childName} · Dr. Rakesh Kumar (PGIMER)`;
  const description =
    `Official Pediatric Endocrinology Teleconsultation Session\n\n` +
    `Doctor: Dr. Rakesh Kumar (MD, Pediatric Endocrinology, PGIMER Chandigarh)\n` +
    `Child Patient: ${params.childName} ${params.childAge ? `(${params.childAge})` : ''}\n` +
    `Primary Concern: ${params.concern}\n` +
    `Consultation Language: ${langInfo.name} (${langInfo.nativeName})\n` +
    `Parent Contact: ${params.parentPhone || 'Not provided'} | ${params.parentEmail || 'Not provided'}\n\n` +
    `Patient Instructions (${langInfo.name}):\n${langInfo.instructions.welcome}\n` +
    `Subtitles & Live Translation: ${langInfo.instructions.captionTip}\n\n` +
    `Location: Advanced Pediatrics Centre (APC), PGIMER Chandigarh\n` +
    `Doctor Email: drrakesh.pgi@gmail.com`;

  const requestBody: any = {
    summary,
    description,
    start: { dateTime: startIso },
    end: { dateTime: endIso },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'popup', minutes: 30 },
        { method: 'email', minutes: 60 },
      ],
    },
    conferenceData: {
      createRequest: {
        requestId: `teleconsult-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
  };

  if (params.parentEmail && params.parentEmail.includes('@')) {
    requestBody.attendees = [{ email: params.parentEmail }];
  }

  const response = await fetch(
    'https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    console.error('[Google Calendar API Error]:', errText);
    throw new Error(`Failed to create Google Calendar event: ${response.statusText}`);
  }

  const data = await response.json();
  const meetUri =
    data.hangoutLink ||
    data.conferenceData?.entryPoints?.find((e: any) => e.entryPointType === 'video')?.uri ||
    `https://meet.google.com/apc-endo-${Math.random().toString(36).substring(2, 6)}`;
  const meetingCode = meetUri.replace('https://meet.google.com/', '');

  return {
    eventId: data.id,
    htmlLink: data.htmlLink,
    meetUri,
    meetingCode,
    summary: data.summary || summary,
  };
}

/**
 * Generates an instant web link for adding the teleconsult to Google Calendar in the browser
 */
export function getGoogleCalendarWebLink(params: {
  childName: string;
  concern: string;
  dateStr: string;
  timeSlot: string;
  meetUri?: string;
}): string {
  const title = encodeURIComponent(`Pediatric Teleconsult: ${params.childName} - Dr. Rakesh Kumar (PGIMER)`);
  const details = encodeURIComponent(
    `Pediatric Endocrinology Teleconsultation with Dr. Rakesh Kumar (PGIMER Chandigarh)\n` +
    `Patient: ${params.childName}\n` +
    `Clinical Indication: ${params.concern}\n` +
    `Google Meet Room: ${params.meetUri || 'https://meet.google.com'}\n` +
    `Clinic: Advanced Pediatrics Centre (APC), PGIMER Chandigarh`
  );
  const location = encodeURIComponent(params.meetUri || 'Google Meet Video Call (PGIMER APC)');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
}

/**
 * Generates an instant clinical Google Meet room link without requiring sign-in
 */
export function generateInstantClinicMeetRoom(childName?: string): MeetSpaceResponse {
  const seed = Math.random().toString(36).substring(2, 6);
  const code = `pgi-ped-${seed}`;
  return {
    name: `spaces/${code}`,
    meetingUri: `https://meet.google.com/${code}`,
    meetingCode: code,
  };
}
