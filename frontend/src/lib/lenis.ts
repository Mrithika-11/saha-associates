import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

let lenisInstance: Lenis | null = null;

/**
 * Initializes Lenis smooth scrolling and syncs it to GSAP's ticker so that
 * ScrollTrigger-based animations stay perfectly in step with scroll position.
 * Call once from the root layout; call destroy on unmount (rare, since it's root-level).
 */
export function initLenis(): Lenis {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Keep GSAP's internal clock (used by ScrollTrigger) aligned with Lenis
  gsap.ticker.add((time) => {
    lenisInstance?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function destroyLenis() {
  lenisInstance?.destroy();
  lenisInstance = null;
}
