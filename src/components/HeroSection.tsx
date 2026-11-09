import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { CountdownTimer } from './CountdownTimer';
import { Calendar, MapPin, Sparkles, UserCheck, Clock, FileText } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  const { language } = useLanguage();
  const { general } = conferenceData;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-slate-900 text-white">
      {/* Dynamic ECG waveform background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex items-center">
        <svg
          className="w-full h-48 text-white stroke-current"
          viewBox="0 0 1200 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 75 H300 L320 20 L335 130 L350 45 L365 95 L375 75 H550 L570 15 L585 135 L600 40 L615 100 L625 75 H850 L870 20 L885 130 L900 45 L915 95 L925 75 H1200"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Decorative gradient blur circles */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-brand-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Association Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-blue-200 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-brand-red-500" />
          <span>{general.associationName[language]}</span>
        </div>

        {/* Conference Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:leading-tight mb-4 drop-shadow-sm">
          {general.conferenceTitle[language]}
        </h1>

        {/* Conference Theme */}
        <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed mb-6">
          "{general.conferenceTheme[language]}"
        </p>

        {/* Event Key Info Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm text-slate-100 mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl">
            <Calendar className="w-4 h-4 text-brand-red-500 flex-shrink-0" />
            <span className="font-medium">{general.dateDisplay[language]}</span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl">
            <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="font-medium">{general.timeDisplay[language]}</span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl">
            <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="font-medium">{general.venueName[language]}</span>
          </div>
        </div>

        {/* Live Countdown */}
        <div className="my-2">
          <p className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
            {language === 'he' ? 'זמן נותר עד לפתיחת שערים' : 'Countdown to Opening Session'}
          </p>
          <CountdownTimer targetDate={conferenceData.eventDate} />
        </div>

        {/* Limited capacity alert */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>
            {language === 'he'
              ? `ההשתתפות ללא תשלום בהרשמה מראש | נותרו ${general.spotsRemaining} מקומות אחרונים!`
              : `Free attendance with advance RSVP | Only ${general.spotsRemaining} spots left!`}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-red-600 hover:bg-brand-red-700 text-white font-bold text-base shadow-xl shadow-brand-red-600/30 hover:shadow-brand-red-600/50 transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <UserCheck className="w-5 h-5" />
            <span>{language === 'he' ? 'להרשמה מיידית (ללא עלות)' : 'Register Free of Charge'}</span>
          </button>

          <a
            href="#agenda"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all"
          >
            <FileText className="w-5 h-5 text-blue-300" />
            <span>{language === 'he' ? 'לתוכנית הכנס וההרצאות' : 'Explore Full Agenda'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
