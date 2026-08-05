import { useEffect, useState } from "react";
import PageHero from "@/components/common/PageHero";

interface ProjectDetailData {
  title: string;
  category: string;
  location: string;
  area: string;
  completionDate: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  gallery: string[];
}

export default function ProjectDetail() {
  const [project, setProject] = useState<ProjectDetailData | null>(null);

  useEffect(() => {
    setProject({
      title: "Luxury Residence",
      category: "Residential",
      location: "Coimbatore",
      area: "4500 sq.ft",
      completionDate: "2025",
      client: "Private Client",
      challenge: "Delivering a premium residence within budget and schedule.",
      solution: "Optimized structural planning and quality materials.",
      outcome: "Successfully completed with excellent client satisfaction.",
      gallery: ["/images/project1.jpg", "/images/project2.jpg"],
    });
  }, []);

  if (!project) {
    return <PageHero eyebrow=" — PROJECT" title="Loading project…" />;
  }

  return (
    <>
      <PageHero title={project.title} />

      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16 text-sm">
          {[
            ["Location", project.location],
            ["Area", project.area],
            ["Completion", project.completionDate],
            ["Client", project.client],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="drawing-label !text-navy mb-2">{label}</p>
              <p className="text-ink-soft">{value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {[
            ["The Challenge", project.challenge],
            ["Our Solution", project.solution],
            ["The Outcome", project.outcome],
          ].map(([heading, text]) => (
            <div key={heading}>
              <h2 className="font-display font-semibold text-2xl mb-3">
                {heading}
              </h2>
              <p className="text-ink-soft leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-16">
          {project.gallery?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} gallery ${i + 1}`}
              className="w-full h-72 object-cover"
            />
          ))}
        </div>
      </section>
    </>
  );
}
