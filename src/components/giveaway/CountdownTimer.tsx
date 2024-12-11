import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface CountdownTimerProps {
  targetHour: number;
  targetMinute: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetHour, targetMinute }) => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(targetHour, targetMinute, 0);

      if (target <= now) {
        target.setDate(target.getDate() + 1);
      }

      const diff = target.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      return language === 'ar'
        ? `${minutes} دقيقة : ${hours} ساعة`
        : `${hours}h : ${minutes}m`;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetHour, targetMinute, language]);

  return (
    <div className="text-orange-600 font-medium text-lg">
      {language === 'ar' ? `الوقت المتبقي: ${timeLeft}` : `Time Left: ${timeLeft}`}
    </div>
  );
};