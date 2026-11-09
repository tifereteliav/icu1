import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { Award, Sparkles, ExternalLink } from 'lucide-react';

export const SponsorsSection: React.FC = () => {
  const { language } = useLanguage();

  const platinumSponsors = conferenceData.sponsors.filter((s) => s.tier === 'platinum');
  const goldSponsors = conferenceData.sponsors.filter((s) => s.tier === 'gold');
  const silverSponsors = conferenceData.sponsors.filter((s) => s.tier === 'silver');

  return (
    <section id="sponsors" className="py-20 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'he' ? 'חסויות ושותפים' : 'Industry Partners'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'he' ? 'תודה לשותפינו לדרך' : 'Our Generous Sponsors & Partners'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            {language === 'he'
              ? 'החברות המובילות בפיתוח טכנולוגיות רפואיות מתקדמות לטיפול נמרץ וקרדיולוגיה'
              : 'Leading medical innovation partners empowering critical care healthcare'}
          </p>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Platinum Tier */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{language === 'he' ? 'חסות פלטינום ראשית' : 'Platinum Partners'}</span>
            </span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {platinumSponsors.map((sp, i) => (
              <a
                key={i}
                href={sp.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl p-8 border-2 border-brand-blue-100 hover:border-brand-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="text-2xl sm:text-3xl font-black text-brand-blue-900 tracking-wider font-mono mb-2 group-hover:scale-105 transition-transform">
                  {sp.logoText}
                </div>
                <span className="text-xs font-semibold text-brand-blue-600">
                  {sp.category[language]}
                </span>
                <span className="mt-3 text-[11px] text-slate-400 flex items-center gap-1 group-hover:text-brand-blue-500 transition-colors">
                  <span>{language === 'he' ? 'לאתר החברה' : 'Visit Website'}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Gold & Silver Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gold */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-4 inline-block">
              {language === 'he' ? 'חסות זהב' : 'Gold Sponsors'}
            </span>
            <div className="grid grid-cols-1 gap-4">
              {goldSponsors.map((sp, i) => (
                <a
                  key={i}
                  href={sp.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg">{sp.logoText}</h4>
                    <p className="text-xs text-slate-500">{sp.category[language]}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Silver */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 mb-4 inline-block">
              {language === 'he' ? 'חסות כסף' : 'Silver Sponsors'}
            </span>
            <div className="grid grid-cols-1 gap-4">
              {silverSponsors.map((sp, i) => (
                <a
                  key={i}
                  href={sp.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-md transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg">{sp.logoText}</h4>
                    <p className="text-xs text-slate-500">{sp.category[language]}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
