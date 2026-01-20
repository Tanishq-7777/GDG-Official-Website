import { useEffect, useState } from "react";
import Navbar from "./ui/Navbar";
import { HeroSection } from "./ui/HeroSection";

const Home = () => {
  const [showBrandText, setShowBrandText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowBrandText(false);
      } else {
        setShowBrandText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroSection />

      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <img
            src="https://www.svgrepo.com/show/353810/google-developers.svg"
            className="h-8 w-10 sm:h-12 sm:w-14 md:h-14 md:w-16"
            alt="gdgLogo"
          />

          {showBrandText && (
            <div className="flex items-center gap-0.5 font-bold text-xl sm:text-2xl md:text-3xl">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-300">o</span>
              <span className="text-green-500">g</span>
              <span className="text-blue-500">l</span>
              <span className="text-red-500">e</span>
            </div>
          )}
        </div>

        {showBrandText && (
          <div className="text-white text-sm sm:text-base md:text-lg tracking-wide ml-0.5">
            Developers Group
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/50 to-transparent z-20 pointer-events-none"></div>

      <Navbar />
    </div>
  );
};

export default Home;