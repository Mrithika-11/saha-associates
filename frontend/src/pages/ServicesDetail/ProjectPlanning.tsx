import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";

export default function ProjectPlanning() {
  return (
    <>
      <PageHero
        title="PROJECT PLANNING"
        description="Planning every project with precision, efficiency, and a clear roadmap for successful execution."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">
              About Our Service
            </h2>

            <p className="text-lg leading-9 text-ink-soft">
              Our Project Planning services ensure every construction project
              starts with a clear strategy and organized workflow. We carefully
              plan project schedules, budgets, resources, and timelines to
              reduce risks, improve productivity, and achieve successful project
              completion within the planned time and cost.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-semibold text-navy mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-lg text-ink-soft">
              <li>✔ Project Scheduling & Planning</li>
              <li>✔ Budget Estimation</li>
              <li>✔ Resource Allocation</li>
              <li>✔ Risk Assessment & Mitigation</li>
              <li>✔ Construction Timeline Management</li>
              <li>✔ Progress Monitoring & Reporting</li>
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
