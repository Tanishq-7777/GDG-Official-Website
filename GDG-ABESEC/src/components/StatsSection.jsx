"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/img1.png";
import cloud from "../assets/cloud.png";
import drive from "../assets/drive.png";
import firebase from "../assets/firebase.png";
import flutter from "../assets/flutter.png";
import mail from "../assets/mail.png";
import play from "../assets/play.png";
import youtube from "../assets/youtube.png";
import android from "../assets/android.png";

const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
        }
      },
      { threshold: 0.2, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, hasIntersected]);

  return isIntersecting;
};

const FloatingAppIcon = ({
  position,
  delay,
  isVisible,
  index,
  iconSrc,
  iconAlt
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls
        .start({
          x: `${position.x}vw`,
          y: `${position.y}vh`,
          scale: [0, 1.15, 1],
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.68, -0.55, 0.265, 1.55],
            scale: { duration: 0.8, times: [0, 0.6, 1] }
          }
        })
        .then(() => {
          const randomPath = Array.from({ length: 6 }, () => ({
            x: position.x + (Math.random() - 0.5) * position.floatRadius * 2,
            y: position.y + (Math.random() - 0.5) * position.floatRadius * 2
          }));

          controls.start({
            x: [
              `${position.x}vw`,
              `${randomPath[0].x}vw`,
              `${randomPath[1].x}vw`,
              `${randomPath[2].x}vw`,
              `${randomPath[3].x}vw`,
              `${randomPath[4].x}vw`,
              `${randomPath[5].x}vw`,
              `${position.x}vw`
            ],
            y: [
              `${position.y}vh`,
              `${randomPath[0].y}vh`,
              `${randomPath[1].y}vh`,
              `${randomPath[2].y}vh`,
              `${randomPath[3].y}vh`,
              `${randomPath[4].y}vh`,
              `${randomPath[5].y}vh`,
              `${position.y}vh`
            ],
            rotate: [0, 3, -3, 2, -2, 3, -3, 0],
            scale: [1, 0.96, 1.04, 0.98, 1.02, 0.97, 1.03, 1],
            transition: {
              duration: position.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1]
            }
          });
        });
    }
  }, [isVisible, controls, position, delay]);

  return (
    <motion.div
      className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border-2"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#151515",
        borderColor: position.borderColor
      }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      animate={controls}
    >
      <img
        src={iconSrc}
        alt={iconAlt || `App Icon ${index + 1}`}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain"
      />
    </motion.div>
  );
};

const StatItem = ({ headline, number, suffix, delay, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.8 }
      }
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="text-center"
    >
      {headline && (
        <motion.p
          className="text-sm md:text-base text-[#737373] mb-2 font-normal"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        >
          {headline}
        </motion.p>
      )}
      <h3
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <span className="text-[#4285F4]">{number}</span>
        {suffix && (
          <span
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal text-[#a3a3a3] ml-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {suffix}
          </span>
        )}
      </h3>
    </motion.div>
  );
};

export default function StatsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const googleColors = [
    { borderColor: "#4285F4" },
    { borderColor: "#EA4335" },
    { borderColor: "#FBBC05" },
    { borderColor: "#34A853" },
    { borderColor: "#4285F4" },
    { borderColor: "#EA4335" },
    { borderColor: "#FBBC05" },
    { borderColor: "#34A853" }
  ];

  const appIcons = [
    { src: "https://www.svgrepo.com/show/353810/google-developers.svg", alt: "Google Developers" },
    { src: img1, alt: "Chrome" },
    { src: android, alt: "Android" },
    { src: youtube, alt: "YouTube" },
    { src: mail, alt: "Gmail" },
    { src: play, alt: "Google Play" },
    { src: drive, alt: "Google Drive" },
    { src: cloud, alt: "Google Cloud" },
    { src: firebase, alt: "Firebase" },
    { src: flutter, alt: "Flutter" }
  ];

  const iconPositions = [
    { x: -40, y: -35, floatRadius: 5, floatDuration: 30, ...googleColors[0] },
    { x: -25, y: -45, floatRadius: 4.5, floatDuration: 31, ...googleColors[1] },
    { x: 20, y: -10, floatRadius: 5.5, floatDuration: 30.5, ...googleColors[2] },
    { x: 30, y: -35, floatRadius: 4.8, floatDuration: 31.5, ...googleColors[3] },
    { x: 30, y: 15, floatRadius: 5.2, floatDuration: 30.2, ...googleColors[4] },
    { x: 10, y: -35, floatRadius: 4.7, floatDuration: 31.2, ...googleColors[5] },
    { x: -40, y: 0, floatRadius: 5.3, floatDuration: 30.8, ...googleColors[6] },
    { x: -30, y: 28, floatRadius: 4.9, floatDuration: 31.8, ...googleColors[7] },
    { x: 18, y: 30, floatRadius: 5.1, floatDuration: 30.4, ...googleColors[0] },
    { x: -7, y: 35, floatRadius: 4.6, floatDuration: 31.4, ...googleColors[1] }
  ];

  const stats = [
    { headline: "A growing community of", number: "1,500+", suffix: " developers" },
    { headline: "", number: "20+", suffix: " events" },
    { headline: "", number: "15+", suffix: " projects" }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen hidden md:block">
      <section
        ref={sectionRef}
        className="sticky top-0 min-h-screen bg-[#0a0a0a] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 pointer-events-none">
          {iconPositions.map((position, index) => (
            <FloatingAppIcon
              key={index}
              position={position}
              delay={0.3 + index * 0.12}
              isVisible={isVisible}
              index={index}
              iconSrc={appIcons[index]?.src || appIcons[0].src}
              iconAlt={appIcons[index]?.alt || appIcons[0].alt}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-12 md:space-y-16">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              headline={stat.headline}
              number={stat.number}
              suffix={stat.suffix}
              delay={0.8 + index * 0.3}
              isVisible={isVisible}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
