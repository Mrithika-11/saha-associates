import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";

export default function SiteSupervision() {
  return (
    <>
      <PageHero
        title="SITE SUPERVISION"
        description="Ensuring every stage of construction is executed with quality, safety, and complete adherence to approved plans."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">
              About Our Service
            </h2>

            <p className="text-lg leading-9 text-ink-soft">
              Our Site Supervision services ensure that every stage of
              construction is carried out according to approved drawings,
              engineering standards, and project specifications. We provide
              continuous on-site supervision to maintain quality, safety, and
              efficient coordination throughout the construction process.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-semibold text-navy mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-lg text-ink-soft">
              <li>✔ Daily Site Inspection</li>
              <li>✔ Quality Control & Monitoring</li>
              <li>✔ Contractor Coordination</li>
              <li>✔ Material & Workmanship Verification</li>
              <li>✔ Safety Compliance Monitoring</li>
              <li>✔ Progress Reporting & Documentation</li>
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
