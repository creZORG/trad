"use client";

import { useState, useEffect } from 'react';

// Target date: Q4 2025. Set to December 1, 2025
const TARGET_DATE = new Date('2025-12-01T00:00:00Z').getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    // Set initial time to avoid flash of 00s
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];
  
  if (!isMounted) {
    return (
        <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {timeUnits.map((unit) => (
                <div key={unit.label} className="text-center">
                    <div className="text-4xl md:text-6xl font-bold font-headline text-primary">--</div>
                    <div className="text-sm md:text-base uppercase tracking-wider text-muted-foreground">{unit.label}</div>
                </div>
            ))}
        </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center w-20">
          <div className="text-4xl md:text-6xl font-bold font-headline text-primary">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base uppercase tracking-wider text-muted-foreground">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
