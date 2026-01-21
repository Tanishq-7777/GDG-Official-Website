import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import gdgLogo from "../assets/gdg-logo.png";

const Footer = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.maskImage =
        "radial-gradient(300px 300px at 50% 50%, white 0%, transparent 100%)";
      spotlightRef.current.style.WebkitMaskImage =
        "radial-gradient(300px 300px at 50% 50%, white 0%, transparent 100%)";
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const gradient = `radial-gradient(380px 380px at ${x}px ${y}px, white 0%, transparent 100%)`;

    e.currentTarget.style.maskImage = gradient;
    e.currentTarget.style.WebkitMaskImage = gradient;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.maskImage =
      "radial-gradient(0px 0px at 50% 50%, white 0%, transparent 100%)";
    e.currentTarget.style.WebkitMaskImage =
      "radial-gradient(0px 0px at 50% 50%, white 0%, transparent 100%)";
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-12 pb-10 w-full flex flex-col items-center">

    
      <div
        ref={spotlightRef}
        className="hidden md:flex w-full h-[300px] lg:h-[350px] xl:h-[420px] items-center justify-center cursor-pointer relative select-none overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transition:
            "mask-image 0.4s ease-out, -webkit-mask-image 0.4s ease-out",
        }}
      >
        <h1
          className="font-extrabold tracking-widest text-[#2a2a2a] opacity-90 whitespace-nowrap"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(3rem, 12vw, 12rem)", 
            lineHeight: "1",
          }}
        >
          GDG ABESEC
        </h1>
      </div>

   
      <div className="w-full max-w-6xl px-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-8">

     
        <div className="flex items-center space-x-3">
          <img src={gdgLogo} alt="GDG Logo" className="h-12 w-auto" />
          <h1
            className="text-lg font-semibold text-[#e5e5e5]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Google Developers Group
          </h1>
        </div>

        <ul
          className="flex items-center space-x-8 text-[#a3a3a3] text-sm font-medium"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {["Home", "Events", "Contact", "Help"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`/${item.toLowerCase()}`}
                className="transition-all duration-300 hover:scale-110 hover:text-[#4285F4]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6">
          <a
            href="https://linkedin.com/company/gdg-abesec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#a3a3a3] hover:text-[#4285F4] transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Developer-Students-Club-ABESEC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#a3a3a3] hover:text-[#4285F4] transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/gdg.abesec/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#a3a3a3] hover:text-[#EA4335] transition-all duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#a3a3a3] hover:text-[#4285F4] transition-all duration-300 hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div
        className="w-full border-t border-[#2a2a2a] mt-8 pt-4 text-center text-[#737373] text-sm"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        © {new Date().getFullYear()} Google Developer Group ABESEC. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;