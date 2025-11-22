import React, { useState } from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function OrganisersAndActingGenerals() {
  const testimonials = [
    {
      quote:
        "Leading with vision and purpose. Inspiring teams as a Team Leader and Community Builder to drive innovation and collaboration.",
      name: "Arya Schwetank",
      designation: "Organizer, GDG ABESEC",
      src: "Organiser.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/aryaschwetank/",
        twitter: "https://x.com/aryaschwetank",
        github: "https://github.com/aryaschwetank",
      },
    },
    {
      quote:
        "Connecting ideas to transformative opportunities. As a Tech Strategist, bridging technology and creativity to craft solutions that shape the future.",
      name: "Ayush Jain",
      designation: "Acting General, GDG ABESEC",
      src: "ActingGeneral1.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/urayushjain/",
        twitter: "https://x.com/urayushjain",
        github: "https://github.com/URAYUSHJAIN",
      },
    },
    {
      quote:
        "Transforming code into meaningful impact. As a Developer Extraordinaire, building applications that solve real-world challenges with precision.",
      name: "Prakhar Tiwari",
      designation: "Acting General, GDG ABESEC",
      src: "ActingGeneral2.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/prakhar-tiwari1908/",
        twitter: "https://x.com/tPrakhar19",
        github: "https://github.com/prakhar-174",
      },
    },
    {
      quote:
        "Crafting compelling narratives through the lens. As a Creative Director, capturing moments that inspire, engage, and leave a lasting impression.",
      name: "Riya Jaiswal",
      designation: "Acting General, GDG ABESEC",
      src: "ActingGeneral3.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/riyajstar07/",
        twitter: "https://x.com/riyajstar07",
        github: "",
      },
    },
    {
      quote:
        "Solving complex problems with precision and insight. As a DSA Specialist, optimizing algorithms and strategies to achieve maximum impact.",
      name: "Deepanshu Kaushik",
      designation: "Acting General, GDG ABESEC",
      src: "ActingGeneral4.jpg",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/deepanshu-kaushik-174059297/",
        twitter: "https://x.com/Deepanshu25u",
        github: "",
      },
    },
    {
      quote:
        "Ensuring seamless collaboration and alignment. As a Strategic Maestro, guiding teams with foresight, clarity, and a vision for excellence.",
      name: "Kshitiz Srivastav",
      designation: "Acting General, GDG ABESEC",
      src: "ActingGeneral5.jpg",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/kshitiz-srivastav-a87028333/",
        twitter: "https://x.com/KshitizonX",
        github: "",
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-7xl px-4">
        {/* Animated Testimonials Slider */}
        <div className="animated-testimonials-container">
          <AnimatedTestimonials
            testimonials={testimonials}
            autoplay={true}
            onChange={(index) => setActiveIndex(index)}
            showSocials={true}
          />
        </div>
      </div>
    </div>
  );
}

export default OrganisersAndActingGenerals;