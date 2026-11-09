import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'he' ? 'שאלות ותשובות' : 'FAQ'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'he' ? 'שאלות נפוצות על הכנס' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            {language === 'he'
              ? 'כל מה שחשוב לדעת לגבי נקודות גמול, חניה, שעות והרשמה'
              : 'Everything you need to know about CME points, parking, hours and registration'}
          </p>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {conferenceData.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl overflow-hidden bg-slate-50 transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-start flex items-center justify-between gap-4 font-bold text-slate-800 text-base sm:text-lg hover:text-brand-blue-600 transition-colors"
                >
                  <span>{item.question[language]}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-brand-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/50 bg-white animate-in fade-in duration-200">
                    <p>{item.answer[language]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
