"use client";

import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Trophy,
  BookOpen,
  Users,
  MessageSquare,
  Rocket,
} from "lucide-react";

const cardData = [
  {
    title: "Technical Workshops",
    desc: "Hands-on coding sessions with industry tools and frameworks, designed to help you build real-world skills through practical exercises and guided learning.",
    icon: <Code size={32} />,
    tags: ["Hands-on", "Skill Boost", "Live Demos"],
    themeHex: "#4285F4",
  },
  {
    title: "Hackathons",
    desc: "48-hour innovation marathons filled with problem-solving, exciting prizes, expert mentorship, and the opportunity to build impactful prototypes with your team.",
    icon: <Trophy size={32} />,
    tags: ["48 Hours", "Teamwork", "Innovation"],
    themeHex: "#EA4335",
  },
  {
    title: "Study Jams",
    desc: "Collaborative learning programs focused on certifications and essential tech skills, where mentors guide you step-by-step through structured content and hands-on tasks.",
    icon: <BookOpen size={32} />,
    tags: ["Guided", "Peer Learning", "Certificates"],
    themeHex: "#FBBC05",
  },
  {
    title: "Networking",
    desc: "Connect with developers, professionals, and like-minded builders while sharing ideas, exploring opportunities, and forming collaborations that extend beyond events.",
    icon: <Users size={32} />,
    tags: ["Meet People", "Collaborate", "Community"],
    themeHex: "#34A853",
  },
  {
    title: "Tech Talks",
    desc: "Learn real-world insights from industry experts as they share cutting-edge technologies, best practices, career guidance, and inspiring stories from the tech world.",
    icon: <MessageSquare size={32} />,
    tags: ["Experts", "Latest Tech", "Insights"],
    themeHex: "#4285F4",
  },
  {
    title: "Build Projects",
    desc: "Work on real, impactful projects that strengthen your developer portfolio while collaborating with peers, solving problems, and applying your skills in practical scenarios.",
    icon: <Rocket size={32} />,
    tags: ["Real Projects", "Teamwork", "Portfolio"],
    themeHex: "#EA4335",
  },
];

const WhyJoinGDG = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-3 text-[#e5e5e5]">
          Why <span className="text-[#4285F4]">Join GDG?</span>
        </h2>

        <p className="text-center text-[#737373] mb-14">
          Explore what makes our community a powerful space for learning and
          growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
          {cardData.map((card, index) => {
            const isExtraMobile = isMobile && index >= 3;

            if (isExtraMobile && !showMore) {
              return (
                <div key={index} className="hidden">
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`${
                  isExtraMobile
                    ? "opacity-0 translate-y-10 animate-card-in"
                    : ""
                }`}
                style={{
                  animationDelay:
                    isMobile && showMore && index >= 3
                      ? `${(index - 3) * 150}ms`
                      : "0ms",
                }}
              >
                <div className="h-full w-full">
                <Tilt
                  glareEnable={false}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.02}
                  transitionSpeed={2500}
                  className="h-full w-full block"
                >
                  <div
                    className="group relative p-7 h-full min-h-[350px] flex flex-col rounded-2xl bg-[#151515] border transition-all duration-700 hover:scale-[1.05] hover:-translate-y-2 overflow-hidden"
                    style={{
                      borderColor: card.themeHex,
                      boxShadow: `0 4px 24px ${card.themeHex}20`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${card.themeHex}20, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10 flex flex-col flex-grow">
                      <div
                        className="p-4 rounded-xl inline-block mb-5 transition-all duration-500 group-hover:scale-110"
                        style={{
                          backgroundColor: `${card.themeHex}15`,
                          border: `2px solid ${card.themeHex}80`,
                          color: card.themeHex,
                        }}
                      >
                        {card.icon}
                      </div>

                      <h3 className="text-2xl font-bold mb-3">
                        {card.title}
                      </h3>

                      <p className="text-[#a3a3a3] text-sm mb-5">
                        {card.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-4 py-2 rounded-full"
                            style={{
                              border: `1px solid ${card.themeHex}`,
                              color: card.themeHex,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
              </div>
            );
          })}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-3 rounded-full text-sm font-medium border border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4]/10"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-card-in {
          animation: cardIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyJoinGDG;
