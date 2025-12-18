import { useEffect, useRef, useState } from "react";

const COLORS = [
  "#4285F4",
  "#EA4335",
  "#FBBC05", 
  "#34A853", 
  "#A142F4", 
];

const ANGLES = [0, 90, 180, 270];
const FOLLOW_RADIUS = 32;
const IDLE_RADIUS = 40;

export default function CursorTrail() {
  const [isDesktop, setIsDesktop] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const center = useRef({ x: 0, y: 0 });

  const satellites = useRef(
    Array.from({ length: 4 }, () => ({
      x: 0,
      y: 0,
      r: FOLLOW_RADIUS,
    }))
  );

  const refs = useRef([]);
  const idle = useRef(false);
  const idleTimer = useRef(null);

  useEffect(() => {
    const check = () =>
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      idle.current = false;
      clearTimeout(idleTimer.current);

      idleTimer.current = setTimeout(() => {
        idle.current = true;

        satellites.current.forEach((ball) => {
          ball.r = IDLE_RADIUS;
        });
      }, 160);
    };

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      center.current.x += (mouse.current.x - center.current.x) * 0.32;
      center.current.y += (mouse.current.y - center.current.y) * 0.32;

      satellites.current.forEach((ball, i) => {
        if (!idle.current) {
          ball.r += (FOLLOW_RADIUS - ball.r) * 0.1;
        }

        const angleRad = (ANGLES[i] * Math.PI) / 180;

        const targetX =
          center.current.x + Math.cos(angleRad) * ball.r;
        const targetY =
          center.current.y + Math.sin(angleRad) * ball.r;

        ball.x += (targetX - ball.x) * (idle.current ? 0.18 : 0.12);
        ball.y += (targetY - ball.y) * (idle.current ? 0.18 : 0.12);
      });

      if (refs.current[0]) {
        refs.current[0].style.transform = `translate(${center.current.x}px, ${center.current.y}px)`;
      }

      satellites.current.forEach((ball, i) => {
        const el = refs.current[i + 1];
        if (el) {
          el.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(idleTimer.current);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={(el) => (refs.current[0] = el)}
        className="pointer-events-none fixed top-0 left-0 z-[999999]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className="rounded-full"
          style={{
            width: 20,
            height: 20,
            background: COLORS[0],
            filter: "blur(4px)",

          }}
        />
      </div>

      {satellites.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i + 1] = el)}
          className="pointer-events-none fixed top-0 left-0 z-[999999]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div
            className="rounded-full"
            style={{
              width: 20,
              height: 20,
              background: COLORS[i + 1],
              filter: "blur(3px)",
            }}
          />
        </div>
      ))}
    </>
  );
}
