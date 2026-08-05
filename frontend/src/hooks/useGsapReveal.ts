import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  selector?: string; // if set, animates children matching selector instead of the container itself
}

/**
 * Attaches a fade + rise reveal animation to a container (or its matched children)
 * that plays once when the element enters the viewport.
 * Usage: const ref = useGsapReveal<HTMLDivElement>({ selector: ".reveal-item", stagger: 0.15 });
 */
export function useGsapReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const { y = 40, duration = 1, stagger = 0.12, start = "top 85%", selector } = options;
    if (!ref.current) return;

    const targets = selector ? ref.current.querySelectorAll(selector) : ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
