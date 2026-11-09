import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { Stethoscope, Cpu, Award, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const { about, stats } = conferenceData;

  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-6 h-6 text-brand-blue-600" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-600" />,
    Award: <Award className="w-6 h-6 text-brand-red-600" />,
    Users: <Users className="w-6 h-6 text-emerald-600" />,
  };

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Bar */}
        <div className="relative -mt-32 mb-16 z-20">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-slate-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center pt-4 sm:pt-0">
                <span className="text-3xl sm:text-5xl font-black text-brand-blue-900 tracking-tight font-mono">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-600 mt-2 max-w-[180px]">
                  {stat.label[language]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            {language === 'he' ? 'אודות הכנס' : 'About The Conference'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'he'
              ? 'פסגת המצוינות בסיעוד קרדיאלי וטיפול נמרץ'
              : 'The Pinnacle of Cardiac & Critical Care Nursing'}
          </h2>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Story Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            {about.paragraphs[language].map((p, i) => (
              <p key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue-600 flex-shrink-0 mt-1" />
                <span>{p}</span>
              </p>
            ))}
          </div>

          {/* Highlights 4 Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-brand-blue-200 hover:shadow-lg hover:shadow-brand-blue-500/5 transition-all duration-300 group"
              >
                <div className="p-3 bg-white group-hover:bg-brand-blue-50 w-fit rounded-xl border border-slate-100 mb-4 transition-colors">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {item.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-normal">
                  {item.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
