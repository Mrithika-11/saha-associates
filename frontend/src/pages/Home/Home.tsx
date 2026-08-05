import Hero from "@/components/sections/Hero";
import CompanyIntro from "@/components/sections/CompanyIntro";
import ServicesPreview from "@/components/sections/ServicesPreview";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesPreview />
      <StatsSection />
      {/* Additional sections (Why Choose Us, Industries Served, Recent Projects,
          Construction Timeline, Testimonials, Latest Articles, Trusted Clients,
          FAQ, Newsletter CTA) follow the same pattern: build as a component in
          components/sections/ and drop it in here. See README for the template. */}
    </>
  );
}
