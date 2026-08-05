import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";

export default function BuildingApproval() {
  return (
    <>
      <PageHero
        title="BUILDING APPROVAL"
        description="Helping clients obtain fast, accurate, and hassle-free building approvals through expert documentation and regulatory compliance."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">
              About Our Service
            </h2>

            <p className="text-lg leading-9 text-ink-soft">
              Our Building Approval services simplify the approval process for
              residential, commercial, and industrial projects. We prepare and
              submit all required drawings, documents, and applications while
              ensuring full compliance with local building regulations, helping
              clients obtain approvals quickly and efficiently.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-semibold text-navy mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-lg text-ink-soft">
              <li>✔ Building Plan Approval</li>
              <li>✔ Municipality & Corporation Approvals</li>
              <li>✔ Documentation & Permit Preparation</li>
              <li>✔ Building Rule Compliance</li>
              <li>✔ Government Liaison & Coordination</li>
              <li>✔ Approval Follow-up & Support</li>
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
