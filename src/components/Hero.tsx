import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  showAnimation: boolean;
}

const Hero: React.FC<HeroProps> = ({ showAnimation }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: showAnimation ? 1 : 0, x: showAnimation ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1"
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: showAnimation ? 1 : 0,
                y: showAnimation ? 0 : 20
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hi, I'm{" "}
              <motion.span 
                className="text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: showAnimation ? 1 : 0
                }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Sai Kiran
              </motion.span>
            </motion.h1>
            <div className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-20">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React Native Developer',
                  2000,
                  'Node.js Expert',
                  2000,
                  'ServiceNow Administrator',
                  2000,
                ]}
                repeat={Infinity}
                cursor={true}
              />
            </div>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: showAnimation ? 1 : 0
              }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Building robust and scalable web applications with modern technologies.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: showAnimation ? 1 : 0,
                y: showAnimation ? 0 : 20
              }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.a 
                href="https://github.com/tadelakiran" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <GitHub className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/tadela-sai-kiran" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="mailto:saikirantadela21@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: showAnimation ? 1 : 0,
              x: showAnimation ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 flex justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://mobile.technicalhub.io:5010/student/22A91A1252.png"
              alt="Profile"
              className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;