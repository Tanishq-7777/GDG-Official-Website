import React from "react";
import Team from "../components/Team";
import Footer from "../components/Footer";
import ScrollProgressBar from "../components/ScrollProgressBar";
import CursorTrail from "../components/ui/CursorTrail";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
              <ScrollProgressBar />
                      <CursorTrail />
      <Team />
        <Footer />

    </div>
  );
};

export default TeamPage;