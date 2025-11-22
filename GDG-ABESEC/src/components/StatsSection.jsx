"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
      {
        threshold: 0.2,
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
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
     
      controls.start({
        x: `${position.x}vw`,
        y: `${position.y}vh`,
        scale: [0, 1.15, 1],
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: delay,
          ease: [0.68, -0.55, 0.265, 1.55],
          scale: {
            duration: 0.7,
            times: [0, 0.6, 1],
          },
        },
      }).then(() => {
        
        controls.start({
          x: [
            `${position.x}vw`,
            `${position.x + position.floatX1}vw`,
            `${position.x + position.floatX2}vw`,
            `${position.x}vw`,
          ],
          y: [
            `${position.y}vh`,
            `${position.y + position.floatY1}vh`,
            `${position.y + position.floatY2}vh`,
            `${position.y}vh`,
          ],
          scale: [1, 0.97, 1.03, 1],
          transition: {
            duration: position.floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
          },
        });
      });
    }
  }, [isVisible, controls, position, delay]);

  return (
    <motion.div
      className="absolute w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border-2"
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: position.bgColor,
        borderColor: position.borderColor,
      }}
      initial={{
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
      }}
      animate={controls}
    >
      <img 
        src={iconSrc} 
        alt={iconAlt || `App Icon ${index + 1}`}
        className="w-12 h-12 md:w-14 md:h-14 object-contain"
      />
    </motion.div>
  );
};


const StatItem = ({ headline, number, suffix, delay, isVisible }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={isVisible ? {
        opacity: 1,
        y: 0,
      } : {
        opacity: 0,
        y: 50,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="text-center"
    >
      {headline && (
        <p className="text-sm md:text-base text-gray-400 mb-2 font-normal space-mono-regular">
          {headline}
        </p>
      )}
      <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold space-mono-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500">
          {number}
        </span>
        {suffix && (
          <span className="text-2xl md:text-4xl lg:text-5xl font-normal text-gray-300 space-mono-regular ml-2">
            {suffix}
          </span>
        )}
      </h3>
    </motion.div>
  );
};

export default function StatsSection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.15 });

 
  const googleColors = [
    { bgColor: 'rgba(66, 133, 244, 0.1)', borderColor: '#4285F4' }, 
    { bgColor: 'rgba(234, 67, 53, 0.1)', borderColor: '#EA4335' }, 
    { bgColor: 'rgba(251, 188, 5, 0.1)', borderColor: '#FBBC05' }, 
    { bgColor: 'rgba(52, 168, 83, 0.1)', borderColor: '#34A853' }, 
    { bgColor: 'rgba(66, 133, 244, 0.15)', borderColor: '#4285F4' }, 
    { bgColor: 'rgba(234, 67, 53, 0.15)', borderColor: '#EA4335' }, 
    { bgColor: 'rgba(251, 188, 5, 0.15)', borderColor: '#FBBC05' }, 
    { bgColor: 'rgba(52, 168, 83, 0.15)', borderColor: '#34A853' }, 
  ];

  
  const appIcons = [
    {
      src: "https://www.svgrepo.com/show/353810/google-developers.svg",
      alt: "Google Developers"
    },
    {
      src: img1,
      alt: "Chrome"
    },
    {
      src: android,
      alt: "Android"
    },
    {
      src: youtube,
      alt: "YouTube"
    },
    {
      src: mail,
      alt: "Gmail"
    },
    {
      src: play,
      alt: "Google Play"
    },
    {
      src: drive,
      alt: "Google Drive"
    },
    {
      src: cloud,
      alt: "Google Cloud"
    },
    {
      src: firebase,
      alt: "Firebase"
    },
    {
      src: flutter,
      alt: "Flutter"
    },
  ];

  
  const iconPositions = [
    { x: -40, y: -35, floatX1: 1, floatY1: 1.5, floatX2: -1, floatY2: 1, floatDuration: 4, ...googleColors[0] },
    { x: -25, y:-45, floatX1: -1.5, floatY1: 1, floatX2: 1, floatY2: -1, floatDuration: 5, ...googleColors[1] },
    { x: 20, y: -10, floatX1: 1, floatY1: -1, floatX2: -1.5, floatY2: 1.5, floatDuration: 4.5, ...googleColors[2] },
    { x: 30, y: -35, floatX1: 1.5, floatY1: -1, floatX2: 1, floatY2: 1.5, floatDuration: 5.5, ...googleColors[3] },
    { x: 30, y: 15, floatX1: -1, floatY1: 1.5, floatX2: 1.5, floatY2: -1, floatDuration: 4, ...googleColors[4] },
    { x: 10, y: -35, floatX1: -1.5, floatY1: 1, floatX2: 1, floatY2: 1.5, floatDuration: 5, ...googleColors[5] },
    { x: -40, y: 0, floatX1: 1, floatY1: -1.5, floatX2: -1, floatY2: 1, floatDuration: 4.5, ...googleColors[6] },
    { x: -30, y: 28, floatX1: 1.5, floatY1: 1, floatX2: -1.5, floatY2: -1, floatDuration: 5.5, ...googleColors[7] },
    { x: 18, y: 30, floatX1: -1, floatY1: -1.5, floatX2: 1, floatY2: 1, floatDuration: 4.2, ...googleColors[0] },
    { x: -7, y: 35, floatX1: 1.5, floatY1: 1, floatX2: -1, floatY2: -1.5, floatDuration: 5.2, ...googleColors[1] },
    ];

  
  const stats = [
    {
      headline: "A growing community of",
      number: "1,500+",
      suffix: " developers",
    },
    {
      headline: "",
      number: "20+",
      suffix: " events",
    },
    {
      headline: "",
      number: "15+",
      suffix: " projects",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center justify-center"
    >
      
      <div className="absolute inset-0 pointer-events-none">
        {iconPositions.map((position, index) => (
          <FloatingAppIcon
            key={index}
            position={position}
            delay={index * 0.06}
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
            delay={0.8 + index * 0.25}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}