export interface Speaker {
  id: string;
  name: { he: string; en: string };
  title: { he: string; en: string };
  hospital: { he: string; en: string };
  bio: { he: string; en: string };
  talkTopic: { he: string; en: string };
  image: string;
  isKeynote?: boolean;
}

export interface AgendaItem {
  id: string;
  time: string;
  track: 'all' | 'icu' | 'cardiac' | 'workshop';
  title: { he: string; en: string };
  description: { he: string; en: string };
  speakerId?: string;
  speakerName?: { he: string; en: string };
  room: { he: string; en: string };
}

export interface FaqItem {
  question: { he: string; en: string };
  answer: { he: string; en: string };
}

export interface Sponsor {
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'partner';
  category: { he: string; en: string };
  logoText: string;
  websiteUrl: string;
}

export const conferenceData = {
  // Target date for countdown (Set to a future date: October 14, 2025)
  eventDate: new Date('2025-10-14T08:30:00'),
  
  general: {
    associationName: {
      he: 'העמותה לקידום סיעוד קרדיאלי וטיפול נמרץ בישראל',
      en: 'Israeli Association for Cardiac & Intensive Care Nursing'
    },
    conferenceTitle: {
      he: 'הכנס השנתי לסיעוד קרדיאלי וטיפול נמרץ 2025',
      en: 'Annual Cardiac & Intensive Care Nursing Conference 2025'
    },
    conferenceTheme: {
      he: 'מצוינות קלינית, חדשנות טכנולוגית וחמלה ברגעי השיא',
      en: 'Clinical Excellence, Technological Innovation & Compassion at Critical Moments'
    },
    dateDisplay: {
      he: '14-15 באוקטובר 2025 | כ״ב-כ״ג בתשרי תשפ״ו',
      en: 'October 14-15, 2025'
    },
    timeDisplay: {
      he: '08:00 - 17:00 (שני ימי כנס)',
      en: '08:00 - 17:00 (Two Full Days)'
    },
    venueName: {
      he: 'מרכז הכנסים והאירועים דייוויד אינטרקונטיננטל, תל אביב',
      en: 'David InterContinental Convention Center, Tel Aviv'
    },
    venueAddress: {
      he: 'רחוב קויפמן 12, תל אביב-יפו',
      en: '12 Kaufmann St., Tel Aviv-Yafo'
    },
    wazeUrl: 'https://waze.com/ul?q=David%20Intercontinental%20Tel%20Aviv',
    googleMapsUrl: 'https://maps.google.com/?q=David+Intercontinental+Tel+Aviv',
    maxAttendees: 650,
    spotsRemaining: 84,
  },

  stats: [
    { value: '650+', label: { he: 'משתתפים ואנשי מקצוע', en: 'Healthcare Attendees' } },
    { value: '32', label: { he: 'הרצאות ופאנלים מומחים', en: 'Expert Lectures & Panels' } },
    { value: '8', label: { he: 'סדנאות מעשיות מתקדמות', en: 'Hands-on Workshops' } },
    { value: '14', label: { he: 'נקודות זכות והשתלמות מוכרות', en: 'CME Accredited Credits' } },
  ],

  about: {
    paragraphs: {
      he: [
        'הכנס השנתי של העמותה לקידום סיעוד קרדיאלי וטיפול נמרץ בישראל מהווה את נקודת המפגש המקצועית והמובילה ביותר עבור אחיות ואחי טיפול נמרץ, טיפול נמרץ לב, צנתורים, אלקטרופיזיולוגיה ומומחים קליניים מכלל המרכזים הרפואיים בארץ.',
        'השנה נעמוד בחזית הטכנולוגיה הרפואית: החל מבינה מלאכותית בניטור המודינמי רציף ועד טכנולוגיות תמיכה מכנית מתקדמת (ECMO, Impella, LVAD), לצד פיתוח מנהיגות סיעודית, חוסן נפשי ומניעת שחיקה בקרב הצוותים.',
        'הכנס כולל הרצאות מליאה מפי טובי המומחים מהארץ ומהעולם, מושבים מקבילים לפי תחומי התמחות, וסדנאות סימולציה מעשיות hands-on עם המכשור המתקדם ביותר.'
      ],
      en: [
        'The Annual Conference of the Israeli Association for Cardiac & Intensive Care Nursing is the premier national platform bringing together critical care nurses, cardiac ICU specialists, cath lab teams, electrophysiology experts, and clinical leaders across Israel.',
        'This year, we focus on the frontier of critical medicine: from AI-driven continuous hemodynamic monitoring to advanced mechanical circulatory support (ECMO, Impella, LVAD), alongside nurse leadership, resilience, and wellbeing.',
        'The conference features plenary keynotes from renowned national and global experts, parallel specialized tracks, and hands-on simulation workshops utilizing state-of-the-art medical technology.'
      ]
    },
    highlights: [
      {
        icon: 'Stethoscope',
        title: { he: 'סדנאות סימולציה מעשיות', en: 'Hands-On Clinical Simulations' },
        desc: { he: 'תרגול תרחישי קצה ב-ECMO, ניהול דרכי אוויר קשות וניטור לחצים פולשני', en: 'Practical training on ECMO scenarios, difficult airway, and invasive hemodynamics' }
      },
      {
        icon: 'Cpu',
        title: { he: 'בינה מלאכותית בטיפול נמרץ', en: 'AI & Smart Intensive Care' },
        desc: { he: 'מערכות חיזוי מוקדם להידרדרות קלינית ואינטגרציית דאטה ליד מיטת החולה', en: 'Early clinical deterioration prediction and bedside data integration' }
      },
      {
        icon: 'Award',
        title: { he: 'הכרה וגמול השתלמות', en: 'Accredited CME Credits' },
        desc: { he: 'הכנס מוכר לנקודות זכות לגמול השתלמות ולשעות פיתוח מקצועי', en: 'Accredited with CME points and clinical continuing education hours' }
      },
      {
        icon: 'Users',
        title: { he: 'נטוורקינג וקהילת עמיתים', en: 'Multidisciplinary Networking' },
        desc: { he: 'מפגש בלתי אמצעי עם מובילי הסיעוד, מנהלי מחלקות וחוקרים מכל הארץ', en: 'Direct peer connection with clinical nurse specialists, head nurses, and researchers' }
      }
    ]
  },

  speakers: [
    {
      id: 'sp-1',
      name: { he: 'פרופ׳ יואב כהן', en: 'Prof. Yoav Cohen' },
      title: { he: 'מנהל המערך לקרדיולוגיה דחופה וטיפול נמרץ לב', en: 'Director, Intensive Cardiac Care Unit' },
      hospital: { he: 'המרכז הרפואי תל אביב ע״ש סוראסקי (איכילוב)', en: 'Tel Aviv Sourasky Medical Center' },
      bio: {
        he: 'מומחה בינלאומי באי ספיקת לב קשה ותמיכה המודינמית מכנית. הוביל עשרות מחקרים קליניים שפורסמו בכתבי עת מובילים כגון NEJM ו-Circulation.',
        en: 'International authority in cardiogenic shock and mechanical circulatory support. Authored numerous pivotal studies in NEJM and Circulation.'
      },
      talkTopic: {
        he: 'חידושים בניהול הלם קרדיוגני: מניטור מתקדם ועד Impella ו-VA-ECMO',
        en: 'Innovations in Cardiogenic Shock: From Hemodynamic Monitoring to Impella & VA-ECMO'
      },
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      isKeynote: true
    },
    {
      id: 'sp-2',
      name: { he: 'ד״ר מיכל לוי, RN, PhD', en: 'Dr. Michal Levy, RN, PhD' },
      title: { he: 'אחות ראשית ומפקחת קלינית, מערך טיפול נמרץ כללי', en: 'Chief Nurse & Clinical Specialist, General ICU' },
      hospital: { he: 'המרכז הרפואי שיבא, תל השומר', en: 'Sheba Medical Center' },
      bio: {
        he: 'יו״ר משותף של הוועדה הארצית לפרוטוקולי סיעוד בטיפול נמרץ. חוקרת מובילה בתחום מניעת דליריום וגמילה מוקדמת מהנשמה.',
        en: 'Co-chair of the National Critical Care Nursing Protocol Committee. Leading researcher in delirium prevention and early mechanical weaning.'
      },
      talkTopic: {
        he: 'הפרוטוקול המשולב: גמילה מוקדמת, מניעת דליריום ומוביליזציה במטופל המונשם',
        en: 'Integrated Care: Early Mobilization, Weaning & Delirium Reduction in Ventilated Patients'
      },
      image: 'https://images.unsplash.com/photo-1594824813637-8898b17b2b62?auto=format&fit=crop&w=600&q=80',
      isKeynote: true
    },
    {
      id: 'sp-3',
      name: { he: 'מר אלון ברק, RN, MSN', en: 'Alon Barak, RN, MSN' },
      title: { he: 'מרכז תחום ECMO וטיפול נמרץ לב-חזה', en: 'ECMO Coordinator & Cardiothoracic ICU Lead' },
      hospital: { he: 'המרכז הרפואי הדסה עין כרם, ירושלים', en: 'Hadassah Ein Kerem Medical Center' },
      bio: {
        he: 'בעל ניסיון של למעלה מ-15 שנה בניהול חולים תחת תמיכה חוץ-גופית. מדריך ראשי בסדנאות סימולציית חירום בסיעוד קרדיו-ווסקולרי.',
        en: 'Over 15 years directing bedside management of extracorporeal life support patients. Senior simulation instructor in cardiovascular nursing emergencies.'
      },
      talkTopic: {
        he: 'אתגרי סיעוד בטיפול בחולי ECMO מורכבים: טיפים ומלכודות ליד המיטה',
        en: 'Bedside Nursing Challenges in Complex ECMO Management: Pearls & Pitfalls'
      },
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sp-4',
      name: { he: 'ד״r שרה גולדברג', en: 'Dr. Sarah Goldberg, MD, FESC' },
      title: { he: 'מומחית באלקטרופיזיולוגיה והפרעות קצב מורכבות', en: 'Lead Electrophysiologist & Arrhythmia Specialist' },
      hospital: { he: 'המרכז הרפואי רמב״ם, חיפה', en: 'Rambam Health Care Campus' },
      bio: {
        he: 'חברת האיגוד האירופי לקרדיולוגיה (ESC). מרצה בכירה בפקולטה לרפואה של הטכניון ומובילת מחקרים על אבלציות מתקדמות בפרפור עליות.',
        en: 'Fellow of the European Society of Cardiology (FESC). Senior Lecturer at Technion Faculty of Medicine focusing on complex AF ablations.'
      },
      talkTopic: {
        he: 'קריאת אק״ג מתקדמת: מפענוח הפרעות קצב מסכנות חיים ועד טיפול מיידי',
        en: 'Advanced ECG Interpretation: From Life-Threatening Dysrhythmias to Immediate Action'
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sp-5',
      name: { he: 'גב׳ רותם שחר, RN, MA', en: 'Rotem Shahar, RN, MA' },
      title: { he: 'מתאמת אי ספיקת לב והשתלות לב', en: 'Advanced Heart Failure & Transplant Nurse Coordinator' },
      hospital: { he: 'המרכז הרפואי בילינסון, פתח תקווה', en: 'Beilinson Hospital, Rabin Medical Center' },
      bio: {
        he: 'מובילת המערך לליווי מטופלי LVAD ומסייעת למטופלים ומשפחותיהם במעבר מטיפול נמרץ אל הבית וההשתלה.',
        en: 'Leading the LVAD outpatient and inpatient pathway, transitioning patients from critical ICU care to successful transplant.'
      },
      talkTopic: {
        he: 'מסע המטופל עם לב מלאכותי (LVAD): מטיפול נמרץ ועד לחיים בקהילה',
        en: 'The LVAD Patient Journey: Transitioning from ICU to Quality Community Life'
      },
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sp-6',
      name: { he: 'פרופ׳ תמר אפרתי', en: 'Prof. Tamar Efrati, PhD' },
      title: { he: 'פסיכולוגית רפואית וחוקרת חוסן צוותי חירום', en: 'Medical Psychologist & Healthcare Resilience Researcher' },
      hospital: { he: 'אוניברסיטת תל אביב ומערך בריאות הנפש', en: 'Tel Aviv University' },
      bio: {
        he: 'מובילת מחקרים לאומיים על שחיקה, פוסט-טראומה שניונית וכלים פרקטיים לחיזוק החוסן הנפשי של צוותי טיפול נמרץ ומחלקות קריטיות.',
        en: 'Pioneer of nationwide programs targeting secondary trauma and psychological resilience among ICU and acute healthcare providers.'
      },
      talkTopic: {
        he: 'חמצן למטפלים: כלים מעשיים לחוסן ומניעת שחיקה ברגעי עומס קיצוניים',
        en: 'Oxygen for Healers: Practical Tools for Burnout Prevention & Team Resilience'
      },
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  ],

  agenda: [
    {
      id: 'ag-1',
      time: '08:00 - 08:45',
      track: 'all',
      title: { he: 'התכנסות, רישום, קפה ופתיחת תערוכת מכשור רפואי', en: 'Registration, Welcome Coffee & Medical Expo Opening' },
      description: { he: 'קבלת תגי משתתף, תיק הכנס וביקור בביתני החברות והשותפים', en: 'Badge pickup, conference kit collection, and industrial exhibition walkthrough' },
      room: { he: 'לובי האולם המרכזי', en: 'Main Exhibition Hall' }
    },
    {
      id: 'ag-2',
      time: '08:45 - 09:15',
      track: 'all',
      title: { he: 'דברי ברכה ופתיחה חגיגית', en: 'Opening Remarks & Presidential Welcome' },
      description: { he: 'יו״ר העמותה לקידום סיעוד קרדיאלי וטיפול נמרץ + נציגות משרד הבריאות', en: 'Association President & Ministry of Health Nursing Division Leadership' },
      room: { he: 'אולם מליאה ראשי (Grand Ballroom)', en: 'Grand Ballroom Plenary' }
    },
    {
      id: 'ag-3',
      time: '09:15 - 10:15',
      track: 'all',
      title: { he: 'הרצאת פתיחה: חידושים בהלם קרדיוגני ותמיכה המודינמית מכנית', en: 'Plenary Keynote: Advances in Cardiogenic Shock & Circulatory Support' },
      description: { he: 'סקירת פריצות הדרך בשימוש ב-Impella, VA-ECMO ושילוב ניטור מתקדם ליד המיטה', en: 'Breakthroughs in Impella, VA-ECMO, and AI-assisted invasive monitoring' },
      speakerName: { he: 'פרופ׳ יואב כהן', en: 'Prof. Yoav Cohen' },
      room: { he: 'אולם מליאה ראשי', en: 'Grand Ballroom Plenary' }
    },
    {
      id: 'ag-4',
      time: '10:15 - 10:45',
      track: 'all',
      title: { he: 'הפסקת קפה, כיבוד עשיר וסיור תערוכה מסחרית', en: 'Coffee Break & Commercial Exhibition Tour' },
      description: { he: 'זמן נטוורקינג ומפגש עם ספקי הטכנולוגיות הרפואיות המובילות', en: 'Networking with peers and leading medical tech providers' },
      room: { he: 'מתחם התערוכה', en: 'Expo Area' }
    },
    {
      id: 'ag-5',
      time: '10:45 - 12:30',
      track: 'icu',
      title: { he: 'מושב טיפול נמרץ: אתגרים קריטיים, מניעת דליריום והנשמה מתקדמת', en: 'Critical Care Track: Weaning, Delirium & Advanced Ventilation' },
      description: { he: 'פרוטוקולי גמילה מוקדמת, מניעת זיהומים נרכשים (VAP, CRBSI), וניהול חולים רב-מערכתיים', en: 'Early mobilization protocols, nosocomial infection prevention, and multi-organ failure' },
      speakerName: { he: 'ד״ר מיכל לוי & פאנל מומחים', en: 'Dr. Michal Levy & Expert Panel' },
      room: { he: 'אולם A (אולם תמר)', en: 'Hall A (Tamar Hall)' }
    },
    {
      id: 'ag-6',
      time: '10:45 - 12:30',
      track: 'cardiac',
      title: { he: 'מושב קרדיולוגיה: צנתורים מבניים, אבלציות ואי ספיקת לב קשה', en: 'Cardiac Track: Structural Interventions, Ablations & Acute Heart Failure' },
      description: { he: 'חידושים בטיפול ב-TAVI, קליפים מיטרליים, פענוח אק״ג מתקדם והטיפול ב-LVAD', en: 'TAVI innovations, mitral clip, advanced dysrhythmia management, and LVAD support' },
      speakerName: { he: 'ד״ר שרה גולדברג & גב׳ רותם שחר', en: 'Dr. Sarah Goldberg & Rotem Shahar' },
      room: { he: 'אולם B (אולם כרמל)', en: 'Hall B (Carmel Hall)' }
    },
    {
      id: 'ag-7',
      time: '12:30 - 13:45',
      track: 'all',
      title: { he: 'ארוחת צהריים חגיגית, נטוורקינג ופוסטרים מדעיים', en: 'Lunch Buffet, Networking & Scientific Poster Session' },
      description: { he: 'ארוחת צהריים גורמה עשירה וסיור בין פוסטרים של מחקרי סיעוד מצטיינים', en: 'Chef-prepared buffet and review of clinical nursing research posters' },
      room: { he: 'מסעדת מרכז הכנסים', en: 'Convention Dining Hall' }
    },
    {
      id: 'ag-8',
      time: '13:45 - 15:15',
      track: 'workshop',
      title: { he: 'סדנאות מעשיות (Hands-On Stations) – בחירה במסלול מעשי', en: 'Hands-On Simulation Stations (Pre-registered tracks)' },
      description: { he: 'תחנה 1: ניהול תקלות ECMO | תחנה 2: קריאת אק״ג מתקדמת ומקרי בוחן | תחנה 3: ניטור המודינמי פולשני וארטריאל ליין', en: 'Station 1: ECMO emergency troubleshooting | Station 2: ECG cases | Station 3: Hemodynamic wave analysis' },
      speakerName: { he: 'מר אלון ברק וצוות המדריכים', en: 'Alon Barak & Instructor Team' },
      room: { he: 'מתחם הסדנאות והסימולציה', en: 'Simulation Center Rooms 1-4' }
    },
    {
      id: 'ag-9',
      time: '15:15 - 16:15',
      track: 'all',
      title: { he: 'הרצאת נעילה מעוררת השראה: חוסן, מנהיגות וחמלה ברגעי שיא', en: 'Closing Keynote: Resilience, Leadership & Compassion in High-Stakes Care' },
      description: { he: 'איך שומרים על בריאות הנפש והאנרגיה המקצועית בעבודה יומיומית תחת עומס קיצוני', en: 'Cultivating sustainable emotional resilience and team cohesion in intensive care environments' },
      speakerName: { he: 'פרופ׳ תמר אפרתי', en: 'Prof. Tamar Efrati' },
      room: { he: 'אולם מליאה ראשי', en: 'Grand Ballroom Plenary' }
    },
    {
      id: 'ag-10',
      time: '16:15 - 16:45',
      track: 'all',
      title: { he: 'טקס הענקת פרסי חוקר מצטיין, הגרלת פרסים וסיום', en: 'Nursing Research Awards, Raffle & Closing Ceremony' },
      description: { he: 'חלוקת תעודות השתתפות, הכרזה על העבודה המחקרית הזוכה ודברי סיכום', en: 'Awarding outstanding research prizes, attendance certificates & farewell' },
      room: { he: 'אולם מליאה ראשי', en: 'Grand Ballroom Plenary' }
    }
  ],

  sponsors: [
    {
      name: 'Philips Healthcare',
      tier: 'platinum',
      category: { he: 'חסות פלטינום ראשית | ניטור חולים ובינה מלאכותית', en: 'Platinum Sponsor | Patient Monitoring & AI' },
      logoText: 'PHILIPS',
      websiteUrl: 'https://www.philips.co.il'
    },
    {
      name: 'Medtronic',
      tier: 'platinum',
      category: { he: 'חסות פלטינום ראשית | טכנולוגיות לב-ריאה והנשמה', en: 'Platinum Sponsor | Cardiovascular & Critical Care' },
      logoText: 'Medtronic',
      websiteUrl: 'https://www.medtronic.com'
    },
    {
      name: 'Edwards Lifesciences',
      tier: 'gold',
      category: { he: 'חסות זהב | ניטור המודינמי מתקדם ושסתומי לב', en: 'Gold Sponsor | Hemodynamic Monitoring & Valves' },
      logoText: 'Edwards',
      websiteUrl: 'https://www.edwards.com'
    },
    {
      name: 'GE HealthCare',
      tier: 'gold',
      category: { he: 'חסות זהב | דימות ומערכות דיגיטליות בטיפול נמרץ', en: 'Gold Sponsor | ICU Imaging & Ultrasound' },
      logoText: 'GE HealthCare',
      websiteUrl: 'https://www.gehealthcare.com'
    },
    {
      name: 'Abbott Cardiovascular',
      tier: 'silver',
      category: { he: 'חסות כסף | תמיכה מכנית והתקני לב מבניים', en: 'Silver Sponsor | Mechanical Support & Structural Heart' },
      logoText: 'Abbott',
      websiteUrl: 'https://www.abbott.com'
    },
    {
      name: 'Dräger Medical',
      tier: 'silver',
      category: { he: 'חסות כסף | מכונות הנשמה ותחנות עבודה בטיפול נמרץ', en: 'Silver Sponsor | Acute Care & Ventilation' },
      logoText: 'Dräger',
      websiteUrl: 'https://www.draeger.com'
    }
  ],

  gallery: [
    {
      title: { he: 'סדנת סימולציית ECMO והחייאה מעשית', en: 'Hands-on ECMO Simulation Workshop' },
      category: { he: 'סדנאות מעשיות', en: 'Simulations' },
      url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: { he: 'אולם המליאה המרכזי בהרצאת פתיחה', en: 'Grand Ballroom Keynote Session' },
      category: { he: 'הרצאות מליאה', en: 'Plenary Lectures' },
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: { he: 'פאנל מומחיות ומומחים בטיפול נמרץ לב', en: 'Intensive Cardiac Care Expert Panel' },
      category: { he: 'פאנלים ודיונים', en: 'Panels' },
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: { he: 'תערוכת מכשור רפואי וחדשנות טכנולוגית', en: 'Advanced Medical Expo & Demonstrations' },
      category: { he: 'תערוכה מקצועית', en: 'Medical Expo' },
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: { he: 'נטוורקינג בין עמיתים בלובי הכנס', en: 'Peer Networking & Collaborative Discussions' },
      category: { he: 'נטוורקינג', en: 'Networking' },
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: { he: 'הצגת פוסטרים של מחקרי סיעוד מצטיינים', en: 'Scientific Clinical Poster Presentations' },
      category: { he: 'מחקר ואקדמיה', en: 'Scientific Research' },
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    }
  ],

  faq: [
    {
      question: {
        he: 'האם ההרשמה לכנס כרוכה בתשלום?',
        en: 'Is registration for the conference free of charge?'
      },
      answer: {
        he: 'ההשתתפות בכנס הינה ללא תשלום, בחסות העמותה ושותפיה! עם זאת, בשל מגבלת מקומות באולמות ובסדנאות המעשיות (650 מקומות בלבד), חובה להירשם מראש ולקבל אישור כניסה דיגיטלי.',
        en: 'Attendance is completely free of charge, sponsored by the Association and our partners! However, due to strict venue and workshop capacity limits (650 attendees), advance online registration is mandatory.'
      }
    },
    {
      question: {
        he: 'האם הכנס מוכר לגמול השתלמות ונקודות זכות מקצועיות?',
        en: 'Are CME credits and professional development points awarded?'
      },
      answer: {
        he: 'כן, הכנס מוכר לגמול השתלמות עם ציון (14 שעות אקדמיות על פני יומיים) לאחיות ואחים, ומוכר לנקודות CME מטעם המועצה המדעית.',
        en: 'Yes, full attendance provides accredited CME credits and is formally recognized for professional development hours by the Ministry of Health Nursing Division.'
      }
    },
    {
      question: {
        he: 'כיצד מגיעים והאם יש חניה במקום?',
        en: 'How do I get there and is parking available?'
      },
      answer: {
        he: 'לרשות באי הכנס עומד חניון מרכז הכנסים דייוויד אינטרקונטיננטל (בהסדר מוזל למשתתפי הכנס). כמו כן, ניתן להגיע ברכבת ישראל לתחנת תל אביב ההגנה ומשם בתחבורה ציבורית קצרה, או באמצעות קווי אוטובוס ישירים המגיעים לטיילת.',
        en: 'Discounted attendee parking is available at the David InterContinental underground garage. The venue is also accessible via Tel Aviv HaHagana train station and direct bus routes to the promenade.'
      }
    },
    {
      question: {
        he: 'האם ניתן לבחור סדנה מעשית מראש?',
        en: 'Can I select my preferred hands-on workshop in advance?'
      },
      answer: {
        he: 'כן, בטופס הרישום ניתן לבחור את הסדנה המועדפת (ECMO, אק״ג מתקדם, או ניטור המודינמי). המקומות בכל סדנה מוגבלים ל-30 משתתפים על בסיס כל הקודם זוכה.',
        en: 'Yes, during registration you can select your workshop preference (ECMO troubleshooting, advanced ECG, or invasive hemodynamics). Spaces are capped at 30 per session.'
      }
    },
    {
      question: {
        he: 'נרשמתי ואיני יכול להגיע, כיצד אוכל לבטל כדי לפנות מקום לעמית?',
        en: 'I registered but can no longer attend. How do I cancel to free up my spot?'
      },
      answer: {
        he: 'ניתן לשלוח הודעת ביטול קצרה למייל העמותה icu.cardiac.il@gmail.com עם שמך ומספר הטלפון, והמקום ישוחרר מיד לממתינים ברשימת ההמתנה.',
        en: 'Please send a quick cancellation note to icu.cardiac.il@gmail.com with your name so we can immediately reassign your place to a colleague on the waiting list.'
      }
    }
  ],

  contact: {
    email: 'contact@cardiac-icu-nursing.org.il',
    phone: '03-6854120',
    whatsapp: '+972-50-1234567',
    address: {
      he: 'העמותה לקידום סיעוד קרדיאלי וטיפול נמרץ בישראל, ת.ד. 4812 תל אביב',
      en: 'Israeli Association for Cardiac & Intensive Care Nursing, P.O. Box 4812 Tel Aviv'
    }
  }
};
