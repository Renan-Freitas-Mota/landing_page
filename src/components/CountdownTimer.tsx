import { useCountdown } from '@/hooks/useCountdown';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const { minutes, seconds } = useCountdown();

  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border-2 border-accent/30">
      <Clock className="w-5 h-5 text-accent" />
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-accent">{minutes}</span>
          <span className="text-xs text-muted-foreground uppercase">Min</span>
        </div>
        <span className="text-2xl font-bold text-accent">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-accent">{seconds}</span>
          <span className="text-xs text-muted-foreground uppercase">Seg</span>
        </div>
      </div>
    </div>
  );
}
