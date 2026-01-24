import { useState, useEffect } from 'react';

const MovingIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [calendarDay, setCalendarDay] = useState(1);

  useEffect(() => {
    let interval;
    if (hoveredIndex !== null) {
      const hoveredIconId = (hoveredIndex % 8) + 1;
      if (hoveredIconId === 4) {
        interval = setInterval(() => {
          setCalendarDay(prev => (prev < 31 ? prev + 1 : 31));
        }, 40);
      }
    } else {
      const resetInterval = setInterval(() => {
        setCalendarDay(prev => (prev > 1 ? prev - 1 : 1));
      }, 40);
      return () => clearInterval(resetInterval);
    }
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const icons = [
    {
      id: 1,
      name: 'Code Brackets',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="40" width="160" height="120" rx="10" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <line x1="20" y1="60" x2="180" y2="60" stroke="#2196F3" strokeWidth="3"/>
          <circle cx="35" cy="50" r="4" fill="#FF5F56"/>
          <circle cx="50" cy="50" r="4" fill="#FFBD2E"/>
          <circle cx="65" cy="50" r="4" fill="#27C93F"/>
          <g className={isHovered ? 'code-bracket-scale' : ''}>
            <text x="70" y="110" fontSize="48" fill="#2196F3" fontWeight="bold">&lt;</text>
            <text x="120" y="110" fontSize="48" fill="#FFC107" fontWeight="bold">&gt;</text>
          </g>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Book with Dots',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 70 40 L 70 160 Q 100 170 130 160 L 130 40 Q 100 30 70 40 Z" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <path d="M 70 40 Q 100 30 130 40" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <line x1="100" y1="35" x2="100" y2="165" stroke="#2196F3" strokeWidth="2" opacity="0.5"/>

          <circle cx="85" cy="70" r="6" fill="none" stroke="#FFC107" strokeWidth="2.5" className={isHovered ? 'dot-pop-1' : ''}/>
          <circle cx="115" cy="70" r="6" fill="none" stroke="#FFC107" strokeWidth="2.5" className={isHovered ? 'dot-pop-2' : ''}/>

          <circle cx="85" cy="100" r="6" fill="none" stroke="#FFC107" strokeWidth="2.5" className={isHovered ? 'dot-pop-3' : ''}/>
          <circle cx="115" cy="100" r="6" fill="none" stroke="#FFC107" strokeWidth="2.5" className={isHovered ? 'dot-pop-4' : ''}/>

          <circle cx="85" cy="130" r="6" fill="none" stroke="#FFC107" strokeWidth="2.5" className={isHovered ? 'dot-pop-5' : ''}/>
          <circle cx="115" cy="130" r="6" fill="none" stroke="#FFC107" strokeWidth="2.5" className={isHovered ? 'dot-pop-6' : ''}/>
        </svg>
      )
    },
    {
      id: 3,
      name: 'Trophy',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 60 70 Q 60 100 80 110 L 80 130 L 120 130 L 120 110 Q 140 100 140 70 Z" fill="none" stroke="#FFC107" strokeWidth="3"/>
          <rect x="75" y="130" width="50" height="10" fill="none" stroke="#FFC107" strokeWidth="3"/>

          <path d="M 60 70 L 60 50 L 140 50 L 140 70" fill="none" stroke="#FFC107" strokeWidth="3" className={isHovered ? 'trophy-lid-open' : ''}/>

          <g className={isHovered ? 'trophy-code-emerge' : ''} style={{ opacity: isHovered ? 1 : 0 }}>
            <text x="82" y="88" fontSize="24" fill="#2196F3" fontWeight="bold">&lt;</text>
            <text x="105" y="88" fontSize="24" fill="#2196F3" fontWeight="bold">&gt;</text>
          </g>
        </svg>
      )
    },
    {
      id: 4,
      name: 'Calendar Counter',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="40" y="50" width="120" height="110" rx="8" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <line x1="40" y1="75" x2="160" y2="75" stroke="#2196F3" strokeWidth="3"/>
          <line x1="70" y1="50" x2="70" y2="35" stroke="#2196F3" strokeWidth="3" strokeLinecap="round"/>
          <line x1="130" y1="50" x2="130" y2="35" stroke="#2196F3" strokeWidth="3" strokeLinecap="round"/>
          <text x="100" y="125" fontSize="48" fill="#2196F3" fontWeight="bold" textAnchor="middle" className={isHovered ? 'calendar-number-flip' : ''}>
            {calendarDay}
          </text>
        </svg>
      )
    },
    {
      id: 5,
      name: 'Calendar Tear',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g className={isHovered ? 'page-tear-back' : ''}>
            <rect x="48" y="58" width="120" height="110" rx="8" fill="#1a1a1a" stroke="#FFC107" strokeWidth="2" opacity="0.5"/>
            <line x1="48" y1="83" x2="168" y2="83" stroke="#FFC107" strokeWidth="2" opacity="0.5"/>
          </g>

          <g className={isHovered ? 'page-tear-middle' : ''}>
            <rect x="44" y="54" width="120" height="110" rx="8" fill="#0a0a0a" stroke="#FFC107" strokeWidth="2.5" opacity="0.7"/>
            <line x1="44" y1="79" x2="164" y2="79" stroke="#FFC107" strokeWidth="2.5" opacity="0.7"/>
          </g>

          <g className={isHovered ? 'page-tear-front' : ''}>
            <rect x="40" y="50" width="120" height="110" rx="8" fill="black" stroke="#FFC107" strokeWidth="3"/>
            <line x1="40" y1="75" x2="160" y2="75" stroke="#FFC107" strokeWidth="3"/>
            <line x1="70" y1="50" x2="70" y2="35" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
            <line x1="130" y1="50" x2="130" y2="35" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
            <text x="100" y="125" fontSize="32" fill="#FFC107" fontWeight="bold" textAnchor="middle">JAN</text>
          </g>
        </svg>
      )
    },
    {
      id: 6,
      name: 'Team Circle',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="70" fill="none" stroke="#2196F3" strokeWidth="3"/>

          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#FFC107"
            strokeWidth="3"
            strokeDasharray="440"
            strokeDashoffset="440"
            className={isHovered ? 'circle-yellow-complete' : ''}
          />

          <g className={isHovered ? 'person-1-pop' : ''}>
            <circle cx="100" cy="30" r="12" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <path d="M 88 47 Q 100 57 112 47" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
          </g>

          <g className={isHovered ? 'person-2-pop' : ''}>
            <circle cx="170" cy="100" r="12" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <path d="M 158 117 Q 170 127 182 117" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
          </g>

          <g className={isHovered ? 'person-3-pop' : ''}>
            <circle cx="100" cy="170" r="12" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <path d="M 88 187 Q 100 197 112 187" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
          </g>

          <g className={isHovered ? 'person-4-pop' : ''}>
            <circle cx="30" cy="100" r="12" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <path d="M 18 117 Q 30 127 42 117" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
          </g>
        </svg>
      )
    },
    {
      id: 7,
      name: 'Cloud',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M 60 100 Q 60 80 80 80 Q 80 60 110 60 Q 140 60 140 80 Q 160 80 160 100 Q 160 120 140 120 L 80 120 Q 60 120 60 100 Z"
            fill="none"
            stroke="#2196F3"
            strokeWidth="3"
          />

          <path
            d="M 60 100 Q 60 80 80 80 Q 80 60 110 60 Q 140 60 140 80 Q 160 80 160 100 Q 160 120 140 120 L 80 120 Q 60 120 60 100 Z"
            fill="none"
            stroke="#FFC107"
            strokeWidth="3"
            strokeDasharray="380"
            strokeDashoffset="380"
            className={isHovered ? 'cloud-yellow-complete' : ''}
          />
        </svg>
      )
    },
    {
      id: 8,
      name: 'Lightbulb',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="70" r="40" fill="none" stroke="#FFC107" strokeWidth="3" className={isHovered ? 'bulb-glow' : ''}/>
          <path d="M 75 105 Q 75 125 82 138 L 118 138 Q 125 125 125 105" fill="none" stroke="#FFC107" strokeWidth="3"/>
          <line x1="82" y1="138" x2="118" y2="138" stroke="#FFC107" strokeWidth="3"/>
          <line x1="85" y1="146" x2="115" y2="146" stroke="#FFC107" strokeWidth="3"/>
          <rect x="90" y="153" width="20" height="10" rx="2" fill="none" stroke="#FFC107" strokeWidth="2"/>

          <g className={isHovered ? 'bulb-rays' : ''}>
            <line x1="100" y1="20" x2="100" y2="30" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="145" y1="35" x2="138" y2="42" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="160" y1="70" x2="150" y2="70" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="55" y1="35" x2="62" y2="42" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="40" y1="70" x2="50" y2="70" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
        </svg>
      )
    }
  ];

  const duplicatedIcons = [...icons, ...icons, ...icons];

  return (
    <div className="w-full bg-black overflow-hidden relative" style={{ height: '35vh', minHeight: '280px' }}>
      <div className="absolute inset-0 flex items-center">
        <div
          className="flex items-center"
          style={{
            gap: '2rem',
            animation: 'scroll-infinite 50s linear infinite',
            animationPlayState: hoveredIndex !== null ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {duplicatedIcons.map((icon, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={`icon-${index}`}
                className="flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  width: '12rem',
                  height: '12rem',
                  transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out',
                  zIndex: isHovered ? 100 : 1,
                  position: 'relative',
                }}
              >
                <div className="w-full h-full cursor-pointer">
                  {icon.svg(isHovered)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        /* Code Bracket Animation */
        .code-bracket-scale text {
          animation: bracket-bounce 0.6s ease-out forwards;
          transform-origin: center;
        }
        @keyframes bracket-bounce {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.35) translateY(-5px); }
          100% { transform: scale(1.3) translateY(0); }
        }

        /* Book Dots Pop Wave */
        .dot-pop-1 { animation: dot-pop-wave 0.8s ease-out forwards; animation-delay: 0s; }
        .dot-pop-2 { animation: dot-pop-wave 0.8s ease-out forwards; animation-delay: 0.1s; }
        .dot-pop-3 { animation: dot-pop-wave 0.8s ease-out forwards; animation-delay: 0.2s; }
        .dot-pop-4 { animation: dot-pop-wave 0.8s ease-out forwards; animation-delay: 0.3s; }
        .dot-pop-5 { animation: dot-pop-wave 0.8s ease-out forwards; animation-delay: 0.4s; }
        .dot-pop-6 { animation: dot-pop-wave 0.8s ease-out forwards; animation-delay: 0.5s; }

        @keyframes dot-pop-wave {
          0% {
            r: 6;
            filter: drop-shadow(0 0 0 #FFC107);
          }
          40% {
            r: 12;
            filter: drop-shadow(0 0 8px #FFC107);
          }
          100% {
            r: 8;
            filter: drop-shadow(0 0 12px #FFC107);
          }
        }

        /* Trophy Animations */
        .trophy-lid-open {
          animation: lid-lift 0.7s ease-out forwards;
          transform-origin: bottom center;
        }
        @keyframes lid-lift {
          0% { transform: translateY(0) rotateX(0); }
          100% { transform: translateY(-35px) rotateX(-15deg); }
        }

        .trophy-code-emerge {
          animation: code-emerge 0.7s ease-out forwards;
        }
        @keyframes code-emerge {
          0% { opacity: 0; transform: translateY(25px) scale(0.2); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Calendar Number Flip */
        .calendar-number-flip {
          animation: number-flip 0.3s ease-in-out;
        }
        @keyframes number-flip {
          0% { transform: rotateX(0); opacity: 1; }
          50% { transform: rotateX(90deg); opacity: 0; }
          100% { transform: rotateX(0); opacity: 1; }
        }

        /* Calendar Page Tear */
        .page-tear-front {
          animation: tear-front 0.5s ease-out forwards;
          transform-origin: top right;
        }
        .page-tear-middle {
          animation: tear-middle 0.5s ease-out 0.15s forwards;
          transform-origin: top right;
        }
        .page-tear-back {
          animation: tear-back 0.5s ease-out 0.3s forwards;
          transform-origin: top right;
        }

        @keyframes tear-front {
          0% { transform: translateY(0) rotateZ(0); opacity: 1; }
          100% { transform: translateY(-50px) rotateZ(-25deg); opacity: 0; }
        }
        @keyframes tear-middle {
          0% { transform: translateY(0) rotateZ(0); opacity: 1; }
          100% { transform: translateY(-40px) rotateZ(-15deg); opacity: 0; }
        }
        @keyframes tear-back {
          0% { transform: translateY(0) rotateZ(0); opacity: 1; }
          100% { transform: translateY(-30px) rotateZ(-5deg); opacity: 0; }
        }

        /* Circle Yellow Completion */
        .circle-yellow-complete {
          animation: draw-circle-from-top 1.5s ease-out forwards;
        }
        @keyframes draw-circle-from-top {
          from { stroke-dashoffset: 380; }
          to { stroke-dashoffset: 0; }
        }

        /* Person Pop Effects */
        .person-1-pop {
          animation: person-pulse 0.7s ease-out forwards;
          animation-delay: 0.2s;
        }
        .person-2-pop {
          animation: person-pulse 0.7s ease-out forwards;
          animation-delay: 0.4s;
        }
        .person-3-pop {
          animation: person-pulse 0.7s ease-out forwards;
          animation-delay: 0.6s;
        }
        .person-4-pop {
          animation: person-pulse 0.7s ease-out forwards;
          animation-delay: 0.8s;
        }

        @keyframes person-pulse {
          0% { transform: scale(1); filter: drop-shadow(0 0 0 #FFC107); }
          50% { transform: scale(1.3); filter: drop-shadow(0 0 15px #2196F3); }
          100% { transform: scale(1); filter: drop-shadow(0 0 5px #FFC107); }
        }

        /* Cloud Yellow Draw */
        .cloud-yellow-complete {
          animation: draw-cloud-from-top 1.5s ease-out forwards;
        }
        @keyframes draw-cloud-from-top {
          from { stroke-dashoffset: 380; }
          to { stroke-dashoffset: 0; }
        }

        /* Lightbulb Glow */
        .bulb-glow {
          animation: bulb-intense-glow 1.2s ease-in-out infinite;
        }
        @keyframes bulb-intense-glow {
          0%, 100% { filter: drop-shadow(0 0 8px #FFC107); }
          50% { filter: drop-shadow(0 0 20px #FFC107); }
        }

        /* Bulb Rays */
        .bulb-rays {
          animation: rays-flicker 1.2s ease-in-out infinite;
        }
        .bulb-rays line {
          animation: rays-flicker 1.2s ease-in-out infinite;
        }
        @keyframes rays-flicker {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @media (max-width: 768px) {
          @keyframes scroll-infinite {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-33.333%);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default MovingIcons;
