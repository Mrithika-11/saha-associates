import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 10, suffix: "+", label: "Projects Delivered" },
  { end: 1, suffix: "+", label: "Years of Practice" },
  { end: 100, suffix: "%", label: "Client focus" },
  { end: 100, suffix: "%", label: "On-Time Handover" },
];

export default function StatsSection() {
  return (
    <section className="bg-navy py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <AnimatedCounter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
