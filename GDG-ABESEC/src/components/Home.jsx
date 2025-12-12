import Navbar from "./ui/Navbar";
import Squares from "./ui/Squares";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.6}
          borderColor="#0e071f"
          squareSize={55}
          hoverFillColor="#0e071f"
        />
      </div>

      {/* Branding Section */}
      <div className="fixed top-6 left-4 md:top-10 md:left-10 z-20 flex flex-col gap-2 pointer-events-none">
        
         {/* Logo + Google in one line */}
  <div className="flex items-center gap-2 pointer-events-auto">
    <img
      src="https://www.svgrepo.com/show/353810/google-developers.svg"
      className="h-10 w-12 sm:h-14 sm:w-16 md:h-16 md:w-20"
      alt="gdgLogo"
    />

    <div className="flex items-center gap-1 font-bold text-2xl sm:text-3xl md:text-4xl">
      <span className="text-blue-500">G</span>
      <span className="text-red-500">o</span>
      <span className="text-yellow-300">o</span>
      <span className="text-green-500">g</span>
      <span className="text-blue-500">l</span>
      <span className="text-red-500">e</span>
    </div>
  </div>

        {/* Developers Group */}
        <div className="text-white text-lg sm:text-xl md:text-2xl tracking-wide -mt-2.5 ml-1">
          Developers Group
        </div>

      </div>

      {/* Main Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-500 via-yellow-400 via-green-500 to-red-500
                     drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
        >
          Welcome to Google Developers
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 text-lg sm:text-2xl md:text-3xl text-gray-300 tracking-wide"
        >
          on Campus <span className="text-sky-400 font-semibold">ABESEC</span>
        </motion.h2>

      </div>

      <Navbar />

      <div className="h-20"></div>
    </div>
  );
};

export default Home;