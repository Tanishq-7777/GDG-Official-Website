"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

import { FooterBackgroundGradient } from "./ui/hover-footer";
import { TextHoverEffect } from "./ui/hover-footer";
import { Link } from "react-router-dom";

function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
        { label: "Team", href: "/team" },
        { label: "Showcase", href: "/achievements" },
        { label: "Contact", href: "/contact" },
        { label: "Back to Top", action:"scrollTop" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "dsc@abesec.ac.in",
      href: "mailto:dsc@abesec.ac.in",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+91 120 123 4567",
      href: "tel:+911201234567",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "ABES Engineering College, Ghaziabad, India",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/gdg-abesec/", hoverColor: "hover:text-[#0A66C2]", },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/gdg.abesec/", hoverColor: "hover:text-[#E4405F]", },
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/gdgabesec", hoverColor: "hover:text-[#1DA1F2]", },
  ];

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
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-gray-400 transition-colors ${hoverColor}`}
              >
                {icon}
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

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} GDG ABESEC. All rights reserved.
          </p>
        </div>
      </div>

      <div
        className="w-full border-t border-[#2a2a2a] mt-8 pt-4 text-center text-[#737373] text-sm"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        © {new Date().getFullYear()} Google Developer Group ABESEC. All rights
        reserved.
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;