import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData, Speaker } from '../data/conferenceData';
import { SpeakerModal } from './SpeakerModal';
import { Building2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export const SpeakersSection: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            {language === 'he' ? 'נבחרת המרצים' : 'Keynote & Faculty'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'he'
              ? 'מובילי הקרדיולוגיה והטיפול הנמרץ בישראל'
              : 'Leading Minds in Critical Care & Cardiology'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            {language === 'he'
              ? 'חוקרים מובילים, מנהלי מחלקות, מפקחות קליניות ומומחי סיעוד קליני בכיר'
              : 'Renowned researchers, department heads, nurse executives and clinical specialists'}
          </p>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferenceData.speakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setActiveSpeaker(speaker)}
              className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-brand-blue-300 hover:shadow-xl hover:shadow-brand-blue-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-slate-200">
                  <img
                    src={speaker.image}
                    alt={speaker.name[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {speaker.isKeynote && (
                    <div className="absolute top-3 right-3 bg-brand-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{language === 'he' ? 'הרצאת מליאה' : 'Keynote'}</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <h3 className="font-extrabold text-slate-900 text-xl group-hover:text-brand-blue-600 transition-colors">
                  {speaker.name[language]}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-brand-blue-700 mt-1">
                  {speaker.title[language]}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                  <span className="line-clamp-1">{speaker.hospital[language]}</span>
                </div>

                {/* Talk Topic Preview */}
                <div className="mt-4 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">
                    {language === 'he' ? 'נושא ההרצאה' : 'Session Topic'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium line-clamp-2">
                    {speaker.talkTopic[language]}
                  </p>
                </div>
              </div>

              {/* View Bio button */}
              <div className="mt-5 pt-3 flex items-center justify-between text-xs font-bold text-brand-blue-600 group-hover:text-brand-blue-800 transition-colors">
                <span>{language === 'he' ? 'קרא ביוגרפיה מלאה' : 'View Full Bio'}</span>
                {isRtl ? (
                  <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <SpeakerModal speaker={activeSpeaker} onClose={() => setActiveSpeaker(null)} />
    </section>
  );
};
