import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const mockProjects = [
  {
    id: 1,
    title: 'AI Task Manager',
    description: 'An intelligent task management system with AI-powered suggestions and priority optimization using advanced algorithms.',
    thumbnail_url: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800',
    owner_name: 'John Doe',
    github_url: 'https://github.com/johndoe',
    linkedin_url: 'https://linkedin.com/in/johndoe',
    deployed_url: 'https://aitaskmanager.com',
    tech_stack: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with seamless payment integration and real-time inventory management system.',
    thumbnail_url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    owner_name: 'Jane Smith',
    github_url: 'https://github.com/janesmith',
    linkedin_url: 'https://linkedin.com/in/janesmith',
    deployed_url: 'https://myshop.com',
    tech_stack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'Real-time weather application with detailed 7-day forecast and intelligent location-based alert notifications.',
    thumbnail_url: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    owner_name: 'Mike Johnson',
    github_url: 'https://github.com/mikejohnson',
    linkedin_url: 'https://linkedin.com/in/mikejohnson',
    deployed_url: 'https://weatherapp.com',
    tech_stack: ['Vue.js', 'Express', 'Weather API', 'Redis'],
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Comprehensive analytics dashboard for managing multiple social media accounts in one unified platform interface.',
    thumbnail_url: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    owner_name: 'Sarah Williams',
    github_url: 'https://github.com/sarahwilliams',
    linkedin_url: 'https://linkedin.com/in/sarahwilliams',
    deployed_url: 'https://socialdash.com',
    tech_stack: ['React', 'Firebase', 'Chart.js', 'Tailwind'],
  },
];

const mockAchievements = [
  {
    id: 1,
    title: 'Google Code Jam 2024 - Top 100',
    description: 'Secured top 100 rank in Google Code Jam 2024 competing against 30,000+ participants worldwide in intense competition.',
    image_url: 'https://images.pexels.com/photos/1496192/pexels-photo-1496192.jpeg?auto=compress&cs=tinysrgb&w=800',
    achiever_name: 'Alex Chen',
    github_url: 'https://github.com/alexchen',
    linkedin_url: 'https://linkedin.com/in/alexchen',
    category: 'CP',
    achievement_date: '2024-05-15',
  },
  {
    id: 2,
    title: 'HackMIT Winner 2024',
    description: 'Won first place at HackMIT 2024 for developing an innovative AI-powered accessibility tool that helps users.',
    image_url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    achiever_name: 'Emma Davis',
    github_url: 'https://github.com/emmadavis',
    linkedin_url: 'https://linkedin.com/in/emmadavis',
    category: 'Hackathon',
    achievement_date: '2024-09-20',
  },
  {
    id: 3,
    title: 'Codeforces Master',
    description: 'Achieved Master rank on Codeforces with a peak rating of 2200+, demonstrating exceptional competitive programming skills.',
    image_url: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    achiever_name: 'Ryan Lee',
    github_url: 'https://github.com/ryanlee',
    linkedin_url: 'https://linkedin.com/in/ryanlee',
    category: 'CP',
    achievement_date: '2024-03-10',
  },
  {
    id: 4,
    title: 'ETHGlobal Finalist',
    description: 'Finalist at ETHGlobal hackathon for building a decentralized voting platform using cutting-edge blockchain technology.',
    image_url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    achiever_name: 'Sophia Martinez',
    github_url: 'https://github.com/sophiamartinez',
    linkedin_url: 'https://linkedin.com/in/sophiamartinez',
    category: 'Hackathon',
    achievement_date: '2024-07-12',
  },
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          .poppins {
            font-family: 'Poppins', sans-serif;
          }

          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #0a0a0a;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #2a2a2a;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #3a3a3a;
          }
        `}
      </style>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 poppins text-white"
          >
            Team Excellence
            <br />
            Showcase
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Discover the remarkable projects and achievements of our talented team members. This showcase celebrates innovation, dedication, and excellence in technology and competitive programming.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500 text-sm mt-8"
          >
            Scroll down to explore
          </motion.div>
        </div>
      </motion.section>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm py-6 border-b border-[#1a1a1a]"
      >
        <div className="container mx-auto px-4 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 poppins ${
              activeTab === 'projects'
                ? 'bg-white text-black'
                : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525] hover:text-white'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 poppins ${
              activeTab === 'achievements'
                ? 'bg-white text-black'
                : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525] hover:text-white'
            }`}
          >
            Achievements
          </button>
        </div>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'projects' ? (
          <ProjectsSection key="projects" projects={mockProjects} />
        ) : (
          <AchievementsSection key="achievements" achievements={mockAchievements} />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectsSection = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
          ))}
        </div>
        <div className="h-screen"></div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky"
      style={{
        top: `${120 + index * 40}px`,
        zIndex: total - index,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Thumbnail */}
          <div className="relative overflow-hidden rounded-xl group">
            <motion.img
              src={project.thumbnail_url}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 poppins text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
              <div className="mb-4">
                <p className="text-xs md:text-sm text-gray-500 mb-1">Project Owner</p>
                <p className="text-base md:text-lg font-medium text-white">{project.owner_name}</p>
              </div>

              {/* Tech Stack */}
              {project.tech_stack && project.tech_stack.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs md:text-sm text-gray-500 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-xs md:text-sm border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github_url && (
                <motion.a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#8b5cf6] transition-colors duration-300"
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">GitHub</span>
                </motion.a>
              )}
              {project.linkedin_url && (
                <motion.a
                  href={project.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#0077b5] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">LinkedIn</span>
                </motion.a>
              )}
              {project.deployed_url && (
                <motion.a
                  href={project.deployed_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium text-sm md:text-base"
                >
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AchievementsSection = ({ achievements }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} total={achievements.length} />
          ))}
        </div>
        <div className="h-screen"></div>
      </div>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index, total }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky"
      style={{
        top: `${120 + index * 40}px`,
        zIndex: total - index,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl group">
            <motion.img
              src={achievement.image_url}
              alt={achievement.title}
              className="w-full h-64 md:h-80 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-4 py-2 bg-white text-black rounded-full text-xs md:text-sm font-semibold">
                {achievement.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 poppins text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                {achievement.description}
              </p>
              <div className="mb-4">
                <p className="text-xs md:text-sm text-gray-500 mb-1">Achieved By</p>
                <p className="text-base md:text-lg font-medium text-white">{achievement.achiever_name}</p>
              </div>
              {achievement.achievement_date && (
                <div className="mb-6">
                  <p className="text-xs md:text-sm text-gray-500 mb-1">Date</p>
                  <p className="text-gray-300 text-sm md:text-base">
                    {new Date(achievement.achievement_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              )}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {achievement.github_url && (
                <motion.a
                  href={achievement.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#8b5cf6] transition-colors duration-300"
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">GitHub</span>
                </motion.a>
              )}
              {achievement.linkedin_url && (
                <motion.a
                  href={achievement.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#0077b5] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">LinkedIn</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Showcase;