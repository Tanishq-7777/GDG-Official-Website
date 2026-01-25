import React, { useState, useEffect } from 'react';

const AnimatedIconsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [calendarDay, setCalendarDay] = useState(1);

  useEffect(() => {
    let interval;
    if (hoveredIndex !== null) {
      const hoveredIconId = (hoveredIndex % 9) + 1;
      if (hoveredIconId === 2) {
        interval = setInterval(() => {
          setCalendarDay(prev => {
            if (prev < 31) return prev + 1;
            return 31;
          });
        }, 40);
      }
    } else {
      const resetInterval = setInterval(() => {
        setCalendarDay(prev => {
          if (prev > 1) return prev - 1;
          return 1;
        });
      }, 40);
      return () => clearInterval(resetInterval);
    }
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const icons = [
    {
      id: 1,
      name: 'Book',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="50" y="50" width="100" height="120" rx="5" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <rect x="50" y="50" width="100" height="120" rx="5" fill="#2196F3" fillOpacity="0.05"/>
          <line x1="60" y1="50" x2="60" y2="170" stroke="#2196F3" strokeWidth="2"/>
          <line x1="70" y1="70" x2="135" y2="70" stroke="#2196F3" strokeWidth="1.5" opacity="0.5"/>
          <line x1="70" y1="80" x2="135" y2="80" stroke="#2196F3" strokeWidth="1.5" opacity="0.5"/>
          <line x1="70" y1="90" x2="135" y2="90" stroke="#2196F3" strokeWidth="1.5" opacity="0.5"/>
          
          <g className={isHovered ? 'book-progress-fill' : ''}>
            <rect x="70" y="108" width="0" height="6" rx="3" fill="#FFC107" className="progress-1"/>
            <rect x="70" y="126" width="0" height="6" rx="3" fill="#2196F3" className="progress-2"/>
            <rect x="70" y="144" width="0" height="6" rx="3" fill="#4CAF50" className="progress-3"/>
          </g>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Calendar Counter',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Blue calendar - fades out on hover */}
          <g className={isHovered ? 'calendar-blue-fade' : ''}>
            <rect x="40" y="50" width="120" height="110" rx="8" fill="none" stroke="#2196F3" strokeWidth="3"/>
            <rect x="40" y="50" width="120" height="110" rx="8" fill="#2196F3" fillOpacity="0.05"/>
            
            <rect x="40" y="50" width="120" height="25" rx="8" fill="#2196F3" fillOpacity="0.2"/>
            <line x1="40" y1="75" x2="160" y2="75" stroke="#2196F3" strokeWidth="3"/>
            
            <circle cx="70" cy="50" r="6" fill="none" stroke="#2196F3" strokeWidth="2.5"/>
            <circle cx="130" cy="50" r="6" fill="none" stroke="#2196F3" strokeWidth="2.5"/>
          </g>
          
          {/* Yellow calendar - draws in on hover */}
          <g className={isHovered ? 'calendar-yellow-draw' : 'calendar-yellow-hide'}>
            <rect x="40" y="50" width="120" height="110" rx="8" fill="none" stroke="#FFC107" strokeWidth="3" 
                  strokeDasharray="500" strokeDashoffset="500" className="cal-outline"/>
            
            <rect x="40" y="50" width="120" height="25" rx="8" fill="#FFC107" fillOpacity="0.2"/>
            <line x1="40" y1="75" x2="160" y2="75" stroke="#FFC107" strokeWidth="3" 
                  strokeDasharray="120" strokeDashoffset="120" className="cal-line"/>
            
            <circle cx="70" cy="50" r="6" fill="none" stroke="#FFC107" strokeWidth="2.5" className="cal-ring-1"/>
            <circle cx="130" cy="50" r="6" fill="none" stroke="#FFC107" strokeWidth="2.5" className="cal-ring-2"/>
          </g>
          
          {/* Text transitions */}
          <text x="100" y="100" fontSize="16" fontWeight="600" textAnchor="middle" opacity="0.6"
                className={isHovered ? 'cal-text-yellow' : 'cal-text-blue'}>
            JANUARY
          </text>
          
          <text x="100" y="140" fontSize="48" fontWeight="bold" textAnchor="middle"
                className={isHovered ? 'cal-number-yellow' : 'cal-number-blue'}>
            {calendarDay}
          </text>
          
          {/* Spinning date indicators */}
          
        </svg>
      )
    },
    // {
    //   id: 3,
    //   name: 'Trophy',
    //   svg: (isHovered) => (
    //     <svg viewBox="0 0 200 200" className="w-full h-full" style={{ perspective: '800px' }}>
    //       <g className={isHovered ? 'trophy-rotate-3d' : ''} style={{ transformOrigin: '100px 120px', transformStyle: 'preserve-3d' }}>
    //         <path d="M 60 85 Q 45 85 45 100 Q 45 115 60 115" fill="none" stroke="#FFC107" strokeWidth="3"/>
    //         <path d="M 140 85 Q 155 85 155 100 Q 155 115 140 115" fill="none" stroke="#FFC107" strokeWidth="3"/>
            
    //         <path d="M 60 80 Q 60 110 80 120 L 80 145 L 120 145 L 120 120 Q 140 110 140 80 Z" fill="none" stroke="#FFC107" strokeWidth="3"/>
    //         <rect x="70" y="145" width="60" height="25" fill="none" stroke="#FFC107" strokeWidth="3"/>
    //         <rect x="50" y="170" width="100" height="10" fill="#FFC107" fillOpacity="0.3" stroke="#FFC107" strokeWidth="2"/>
            
    //         <g className={isHovered ? 'trophy-code-fade' : ''}>
    //           <text x="75" y="105" fontSize="24" fill="#2196F3" fontWeight="bold">&lt;</text>
    //           <text x="98" y="105" fontSize="24" fill="#2196F3" fontWeight="bold">/</text>
    //           <text x="110" y="105" fontSize="24" fill="#2196F3" fontWeight="bold">&gt;</text>
    //         </g>
            
    //         <ellipse cx="100" cy="60" rx="42" ry="8" fill="#FFC107" fillOpacity="0.3" stroke="#FFC107" strokeWidth="2"/>
    //         <path d="M 60 80 L 60 60 Q 100 55 140 60 L 140 80" fill="#FFC107" fillOpacity="0.1" stroke="#FFC107" strokeWidth="3"/>
    //         <ellipse cx="100" cy="60" rx="8" ry="4" fill="#FFC107" stroke="#FFC107" strokeWidth="2"/>
    //       </g>
    //     </svg>
    //   )
    // },
    {
      id: 4,
      name: 'Calendar Pages',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Page 2 - FEB (Behind) */}
          <g className={isHovered ? '' : 'page-back-hidden'}>
            <rect x="40" y="50" width="120" height="110" rx="8" fill="black" stroke="#FFC107" strokeWidth="3"/>
            <rect x="40" y="50" width="120" height="30" rx="8" fill="#FFC107" fillOpacity="0.15"/>
            <line x1="40" y1="80" x2="160" y2="80" stroke="#FFC107" strokeWidth="3"/>
            
            {/* Spiral binding holes */}
            <circle cx="60" cy="65" r="4" fill="none" stroke="#FFC107" strokeWidth="2"/>
            <circle cx="85" cy="65" r="4" fill="none" stroke="#FFC107" strokeWidth="2"/>
            <circle cx="110" cy="65" r="4" fill="none" stroke="#FFC107" strokeWidth="2"/>
            <circle cx="135" cy="65" r="4" fill="none" stroke="#FFC107" strokeWidth="2"/>
            
            <text x="100" y="130" fontSize="36" fill="#FFC107" fontWeight="bold" textAnchor="middle">FEB</text>
            
            {/* Animated underline */}
            <line x1="75" y1="145" x2="125" y2="145" stroke="#FFC107" strokeWidth="2" opacity="0.5"/>
          </g>
          
          {/* Page 1 - JAN (Front - tears away on hover) */}
          <g className={isHovered ? 'page-tear-away' : 'page-tear-back'}>
            <rect x="40" y="50" width="120" height="110" rx="8" fill="black" stroke="#FFC107" strokeWidth="3"/>
            <rect x="40" y="50" width="120" height="30" rx="8" fill="#FFC107" fillOpacity="0.15"/>
            <line x1="40" y1="80" x2="160" y2="80" stroke="#FFC107" strokeWidth="3"/>
            
            {/* Spiral binding holes */}
            <circle cx="60" cy="65" r="4" fill="none" stroke="#FFC107" strokeWidth="2"/>
            <circle cx="85" cy="65" r="4" fill="none" stroke="#FFC107" strokeWidth="2"/>
            <circle cx="110" cy="65" r="4" fill="none" stroke="#FFC107" strokeWidth="2"/>
            <circle cx="135" cy="65" r="4" fill="none" stroke="#FFC107" strokeWidth="2"/>
            
            <text x="100" y="130" fontSize="36" fill="#FFC107" fontWeight="bold" textAnchor="middle">JAN</text>
            
            {/* Animated underline */}
            <line x1="75" y1="145" x2="75" y2="145" stroke="#FFC107" strokeWidth="2" opacity="0.8" className={isHovered ? '' : 'page-underline'}/>
          </g>
        </svg>
      )
    },
    {
      id: 5,
      name: 'Team Circle',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle 
            cx="100" 
            cy="100" 
            r="60" 
            fill="none" 
            stroke="#2196F3" 
            strokeWidth="3"
            className={isHovered ? 'circle-fade-out' : 'circle-fade-in'}
          />
          
          <circle 
            cx="100" 
            cy="100" 
            r="60" 
            fill="none" 
            stroke="#FFC107" 
            strokeWidth="3"
            strokeDasharray="377"
            strokeDashoffset="377"
            className={isHovered ? 'circle-yellow-draw' : 'circle-yellow-undraw'}
            transform="rotate(-90 100 100)"
          />
          
          <g className={isHovered ? 'connection-lines-show' : 'connection-lines-hide'}>
            <line x1="100" y1="35" x2="165" y2="100" stroke="#FFC107" strokeWidth="1.5" opacity="0.4" className="connect-1"/>
            <line x1="165" y1="100" x2="100" y2="165" stroke="#FFC107" strokeWidth="1.5" opacity="0.4" className="connect-2"/>
            <line x1="100" y1="165" x2="35" y2="100" stroke="#FFC107" strokeWidth="1.5" opacity="0.4" className="connect-3"/>
            <line x1="35" y1="100" x2="100" y2="35" stroke="#FFC107" strokeWidth="1.5" opacity="0.4" className="connect-4"/>
          </g>
          
          <g className={isHovered ? 'person-yellow person-bounce-1' : 'person-blue'}>
            <circle cx="100" cy="35" r="8" className="person-head"/>
            <path d="M 100 43 L 100 60 M 90 50 L 100 45 L 110 50 M 100 60 L 90 75 M 100 60 L 110 75" 
                  className="person-body" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </g>
          
          <g className={isHovered ? 'person-yellow person-bounce-2' : 'person-blue'}>
            <circle cx="165" cy="100" r="8" className="person-head"/>
            <path d="M 165 108 L 165 125 M 155 115 L 165 110 L 175 115 M 165 125 L 155 140 M 165 125 L 175 140" 
                  className="person-body" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </g>
          
          <g className={isHovered ? 'person-yellow person-bounce-3' : 'person-blue'}>
            <circle cx="100" cy="165" r="8" className="person-head"/>
            <path d="M 100 173 L 100 190 M 90 180 L 100 175 L 110 180 M 100 190 L 90 205 M 100 190 L 110 205" 
                  className="person-body" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </g>
          
          <g className={isHovered ? 'person-yellow person-bounce-4' : 'person-blue'}>
            <circle cx="35" cy="100" r="8" className="person-head"/>
            <path d="M 35 108 L 35 125 M 25 115 L 35 110 L 45 115 M 35 125 L 25 140 M 35 125 L 45 140" 
                  className="person-body" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </g>
        </svg>
      )
    },
    {
      id: 6,
      name: 'Cloud',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path 
            d="M 60 100 Q 60 80 80 80 Q 80 60 110 60 Q 140 60 140 80 Q 160 80 160 100 Q 160 120 140 120 L 80 120 Q 60 120 60 100 Z" 
            fill="none" 
            stroke="#2196F3"
            strokeWidth="3"
            className={isHovered ? 'cloud-blue-hide' : ''}
          />
          
          <path 
            d="M 60 100 Q 60 80 80 80 Q 80 60 110 60 Q 140 60 140 80 Q 160 80 160 100 Q 160 120 140 120 L 80 120 Q 60 120 60 100 Z" 
            fill="none" 
            stroke="#FFC107"
            strokeWidth="3"
            strokeDasharray="500"
            strokeDashoffset="500"
            className={isHovered ? 'cloud-yellow-draw' : 'cloud-yellow-hide'}
          />
          
          
          <g className={isHovered ? 'cloud-check-show' : 'cloud-check-hide'}>
            <polyline points="90,95 100,105 120,85" fill="none" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      )
    },
    {
      id: 7,
      name: 'Lightbulb',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="70" r="40" fill="none" stroke="#FFC107" strokeWidth="3" className={isHovered ? 'bulb-glow-soft' : ''}/>
          <path d="M 75 105 Q 75 125 82 138 L 118 138 Q 125 125 125 105" fill="none" stroke="#FFC107" strokeWidth="3"/>
          <line x1="82" y1="138" x2="118" y2="138" stroke="#FFC107" strokeWidth="3"/>
          <line x1="85" y1="146" x2="115" y2="146" stroke="#FFC107" strokeWidth="3"/>
          <rect x="90" y="153" width="20" height="10" rx="2" fill="none" stroke="#FFC107" strokeWidth="2"/>
          <g className={isHovered ? 'bulb-rays-soft' : ''}>
            <line x1="100" y1="20" x2="100" y2="30" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="145" y1="35" x2="138" y2="42" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="160" y1="70" x2="150" y2="70" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="55" y1="35" x2="62" y2="42" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="40" y1="70" x2="50" y2="70" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
        </svg>
      )
    },
    {
      id: 8,
      name: 'Mobile App',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="60" y="25" width="80" height="150" rx="15" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <line x1="75" y1="42" x2="100" y2="42" stroke="#2196F3" strokeWidth="2.5" strokeLinecap="round"/>
          
          <g className={isHovered ? 'apps-appear-stagger' : ''}>
            <rect x="75" y="60" width="22" height="22" rx="5" fill="none" stroke="#4CAF50" strokeWidth="2.5" className="app-1"/>
            <rect x="103" y="60" width="22" height="22" rx="5" fill="none" stroke="#2196F3" strokeWidth="2.5" className="app-2"/>
            <rect x="75" y="88" width="22" height="22" rx="5" fill="none" stroke="#FFC107" strokeWidth="2.5" className="app-3"/>
            <rect x="103" y="88" width="22" height="22" rx="5" fill="none" stroke="#FF5722" strokeWidth="2.5" className="app-4"/>
          </g>
          
          
          <g className={isHovered ? 'loading-bar-fill' : ''}>
            <rect x="70" y="125" width="0" height="3" rx="1.5" fill="#2196F3" className="loading-bar"/>
          </g>
          
          <circle cx="100" cy="160" r="10" fill="none" stroke="#2196F3" strokeWidth="2.5"/>
        </svg>
      )
    },
    {
      id: 9,
      name: 'Messages',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g className={isHovered ? 'msg-bubble-1-animate' : 'msg-bubble-1-static'}>
            <rect x="40" y="40" width="70" height="45" rx="8" fill="none" stroke="#4CAF50" strokeWidth="2.5"/>
            <path d="M 50 85 L 55 92 L 60 85" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinejoin="round"/>
            <line x1="50" y1="55" x2="95" y2="55" stroke="#4CAF50" strokeWidth="1.5" opacity="0.6"/>
            <line x1="50" y1="65" x2="85" y2="65" stroke="#4CAF50" strokeWidth="1.5" opacity="0.6"/>
            <line x1="50" y1="75" x2="90" y2="75" stroke="#4CAF50" strokeWidth="1.5" opacity="0.6"/>
          </g>
          
          <g className={isHovered ? 'msg-bubble-2-animate' : 'msg-bubble-2-static'}>
            <rect x="95" y="90" width="65" height="40" rx="8" fill="none" stroke="#2196F3" strokeWidth="2.5"/>
            <path d="M 150 130 L 155 137 L 160 130" fill="none" stroke="#2196F3" strokeWidth="2.5" strokeLinejoin="round"/>
            <line x1="105" y1="105" x2="145" y2="105" stroke="#2196F3" strokeWidth="1.5" opacity="0.6"/>
            <line x1="105" y1="115" x2="135" y2="115" stroke="#2196F3" strokeWidth="1.5" opacity="0.6"/>
          </g>
          
          <g className={isHovered ? 'msg-bubble-3-animate' : 'msg-bubble-3-static'}>
            <rect x="50" y="135" width="60" height="38" rx="8" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <path d="M 60 173 L 65 180 L 70 173" fill="none" stroke="#FFC107" strokeWidth="2.5" strokeLinejoin="round"/>
            <line x1="60" y1="148" x2="95" y2="148" stroke="#FFC107" strokeWidth="1.5" opacity="0.6"/>
            <line x1="60" y1="158" x2="85" y2="158" stroke="#FFC107" strokeWidth="1.5" opacity="0.6"/>
          </g>
          
          <g className={isHovered ? 'msg-connections-show' : 'msg-connections-hide'}>
            <line x1="75" y1="85" x2="95" y2="110" stroke="#4CAF50" strokeWidth="2" opacity="0.5" className="msg-connect-1" strokeDasharray="4 4"/>
            <line x1="127" y1="130" x2="85" y2="150" stroke="#2196F3" strokeWidth="2" opacity="0.5" className="msg-connect-2" strokeDasharray="4 4"/>
            <line x1="110" y1="85" x2="127" y2="90" stroke="#FFC107" strokeWidth="2" opacity="0.5" className="msg-connect-3" strokeDasharray="4 4"/>
          </g>
          
          <g className={isHovered ? 'msg-notif-pop' : 'msg-notif-hide'}>
            <circle cx="105" cy="45" r="6" fill="#FF5722" className="msg-notif-1"/>
            <text x="105" y="49" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">3</text>
            
            <circle cx="155" cy="95" r="6" fill="#FF5722" className="msg-notif-2"/>
            <text x="155" y="99" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">1</text>
            
            <circle cx="105" cy="140" r="6" fill="#FF5722" className="msg-notif-3"/>
            <text x="105" y="144" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">5</text>
          </g>
        </svg>
      )
    }
  ];

  return (
    <div className="hidden md:block relative w-full bg-[#0a0a0a] overflow-hidden" style={{ height: '35vh', minHeight: '280px' }}>
      <div className="absolute inset-0 flex items-center">
        <div 
          className="flex items-center"
          style={{
            gap: '8rem',
            animation: 'scroll-infinite 35s linear infinite',
            animationPlayState: hoveredIndex !== null ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {[...icons, ...icons, ...icons, ...icons].map((icon, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={`icon-${index}`}
                className="flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  width: '14rem',
                  height: '14rem',
                  transform: isHovered ? 'scale(1.12)' : 'scale(1)',
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
            transform: translateX(-25%);
          }
        }

        .book-progress-fill .progress-1 {
          animation: fill-progress-1 1.2s ease-out forwards;
        }
        .book-progress-fill .progress-2 {
          animation: fill-progress-2 1.2s ease-out 0.2s forwards;
        }
        .book-progress-fill .progress-3 {
          animation: fill-progress-3 1.2s ease-out 0.4s forwards;
        }
        @keyframes fill-progress-1 {
          from { width: 0; }
          to { width: 50px; }
        }
        @keyframes fill-progress-2 {
          from { width: 0; }
          to { width: 65px; }
        }
        @keyframes fill-progress-3 {
          from { width: 0; }
          to { width: 40px; }
        }

        /* Calendar animations */
        .calendar-blue-fade {
          animation: calendar-fade-out 1.2s ease-out forwards;
        }
        @keyframes calendar-fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        .calendar-yellow-draw .cal-outline {
          animation: draw-calendar-outline 1s ease-out forwards;
        }
        .calendar-yellow-draw .cal-line {
          animation: draw-calendar-line 0.6s ease-out 0.4s forwards;
        }
        .calendar-yellow-draw .cal-ring-1 {
          animation: pop-ring 0.4s ease-out 0.8s backwards;
        }
        .calendar-yellow-draw .cal-ring-2 {
          animation: pop-ring 0.4s ease-out 0.9s backwards;
        }
        .calendar-yellow-hide {
          opacity: 0;
        }
        @keyframes draw-calendar-outline {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes draw-calendar-line {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pop-ring {
          from { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); }
          to { transform: scale(1); opacity: 1; }
        }
        
        .cal-text-blue {
      fill: #2196F3;
      transition: fill 0.6s ease-out;
    }
    .cal-text-yellow {
      fill: #FFC107;
      transition: fill 0.6s ease-out;
    }
    .cal-number-blue {
      fill: #2196F3;
      transition: fill 0.6s ease-out;
    }
    .cal-number-yellow {
      fill: #FFC107;
      transition: fill 0.6s ease-out;
    }
    
    .date-dots-spin {
      animation: dots-appear 0.6s ease-out 1s forwards;
      opacity: 0;
    }
    .date-dots-spin .date-dot-1 {
      animation: dot-orbit 2s ease-in-out 1s infinite, dot-appear-in 0.4s ease-out 1s backwards;
      transform-origin: 100px 125px;
    }
    .date-dots-spin .date-dot-2 {
      animation: dot-orbit 2s ease-in-out 1.1s infinite, dot-appear-in 0.4s ease-out 1.1s backwards;
      transform-origin: 100px 125px;
    }
    .date-dots-spin .date-dot-3 {
      animation: dot-orbit 2s ease-in-out 1.2s infinite, dot-appear-in 0.4s ease-out 1.2s backwards;
      transform-origin: 100px 125px;
    }
    .date-dots-spin .date-dot-4 {
      animation: dot-orbit 2s ease-in-out 1.3s infinite, dot-appear-in 0.4s ease-out 1.3s backwards;
      transform-origin: 100px 125px;
    }
    .date-dots-spin .date-dot-5 {
      animation: dot-orbit 2s ease-in-out 1.4s infinite, dot-appear-in 0.4s ease-out 1.4s backwards;
      transform-origin: 100px 125px;
    }
    .date-dots-hide {
      opacity: 0;
    }
    @keyframes dot-orbit {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-8px) scale(1.4); }
    }
    @keyframes dot-appear-in {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    @keyframes dots-appear {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Trophy 3D rotation animation */
    .trophy-rotate-3d {
      animation: trophy-spin-3d 2.5s ease-in-out forwards;
    }
    .trophy-code-fade {
      animation: code-fade-out-in 2.5s ease-in-out forwards;
    }
    @keyframes trophy-spin-3d {
      0% { 
        transform: perspective(800px) rotateY(0deg) rotateX(0deg);
      }
      25% {
        transform: perspective(800px) rotateY(90deg) rotateX(5deg) scale(1.05);
      }
      50% { 
        transform: perspective(800px) rotateY(180deg) rotateX(0deg) scale(1.1);
      }
      75% {
        transform: perspective(800px) rotateY(270deg) rotateX(-5deg) scale(1.05);
      }
      100% { 
        transform: perspective(800px) rotateY(360deg) rotateX(0deg) scale(1);
      }
    }
    @keyframes code-fade-out-in {
      0% { opacity: 1; }
      45% { opacity: 1; }
      50% { opacity: 0; }
      55% { opacity: 0; }
      100% { opacity: 1; }
    }

    .page-back-hidden {
      opacity: 0;
      transform: translateY(0);
    }
    .page-tear-away {
      animation: tear-away 0.6s ease-out forwards;
    }
    .page-tear-back {
      animation: tear-back 0.6s ease-out forwards;
    }
    .page-underline {
      animation: draw-underline 0.8s ease-out forwards;
    }
    @keyframes tear-away {
      0% { transform: translateY(0) rotate(0deg) translateX(0); opacity: 1; }
      100% { transform: translateY(-50px) rotate(8deg) translateX(20px); opacity: 0; }
    }
    @keyframes tear-back {
      0% { transform: translateY(-50px) rotate(8deg) translateX(20px); opacity: 0; }
      100% { transform: translateY(0) rotate(0deg) translateX(0); opacity: 1; }
    }
    @keyframes draw-underline {
      from { x2: 75; }
      to { x2: 125; }
    }

    .circle-fade-out {
      animation: fade-out-circle 1.5s ease-out forwards;
    }
    .circle-fade-in {
      animation: fade-in-circle 1.5s ease-out forwards;
    }
    @keyframes fade-out-circle {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    @keyframes fade-in-circle {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .circle-yellow-draw {
      animation: complete-circle 1.5s ease-out forwards;
    }
    .circle-yellow-undraw {
      animation: uncomplete-circle 1.5s ease-out forwards;
      stroke-dashoffset: 0;
    }
    @keyframes complete-circle {
      from { stroke-dashoffset: 377; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes uncomplete-circle {
      from { stroke-dashoffset: 0; }
      to { stroke-dashoffset: 377; }
    }
    
    .connection-lines-show {
      opacity: 1;
    }
    .connection-lines-hide {
      opacity: 0;
    }
    .connection-lines-show .connect-1 {
      animation: draw-connection 0.4s ease-out 0.2s forwards;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }
    .connection-lines-show .connect-2 {
      animation: draw-connection 0.4s ease-out 0.4s forwards;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }
    .connection-lines-show .connect-3 {
      animation: draw-connection 0.4s ease-out 0.6s forwards;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }
    .connection-lines-show .connect-4 {
      animation: draw-connection 0.4s ease-out 0.8s forwards;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }
    @keyframes draw-connection {
      to { stroke-dashoffset: 0; }
    }
    
    .person-blue .person-head {
      fill: #2196F3;
      transition: fill 0.5s ease-in-out;
    }
    .person-blue .person-body {
      stroke: #2196F3;
      transition: stroke 0.5s ease-in-out;
    }
    .person-yellow .person-head {
      fill: #FFC107;
      transition: fill 0.5s ease-in-out;
    }
    .person-yellow .person-body {
      stroke: #FFC107;
      transition: stroke 0.5s ease-in-out;
    }
    
    .person-bounce-1 {
      animation: person-bounce 0.6s ease-out 0.3s;
    }
    .person-bounce-2 {
      animation: person-bounce 0.6s ease-out 0.5s;
    }
    .person-bounce-3 {
      animation: person-bounce 0.6s ease-out 0.7s;
    }
    .person-bounce-4 {
      animation: person-bounce 0.6s ease-out 0.9s;
    }
    @keyframes person-bounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }

    .cloud-blue-hide {
      animation: cloud-fade-out 1.2s ease-out forwards;
    }
    .cloud-yellow-draw {
      animation: cloud-draw-yellow 1.2s ease-out forwards;
    }
    .cloud-yellow-hide {
      animation: cloud-undraw-yellow 1.2s ease-out forwards;
      stroke-dashoffset: 0;
    }
    @keyframes cloud-fade-out {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    @keyframes cloud-draw-yellow {
      from { stroke-dashoffset: 500; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes cloud-undraw-yellow {
      from { stroke-dashoffset: 0; }
      to { stroke-dashoffset: 500; }
    }
    
    .cloud-check-show {
      animation: check-appear 0.6s ease-out 1s forwards;
      opacity: 0;
    }
    .cloud-check-hide {
      opacity: 0;
    }
    @keyframes check-appear {
      0% { opacity: 0; transform: scale(0); }
      50% { transform: scale(1.2); }
      100% { opacity: 1; transform: scale(1); }
    }

    .bulb-glow-soft {
      animation: glow-soft 1.5s ease-in-out infinite;
    }
    .bulb-rays-soft {
      animation: rays-soft 1.5s ease-in-out infinite;
    }
    @keyframes glow-soft {
      0%, 100% { filter: drop-shadow(0 0 5px #FFC107); }
      50% { filter: drop-shadow(0 0 15px #FFC107); }
    }
    @keyframes rays-soft {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }

    .apps-appear-stagger .app-1 {
      animation: app-pop-in 0.4s ease-out 0.1s backwards;
    }
    .apps-appear-stagger .app-2 {
      animation: app-pop-in 0.4s ease-out 0.2s backwards;
    }
    .apps-appear-stagger .app-3 {
      animation: app-pop-in 0.4s ease-out 0.3s backwards;
    }
    .apps-appear-stagger .app-4 {
      animation: app-pop-in 0.4s ease-out 0.4s backwards;
    }
    @keyframes app-pop-in {
      from { transform: scale(0) rotate(-180deg); opacity: 0; }
      to { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    
    .loading-bar-fill .loading-bar {
      animation: load-fill 1.5s ease-out 0.5s forwards;
    }
    @keyframes load-fill {
      from { width: 0; }
      to { width: 60px; }
    }

.msg-bubble-1-static {
  transform: translateY(0);
}
.msg-bubble-1-animate {
  transform: translateY(0);
}
.msg-bubble-2-static {
  transform: translateY(0);
}
.msg-bubble-2-animate {
  transform: translateY(0);
}
.msg-bubble-3-static {
  transform: translateY(0);
}
.msg-bubble-3-animate {
  transform: translateY(0);
}
    @keyframes msg-float-1 {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-10px) scale(1.05); }
    }
    @keyframes msg-float-2 {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-12px) scale(1.05); }
    }
    @keyframes msg-float-3 {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-8px) scale(1.05); }
    }

    .msg-connections-show {
      opacity: 1;
    }
    .msg-connections-hide {
      opacity: 0;
    }
    .msg-connections-show .msg-connect-1 {
      animation: msg-line-draw 0.8s ease-out 0.2s forwards;
      stroke-dasharray: 50;
      stroke-dashoffset: 50;
    }
    .msg-connections-show .msg-connect-2 {
      animation: msg-line-draw 0.8s ease-out 0.5s forwards;
      stroke-dasharray: 60;
      stroke-dashoffset: 60;
    }
    .msg-connections-show .msg-connect-3 {
      animation: msg-line-draw 0.8s ease-out 0.8s forwards;
      stroke-dasharray: 40;
      stroke-dashoffset: 40;
    }
    @keyframes msg-line-draw {
      to { stroke-dashoffset: 0; }
    }

    .msg-notif-pop {
      opacity: 1;
    }
    .msg-notif-pop .msg-notif-1 {
      animation: notif-bounce-in 0.5s ease-out 1s backwards;
    }
    .msg-notif-pop .msg-notif-2 {
      animation: notif-bounce-in 0.5s ease-out 1.2s backwards;
    }
    .msg-notif-pop .msg-notif-3 {
      animation: notif-bounce-in 0.5s ease-out 1.4s backwards;
    }
    .msg-notif-hide {
      opacity: 0;
    }
    @keyframes notif-bounce-in {
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.4); }
      100% { transform: scale(1); opacity: 1; }
    }
  `}</style>
</div>
  );
};

export default AnimatedIconsSection;