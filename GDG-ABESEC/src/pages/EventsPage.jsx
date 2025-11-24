import React from "react";  
import EventsCard from "../components/EventCards";
import Footer from "../components/Footer";
import EventHero from "../components/Eventhero";

import DomeGallery from "../components/ui/DomeGalery";

export default function HomePage() {
  return (
    <>
      <div className="w-full  overflow-x-hidden">
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
