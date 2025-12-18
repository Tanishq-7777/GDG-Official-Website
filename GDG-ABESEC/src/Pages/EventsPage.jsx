import React from "react";  
import EventsCard from "../components/EventCards";
import Footer from "../components/Footer";
import EventHero from "../components/Eventhero";

import DomeGallery from "../components/ui/DomeGalery";
import CursorTrail from "../components/ui/CursorTrail";
import ScrollProgressBar from "../components/ScrollProgressBar";

export default function HomePage() {
  return (
    <>
      <div className="w-full  overflow-x-hidden">
        <ScrollProgressBar />
        <CursorTrail />
        <EventHero />
        <EventsCard />
        <div className="h-screen">
          <DomeGallery />
        </div>
        <Footer />
      </div>
    </>
  );
}
