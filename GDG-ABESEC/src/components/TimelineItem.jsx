import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === "down" ? 80 : -80,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir === "down" ? -80 : 80,
    scale: 0.95,
    transition: {
      duration: 1.45,
      ease: "easeInOut",
    },
  }),
};

const TimelineItem = ({
  event,
  index,
  isLeft,
  activeIndex,
  setActiveIndex,
  scrollDir,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView && activeIndex !== index) {
      setActiveIndex(index);
    }
  }, [isInView, index, activeIndex, setActiveIndex]);

  return (
    <div
      ref={ref}
      className={`
        relative flex w-full justify-center
        ${isLeft ? "lg:justify-start lg:pr-16" : "lg:justify-end lg:pl-16"}
      `}
    >
      {/* CARD */}
      <motion.div
        custom={scrollDir}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
        className="
          relative w-[500px] p-8 rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(139,92,246,0.15)]
        "
      >
        <span className="text-sm text-gray-400">{event.year}</span>

        <h3 className="text-2xl font-semibold mt-2">
          {event.title}
        </h3>

        <p className="text-gray-400 mt-1">{event.org}</p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          {event.description}
        </p>
      </motion.div>

    </div>
  );
};

export default TimelineItem;
