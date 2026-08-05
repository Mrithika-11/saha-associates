import { Building2, Compass, HardHat, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const services = [
  {
    icon: Ruler,
    title: "Structural Design",
    desc: "Precision-engineered load paths, from foundation to roofline.",
  },
  {
    icon: Compass,
    title: "Architectural Consultancy",
    desc: "Design intent translated into buildable, code-compliant drawings.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    desc: "On-site supervision that protects timeline, budget, and quality.",
  },
  {
    icon: Building2,
    title: "Project Estimation",
    desc: "Transparent quantity surveying and cost planning from day one.",
  },
];

export default function ServicesPreview() {
  const ref = useGsapReveal<HTMLDivElement>({
    selector: ".service-card",
    stagger: 0.15,
  });

  return (
    <section className="section-pad bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-2xl">
          Full-spectrum engineering consultancy, under one roof.
        </h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="service-card blueprint-frame bg-white p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <Icon className="text-gold mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-display font-semibold text-lg mb-3">
                {title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="btn-outline !text-navy !border-navy/20 hover:!bg-navy hover:!text-white"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
