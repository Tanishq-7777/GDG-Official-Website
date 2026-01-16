import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronRight, X } from 'lucide-react';

const EventsTimeline = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const events = [
    {
      id: 1,
      name: "Tech Summit 2024",
      date: "December 15, 2024",
      description: "Annual technology conference featuring keynote speakers from leading tech companies and interactive workshops on AI, blockchain, and cloud computing.",
      coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Hackathon Night",
      date: "November 20, 2024",
      description: "24-hour coding marathon where developers collaborated to build innovative solutions for real-world problems. Amazing projects were showcased.",
      coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Community Meetup",
      date: "October 8, 2024",
      description: "Monthly gathering for networking, knowledge sharing, and building connections. Featured lightning talks and open discussions on latest trends.",
      coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Workshop Series",
      date: "September 12, 2024",
      description: "Hands-on workshops covering modern web development, design thinking, and project management methodologies for all skill levels.",
      coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Workshop Series",
      date: "September 12, 2024",
      description: "Hands-on workshops covering modern web development, design thinking, and project management methodologies for all skill levels.",
      coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 6,
      name: "Workshop Series",
      date: "September 12, 2024",
      description: "Hands-on workshops covering modern web development, design thinking, and project management methodologies for all skill levels.",
      coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <style>
        {`
          @keyframes gentle-bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .spotlight-dot {
            transition: top 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
        
      
          @keyframes gentle-bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .spotlight-beam {
            animation: spotlight-down 2s ease-in-out forwards;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          Our Journey
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Celebrating moments that shaped our community
        </p>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 opacity-30"></div>

          Central Spotlight Dots
          {events.map((event, index) => (
            <div
              key={`dot-${event.id}`}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `${index * 420 + 200}px` }}
            >
              {/* Spotlight beam - only visible for current card */}
              {visibleCards.has(index) && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-20 spotlight-beam"
                  style={{
                    height: '150px',
                    top: '-150px',
                    // background: 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.4), rgba(168, 85, 247, 0.8))',
                    filter: 'blur(10px)',
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              )}

              {/* Dot */}
              <div className={`w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 transition-all duration-700 relative z-10 ${visibleCards.has(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}>
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          ))
          }

          {/* Event Cards */}
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`relative mb-32 transition-all duration-1000 ${event.id % 2 === 1 ? 'pr-[52%]' : 'pl-[52%]'
                } ${visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
                }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div
                className="relative group"
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Card */}
                <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 border border-zinc-800 hover:border-purple-500/50">
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.coverImage}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Animated overlay on hover */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredEvent === event.id ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {event.name}
                    </h3>
                    <div className="flex items-center text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>

                    {/* Description - Visible on Hover */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${hoveredEvent === event.id
                          ? 'max-h-32 opacity-100'
                          : 'max-h-0 opacity-0'
                        }`}
                    >
                      <p className="text-gray-300 text-sm mb-4">
                        {event.description}
                      </p>
                    </div>

                    <div
                      className={`transition-all duration-500 ${hoveredEvent === event.id
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4 pointer-events-none'
                        }`}
                    >
                      
                      <button 
                      onClick={() => setSelectedEvent(event)}
                      className="group relative px-6 py-2 bg-transparent border-2 border-[#4285F4] text-white font-semibold rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
                        <span className="absolute inset-0 bg-[#4285F4] -z-10 translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out"></span>
                        View More →
                      </button>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal with Bouncing Cards */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-zinc-900 rounded-3xl p-8 max-w-3xl w-full border border-zinc-800 shadow-2xl shadow-purple-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedEvent.name}
                </h2>
                <p className="text-gray-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedEvent.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              {selectedEvent.description}
            </p>

            {/* Bouncing Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              {selectedEvent.gallery.map((img, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group"
                  style={{
                    animation: `gentle-bounce ${2 + index * 0.2}s ease-in-out ${index * 0.1}s infinite`
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsTimeline;


