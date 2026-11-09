import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { Clock, MapPin, User } from 'lucide-react';

export const AgendaSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedTrack, setSelectedTrack] = useState<string>('all');

  const tracks = [
    { id: 'all', label: { he: 'כל התוכנית', en: 'All Sessions' } },
    { id: 'icu', label: { he: 'מסלול טיפול נמרץ', en: 'Critical Care Track' } },
    { id: 'cardiac', label: { he: 'מסלול קרדיולוגיה', en: 'Cardiac Track' } },
    { id: 'workshop', label: { he: 'סדנאות מעשיות (Hands-On)', en: 'Practical Workshops' } },
  ];

  const filteredAgenda = conferenceData.agenda.filter((item) => {
    if (selectedTrack === 'all') return true;
    return item.track === selectedTrack || item.track === 'all';
  });

  const getTrackBadge = (track: string) => {
    switch (track) {
      case 'icu':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            {language === 'he' ? 'טיפול נמרץ' : 'Critical Care'}
          </span>
        );
      case 'cardiac':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
            {language === 'he' ? 'קרדיולוגיה' : 'Cardiac'}
          </span>
        );
      case 'workshop':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
            {language === 'he' ? 'סדנה מעשית' : 'Workshop'}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            {language === 'he' ? 'מליאה כללית' : 'Plenary'}
          </span>
        );
    }
  };

  return (
    <section id="agenda" className="py-20 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            {language === 'he' ? 'תוכנית הכנס' : 'Conference Agenda'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'he' ? 'סדר יום, מושבים והרצאות' : 'Schedule, Tracks & Sessions'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            {language === 'he'
              ? 'יומיים גדושים בתכנים קליניים פורצי דרך, סימולציות מתקדמות וסדנאות מעשיות'
              : 'Two comprehensive days of groundbreaking clinical insights, simulation, and practical learning'}
          </p>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Track Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedTrack === track.id
                  ? 'bg-brand-blue-600 text-white shadow-md shadow-brand-blue-600/20 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {track.label[language]}
            </button>
          ))}
        </div>

        {/* Agenda Timeline List */}
        <div className="space-y-4">
          {filteredAgenda.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              {/* Left/Start side: Time & Track */}
              <div className="flex items-center gap-3 md:w-56 flex-shrink-0">
                <div className="flex items-center gap-2 text-slate-700 font-mono font-bold text-sm sm:text-base bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                  <Clock className="w-4 h-4 text-brand-blue-600" />
                  <span>{item.time}</span>
                </div>
                <div>{getTrackBadge(item.track)}</div>
              </div>

              {/* Center: Title & Description */}
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-brand-blue-600 transition-colors">
                  {item.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  {item.description[language]}
                </p>

                {item.speakerName && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue-700 mt-2.5">
                    <User className="w-3.5 h-3.5" />
                    <span>{item.speakerName[language]}</span>
                  </div>
                )}
              </div>

              {/* Right/End side: Room */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60 md:self-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.room[language]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
