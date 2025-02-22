import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Home, User, BookOpen, Award, Code, Briefcase, Mail, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { title: 'Home', to: 'hero', icon: <Home className="w-5 h-5" /> },
  { title: 'About', to: 'about', icon: <User className="w-5 h-5" /> },
  { title: 'Experience', to: 'experience', icon: <Briefcase className="w-5 h-5" /> },
  { title: 'Education', to: 'education', icon: <BookOpen className="w-5 h-5" /> },
  { title: 'Certifications', to: 'certifications', icon: <GraduationCap className="w-5 h-5" /> },
  { title: 'Projects', to: 'projects', icon: <Code className="w-5 h-5" /> },
  { title: 'Achievements', to: 'achievements', icon: <Award className="w-5 h-5" /> },
  { title: 'Contact', to: 'contact', icon: <Mail className="w-5 h-5" /> }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find the current section
      const sections = navItems.map(item => item.to);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
          >
            Sai Kiran
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors relative ${
                  activeSection === item.to ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {activeSection === item.to && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.title}
              </Link>
            ))}
          </div>

          {/* Tablet Menu */}
          <div className="hidden md:flex lg:hidden space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                  activeSection === item.to ? 'bg-blue-100 dark:bg-blue-900' : ''
                }`}
              >
                {item.icon}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block py-3"
                  >
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                        activeSection === item.to
                          ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;