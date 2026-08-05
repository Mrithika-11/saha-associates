import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PageHero from "@/components/common/PageHero";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  position: z.string().min(1, "Select a position"),
  resume: z
    .any()
    .refine((files) => files?.length === 1, "Resume is required")
    .refine(
      (files) => files?.[0]?.type === "application/pdf",
      "Only PDF files are accepted",
    ),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const openPositions = [
  "Structural Engineer",
  "Site Supervisor",
  "Quantity Surveyor",
  "Architect",
];

export default function Careers() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ApplicationForm>({ resolver: zodResolver(applicationSchema) });

  async function onSubmit(data: ApplicationForm) {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position", data.position);
    formData.append("resume", data.resume[0]);

    await fetch(`${import.meta.env.VITE_API_URL}/api/careers/apply`, {
      method: "POST",
      body: formData,
    }).catch(() => {
      /* surface a toast in production */
    });
    reset();
  }

  return (
    <>
      <PageHero
        title="Where Talent Meets Opportunity."
        description="We hire for judgment, not just credentials. Explore open roles below."
      />

      <section className="section-pad bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-2xl mb-8">
            Apply Now
          </h2>

          {isSubmitSuccessful ? (
            <p className="text-royal font-medium">
              Application received — our HR team will reach out within 5
              business days.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              <div>
                <input
                  {...register("fullName")}
                  placeholder="Full Name"
                  className="w-full border-b border-ink/20 focus:border-gold outline-none py-3"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="w-full border-b border-ink/20 focus:border-gold outline-none py-3"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="w-full border-b border-ink/20 focus:border-gold outline-none py-3"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <select
                  {...register("position")}
                  className="w-full border-b border-ink/20 focus:border-gold outline-none py-3 bg-transparent"
                >
                  <option value="">Select a position</option>
                  {openPositions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {errors.position && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.position.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm text-ink-soft block mb-2">
                  Resume (PDF)
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  {...register("resume")}
                />
                {errors.resume && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.resume.message as string}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
