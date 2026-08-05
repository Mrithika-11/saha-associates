import PageHero from "@/components/common/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    slug: "structural-design",
    title: "Structural Design",
    desc: "Analysis, RCC/steel detailing, and load-path design for all building types.",
  },
  {
    slug: "architectural-consultancy",
    title: "Architectural Consultancy",
    desc: "Concept to construction-ready drawings, coordinated with structural intent.",
  },
  {
    slug: "construction-management",
    title: "Construction Management",
    desc: "Schedule, budget, and quality control from groundbreaking to handover.",
  },
  {
    slug: "project-planning",
    title: "Project Planning",
    desc: "Phasing, resourcing, and risk mapping before the first shovel hits soil.",
  },
  {
    slug: "building-approval",
    title: "Building Approval",
    desc: "Statutory liaison and documentation for fast, compliant sanctioning.",
  },
  {
    slug: "site-supervision",
    title: "Site Supervision",
    desc: "Resident engineers ensuring drawings survive contact with the site.",
  },
  {
    slug: "quantity-surveying",
    title: "Quantity Surveying",
    desc: "Accurate BOQs and cost control that protect your margins.",
  },
  {
    slug: "interior-consultation",
    title: "Interior Consultation",
    desc: "Space planning and finishes that respect structural constraints.",
  },
];

/**
 * Each service card links to /services/:slug. Build a ServiceDetail page
 * following the ProjectDetail.tsx pattern (banner, description, benefits,
 * process, technologies, CTA) once real service content is ready.
 */
export default function Services() {
  return (
    <>
      <PageHero
        title="Every discipline a building needs."
        description="Structural, architectural, and construction management services delivered by one accountable team."
      />
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group blueprint-frame p-8 bg-surface-light hover:bg-navy transition-colors duration-300"
            >
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-ink-soft group-hover:text-white/70 leading-relaxed mb-6 transition-colors">
                {s.desc}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Learn more <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
