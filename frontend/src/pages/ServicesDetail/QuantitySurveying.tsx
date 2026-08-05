import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";

export default function QuantitySurveying() {
  return (
    <>
      <PageHero
        title="QUANTITY SURVEYING"
        description="Delivering accurate cost estimation, quantity analysis, and budget control for efficient construction projects."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">
              About Our Service
            </h2>

            <p className="text-lg leading-9 text-ink-soft">
              Our Quantity Surveying services help clients manage construction
              costs effectively from project planning to completion. We prepare
              detailed quantity take-offs, cost estimates, BOQs, and financial
              reports to ensure every project stays within budget while
              maintaining the highest quality standards.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-semibold text-navy mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-lg text-ink-soft">
              <li>✔ Bill of Quantities (BOQ) Preparation</li>
              <li>✔ Cost Estimation & Budget Planning</li>
              <li>✔ Material Quantity Take-Off</li>
              <li>✔ Tender Documentation & Evaluation</li>
              <li>✔ Cost Control & Financial Reporting</li>
              <li>✔ Project Cost Monitoring</li>
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
