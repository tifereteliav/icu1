import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';
import { CheckCircle2, Printer, X, Calendar, MapPin, QrCode } from 'lucide-react';

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  hospital: string;
  role: string;
  workshop: string;
  dietary: string;
  ticketId: string;
  registrationDate: string;
}

interface TicketModalProps {
  data: RegistrationData | null;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ data, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (data) {
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#005CE6', '#DC2626', '#10B981', '#F59E0B'],
        });
      } catch (err) {
        console.error('Confetti error', err);
      }
    }
  }, [data]);

  if (!data) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 text-slate-400 hover:text-slate-700 bg-white/80 p-2 rounded-full shadow-sm transition-colors"
          aria-label="סגור"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-black">
            {language === 'he' ? 'ההרשמה הושלמה בהצלחה!' : 'Registration Confirmed!'}
          </h3>
          <p className="text-xs text-emerald-100 mt-1">
            {language === 'he'
              ? 'אישור כניסה דיגיטלי נוצר עבורך ונשמר במערכת'
              : 'Your digital pass is ready. A copy was registered.'}
          </p>
        </div>

        {/* Printable Ticket Card */}
        <div id="printable-ticket" className="p-6 bg-slate-50 border-b border-dashed border-slate-300">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 relative overflow-hidden">
            {/* Top Logo and Name */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img src="/logo.png" alt="לוגו" className="h-9 w-9 object-contain" />
                <div>
                  <h4 className="text-xs font-black text-brand-blue-900">
                    {language === 'he' ? 'כנס סיעוד קרדיאלי וטיפול נמרץ' : 'Cardiac & ICU Conference'}
                  </h4>
                  <span className="text-[10px] text-slate-400">
                    {language === 'he' ? 'כרטיס כניסה אישי' : 'Official Attendee Badge'}
                  </span>
                </div>
              </div>
              <div className="text-end">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Ticket #
                </span>
                <span className="text-xs font-mono font-black text-brand-red-600">
                  {data.ticketId}
                </span>
              </div>
            </div>

            {/* Attendee Details */}
            <div className="py-4 space-y-2">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                  {language === 'he' ? 'שם המשתתף/ת' : 'Attendee Name'}
                </span>
                <span className="text-base font-extrabold text-slate-900">{data.fullName}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">
                    {language === 'he' ? 'תפקיד' : 'Role'}
                  </span>
                  <span className="font-semibold text-slate-800">{data.role}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">
                    {language === 'he' ? 'מוסד רפואי' : 'Hospital / Center'}
                  </span>
                  <span className="font-semibold text-slate-800">{data.hospital}</span>
                </div>
              </div>

              {data.workshop && (
                <div className="pt-1 text-xs">
                  <span className="text-[10px] text-slate-400 block">
                    {language === 'he' ? 'סדנה מעשית שנבחרה' : 'Selected Workshop'}
                  </span>
                  <span className="font-semibold text-brand-blue-700">{data.workshop}</span>
                </div>
              )}
            </div>

            {/* Event Time & Venue Info */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-blue-600" />
                <span>14-15 באוקטובר 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-red-600" />
                <span>דייוויד אינטרקונטיננטל</span>
              </div>
            </div>

            {/* QR Code Simulation */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-slate-900 p-2 rounded-lg text-white">
                  <QrCode className="w-10 h-10" />
                </div>
                <div className="text-[10px] text-slate-400 leading-tight">
                  <span className="font-semibold text-slate-600 block">
                    {language === 'he' ? 'סריקה מהירה בכניסה' : 'Fast-Track Entrance'}
                  </span>
                  <span>{data.email}</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                {language === 'he' ? 'מאושר' : 'CONFIRMED'}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-white flex items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-bold transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>{language === 'he' ? 'הדפס כרטיס' : 'Print / Save Pass'}</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs sm:text-sm font-bold shadow transition-colors"
          >
            <span>{language === 'he' ? 'סגור ואישור' : 'Done'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
