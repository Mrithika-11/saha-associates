import { useEffect, useState } from "react";
import PageHero from "@/components/common/PageHero";
import { Building2 } from "lucide-react";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Industrial";
  location: string;
  description: string;
}

const categories = ["All", "Residential", "Commercial", "Industrial"];

const fallbackProjects: Project[] = [
  {
    id: "1",
    slug: "av-villa",
    title: "AV Villa",
    category: "Residential",
    location: "Coimbatore, Tamil Nadu",
    description:
      "A modern luxury residential villa designed with structural excellence, sustainable planning, and contemporary architectural concepts.",
  },
  {
    id: "2",
    slug: "sahara-business-centre",
    title: "Sahara Business Centre",
    category: "Commercial",
    location: "Erode, Tamil Nadu",
    description:
      "A proposed commercial development focused on efficient workspace planning, structural stability, and modern business infrastructure.",
  },
  {
    id: "3",
    slug: "erode-textile-manufacturing-unit",
    title: "Erode Textile Manufacturing Unit",
    category: "Industrial",
    location: "Erode, Tamil Nadu",
    description:
      "An industrial infrastructure project designed for operational efficiency, safety compliance, and future expansion.",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => data?.length && setProjects(data))
      .catch(() => {
        // Keep fallback projects
      });
  }, []);

  const filtered = projects.filter(
    (p) =>
      (active === "All" || p.category === active) &&
      p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <PageHero
        title="Our Projects"
        description="Explore our upcoming residential, commercial, and industrial developments planned with engineering excellence."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 text-sm font-medium border transition-colors ${
                  active === c
                    ? "bg-navy text-white border-navy"
                    : "border-ink/20 text-ink-soft hover:border-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full md:w-80 mb-12 border-b border-ink/20 focus:border-gold outline-none py-2 text-sm transition-colors"
          />

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="blueprint-frame overflow-hidden bg-white hover:-translate-y-2 transition duration-300"
              >
                {/* Top Section */}
                <div className="bg-navy h-56 flex flex-col items-center justify-center px-6 text-center">
                  <Building2 size={72} className="text-gold mb-5" />

                  <p className="text-white text-2xl font-bold">{p.category}</p>

                  <span className="mt-4 px-4 py-1 rounded-full bg-gold text-navy text-xs font-bold uppercase tracking-wider">
                    Upcoming Project
                  </span>
                </div>

                {/* Bottom Section */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    {p.title}
                  </h3>

                  <p className="text-sm text-ink-soft mb-5">{p.location}</p>

                  <p className="text-ink-soft leading-7 text-sm">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
