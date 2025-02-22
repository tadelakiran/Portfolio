import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Technical Hub',
    location: 'Rajahmundry, India',
    duration: 'June 2024 - Present',
    description: [
      'Developed and maintained web applications using React.js and Node.js',
      'Implemented responsive designs and optimized application performance',
      'Collaborated with team members using Git and Agile methodologies',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Git'],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-200 dark:before:bg-blue-800">
                <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full -translate-x-1/2 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ml-4 hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;