import React, { useState, useEffect  } from "react";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";


const events = [
  {
    id: 1,
    year: "2025",
    title: "Mind The Gap (MTG)",
    org: "Google Developer Groups",
    description:
      "Large scale developer conference with workshops, talks, and networking.",

  },
  {
    id: 2,
    year: "2023",
    title: "Web Bootcamp",
    org: "GDG ABESEC",
    description:
      "Hands-on frontend bootcamp covering React, Tailwind, and best practices.",

  },
  {
    id: 3,
    year: "2022",
    title: "Hackathon",
    org: "Tech Community",
    description:
      "24-hour hackathon focused on real-world problem solving.",

  },
  {
    id: 4,
    year: "2022",
    title: "Hackathon",
    org: "Tech Community",
    description:
      "24-hour hackathon focused on real-world problem solving.",

  },
  {
    id: 5,
    year: "2022",
    title: "Hackathon",
    org: "Tech Community",
    description:
      "24-hour hackathon focused on real-world problem solving.",

  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative bg-black text-white py-32">
      {/* Heading */}
      <div className="text-center mb-28">
        <h2 className="text-5xl font-bold">Event Timeline</h2>
        <p className="text-gray-400 mt-4">
          Scroll to explore our past events
        </p>
      </div>

      {/* Vertical line */}
      <div className="absolute left-1/2 top-[22rem] bottom-0 w-px
                bg-violet-500/30" />
      {/* SMOOTH MOVING SPOTLIGHT */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-40"
        animate={{
          top: activeIndex !== null
            ? `${activeIndex * 360 + 360}px`
            : "360px",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 22,
          mass: 0.8,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-violet-500
    shadow-[0_0_30px_10px_rgba(139,92,246,0.9)]"
        />
      </motion.div>

      {/* Timeline items */}
      <div className="max-w-7xl mx-auto px-6 space-y-36">
        {events.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            index={index}
            isLeft={index % 2 === 0}
            isRight={index % 2 !== 0}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
