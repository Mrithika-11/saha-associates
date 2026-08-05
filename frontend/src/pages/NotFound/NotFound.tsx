import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-navy text-white text-center px-6">
      <p className="drawing-label mb-6">FIG. 404 — NOT FOUND</p>
      <h1 className="font-display font-bold text-6xl mb-6">Off the blueprint.</h1>
      <p className="text-white/70 mb-10 max-w-md">
        The page you're looking for isn't in our drawing set. Let's get you back on plan.
      </p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </section>
  );
}
