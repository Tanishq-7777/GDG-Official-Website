import React, { useState } from "react";  
import EventsCard from "../components/EventCard";
import Footer from "../components/Footer";
import EventHero from "../components/Eventhero";
import Timeline from "../components/Timeline";
import DomeGallery from "../components/ui/DomeGalery";
import CursorTrail from "../components/ui/CursorTrail";

export default function HomePage() {
  const [showPast, setShowPast] = useState(true); 

  return (
    <div className="w-full overflow-x-hidden">
      <CursorTrail />
      <EventHero showPast={showPast} setShowPast={setShowPast} />
      {showPast && <Timeline />}
      <div className="h-screen">
        <DomeGallery />
      </div>
      <Footer />
    </div>
  );
}