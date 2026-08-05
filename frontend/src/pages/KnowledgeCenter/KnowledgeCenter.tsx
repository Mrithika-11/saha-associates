import PageHero from "@/components/common/PageHero";
import { useState } from "react";

const faqGroups = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What services does SAHA ASSOCIATES provide?",
        answer:
          "We provide Structural Design, Architectural Consultancy, Construction Management, Project Planning, Building Approval, Site Supervision, Quantity Surveying, Interior Consultation, and Engineering Consultancy for residential, commercial, and industrial projects.",
      },
      {
        question: "Why should I choose BOQ instead of a square-foot rate?",
        answer:
          "A BOQ (Bill of Quantities) provides an accurate item-wise cost breakdown, ensuring transparency, better budget control, and confident decision-making.",
      },
      {
        question: "How can I request a consultation?",
        answer:
          "You can contact us through our Contact page, phone, or email. Our team will schedule a consultation to understand your project requirements.",
      },
    ],
  },

  {
    title: "Design & Construction",
    faqs: [
      {
        question: "How long does a residential project usually take?",
        answer:
          "Residential projects generally take between 6 and 12 months depending on the project size and site conditions.",
      },
      {
        question: "Do you provide structural drawings and approvals?",
        answer:
          "Yes. We prepare complete structural drawings, engineering calculations, and assist with building approval documentation.",
      },
      {
        question: "Can you renovate existing buildings?",
        answer:
          "Yes. We undertake renovation, remodeling, structural strengthening, and extension projects.",
      },
    ],
  },

  {
    title: "Project Cost & Management",
    faqs: [
      {
        question: "How is the project cost estimated?",
        answer:
          "We prepare a detailed BOQ and cost estimate based on your project requirements before execution begins.",
      },
      {
        question: "Do you supervise construction on-site?",
        answer:
          "Yes. We provide regular site supervision, quality inspections, and progress monitoring throughout construction.",
      },
      {
        question: "Can I hire only design services?",
        answer:
          "Absolutely. You can hire us solely for structural design, consultancy, BOQ preparation, or project planning.",
      },
    ],
  },
];

export default function KnowledgeCenter() {
  const [openGroup, setOpenGroup] = useState(0);
  const [openQuestion, setOpenQuestion] = useState("0-0");

  return (
    <>
      <PageHero
        title="Knowledge Center"
        description="Engineering knowledge, practical construction guidance, and answers to the questions every client should know before starting a project."
      />

      {/* ================= Knowledge Description ================= */}

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="drawing-label mb-4">OUR KNOWLEDGE</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">
            Building Better Through Knowledge
          </h2>

          <p className="text-lg text-ink-soft leading-8 text-left">
            At SAHA ASSOCIATES, we believe that knowledge is the foundation of
            every successful project. Our Knowledge Center is designed to help
            homeowners, businesses, and developers understand construction
            processes, BOQ, structural engineering, approvals, and project
            planning. We simplify complex concepts into practical insights,
            empowering you to make informed decisions with confidence.
          </p>
        </div>
      </section>

      {/* ================= Why Choose ================= */}

      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#d8a646]/80"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-navy">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose SAHA ASSOCIATES ?
          </h2>

          <p className="text-lg leading-8 max-w-3xl mb-10">
            We combine engineering expertise, innovative planning, and
            transparent project management to deliver safe, durable, and
            cost-effective construction solutions. Every project is executed
            with precision, professionalism, and a strong commitment to quality
            and client satisfaction.
          </p>

          <div className="grid md:grid-cols-2 gap-5 text-xl font-semibold">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <span>Structural Design</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <span>Construction Management</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <span>BOQ & Cost Estimation</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <span>Site Supervision</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <span>Quality Assurance</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <span>Timely Project Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      {/* ================= FAQ ================= */}

      <section className="py-20 bg-[#faf7ef]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gold text-xl font-semibold mb-3">
            Learn More From
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-navy mb-12">
            Frequently Asked
            <br />
            Questions
          </h2>

          <div className="space-y-10">
            {faqGroups.map((group, groupIndex) => (
              <div key={group.title}>
                {/* White Information Card */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-5">
                  <p className="drawing-label mb-2">
                    CATEGORY {groupIndex + 1}
                  </p>

                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {groupIndex === 0
                      ? "📘 General Guidance"
                      : groupIndex === 1
                        ? "🏗 Design & Construction"
                        : "💰 Cost & Planning"}
                  </h3>

                  <p className="text-ink-soft leading-7">
                    {groupIndex === 0
                      ? "Learn about our engineering services, consultation process, project planning, and how we help clients from concept to completion."
                      : groupIndex === 1
                        ? "Understand structural design, approvals, site supervision, quality standards, and construction best practices."
                        : "Explore BOQ preparation, budgeting, cost estimation, scheduling, and effective project management."}
                  </p>
                </div>

                {/* Blue Accordion */}
                <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() =>
                      setOpenGroup(openGroup === groupIndex ? -1 : groupIndex)
                    }
                    className="w-full flex items-center justify-between bg-navy text-white px-8 py-5"
                  >
                    <h3 className="text-xl font-semibold">{group.title}</h3>

                    <span className="text-3xl">
                      {openGroup === groupIndex ? "−" : "+"}
                    </span>
                  </button>

                  {openGroup === groupIndex && (
                    <div className="bg-white">
                      {group.faqs.map((faq, index) => {
                        const key = `${groupIndex}-${index}`;

                        return (
                          <div
                            key={faq.question}
                            className="border-t border-gray-200"
                          >
                            <button
                              onClick={() =>
                                setOpenQuestion(openQuestion === key ? "" : key)
                              }
                              className="w-full flex justify-between items-center px-8 py-5 text-left hover:bg-gray-50 transition"
                            >
                              <span className="font-medium text-navy">
                                {index + 1}. {faq.question}
                              </span>

                              <span className="text-2xl text-navy">
                                {openQuestion === key ? "−" : "+"}
                              </span>
                            </button>

                            <div
                              className={`overflow-hidden transition-all duration-500 ${
                                openQuestion === key
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="px-8 pb-6 text-ink-soft leading-8">
                                {faq.answer}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
