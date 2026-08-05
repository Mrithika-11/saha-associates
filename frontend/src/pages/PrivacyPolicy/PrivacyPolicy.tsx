import PageHero from "@/components/common/PageHero";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Your privacy matters to us."
      />

      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Introduction</h2>
            <p className="text-ink-soft leading-8">
              At SAHA ASSOCIATES, we respect your privacy and are committed to
              protecting the personal information you share with us through our
              website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>

            <ul className="list-disc pl-6 text-ink-soft space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Project Enquiries</li>
              <li>Career Application Details</li>
              <li>Resume (PDF)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 text-ink-soft space-y-2">
              <li>Respond to your enquiries.</li>
              <li>Provide project consultation.</li>
              <li>Process job applications.</li>
              <li>Improve our customer service.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>

            <p className="text-ink-soft leading-8">
              If you have any questions regarding this Privacy Policy, please
              contact us at
              <br />
              <strong>Email:</strong> sahaassociates.india@gmail.com
              <br />
              <strong>Phone:</strong> +91 90803 72824, +91 6382770355
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
