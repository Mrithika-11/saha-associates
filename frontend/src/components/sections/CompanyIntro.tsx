import { useGsapReveal } from "@/hooks/useGsapReveal";
import clientHome from "@/assets/kalki-home.jpg";

export default function CompanyIntro() {
  const ref = useGsapReveal<HTMLDivElement>({ selector: ".reveal-item" });

  return (
    <section className="section-pad bg-white">
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="reveal-item">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Turning Ideas into Landmark Structures.
          </h2>

          <p className="text-ink-soft leading-relaxed mb-6">
            SAHA ASSOCIATES was founded on a simple conviction: that great
            engineering is invisible when it works, and unforgiving when it
            doesn't. We plan, design, and build structures that stand quietly
            for generations.
          </p>

          <p className="text-ink-soft leading-relaxed">
            From soil report to occupancy certificate, our engineers stay
            embedded in every phase, translating architectural ambition into
            buildable, code-compliant reality.
          </p>
        </div>

        <div className="reveal-item relative blueprint-frame p-2">
          <img
            src={clientHome}
            alt="Completed Residential Project by SAHA Associates"
            className="w-full h-[480px] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
