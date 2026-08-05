import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70 pt-20 pb-8 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-[0.04] pointer-events-none" />

      <div className="relative w-full grid grid-cols-1 md:grid-cols-3 border-b border-white/10 pb-14">
        <div>
          <p className="font-display font-bold text-white text-xl mb-4">
            SAHA <span className="text-gold">ASSOCIATES</span>
          </p>
          <p className="text-sm leading-relaxed">
            A multidisciplinary civil engineering and construction consultancy
            engineering structures that last, and relationships that last
            longer.
          </p>
        </div>

        <div>
          <p className="drawing-label mb-5 text-white">Navigate</p>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="drawing-label mb-5 text-white">Contact</p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold shrink-0" />
              Erode, Tamil Nadu, India
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold shrink-0 mt-1" />
              <div className="flex flex-col">
                <span>+91 9080372824</span>
                <span>+91 6382770355</span>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-gold shrink-0" />{" "}
              sahaassociates.india@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="relative w-full grid grid-cols-1 md:grid-cols-3 border-b border-white/10 pb-14">
        <p>
          © {new Date().getFullYear()} SAHA ASSOCIATES. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-gold">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gold">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
