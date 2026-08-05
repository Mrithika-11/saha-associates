import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";

export default function InteriorConsultation() {
  return (
    <>
      <PageHero
        title="INTERIOR CONSULTATION"
        description="Designing elegant, functional, and inspiring interior spaces tailored to your lifestyle."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">
              About Our Service
            </h2>

            <p className="text-lg leading-9 text-ink-soft">
              Our Interior Consultation service focuses on creating stylish,
              functional, and comfortable spaces that reflect your vision. We
              provide expert guidance on space planning, material selection,
              lighting, color schemes, and interior finishes to ensure every
              space is both beautiful and practical. create spaces you'll love
              for years to come.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-semibold text-navy mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-lg text-ink-soft">
              <li>✔ Space Planning & Layout Design</li>
              <li>✔ Interior Design Consultation</li>
              <li>✔ Material & Finish Selection</li>
              <li>✔ Lighting & Ceiling Design</li>
              <li>✔ Furniture & Décor Planning</li>
              <li>✔ Modular Kitchen Design</li>
            </ul>

            <Link to="/contact" className="btn-primary mt-12 inline-flex">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
