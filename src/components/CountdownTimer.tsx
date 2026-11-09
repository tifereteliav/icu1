import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { language } = useLanguage();

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: { he: 'ימים', en: 'Days' } },
    { value: timeLeft.hours, label: { he: 'שעות', en: 'Hours' } },
    { value: timeLeft.minutes, label: { he: 'דקות', en: 'Minutes' } },
    { value: timeLeft.seconds, label: { he: 'שניות', en: 'Seconds' } },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 my-6">
      {units.map((unit, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3.5 min-w-[70px] sm:min-w-[95px] shadow-lg shadow-black/10 transform hover:scale-105 transition-transform"
        >
          <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-slate-200 mt-0.5">
            {unit.label[language]}
          </span>
        </div>
      ))}
    </div>
  );
};
