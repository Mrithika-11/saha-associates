interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/** Compact banner used at the top of every interior page */
export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative bg-navy pt-40 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-[0.05]" />

      <div className="relative max-w-5xl mx-auto">
        {eyebrow && <p className="drawing-label mb-6">{eyebrow}</p>}

        <h1 className="font-display font-bold text-white text-4xl md:text-6xl mb-6">
          {title}
        </h1>

        {description && (
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
