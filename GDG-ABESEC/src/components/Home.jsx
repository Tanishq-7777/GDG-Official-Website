import { useEffect, useState } from "react";
import Navbar from "./ui/Navbar";
import { HeroSection } from "./ui/HeroSection";

const Home = () => {
  const [showBrandText, setShowBrandText] = useState(true);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const headingLRef = useRef(null);
  const exploreRef = useRef(null);
  const scrollBtnRef = useRef(null);

  const brandTextRef = useRef(null);
  const brandSubTextRef = useRef(null);

  const [showBrandText, setShowBrandText] = useState(true);

  const splitText = (text, lIndex = -1) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        ref={i === lIndex ? headingLRef : null}
        className="inline-block will-change-transform"
        style={{
          opacity: 0,
          display: "inline-block",
          transformStyle: i === lIndex ? "preserve-3d" : "flat",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  /* ================= SCROLL BRANDING LOGIC ================= */
  useEffect(() => {
    const handleScroll = () => {
      setShowBrandText(window.scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= BRAND TEXT TRANSITION ================= */
  useEffect(() => {
    if (showBrandText) {
      gsap.to(brandTextRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
        pointerEvents: "auto",
      });

      gsap.to(brandSubTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
      });
    } else {
      gsap.to(brandTextRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: "power3.in",
        pointerEvents: "none",
      });

      gsap.to(brandSubTextRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [showBrandText]);

  /* ================= HERO GSAP ================= */
  useEffect(() => {
    const animateLine = (ref, delay = 0, isHeading = false) => {
      const letters = ref.current.children;

      gsap.set(letters, {
        x: () => gsap.utils.random(-400, 400),
        y: () => gsap.utils.random(-300, 300),
        rotation: () => gsap.utils.random(-180, 180),
        scale: () => gsap.utils.random(0.5, 1.5),
        opacity: 0,
      });

      gsap.to(letters, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: isHeading ? 2.4 : 1.8,
        ease: isHeading ? "elastic.out(1, 0.7)" : "elastic.out(1, 0.6)",
        stagger: {
          each: isHeading ? 0.08 : 0.05,
          from: isHeading ? "random" : "start",
        },
        delay,
      });
    };

    animateLine(line1Ref, 0.2, true);
    animateLine(line2Ref, 0.9, true);
    animateLine(line3Ref, 1.6, false);

    gsap.to(headingLRef.current, {
      rotationX: 360,
      transformOrigin: "50% 50%",
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      repeatDelay: 3.2,
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroSection />

      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex flex-col gap-2 pointer-events-none">
      {/* ================= BRANDING ================= */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <img
            src="https://www.svgrepo.com/show/353810/google-developers.svg"
            className="h-8 w-10 sm:h-12 sm:w-14 md:h-14 md:w-16"
            alt="gdgLogo"
          />

          <div
            ref={brandTextRef}
            className="flex items-center gap-0.5 font-bold text-xl sm:text-2xl md:text-3xl opacity-0"
          >
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-300">o</span>
            <span className="text-green-500">g</span>
            <span className="text-blue-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>

        <div
          ref={brandSubTextRef}
          className="text-white text-sm sm:text-base md:text-lg tracking-wide ml-0.5 opacity-0"
        >
          Developers Group
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 gap-2 md:gap-4"
        style={{ perspective: "1000px" }}
      >
        <h1
          ref={line1Ref}
          className="text-white font-extrabold leading-tight text-[32px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
        >
          {splitText("Welcome to Google", 15)}
        </h1>

        <h1
          ref={line2Ref}
          className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
        >
          {splitText("Developers Group")}
        </h1>

        <h2
          ref={line3Ref}
          className="text-gray-300 font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {splitText("on Campus ABESEC")}
        </h2>
      </div>

      {/* Bottom Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/50 to-transparent z-20 pointer-events-none" />

      <Navbar />
    </div>
  );
};

export default Home;