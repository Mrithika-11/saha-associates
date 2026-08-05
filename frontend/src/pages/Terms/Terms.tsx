import PageHero from "@/components/common/PageHero";

export default function Terms() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="Please read these terms before using our website."
      />

      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Acceptance of Terms</h2>

            <p className="text-ink-soft leading-8">
              By accessing and using the SAHA ASSOCIATES website, you agree to
              comply with these Terms of Service and all applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Use of Website</h2>

            <ul className="list-disc pl-6 text-ink-soft space-y-2">
              <li>Use the website only for lawful purposes.</li>
              <li>
                Do not misuse or attempt to interfere with website operations.
              </li>
              <li>
                Do not copy or reproduce website content without permission.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Quotations & Services</h2>

            <p className="text-ink-soft leading-8">
              All quotations, BOQs, and project estimates are subject to site
              conditions, client requirements, and final project approval.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>

            <p className="text-ink-soft leading-8">
              Email:
              <strong> sahaassociates.india@gmail.com</strong>
              <br />
              Phone:
              <strong> +91 90803 72824, +91 6382770355</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
