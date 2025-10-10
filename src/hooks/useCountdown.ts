import { useState, useEffect } from 'react';

const STORAGE_KEY = 'countdown_end_time';
const COUNTDOWN_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    // Get or set the end time
    let endTime = localStorage.getItem(STORAGE_KEY);
    
    if (!endTime) {
      const newEndTime = Date.now() + COUNTDOWN_DURATION;
      localStorage.setItem(STORAGE_KEY, newEndTime.toString());
      endTime = newEndTime.toString();
    }

    const calculateTimeLeft = () => {
      const difference = parseInt(endTime!) - Date.now();
      
      if (difference <= 0) {
        // Reset the timer when it reaches zero
        const newEndTime = Date.now() + COUNTDOWN_DURATION;
        localStorage.setItem(STORAGE_KEY, newEndTime.toString());
        return COUNTDOWN_DURATION;
      }
      
      return difference;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return {
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
    totalSeconds: Math.floor(timeLeft / 1000)
  };
}
