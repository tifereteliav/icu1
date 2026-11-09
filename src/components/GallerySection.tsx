import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { conferenceData } from '../data/conferenceData';
import { Camera, X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { language } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{language === 'he' ? 'גלריית תמונות' : 'Event Moments'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'he' ? 'רגעים מכנסי העבר של העמותה' : 'Moments from Recent Conferences'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            {language === 'he'
              ? 'אוירה מקצועית, סימולציות חיות, הרצאות מרתקות ומפגש חם בין עמיתים'
              : 'Dynamic simulations, world-class lectures, and inspiring peer connections'}
          </p>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferenceData.gallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(item.url)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title[language]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Tag & Title */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-brand-blue-600 text-white mb-1.5">
                  {item.category[language]}
                </span>
                <h3 className="font-bold text-sm sm:text-base leading-snug drop-shadow-sm">
                  {item.title[language]}
                </h3>
              </div>

              {/* Zoom Icon indicator */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage}
            alt="תמונה מוגדלת"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
