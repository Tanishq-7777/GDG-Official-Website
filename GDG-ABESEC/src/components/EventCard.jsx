import React, { useState } from "react";

const EventCard = ({ event, isLeft }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-aos={isLeft ? "fade-right" : "fade-left"}
      className={`
        relative mb-20 w-full flex
        justify-center
        lg:${isLeft ? "justify-start" : "justify-end"}
      `}
    >
      {/* Card */}
      <div
        className="relative z-10 w-[420px] bg-white p-8 rounded-2xl shadow-xl
                   transition-transform duration-300 hover:scale-105 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3 className="text-2xl font-bold">{event.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{event.date}</p>
        <p className="mt-4 text-gray-700">{event.description}</p>

      </div>

      {/* Timeline Dot */}
      <span className="absolute top-10 left-1/2 -translate-x-1/2
                       w-5 h-5 bg-blue-600 rounded-full border-4 border-white z-20" />
    </div>
  );
};

export default EventCard;
