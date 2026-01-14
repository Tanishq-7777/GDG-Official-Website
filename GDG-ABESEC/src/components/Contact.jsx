import Navbar from "./ui/Navbar";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";





export default function Contact() {
   
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Abes Engineering College',
      subContent: 'Ghaziabad, India',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'dsc@abesec.ac.in',
      subContent: 'support@gdg.com',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 120 123 4567',
      subContent: 'Mon-Fri, 9am-6pm',
      color: 'bg-blue-500'
    }
  ];

  return (
    <>
    <Navbar/>
  <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto pt-32">
        {/* Header */}
    
 <div className="text-center mb-12 relative z-20">
  <motion.h1
    className="text-4xl font-bold text-[#6B7280] mb-3"
    style={{ textShadow: "0 0 14px rgba(66,133,244,0.6)" }}
  >
    Get In Touch
  </motion.h1>
   <motion.p
    initial={{ y: -40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.6 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut"
    }}
    className="text-lg text-[#6B7280]/80"
    style={{ textShadow: "0 0 10px rgba(4, 34, 82, 0.35)" }}
  >
    We'd love to hear from you. Send us a message!
  </motion.p>
</div>


       
      {/* Contact Info Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  {contactInfo.map((info, index) => {
    const Icon = info.icon;

    return (
      <Tilt
        key={index}
        glareEnable={false}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        transitionSpeed={2500}
      >
        <div
          className="group relative p-6 h-full rounded-2xl 
                     bg-white/10 backdrop-blur-xl 
                     border border-white/10 
                     transition-all duration-700 
                     hover:scale-[1.04] hover:-translate-y-2 
                     overflow-hidden"
        >
          {/* 🔵 Hover Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none"
            style={{
              boxShadow: `
                0 0 40px rgba(66,133,244,0.35),
                inset 0 0 40px rgba(66,133,244,0.15)
              `,
              background:
                "radial-gradient(circle at 50% 50%, rgba(66,133,244,0.12), transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 
                         bg-white/10 border border-white/20 
                         text-[#5F6F8E]"
            >
              <Icon size={24} />
            </div>

            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">
              {info.title}
            </h3>

            <p className="text-[#9CA3AF] font-medium">
              {info.content}
            </p>

            <p className="text-[#6B7280] text-sm mt-1">
              {info.subContent}
            </p>
          </div>
        </div>
      </Tilt>
    );
  })}
</div>


       {/* Contact Form */}

{/* Contact Form */}
<div
  className="group relative max-w-3xl mx-auto mb-20 rounded-2xl 
             bg-white/10 backdrop-blur-xl 
             border border-white/10 
             transition-all duration-700 
             hover:scale-[1.03] hover:-translate-y-2 
             overflow-hidden"
>
  {/* 🔵 Hover Glow Layer (SAME AS CARDS) */}
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 
               transition-all duration-700 rounded-2xl pointer-events-none"
    style={{
      boxShadow: `
        0 0 40px rgba(66,133,244,0.35),
        inset 0 0 40px rgba(66,133,244,0.15)
      `,
      background:
        "radial-gradient(circle at 50% 50%, rgba(66,133,244,0.12), transparent 70%)",
    }}
  />

  {/* 🟢 Form Content */}
  <div className="relative z-10 p-6">
    



  {/* 🟢 Form Content */}
 
    <h2 className="text-2xl font-bold text-[#E5E7EB] mb-6">
      Send Us a Message
    </h2>

    {submitted && (
      <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6">
        Thank you! Your message has been sent successfully.
      </div>
    )}

    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[#9CA3AF] mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg 
                       bg-black/40 border border-white/10 
                       text-gray-100 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-[#9CA3AF] mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg 
                       bg-black/40 border border-white/10 
                       text-gray-100 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[#9CA3AF] mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg 
                     bg-black/40 border border-white/10 
                     text-gray-100 placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          placeholder="How can we help?"
        />
      </div>

      <div className="mb-6">
        <label className="block text-[#9CA3AF] mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full px-4 py-3 rounded-lg 
                     bg-black/40 border border-white/10 
                     text-gray-100 placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/60 resize-none"
          placeholder="Tell us more about your inquiry..."
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full md:w-auto 
                   bg-[#6B7280]/80 hover:bg-[#4285F4] 
                   text-white font-semibold 
                   px-8 py-3 rounded-lg 
                   transition-colors flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Send Message
      </button>
    </div>
  </div>
</div>
        </div>
    </div>
    </>
    );
}