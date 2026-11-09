import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { general, contact } = conferenceData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Logo & Vision */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl h-12 w-12 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="לוגו העמותה" className="h-full w-full object-contain" />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-sm sm:text-base leading-tight">
                  {general.associationName[language]}
                </h4>
                <span className="text-xs text-brand-red-500 font-semibold">
                  {language === 'he' ? 'עמותה רשומה בישראל' : 'Registered Non-Profit'}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'he'
                ? 'העמותה פועלת לקידום הידע, המקצועיות, המחקר ומעמד צוותי הסיעוד בטיפול נמרץ, טיפול נמרץ לב ויחידות המעקב הקריטיות.'
                : 'Advancing knowledge, clinical excellence, research, and professional advocacy for critical care and cardiac nurses across Israel.'}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              {language === 'he' ? 'ניווט מהיר' : 'Quick Links'}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition">
                  {language === 'he' ? 'אודות הכנס' : 'About'}
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-white transition">
                  {language === 'he' ? 'תוכנית וסדר יום' : 'Agenda'}
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-white transition">
                  {language === 'he' ? 'נבחרת המרצים' : 'Speakers'}
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition">
                  {language === 'he' ? 'הרשמה מקוונת חינם' : 'Free Registration'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition">
                  {language === 'he' ? 'מיקום והגעה' : 'Venue & Location'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  {language === 'he' ? 'שאלות נפוצות' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              {language === 'he' ? 'יצירת קשר ומזכירות' : 'Contact & Secretariat'}
            </h5>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red-500 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue-500 flex-shrink-0" />
                <span dir="ltr">{contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{contact.address[language]}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Important Note & Back to top */}
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm mb-2 uppercase tracking-wider">
              {language === 'he' ? 'הודעה למשתתפים' : 'Important Note'}
            </h5>
            <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60 text-xs text-slate-300">
              <p>
                {language === 'he'
                  ? 'הכניסה מותנית בהצגת כרטיס המשתתף הדיגיטלי ותעודה מזהה בעמדות הבידוק.'
                  : 'Entry is subject to presenting the digital badge and matching medical ID at check-in.'}
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{language === 'he' ? 'חזרה לראש העמוד' : 'Back to Top'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {general.associationName[language]}. {language === 'he' ? 'כל הזכויות שמורות.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>{language === 'he' ? 'נבנה במסירות עבור צוותי הרפואה והסיעוד' : 'Dedicated to Critical Care Healthcare Heroes'}</span>
            <Heart className="w-3.5 h-3.5 text-brand-red-600 fill-brand-red-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};
