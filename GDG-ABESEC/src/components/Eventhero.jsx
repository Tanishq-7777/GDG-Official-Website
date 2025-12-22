import React from "react";
import { ChevronDown } from "lucide-react";

const EventHero = ({ showPast, setShowPast }) => {
  return (
    <>
      {/* Component-scoped CSS */}
      <style>
        {`
          .tm-hero-title {
            font-size: clamp(3rem, 10vw, 8rem);
            font-weight: 900;
            margin: 0;
            word-spacing: 0.06em;
            letter-spacing: -0.05em;
            line-height: 1.05;
            text-transform: uppercase;
            background: linear-gradient(135deg, #ffffff 0%, #888888 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .tm-hero-subtitle {
            font-size: clamp(1rem, 2vw, 1.5rem);
            margin-top: 1.5rem;
            color: #666666;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            font-weight: 300;
          }

          .event-btn {
            padding: 1rem 2.5rem;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            border-radius: 9999px;
            border: 1px solid #444;
            color: #ccc;
            background: transparent;
            transition: all 0.3s ease;
          }

          .event-btn:hover {
            color: #fff;
            border-color: #fff;
            background: linear-gradient(135deg, #ffffff22, #88888822);
            transform: translateY(-2px);
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />

        {/* Content */}
        <div className="relative z-10 mx-auto">
          <h1 className="tm-hero-title">ABOUT THE EVENTS</h1>
          <p className="tm-hero-subtitle">
            Experiences that inspire learning & innovation
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 z-10 flex flex-col items-center text-gray-500">
          <span className="uppercase text-xs tracking-widest mb-2">
            Scroll down to see events
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* EVENTS FILTER SECTION */}
      <section className="bg-black py-24 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-8">
          <button
            className={`event-btn ${!showPast ? "bg-gray-800 text-white" : ""}`}
            onClick={() => setShowPast(false)}
          >
            Upcoming Events
          </button>

          <button
            className={`event-btn ${showPast ? "bg-gray-800 text-white" : ""}`}
            onClick={() => setShowPast(true)}
          >
            Past Events
          </button>
        </div>
      </section>
    </>
  );
};

export default EventHero;
