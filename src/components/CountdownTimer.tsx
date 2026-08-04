import { useCountdown, formatShort } from "../hooks/useCountdown";

interface CountdownTimerProps {
  compact?: boolean;
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

export default function CountdownTimer({ compact = false }: CountdownTimerProps) {
  const countdown = useCountdown();
  const { days, hours, minutes, seconds, active } = countdown;

  if (!active) return null;

  if (compact) {
    return <span className="countdown-compact">{formatShort(countdown)}</span>;
  }

  return (
    <div className="countdown" role="timer" aria-label="Tempo restante da oferta">
      <div className="countdown-unit">
        <span className="countdown-number">{days}</span>
        <span className="countdown-label">dias</span>
      </div>
      <div className="countdown-unit">
        <span className="countdown-number">{pad(hours)}</span>
        <span className="countdown-label">horas</span>
      </div>
      <div className="countdown-unit">
        <span className="countdown-number">{pad(minutes)}</span>
        <span className="countdown-label">min</span>
      </div>
      <div className="countdown-unit">
        <span className="countdown-number">{pad(seconds)}</span>
        <span className="countdown-label">seg</span>
      </div>
    </div>
  );
}
