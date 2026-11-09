import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { TicketModal, RegistrationData } from './TicketModal';
import { UserCheck, Sparkles } from 'lucide-react';

interface RegistrationSectionProps {
  // Can be called to open modal or scrolled to
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = () => {
  const { language } = useLanguage();
  const { general } = conferenceData;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hospital: '',
    role: '',
    workshop: '',
    dietary: 'רגיל / Standard',
    agreeTerms: true,
  });

  const [loading, setLoading] = useState(false);
  const [ticketData, setTicketData] = useState<RegistrationData | null>(null);
  const [customWebhookUrl, setCustomWebhookUrl] = useState<string>('');
  const [showWebhookConfig, setShowWebhookConfig] = useState<boolean>(false);

  const hospitalsList = [
    { he: 'המרכז הרפואי תל אביב (איכילוב)', en: 'Tel Aviv Sourasky (Ichilov)' },
    { he: 'המרכז הרפואי שיבא, תל השומר', en: 'Sheba Medical Center' },
    { he: 'המרכז הרפואי הדסה, ירושלים', en: 'Hadassah Medical Center' },
    { he: 'המרכז הרפואי רמב״ם, חיפה', en: 'Rambam Health Care Campus' },
    { he: 'מרכז רפואי רבין (בילינסון / השרון)', en: 'Rabin Medical Center (Beilinson)' },
    { he: 'המרכז הרפואי האוניברסיטאי סורוקה', en: 'Soroka University Medical Center' },
    { he: 'מרכז רפואי שמיר (אסף הרופא)', en: 'Shamir Medical Center' },
    { he: 'המרכז הרפואי מאיר, כפר סבא', en: 'Meir Medical Center' },
    { he: 'המרכז הרפואי קפלן, רחובות', en: 'Kaplan Medical Center' },
    { he: 'המרכז הרפואי כרמל, חיפה', en: 'Carmel Medical Center' },
    { he: 'המרכז הרפואי וולפסון, חולון', en: 'Wolfson Medical Center' },
    { he: 'מרכז רפואי ברזילי, אשקלון', en: 'Barzilai Medical Center' },
    { he: 'מרכז רפואי פדה-פוריה / זיו', en: 'Poriya / Ziv Medical Center' },
    { he: 'אסותא (תל אביב / אשדוד)', en: 'Assuta Medical Centers' },
    { he: 'אחר / מוסד בריאותי / אקדמי', en: 'Other Healthcare / Academic Institution' },
  ];

  const rolesList = [
    { he: 'אח/ות מוסמך/ת – טיפול נמרץ כללי', en: 'Registered Nurse – General ICU' },
    { he: 'אח/ות מוסמך/ת – טיפול נמרץ לב (ICCU)', en: 'Registered Nurse – Cardiac ICU' },
    { he: 'אח/ות מוסמך/ת – חדר צנתורים ואלקטרופיזיולוגיה', en: 'Registered Nurse – Cath / EP Lab' },
    { he: 'אח/ות אחראי/ת מחלקה / סגן/ית', en: 'Head Nurse / Deputy Head Nurse' },
    { he: 'מומחה/ית קליני/ת בסיעוד', en: 'Clinical Nurse Specialist' },
    { he: 'מתאמ/ת ECMO / אי ספיקת לב / השתלות', en: 'ECMO / Heart Failure Coordinator' },
    { he: 'רופא/ה (מתמחה / מומחה)', en: 'Physician (Resident / Attending)' },
    { he: 'סטודנט/ית לסיעוד / רפואה', en: 'Nursing / Medical Student' },
    { he: 'אחר', en: 'Other Healthcare Professional' },
  ];

  const workshopsList = [
    { he: 'סדנה 1: ניהול תקלות ותרחישי חירום ב-ECMO', en: 'Workshop 1: ECMO Emergency Troubleshooting' },
    { he: 'סדנה 2: פענוח אק״ג מתקדם והפרעות קצב מסכנות חיים', en: 'Workshop 2: Advanced ECG & Critical Dysrhythmias' },
    { he: 'סדנה 3: ניטור המודינמי פולשני וניתוח גלי לחץ', en: 'Workshop 3: Invasive Hemodynamics & Waveform Analysis' },
    { he: 'ללא השתתפות בסדנה מעשית (השתתפות במליאה בלבד)', en: 'Plenary Track Only (No hands-on workshop)' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const generatedTicketId = `ICU-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRegistration: RegistrationData = {
      ...formData,
      ticketId: generatedTicketId,
      registrationDate: new Date().toISOString(),
    };

    // Store in localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('icu_registrations') || '[]');
      stored.push(newRegistration);
      localStorage.setItem('icu_registrations', JSON.stringify(stored));
    } catch (err) {
      console.warn('Storage save error', err);
    }

    // If Webhook URL is configured, send POST request
    const webhookTarget = customWebhookUrl || localStorage.getItem('icu_sheets_webhook');
    if (webhookTarget) {
      try {
        await fetch(webhookTarget, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRegistration),
        });
      } catch (postErr) {
        console.warn('Webhook dispatch error', postErr);
      }
    }

    setTimeout(() => {
      setLoading(false);
      setTicketData(newRegistration);
    }, 600);
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red-50 text-brand-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'he' ? 'הרשמה מקוונת חינם' : 'Complimentary RSVP'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'he' ? 'הבטח/י את מקומך בכנס השנתי' : 'Secure Your Seat at the Conference'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            {language === 'he'
              ? 'ההשתתפות אינה כרוכה בתשלום אך מחייבת רישום מראש לצורך היערכות ואבטחה'
              : 'Attendance is free of charge but prior registration is strictly required'}
          </p>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Capacity Bar Alert */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
            <span className="text-slate-700">
              {language === 'he' ? 'תפוסת מקומות באולמות' : 'Venue Capacity Status'}
            </span>
            <span className="text-brand-red-600 font-bold">
              {language === 'he'
                ? `נותרו ${general.spotsRemaining} מקומות בלבד (מתוך ${general.maxAttendees})`
                : `${general.spotsRemaining} spots remaining of ${general.maxAttendees}`}
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-brand-blue-600 to-brand-red-600 h-3 rounded-full transition-all duration-1000"
              style={{
                width: `${((general.maxAttendees - general.spotsRemaining) / general.maxAttendees) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Registration Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  {language === 'he' ? 'שם מלא (עברית ואנגלית)' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'he' ? 'לדוגמה: יעל כהן / Yael Cohen' : 'e.g. Jane Doe'}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm text-slate-800 placeholder-slate-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  {language === 'he' ? 'כתובת דוא״ל למשלוח האישור' : 'Email Address'} *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@hospital.org.il"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm text-slate-800 placeholder-slate-400 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  {language === 'he' ? 'מספר טלפון נייד' : 'Mobile Phone'} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="050-1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm text-slate-800 placeholder-slate-400 transition"
                />
              </div>

              {/* Hospital / Organization */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  {language === 'he' ? 'מרכז רפואי / מוסד' : 'Hospital / Healthcare Institution'} *
                </label>
                <select
                  required
                  value={formData.hospital}
                  onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm text-slate-800 bg-white transition"
                >
                  <option value="">{language === 'he' ? 'בחר/י מרכז רפואי...' : 'Select Hospital...'}</option>
                  {hospitalsList.map((h, i) => (
                    <option key={i} value={h[language]}>
                      {h[language]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Role / Profession */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  {language === 'he' ? 'תפקיד ומחלקה' : 'Role / Clinical Department'} *
                </label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm text-slate-800 bg-white transition"
                >
                  <option value="">{language === 'he' ? 'בחר/י תפקיד...' : 'Select Clinical Role...'}</option>
                  {rolesList.map((r, i) => (
                    <option key={i} value={r[language]}>
                      {r[language]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Workshop Selection */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  {language === 'he' ? 'סדנה מעשית מועדפת (Hands-On)' : 'Workshop Preference'}
                </label>
                <select
                  value={formData.workshop}
                  onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm text-slate-800 bg-white transition"
                >
                  <option value="">{language === 'he' ? 'בחר/י סדנה...' : 'Select Workshop...'}</option>
                  {workshopsList.map((w, i) => (
                    <option key={i} value={w[language]}>
                      {w[language]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dietary Preference */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                {language === 'he' ? 'העדפה קולינרית (לארוחת הצהריים)' : 'Dietary Preference'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'standard', he: 'רגיל / בשרי', en: 'Standard Meat' },
                  { id: 'vegetarian', he: 'צמחוני', en: 'Vegetarian' },
                  { id: 'vegan', he: 'טבעוני', en: 'Vegan' },
                  { id: 'gluten-free', he: 'ללא גלוטן', en: 'Gluten Free' },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition ${
                      formData.dietary === opt[language]
                        ? 'border-brand-blue-600 bg-brand-blue-50 text-brand-blue-900'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="dietary"
                      value={opt[language]}
                      checked={formData.dietary === opt[language]}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      className="text-brand-blue-600 focus:ring-brand-blue-500"
                    />
                    <span>{opt[language]}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                required
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-blue-600 focus:ring-brand-blue-500"
              />
              <label htmlFor="terms" className="text-xs text-slate-500 leading-normal">
                {language === 'he'
                  ? 'אני מאשר/ת את קבלת עדכוני הכנס וכרטיס הכניסה הדיגיטלי בדוא״ל וב-SMS, ומתחייב/ת להודיע מראש במקרה של ביטול הגעה למען עמיתים הממתינים בתור.'
                  : 'I agree to receive conference updates and digital ticket via email and SMS, and commit to notifying the organizer if unable to attend.'}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-brand-red-600 hover:bg-brand-red-700 text-white font-extrabold text-base shadow-xl shadow-brand-red-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
            >
              {loading ? (
                <span>{language === 'he' ? 'רושם ומפיק כרטיס...' : 'Processing Badge...'}</span>
              ) : (
                <>
                  <UserCheck className="w-5 h-5" />
                  <span>
                    {language === 'he'
                      ? 'השלם הרשמה והפק כרטיס כניסה אישי'
                      : 'Complete Free RSVP & Generate Pass'}
                  </span>
                </>
              )}
            </button>

            {/* Google Sheets Integration Link hint */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setShowWebhookConfig(!showWebhookConfig)}
                className="text-slate-400 hover:text-slate-600 text-xs inline-flex items-center gap-1 transition"
              >
                <span>⚙️ {language === 'he' ? 'הגדרת חיבור ישיר ל-Google Sheets (למנהלי האתר)' : 'Google Sheets Webhook Settings'}</span>
              </button>

              {showWebhookConfig && (
                <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-start animate-in fade-in">
                  <p className="text-xs text-slate-600 mb-2 font-medium">
                    {language === 'he'
                      ? 'הדבק כאן את כתובת ה-Webhook / Google Apps Script שלך. כל נרשם יישלח מיד לגיליון האלקטרוני:'
                      : 'Paste your Google Apps Script / Webhook URL here to stream registrations directly to Google Sheets:'}
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://script.google.com/macros/s/.../exec"
                      value={customWebhookUrl}
                      onChange={(e) => {
                        setCustomWebhookUrl(e.target.value);
                        localStorage.setItem('icu_sheets_webhook', e.target.value);
                      }}
                      className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 font-mono"
                    />
                    <span className="text-[11px] text-emerald-600 self-center font-bold">
                      {customWebhookUrl ? '✓ מוגדר' : ''}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    (ההוראות המלאות מפורטות בקובץ google-sheets-integration.md בתיקיית הפרויקט)
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Ticket Result Modal */}
      <TicketModal data={ticketData} onClose={() => setTicketData(null)} />
    </section>
  );
};
