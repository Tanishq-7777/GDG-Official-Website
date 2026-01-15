import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgressBar from "../components/ScrollProgressBar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
              <ScrollProgressBar />
      <Contact />
        <Footer />

    </div>
  );
};
export default ContactPage;