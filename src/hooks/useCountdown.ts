import { useEffect, useState } from "react";
import { getCountdownParts } from "../config";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  active: boolean;
}

export function useCountdown(): Countdown {
  const [countdown, setCountdown] = useState<Countdown>(getCountdownParts);

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdownParts()), 1000);
    return () => clearInterval(id);
  }, []);

  return countdown;
}

export function formatCompact(c: Countdown): string {
  return `${c.days}d ${c.hours.toString().padStart(2, "0")}h ${c.minutes
    .toString()
    .padStart(2, "0")}m`;
}

export function formatShort(c: Countdown): string {
  return `${c.days}d ${c.hours.toString().padStart(2, "0")}h ${c.minutes
    .toString()
    .padStart(2, "0")}m ${c.seconds.toString().padStart(2, "0")}s`;
}
