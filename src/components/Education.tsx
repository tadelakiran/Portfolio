import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  // {
  //   degree: 'Master of Science in Computer Science',
  //   school: 'Stanford University',
  //   years: '2020 - 2022',
  //   gpa: '3.9',
  //   courses: [
  //     'Advanced Algorithms',
  //     'Machine Learning',
  //     'Distributed Systems',
  //     'Cloud Computing',
  //   ],
  //   image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
  // },
  {
    degree: 'Bachelor of Engineering in Information Technology',
    school: 'Aditya Engineering College',
    years: '2022 - 2026',
    gpa: '8.87',
    courses: [
      'Data Structures',
      'Operating Systems',
      'Database Management',
      'Web Development',
    ],
    image: 'https://www.aec.edu.in/Campus_Buildings/KL%202.png',
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300">
            Academic background and achievements
          </p> */}
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
            >
              <div className="w-full md:w-1/3">
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                  {edu.school}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {edu.years} • GPA: {edu.gpa}
                </p>
                <div className="mt-4">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    Key Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {course}
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

export default Education;