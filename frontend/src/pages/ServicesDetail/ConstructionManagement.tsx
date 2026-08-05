import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";

export default function ConstructionManagement() {
  return (
    <>
      <PageHero
        title="CONSTRUCTION MANAGEMENT"
        description="Managing construction projects with quality, efficiency, safety, and timely delivery."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">
              About Our Service
            </h2>

            <p className="text-lg leading-9 text-ink-soft">
              Our Construction Management services ensure every project is
              completed on time, within budget, and to the highest quality
              standards. We coordinate planning, resources, contractors, and
              site activities to deliver safe, efficient, and successful
              construction projects from concept to completion.
              <br />
              <br />
              Our experienced professionals supervise every stage of
              construction, ensuring seamless coordination between clients,
              consultants, contractors, and suppliers. We focus on quality
              control, cost optimization, risk management, and strict adherence
              to safety standards throughout the project lifecycle.
              <br />
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-semibold text-navy mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-lg text-ink-soft">
              <li>✔ Project Planning & Scheduling</li>
              <li>✔ Site Coordination & Supervision</li>
              <li>✔ Contractor Management</li>
              <li>✔ Quality Assurance & Quality Control</li>
              <li>✔ Cost & Budget Management</li>
              <li>✔ Safety & Risk Management</li>
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
