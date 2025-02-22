import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashProps {
  onComplete: () => void;
}

const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');
    
    if (hasSeenAnimation) {
      onComplete();
    } else {
      localStorage.setItem('hasSeenAnimation', 'true');
      const timer = setTimeout(onComplete, 7000); // Extended to 7 seconds
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{ 
            duration: 2,
            times: [0, 0.6, 1],
            ease: "easeOut"
          }}
          className="absolute -inset-20 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-7xl md:text-9xl font-bold splash-text"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient"
            >
              Sai
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient"
            >
              Kiran
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-8 relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-xl"
          />
          <span className="relative text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.div
          className="mt-12 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-gray-500 dark:text-gray-400"
          >
            Welcome to my portfolio
          </motion.div>
          <motion.button
            onClick={onComplete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors underline"
          >
            Skip Animation
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Splash;