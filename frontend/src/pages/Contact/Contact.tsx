import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/common/PageHero";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactForm) {
    await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
    reset();
  }

  return (
    <>
      <PageHero title="Tell us what you're building." />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-semibold text-2xl mb-8">
              Send an Inquiry
            </h2>
            {isSubmitSuccessful ? (
              <p className="text-royal font-medium">
                Thank you — we'll respond within one business day.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                <div>
                  <input
                    {...register("name")}
                    placeholder="Full Name"
                    className="w-full border-b border-ink/20 focus:border-gold outline-none py-3"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
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
                <input
                  {...register("phone")}
                  placeholder="Phone (optional)"
                  className="w-full border-b border-ink/20 focus:border-gold outline-none py-3"
                />
                <div>
                  <input
                    {...register("subject")}
                    placeholder="Subject"
                    className="w-full border-b border-ink/20 focus:border-gold outline-none py-3"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Your message"
                    rows={5}
                    className="w-full border-b border-ink/20 focus:border-gold outline-none py-3 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="w-full h-[450px] mb-8 blueprint-frame overflow-hidden">
              <iframe
                title="office-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125173.82222354546!2d77.70894299999999!3d11.3579258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd97da6e3d9c7f75e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1785184174988!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <ul className="space-y-5 text-ink-soft">
              <li className="flex gap-3">
                <MapPin className="text-gold shrink-0" size={20} /> Erode, Tamil
                Nadu, India
              </li>
              <li className="flex gap-3">
                <Phone className="text-gold shrink-0" size={20} /> +91
                9080372824, +91 6382770355
              </li>
              <li className="flex gap-3">
                <Mail className="text-gold shrink-0" size={20} />{" "}
                sahaassociates.india@gmail.com
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-semibold">Hours:</span> Mon–Sat,
                9:00 AM – 6:30 PM
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
