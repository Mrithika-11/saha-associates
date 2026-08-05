import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = "", label, duration = 2.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold text-white">
        {inView && <CountUp end={end} duration={duration} suffix={suffix} />}
        {!inView && "0"}
      </p>
      <p className="mt-2 text-xs md:text-sm uppercase tracking-widest2 text-white/60">{label}</p>
    </div>
  );
}
