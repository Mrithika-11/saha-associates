import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { getLenis } from "@/lib/lenis";

/** Thin gold bar across the very top of the viewport tracking scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gold origin-left z-[60]"
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => getLenis()?.scrollTo(0)}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-navy text-gold flex items-center justify-center shadow-lg hover:bg-gold hover:text-navy transition-colors"
    >
      <ArrowUp size={20} />
    </button>
  );
}

export function WhatsAppButton({ phone = "919080372824" }: { phone?: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
