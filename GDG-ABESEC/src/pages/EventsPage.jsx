import React, { useEffect, useState } from "react";
import EventsCard from "../components/EventCard";
import Footer from "../components/Footer";
import EventHero from "../components/Eventhero";
import Timeline from "../components/Timeline";
import DomeGallery from "../components/ui/DomeGalery";
import CursorTrail from "../components/ui/CursorTrail";
import ScrollProgressBar from "../components/ScrollProgressBar";
import CircularGallery from "../components/CircularGallery";

export default function HomePage() {
  const [showPast, setShowPast] = useState(true);
  function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(
      () => window.matchMedia("(min-width: 768px)").matches,
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
      {showPast && <Timeline />}
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
      <Footer />
    </div>
  );
}
