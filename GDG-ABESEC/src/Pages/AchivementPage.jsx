import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ExternalLink, ArrowRight, Star, Calendar, Code2 } from 'lucide-react';
import Navbar from "../components/ui/Navbar"; 


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
    year: '2024',
    status: 'Production'
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
    year: '2024',
    status: 'Production'
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
    year: '2023',
    status: 'Active'
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
    year: '2024',
    status: 'Beta'
  },
];

const mockAchievements = [
  {
    id: 1,
    title: 'Google Code Jam 2024',
    subtitle: 'Top 100 Worldwide',
    description: 'Secured top 100 rank in Google Code Jam 2024 competing against 30,000+ participants worldwide in intense competition.',
    image_url: 'https://images.pexels.com/photos/1496192/pexels-photo-1496192.jpeg?auto=compress&cs=tinysrgb&w=800',
    achiever_name: 'Alex Chen',
    github_url: 'https://github.com/alexchen',
    linkedin_url: 'https://linkedin.com/in/alexchen',
    category: 'Competitive Programming',
    achievement_date: '2024-05-15',
    rank: '#87'
  },
  {
    id: 2,
    title: 'HackMIT 2024',
    subtitle: 'First Place Winner',
    description: 'Won first place at HackMIT 2024 for developing an innovative AI-powered accessibility tool that helps users.',
    image_url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    achiever_name: 'Emma Davis',
    github_url: 'https://github.com/emmadavis',
    linkedin_url: 'https://linkedin.com/in/emmadavis',
    category: 'Hackathon',
    achievement_date: '2024-09-20',
    rank: '🏆 Winner'
  },
  {
    id: 3,
    title: 'Codeforces Master',
    subtitle: 'Rating 2200+',
    description: 'Achieved Master rank on Codeforces with a peak rating of 2200+, demonstrating exceptional competitive programming skills.',
    image_url: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    achiever_name: 'Ryan Lee',
    github_url: 'https://github.com/ryanlee',
    linkedin_url: 'https://linkedin.com/in/ryanlee',
    category: 'Competitive Programming',
    achievement_date: '2024-03-10',
    rank: 'Master'
  },
  {
    id: 4,
    title: 'ETHGlobal',
    subtitle: 'Finalist',
    description: 'Finalist at ETHGlobal hackathon for building a decentralized voting platform using cutting-edge blockchain technology.',
    image_url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    achiever_name: 'Sophia Martinez',
    github_url: 'https://github.com/sophiamartinez',
    linkedin_url: 'https://linkedin.com/in/sophiamartinez',
    category: 'Hackathon',
    achievement_date: '2024-07-12',
    rank: 'Top 5'
  },
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
       <div className="fixed top-4 left-4 md:top-8 md:left-8 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <img
            src="https://www.svgrepo.com/show/353810/google-developers.svg"
            className="h-8 w-10 sm:h-12 sm:w-14 md:h-14 md:w-16"
            alt="gdgLogo"
          />

          <div className="flex items-center gap-0.5 font-bold text-xl sm:text-2xl md:text-3xl">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-300">o</span>
            <span className="text-green-500">g</span>
            <span className="text-blue-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>

        <div className="text-white text-sm sm:text-base md:text-lg tracking-wide ml-0.5">
          Developers Group
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

          * {
            font-family: 'Inter', sans-serif;
          }

          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: black;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #444;
          }
        `}
      </style>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Animated background lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
          <div className="absolute top-0 left-1/4 h-full w-px bg-white"></div>
          <div className="absolute top-0 left-1/2 h-full w-px bg-white"></div>
          <div className="absolute top-0 left-3/4 h-full w-px bg-white"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white text-black text-sm font-semibold tracking-wider">
              EXCELLENCE IN INNOVATION
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            SHOWCASE
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-0 left-0 h-1 bg-white"
            />
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto mb-12"
            style={{
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 300
            }}
          >
            The brilliant minds behind our success
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-gray-500 text-xs"
            style={{
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            <span>Scroll down to explore</span>
          </motion.div>
          <Navbar />
        </div>
      </motion.section>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-[0] bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveTab('projects')}
              className={`relative px-10 py-4 text-base font-bold tracking-wider transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'text-black'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              {activeTab === 'projects' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">PROJECTS</span>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`relative px-10 py-4 text-base font-bold tracking-wider transition-all duration-300 ${
                activeTab === 'achievements'
                  ? 'text-black'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              {activeTab === 'achievements' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">ACHIEVEMENTS</span>
            </button>
          </div>
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
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="mb-32 last:mb-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div 
          className={`relative overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <motion.div
            animate={{ scale: isHovered ? 0.95 : 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] bg-zinc-900"
          >
            <img
              src={project.thumbnail_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Code2 className="w-16 h-16 mx-auto mb-3" />
                <p className="text-sm font-semibold tracking-wider">VIEW PROJECT</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Status Badge */}
          <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 text-xs font-bold tracking-wider">
            {project.status}
          </div>
        </motion.div>

        {/* Content Side */}
        <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-black text-white/10">0{project.id}</span>
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="text-sm font-semibold tracking-wider text-gray-500">{project.year}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              {project.title}
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="mb-8">
              <p className="text-xs font-semibold tracking-wider text-gray-500 mb-3">CREATOR</p>
              <p className="text-xl font-bold">{project.owner_name}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-wider text-gray-500 mb-4">TECH STACK</p>
              <div className="flex flex-wrap gap-3">
                {project.tech_stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white text-black text-sm font-semibold tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.deployed_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group"
              >
                <span className="text-sm font-semibold tracking-wider">VIEW LIVE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 border border-white/20 hover:border-white/40 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href={project.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 border border-white/20 hover:border-white/40 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const AchievementsSection = ({ achievements }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-zinc-950 border border-white/10 overflow-hidden">
        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={achievement.image_url}
            alt={achievement.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 text-xs font-bold tracking-widest">
            {achievement.category.toUpperCase()}
          </div>

          {/* Rank Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white text-black px-8 py-4 text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-black">{achievement.rank}</p>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="text-2xl font-black mb-2 tracking-tight">
            {achievement.title}
          </h3>
          <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wider">
            {achievement.subtitle}
          </p>

          <p className="text-gray-400 leading-relaxed mb-6" style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.6 }}>
            {achievement.description}
          </p>

          <div className="flex items-center gap-3 mb-6 text-sm">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-gray-400">
              {new Date(achievement.achievement_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="border-t border-white/10 pt-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wider text-gray-500 mb-1">ACHIEVED BY</p>
              <p className="text-lg font-bold">{achievement.achiever_name}</p>
            </div>

            <div className="flex gap-3">
              <motion.a
                href={achievement.github_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 border border-white/20 hover:border-white/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href={achievement.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 border border-white/20 hover:border-white/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Showcase;