import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import { BackToTop, ScrollProgress, WhatsAppButton } from "@/components/ui/FloatingControls";
import { initLenis } from "@/lib/lenis";

export default function MainLayout() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    initLenis();
  }, []);

  // Scroll to top on route change (Lenis-aware)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <ScrollProgress />
      <Header />
      <main className={loaded ? "" : "invisible"}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
