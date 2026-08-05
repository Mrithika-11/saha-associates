import { useLayoutEffect } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

/**
 * Hero Section
 */
export default function Hero() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });

    gsap.set("#drawing path,#drawing rect", {
      opacity: 0,
    });

    tl.fromTo(
      "#drawing path,#drawing rect",
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        opacity: 0,
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.08,
        ease: "power2.out",
      },
    );

    tl.from(
      ".hero-content",
      {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.4",
    );
  }, []);
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden pt-32 pb-20 px-6 md:px-12 lg:px-20">
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blueprint SVG */}
      {/* House Illustration */}
      <div
        id="hero-illustration"
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex justify-center items-center opacity-80 z-10"
      >
        <svg
          viewBox="0 0 420 420"
          className="w-[650px] xl:w-[750px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="drawing">
            <path
              d="M130 250 L210 185 L290 250"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <path d="M145 250V330H275V250" stroke="#C9A24B" strokeWidth="3" />

            <path d="M255 200V250" stroke="#C9A24B" strokeWidth="3" />

            <rect
              x="193"
              y="285"
              width="34"
              height="45"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <rect
              x="160"
              y="255"
              width="18"
              height="18"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <rect
              x="242"
              y="255"
              width="18"
              height="18"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <path d="M120 330H300" stroke="#C9A24B" strokeWidth="3" />

            <path
              d="M145 250
           C110 210 108 180 122 145
           C134 110 152 90 172 72"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <path
              d="M172 72
        C152 82 150 102 166 118
        C185 103 186 83 172 72Z"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <path
              d="M150 112
        C130 122 126 142 142 157
        C160 145 162 123 150 112Z"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <path
              d="M125 160
        C106 171 101 192 116 206
        C134 194 137 173 125 160Z"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <path
              d="M185 118
        C203 105 225 110 240 126
        C220 136 198 136 185 118Z"
              stroke="#C9A24B"
              strokeWidth="3"
            />

            <path
              d="M205 84
        C225 72 248 75 265 92
        C245 102 223 102 205 84Z"
              stroke="#C9A24B"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
      {/* Hero Content */}
      <div className="hero-content relative z-20 max-w-7xl mx-auto w-full">
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          Engineering <span className="text-gold">Precision.</span>
          <br />
          Building <span className="text-gold">Trust.</span>
        </h1>

        <p className="mt-8 max-w-xl text-white/70 text-lg leading-relaxed">
          A multidisciplinary civil engineering and construction consultancy
          delivering structural design, project management, and architectural
          consultancy across residential, commercial, and infrastructure
          projects.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <MagneticButton className="btn-primary" onClick={() => {}}>
            <Link to="/projects">View Our Projects</Link>
          </MagneticButton>

          <Link to="/contact" className="btn-outline">
            Start a Project
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
