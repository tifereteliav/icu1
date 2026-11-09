import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Speaker } from '../data/conferenceData';
import { X, Building2, BookOpen } from 'lucide-react';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  const { language } = useLanguage();

  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 sm:left-6 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
          aria-label="סגור"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start pt-2">
          {/* Speaker Avatar */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-brand-blue-100">
            <img
              src={speaker.image}
              alt={speaker.name[language]}
              className="w-full h-full object-cover"
            />
            {speaker.isKeynote && (
              <span className="absolute bottom-2 right-2 bg-brand-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                Keynote
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 text-center sm:text-start">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {speaker.name[language]}
            </h3>
            <p className="text-sm font-semibold text-brand-blue-600 mt-1">
              {speaker.title[language]}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-500 mt-1">
              <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
              <span>{speaker.hospital[language]}</span>
            </div>

            {/* Talk Topic Box */}
            <div className="mt-4 p-3.5 rounded-xl bg-brand-blue-50/70 border border-brand-blue-100/80 text-start">
              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-blue-800 mb-1">
                <BookOpen className="w-3.5 h-3.5 text-brand-red-600" />
                <span>{language === 'he' ? 'נושא ההרצאה בכנס:' : 'Conference Presentation:'}</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                {speaker.talkTopic[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
            {language === 'he' ? 'אודות וניסיון מקצועי' : 'Biography & Clinical Background'}
          </h4>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {speaker.bio[language]}
          </p>
        </div>
      </div>
    </div>
  );
};
