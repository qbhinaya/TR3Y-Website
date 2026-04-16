import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      {/* Retro Game Counter Style */}
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-[#FF9B00] blur-sm opacity-50" />
        
        {/* Main box */}
        <div className="relative bg-black border-4 border-white p-1 pixel-box-shadow">
          {/* Inner display */}
          <div className="bg-[#1a1a2e] border-2 border-[#FF9B00] px-4 py-3 min-w-[60px] sm:min-w-[75px]">
            <div className="text-2xl sm:text-3xl md:text-4xl text-[#FFFFB0] tabular-nums font-bold relative">
              {/* Glowing effect */}
              <span className="absolute inset-0 text-[#FF9B00] blur-sm opacity-50">
                {String(value).padStart(2, '0')}
              </span>
              <span className="relative">
                {String(value).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Label badge */}
      <div className="bg-[#FF9B00] border-2 border-white px-3 py-1 pixel-shadow-lg">
        <div className="text-[8px] sm:text-[10px] text-white uppercase tracking-wide">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
      <TimeBox value={timeLeft.days} label="HARI" />
      <TimeBox value={timeLeft.hours} label="JAM" />
      <TimeBox value={timeLeft.minutes} label="MENIT" />
      <TimeBox value={timeLeft.seconds} label="DETIK" />
    </div>
  );
}
