import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";

export default function ArchitecturalConsultancy() {
  return (
    <>
      <PageHero
        title="Architectural Consultancy"
        description="Creating modern, functional and sustainable architectural designs."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">
              About Our Service
            </h2>

            <p className="text-lg leading-9 text-ink-soft">
              We provide professional architectural consultancy for residential,
              commercial, institutional, and industrial projects. Our
              experienced architects create innovative, practical, and
              aesthetically pleasing designs that perfectly combine creativity,
              functionality, and structural excellence.
              <br />
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-semibold text-navy mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-lg text-ink-soft">
              <li>✔ Residential Building Design</li>
              <li>✔ Commercial Building Design</li>
              <li>✔ Floor Planning & Space Optimization</li>
              <li>✔ 3D Elevation Design</li>
              <li>✔ Approval Drawings</li>
              <li>✔ Interior Space Planning</li>
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
