import { useEffect, useRef, useState } from "react";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);
  const targetWidth = useRef(0);
  const currentWidth = useRef(0);
  const rafId = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    targetWidth.current = scrollPercent;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    handleScroll();

    const smoothUpdate = () => {
    
      const smoothingFactor = 0.12;
      
      const diff = targetWidth.current - currentWidth.current;
      
      if (Math.abs(diff) > 0.01) {
        currentWidth.current += diff * smoothingFactor;
        setWidth(currentWidth.current);
      }
      
      rafId.current = requestAnimationFrame(smoothUpdate);
    };

    smoothUpdate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-indigo-600 z-[9999] shadow-lg shadow-indigo-500/50"
      style={{ 
        width: `${width}%`,
        transition: 'opacity 0.2s ease-out'
      }}
    />
  );
}