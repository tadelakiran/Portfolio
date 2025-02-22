import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import Splash from './components/Splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <Splash onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <ThemeToggle />
        <Hero showAnimation={!showSplash} />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Projects />
        <Contact />
      </motion.div>
    </>
  );
}

export default App;