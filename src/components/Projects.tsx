import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'RescueReady',
    description: 'A full-stack Webiste which will provide alerts , checklists and it is based on Disaster Management',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    githubUrl: 'https://github.com/tadelakiran/preparedness',
    image: 'https://images.unsplash.com/photo-1726401122972-77e2269124e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpc2FzdGVyJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Doc-Deal',
    description: 'Automates the appointments in the hospital and gives the schedules for the User',
    technologies: ['HTMl', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/tadelakiran/DOC_DEAL',
    liveUrl: 'https://doc-deal.vercel.app/',
    image: 'https://img.freepik.com/free-vector/flat-hand-drawn-hospital-reception-scene_52683-55313.jpg?ga=GA1.1.716700203.1719122821&semt=ais_hybrid',
  },
  {
    title: 'TownPlanning',
    description : 'In the Urban Sustainability Dashboard I have created the Town Planning Page in which the City is devided into multiple zones for better analysis and Town Planning',
     technologies : ['React' , 'TailWind CSS'],
  githubUrl : 'https://github.com/tadelakiran/Town-Planning',
  liveUrl : 'https://town-planning.vercel.app/',
  image : 'https://img.freepik.com/free-vector/city-model_23-2147514054.jpg?ga=GA1.1.716700203.1719122821&semt=ais_hybrid'
  },
 
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;