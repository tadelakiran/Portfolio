import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database, Brain, Download, Globe, Cpu, Shield, Cloud, Smartphone, Terminal, Github as Git, Coffee } from 'lucide-react';

const SkillCategory = ({ category, items, color, inView, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-lg ${color}`}>
          {items[0].icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {items.map((skill, skillIndex) => (
          <motion.div
            key={skillIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
            className={`flex items-center gap-2 p-3 rounded-lg ${color.replace('bg-', 'bg-opacity-20 ')} hover:bg-opacity-30 transition-colors`}
          >
            {skill.icon}
            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", icon: <Code2 className="w-4 h-4 text-blue-500 dark:text-blue-400" /> },
        { name: "Next.js", icon: <Globe className="w-4 h-4 text-blue-500 dark:text-blue-400" /> },
        { name: "TypeScript", icon: <Terminal className="w-4 h-4 text-blue-500 dark:text-blue-400" /> },
        { name: "Tailwind CSS", icon: <Cpu className="w-4 h-4 text-blue-500 dark:text-blue-400" /> },
      ],
      color: "bg-blue-100 dark:bg-blue-900"
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <Server className="w-4 h-4 text-green-500 dark:text-green-400" /> },
        { name: "Express.js", icon: <Cloud className="w-4 h-4 text-green-500 dark:text-green-400" /> },
        { name: "Python", icon: <Terminal className="w-4 h-4 text-green-500 dark:text-green-400" /> },
        { name: "Java", icon: <Coffee className="w-4 h-4 text-green-500 dark:text-green-400" /> },
      ],
      color: "bg-green-100 dark:bg-green-900"
    },
    {
      category: "Mobile Development",
      items: [
        { name: "React Native", icon: <Smartphone className="w-4 h-4 text-purple-500 dark:text-purple-400" /> },
        { name: "Expo", icon: <Globe className="w-4 h-4 text-purple-500 dark:text-purple-400" /> },
        { name: "Android", icon: <Smartphone className="w-4 h-4 text-purple-500 dark:text-purple-400" /> },
        { name: "iOS", icon: <Smartphone className="w-4 h-4 text-purple-500 dark:text-purple-400" /> },
      ],
      color: "bg-purple-100 dark:bg-purple-900"
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", icon: <Git className="w-4 h-4 text-orange-500 dark:text-orange-400" /> },
        { name: "Docker", icon: <Database className="w-4 h-4 text-orange-500 dark:text-orange-400" /> },
        { name: "AWS", icon: <Cloud className="w-4 h-4 text-orange-500 dark:text-orange-400" /> },
        { name: "CI/CD", icon: <Shield className="w-4 h-4 text-orange-500 dark:text-orange-400" /> },
      ],
      color: "bg-orange-100 dark:bg-orange-900"
    }
  ];

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Saikiran_Resume.pdf'; // Make sure this file exists in the public folder
    link.setAttribute('download', 'Saikiran_Resume.pdf');
    
    // Append to body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            As a passionate full-stack developer, I specialize in creating robust and scalable web applications. 
            With expertise in modern technologies and a keen eye for detail, I strive to deliver exceptional 
            digital experiences that make a difference.
          </p>
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((category, index) => (
            <SkillCategory
              key={index}
              {...category}
              inView={inView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;