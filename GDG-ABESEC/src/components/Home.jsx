import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./ui/Navbar";
import Squares from "./ui/Squares";

const Home = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const headingLRef = useRef(null);
  const exploreRef = useRef(null);
  const scrollBtnRef = useRef(null);

  const splitText = (text, lIndex = -1) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        ref={i === lIndex ? headingLRef : null}
        className="inline-block will-change-transform"
        style={{ 
          display: "inline-block", 
          opacity: 0,
          transformStyle: i === lIndex ? 'preserve-3d' : 'flat'
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

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

      if (isHeading) {
        gsap.to(letters, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 2.4,
          ease: "elastic.out(1, 0.7)",
          stagger: {
            each: 0.08,
            from: "random",
          },
          delay,
        });
      } else {
        gsap.to(letters, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.8,
          ease: "elastic.out(1, 0.6)",
          stagger: {
            each: 0.05,
            from: "start",
          },
          delay,
        });
      }
    };

    animateLine(line1Ref, 0.2, true);
    animateLine(line2Ref, 0.9, true);
    animateLine(line3Ref, 1.6, false);

    // Flip the "l" in Google (line 1) slowly and smoothly
    gsap.to(headingLRef.current, {
      rotationX: 360,
      transformOrigin: "50% 50%",
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      repeatDelay: 3.2,
    });

    // Animate "Explore GDG" text
    gsap.set(exploreRef.current, { opacity: 0, y: 20 });
    gsap.to(exploreRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 2.5,
    });

    // Animate scroll button
    gsap.set(scrollBtnRef.current, { opacity: 0, y: 20 });
    gsap.to(scrollBtnRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 2.8,
    });

    // Bouncing animation for scroll button
    gsap.to(scrollBtnRef.current, {
      y: 10,
      duration: 0.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 3.8,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.6}
          borderColor="#0e071f"
          squareSize={55}
          hoverFillColor="#0e071f"
        />
      </div>

      {/* Branding */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <img
            src="https://www.svgrepo.com/show/353810/google-developers.svg"
            className="h-8 w-10 sm:h-12 sm:w-14 md:h-14 md:w-16"
            alt="gdgLogo"
          />

          <div className="flex items-center gap-0.5 font-bold text-xl sm:text-2xl md:text-3xl">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-300">o</span>
            <span className="text-green-500">g</span>
            <span className="text-blue-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>

        <div className="text-white text-sm sm:text-base md:text-lg tracking-wide ml-0.5">
          Developers Group
        </div>
      </div>

      {/* HERO - Three Lines */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 gap-2 md:gap-4" style={{ perspective: '1000px' }}>
        <h1
          ref={line1Ref}
          className="text-white font-extrabold leading-tight
                     text-[32px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
        >
          {splitText("Welcome to Google", 15)}
        </h1>

        <h1
          ref={line2Ref}
          className="text-white font-bold leading-tight
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
        >
          {splitText("Developers Group")}
        </h1>

        <h2
          ref={line3Ref}
          className="text-gray-300 font-semibold leading-tight
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {splitText("on Campus ABESEC")}
        </h2>
      </div>

      {/* Explore Section at Bottom */}
      <div className="fixed bottom-14 sm:bottom-28 md:bottom-3 left-0 right-0 z-20 flex flex-col items-center gap-2 sm:gap-1">
        <h3
          ref={exploreRef}
          className="text-gray-500 font-extralight text-lg sm:text-xl md:text-xl tracking-wide"
        >
          {/* Explore GDG */}
        </h3>
        
       
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/50 to-transparent z-20 pointer-events-none"></div>
      <Navbar />
    </div>
  );
};

export default Home;