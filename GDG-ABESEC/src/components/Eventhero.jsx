import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./ui/Navbar";

const EventHero = ({ showPast, setShowPast }) => {
  /* ===== BRANDING SCROLL STATE (ONLY ADDITION) ===== */
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
  /* ================================================ */

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

          * {
            font-family: 'Inter', sans-serif;
          }

          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: black;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #444;
          }
        `}
      </style>

      {/* ===== BRANDING (ONLY CONDITIONAL TEXT) ===== */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-20 flex flex-col gap-2 pointer-events-none">
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
      {/* ============================================ */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
          <div className="absolute top-0 left-1/4 h-full w-px bg-white"></div>
          <div className="absolute top-0 left-1/2 h-full w-px bg-white"></div>
          <div className="absolute top-0 left-3/4 h-full w-px bg-white"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white text-black text-sm font-semibold tracking-wider">
              DISCOVER OUR EVENTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter relative inline-block"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EVENTS
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-0 left-0 h-1 bg-white"
            />
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto mb-12"
            style={{
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            Experiences that inspire learning & innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-gray-500 text-xs"
            style={{
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span>Scroll down to explore</span>
          </motion.div>

          <Navbar />
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-0 bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setShowPast(false)}
              className={`relative px-10 py-4 text-base font-bold tracking-wider transition-all duration-300 ${
                !showPast ? "text-black" : "text-white hover:text-gray-300"
              }`}
            >
              {!showPast && (
                <motion.div
                  layoutId="activeEventTab"
                  className="absolute inset-0 bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-0">UPCOMING EVENTS</span>
            </button>

            <button
              onClick={() => setShowPast(true)}
              className={`relative px-10 py-4 text-base font-bold tracking-wider transition-all duration-300 ${
                showPast ? "text-black" : "text-white hover:text-gray-300"
              }`}
            >
              {showPast && (
                <motion.div
                  layoutId="activeEventTab"
                  className="absolute inset-0 bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">PAST EVENTS</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default EventHero;
