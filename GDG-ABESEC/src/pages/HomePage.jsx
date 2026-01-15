import Home from "../components/Home";
import About from "../components/About";
// import WhatWeOffer from "../components/WhatWeOffer";
import OrganisersAndActingGenerals from "../components/OrganiserAndActingGenerals";
import Footer from "../components/Footer";
import WhyJoinGDG from "../components/WhyJoinGDG";
import ScrollProgressBar from "../components/ScrollProgressBar";
import CursorTrail from "../components/ui/CursorTrail";

export default function HomePage() {
  return (
    <>
      <div className="w-full  overflow-x-hidden">
        <ScrollProgressBar />
        <CursorTrail />
        <Home />
        <About />
        {/* <WhatWeOffer /> */}
        <OrganisersAndActingGenerals />
        <WhyJoinGDG />
        <Footer />
      </div>
    </>
  );
}
