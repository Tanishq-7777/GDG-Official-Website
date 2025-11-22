"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 450,
  containerHeight = 350,
  animationDelay = 0.4,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-140px)",
    "rotate(5deg) translate(-70px)",
    "rotate(-2deg)",
    "rotate(-8deg) translate(70px)",
    "rotate(2deg) translate(140px)",
  ],
  enableHover = true,
}) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      }
    );
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);

    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    }
    return `${baseTransform} translate(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const base = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        gsap.to(selector, {
          transform: getNoRotationTransform(base),
          duration: 0.4,
          ease: "back.out(1.4)",
        });
      } else {
        const offsetX = i < hoveredIdx ? -130 : 130;
        gsap.to(selector, {
          transform: getPushedTransform(base, offsetX),
          duration: 0.4,
          delay: Math.abs(hoveredIdx - i) * 0.05,
          ease: "back.out(1.4)",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;
    images.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);
      gsap.to(selector, {
        transform: transformStyles[i] || "none",
        duration: 0.4,
        ease: "back.out(1.4)",
      });
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute w-[170px] aspect-square border-[3px] border-gray-700  rounded-2xl overflow-hidden shadow-lg`}
          style={{ transform: transformStyles[idx] }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            className="w-full h-full object-cover select-none"
            src={src}
            alt={`card-${idx}`}
          />
        </div>
      ))}
    </div>
  );
}
