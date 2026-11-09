import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { CountdownTimer } from './CountdownTimer';
import { Calendar, MapPin, Sparkles, UserCheck, Clock, FileText, Activity, Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  const { language } = useLanguage();
  const { general } = conferenceData;

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-slate-950 text-white">
      {/* Background ECG Waveform */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex items-center">
        <svg
          className="w-full h-48 text-cyan-400 stroke-current"
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

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-brand-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 text-center lg:text-start">
            {/* Association Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-blue-200 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-red-500" />
              <span>{general.associationName[language]}</span>
            </div>

            {/* Conference Title */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
              {general.conferenceTitle[language]}
            </h1>

            {/* Conference Theme */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-light leading-relaxed mb-6">
              "{general.conferenceTheme[language]}"
            </p>

            {/* Event Key Info Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-slate-100 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-brand-red-500 flex-shrink-0" />
                <span className="font-medium">{general.dateDisplay[language]}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-medium">{general.timeDisplay[language]}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-medium">{general.venueName[language]}</span>
              </div>
            </div>

            {/* Live Countdown */}
            <div className="my-4">
              <p className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                {language === 'he' ? 'זמן נותר עד לפתיחת שערים' : 'Countdown to Opening Session'}
              </p>
              <div className="flex justify-center lg:justify-start">
                <CountdownTimer targetDate={conferenceData.eventDate} />
              </div>
            </div>

            {/* Limited Capacity Alert */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>
                {language === 'he'
                  ? `ההשתתפות ללא תשלום בהרשמה מראש | נותרו ${general.spotsRemaining} מקומות אחרונים!`
                  : `Free attendance with advance RSVP | Only ${general.spotsRemaining} spots left!`}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
                <FileText className="w-5 h-5 text-cyan-300" />
                <span>{language === 'he' ? 'לתוכנית הכנס וההרצאות' : 'Explore Full Agenda'}</span>
              </a>
            </div>
          </div>

          {/* Hologram Showcase Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg group">
              
              {/* Outer Holographic Glow Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-subtle"></div>
              
              {/* Main Card Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/40 bg-slate-900/90 shadow-2xl backdrop-blur-md">
                
                {/* Hologram Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/icu-hologram.jpg"
                    alt={language === 'he' ? 'הולוגרמת צוותי סיעוד טיפול נמרץ וקרדיולוגיה' : 'ICU Nursing Hologram Simulation'}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlays for High-Tech Mood */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-cyan-950/20 opacity-80"></div>
                  
                  {/* Floating Top Badge */}
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-[11px] font-bold text-cyan-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span>{language === 'he' ? 'הולוגרמת ניטור קרדיאלי 3D' : '3D Cardiac Hologram'}</span>
                  </div>

                  {/* Floating Heart Rate / Vitals Badge */}
                  <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-brand-red-500/40 text-xs font-semibold text-white shadow-lg">
                    <Heart className="w-4 h-4 text-brand-red-500 fill-brand-red-500 animate-pulse" />
                    <span className="font-mono text-cyan-300 font-bold">78 BPM</span>
                    <span className="text-slate-400">|</span>
                    <span className="text-[11px] text-slate-300">SpO2 99%</span>
                  </div>
                </div>

                {/* Bottom Caption Bar */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-slate-950/90 border-t border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-cyan-500/10 border border-cyan-400/30 rounded-xl text-cyan-400">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white">
                        {language === 'he' ? 'סיעוד בחזית הטכנולוגיה' : 'Nursing at Tech Frontier'}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-cyan-300/80">
                        {language === 'he' ? 'חידושים בניטור קריטי ואי ספיקת לב' : 'AI, Telemetry & Critical Innovations'}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-200 border border-cyan-400/30">
                    ICU 2025
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
