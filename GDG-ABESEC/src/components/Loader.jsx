import { useEffect, useState } from "react";
import logo from "/logo.png";
import "../styles/Loader.css";

const quotes = [
  "Building Together",
  "Connect. Learn. Grow.",
  "Connecting Developers"
];

export default function Loader({ onFinish }) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 2000);

    const timer = setTimeout(() => {
      onFinish();
    }, 6000); 

    return () => {
      clearInterval(quoteInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="loader-container">
      <img src={logo} alt="GDG Logo" className="loader-logo" />

      <p className="loader-quote">
        {quotes[quoteIndex]}
      </p>
    </div>
  );
}
