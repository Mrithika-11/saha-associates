import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";

export default function StructuralDesign() {
  return (
    <>
      <PageHero
        title="STRUCTURAL DESIGN"
        description="Designing safe, durable, and efficient structural systems for every type of construction project."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">
              About Our Service
            </h2>

            <p className="text-lg leading-9 text-ink-soft">
              Our Structural Design services focus on creating safe, stable, and
              durable structures that meet engineering standards while ensuring
              long-term performance and cost efficiency. We provide
              comprehensive structural solutions for residential, commercial,
              industrial, and infrastructure projects by combining advanced
              engineering principles with practical construction expertise.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-semibold text-navy mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-lg text-ink-soft">
              <li>✔ RCC Structural Design</li>
              <li>✔ Steel Structure Design</li>
              <li>✔ Foundation Design</li>
              <li>✔ Structural Analysis & Calculations</li>
              <li>✔ Earthquake & Wind Load Design</li>
              <li>✔ Structural Drawings & Detailing</li>
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
