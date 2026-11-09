import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: { he: 'אודות הכנס', en: 'About' } },
    { href: '#agenda', label: { he: 'תוכנית וסדר יום', en: 'Agenda' } },
    { href: '#speakers', label: { he: 'מרצים', en: 'Speakers' } },
    { href: '#location', label: { he: 'מיקום והגעה', en: 'Location' } },
    { href: '#gallery', label: { he: 'גלריה', en: 'Gallery' } },
    { href: '#sponsors', label: { he: 'חסויות', en: 'Sponsors' } },
    { href: '#faq', label: { he: 'שאלות נפוצות', en: 'FAQ' } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
          : 'bg-gradient-to-b from-brand-blue-900/90 to-brand-blue-900/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Association Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center h-12 w-12 overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/logo.png"
                alt="לוגו העמותה לקידום סיעוד קרדיאלי וטיפול נמרץ בישראל"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-black tracking-tight leading-tight transition-colors ${
                  isScrolled ? 'text-brand-blue-900' : 'text-white'
                } text-sm sm:text-base`}
              >
                {language === 'he' ? 'סיעוד קרדיאלי וטיפול נמרץ' : 'Cardiac & ICU Nursing'}
              </span>
              <span
                className={`text-xs hidden sm:block ${
                  isScrolled ? 'text-slate-500' : 'text-slate-200'
                }`}
              >
                {language === 'he' ? 'העמותה הרשמית בישראל' : 'Israeli Association'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-slate-600 hover:text-brand-blue-600 hover:bg-brand-blue-50'
                    : 'text-slate-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label[language]}
              </a>
            ))}
          </nav>

          {/* Actions: Language Toggle & Register CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isScrolled
                  ? 'border-slate-200 text-slate-700 hover:bg-slate-100'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              title={language === 'he' ? 'Switch to English' : 'עבור לעברית'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'he' ? 'English' : 'עברית'}</span>
            </button>

            {/* Register CTA Button */}
            <button
              onClick={onOpenRegister}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-brand-red-600 hover:bg-brand-red-700 text-white shadow-lg shadow-brand-red-600/30 hover:shadow-brand-red-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <UserCheck className="w-4 h-4" />
              <span>{language === 'he' ? 'הרשמה מהירה (חינם)' : 'Free Registration'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className={`p-1.5 rounded-lg border text-xs font-bold ${
                isScrolled ? 'text-slate-700 border-slate-200' : 'text-white border-white/20'
              }`}
            >
              {language === 'he' ? 'EN' : 'עב'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="פתח תפריט"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-800 font-medium hover:bg-brand-blue-50 hover:text-brand-blue-600 text-base"
              >
                {link.label[language]}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-brand-red-600 text-white shadow-md"
              >
                <UserCheck className="w-5 h-5" />
                <span>{language === 'he' ? 'הרשמה מהירה (חינם)' : 'Free Registration'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
