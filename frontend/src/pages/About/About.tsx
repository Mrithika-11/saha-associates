import PageHero from "@/components/common/PageHero";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const values = [
  {
    title: "ISO Standards",
    desc: "We follow recognized engineering standards and quality-focused practices to deliver safe, reliable, and compliant construction solutions.",
  },
  {
    title: "Precision",
    desc: "Every design, calculation, and engineering drawing is carefully reviewed and verified to ensure exceptional accuracy, structural integrity, and dependable project execution.",
  },
  {
    title: "Safety First",
    desc: "We prioritize safety throughout planning, design, and construction by following industry best practices and maintaining secure, compliant, and risk-free work environments.",
  },
  {
    title: "Innovation",
    desc: "By integrating advanced engineering tools, BIM technology, and modern construction techniques, we deliver smarter, more efficient, and sustainable infrastructure solutions.",
  },
];

const companyGoals = [
  {
    title: "Our Vision",
    icon: "🌐",
    description:
      "To become a trusted leader in civil engineering and construction consultancy by delivering innovative, sustainable, and high-quality solutions that create lasting value for our clients and communities. We aspire to shape the future of the built environment through engineering excellence, advanced technology, continuous innovation, and environmentally responsible practices while building strong relationships founded on trust, integrity, and professionalism.",
  },
  {
    title: "Our Mission",
    icon: "🎯",
    description:
      "To provide reliable structural design, architectural consultancy, project management, and construction support with the highest standards of quality, safety, and professionalism. Our mission is to deliver cost-effective and practical engineering solutions, ensure transparent communication throughout every stage of a project, complete projects on time, and build long-term partnerships through exceptional service, technical expertise, and an unwavering commitment to client satisfaction.",
  },
];

export default function About() {
  const ref = useGsapReveal<HTMLDivElement>({
    selector: ".value-card",
    stagger: 0.1,
  });

  return (
    <>
      <PageHero
        title="Built on drawings that never lied."
        description="Our story, our people, and the standards we refuse to compromise on."
      />

      {/* ================= Vision & Mission ================= */}

      <section className="pt-10 pb-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Vision & Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {companyGoals.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-gold/30 bg-navy text-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6 border-b border-gold/30 pb-4">
                  <div className="text-5xl">{item.icon}</div>

                  <div>
                    <p className="text-xs uppercase tracking-[3px] text-gold">
                      SAHA ASSOCIATES
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-white/80 leading-7 text-base">
                  {item.description}
                </p>

                <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-10 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Core Values ================= */}

      <section className="py-14 bg-surface-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-2xl">
            What we won't negotiate on.
          </h2>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card blueprint-frame bg-white p-8"
              >
                <h3 className="font-display font-semibold text-lg mb-3">
                  {v.title}
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Company Story ================= */}

      <section className="pt-2 pb-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-navy text-white rounded-2xl shadow-xl border-l-8 border-gold px-8 py-6 md:px-12 md:py-8">
            <h4 className="text-3xl md:text-5xl font-bold text-gold mb-2">
              WHY BOQ MATTERS ?
            </h4>

            <h5 className="text-3xl md:text-5xl font-bold text-gold mb-2">
              Building Trust Through Engineering Excellence
            </h5>

            <p className="text-white/80 leading-8 text-lg mb-6">
              At SAHA ASSOCIATES, we believe clients should know the actual cost
              of construction, not just the square-foot rate. Our BOQ (Bill of
              Quantities) provides an accurate, item-wise breakdown of
              quantities and costs, ensuring complete transparency, better
              budget control, and confidence before construction begins.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gold mb-5">
                Key Benefits
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  <span>Transparent Pricing</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  <span>Accurate Quantity Estimation</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  <span>Better Budget Control</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  <span>No Hidden Costs</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  <span>Easy Scope Modifications</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  <span>Complete Cost Transparency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
