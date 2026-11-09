import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { MapPin, Navigation, Car, Train, Bus } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { language } = useLanguage();
  const { general } = conferenceData;

  return (
    <section id="location" className="py-20 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            {language === 'he' ? 'מיקום ודרכי הגעה' : 'Venue & Directions'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'he' ? 'איך מגיעים לכנס?' : 'How to Reach the Venue'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            {language === 'he'
              ? 'מיקום מרכזי, נגיש ונוח בטיילת תל אביב עם חניה מוסדרת ותחבורה ציבורית סמוכה'
              : 'Centrally located on the Tel Aviv beach promenade with easy parking and public transit'}
          </p>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-red-50 text-brand-red-600 rounded-2xl flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
                    {general.venueName[language]}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{general.venueAddress[language]}</p>
                </div>
              </div>

              {/* Navigation CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={general.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{language === 'he' ? 'נווט ב-Waze' : 'Navigate Waze'}</span>
                </a>

                <a
                  href={general.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                >
                  <MapPin className="w-4 h-4 text-brand-red-500" />
                  <span>{language === 'he' ? 'Google Maps' : 'Google Maps'}</span>
                </a>
              </div>

              {/* Transportation Tips */}
              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">
                      {language === 'he' ? 'חניה מוסדרת: ' : 'Parking: '}
                    </span>
                    <span>
                      {language === 'he'
                        ? 'חניון המלון התת-קרקעי בהנחה מיוחדת לבאי הכנס (יש להחתים כרטיס בעמדת הרישום).'
                        : 'Underground venue garage at discounted conference rates (validate ticket at registration desk).'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">
                      {language === 'he' ? 'רכבת ישראל: ' : 'Train: '}
                    </span>
                    <span>
                      {language === 'he'
                        ? 'תחנת תל אביב ההגנה ומשם נסיעה קצרה בקו 10, 14 או מונית.'
                        : 'Tel Aviv HaHagana station followed by a short bus ride or taxi.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bus className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">
                      {language === 'he' ? 'אוטובוסים: ' : 'Bus: '}
                    </span>
                    <span>
                      {language === 'he'
                        ? 'קווים 10, 14, 18, 25, 48, 125, 240 המגיעים לתחנת הכרמלית / שוק הכרמל / קויפמן.'
                        : 'Direct routes to Carmelit terminal, Shuk HaCarmel, and Kaufmann promenade.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-200">
            <iframe
              title="Conference Location Map"
              src="https://maps.google.com/maps?q=David+Intercontinental+Tel+Aviv&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
