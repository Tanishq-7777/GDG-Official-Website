import React, { useEffect, useState, lazy, Suspense } from "react";
import EventHero from "../components/Eventhero";
import CursorTrail from "../components/ui/CursorTrail";
import ScrollProgressBar from "../components/ScrollProgressBar";

const Timeline = lazy(() => import("../components/Timeline"));
const DomeGallery = lazy(() => import("../components/ui/DomeGalery"));
const CircularGallery = lazy(() => import("../components/CircularGallery"));
const Footer = lazy(() => import("../components/Footer"));

const Loader = () => (
  <div className="flex items-center justify-center h-40 text-white">
    Loading...
  </div>
);

export default function HomePage() {
  const [showPast, setShowPast] = useState(true);

  function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(
      () => window.matchMedia("(min-width: 768px)").matches
    );

    useEffect(() => {
      const mql = window.matchMedia("(min-width: 768px)");
      const handler = (e) => setIsDesktop(e.matches);

      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }, []);

    return isDesktop;
  }

  const isDesktop = useIsDesktop();

  return (
    <div className="w-full overflow-x-hidden">
      <CursorTrail />
      <ScrollProgressBar />
      <EventHero showPast={showPast} setShowPast={setShowPast} />

      {showPast && (
        <Suspense fallback={<Loader />}>
          <Timeline />
        </Suspense>
      )}

      <Suspense fallback={<Loader />}>
        {isDesktop ? (
          <div style={{ height: "100vh" }}>
            <DomeGallery key="desktop" />
          </div>
        ) : (
          <div
            style={{
              height: "600px",
              position: "relative",
              backgroundColor: "black",
            }}
          >
            <CircularGallery key="mobile" bend={0} />
          </div>
        )}
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
