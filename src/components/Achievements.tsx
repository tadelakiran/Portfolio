import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, AlignCenterVertical as Certificate } from 'lucide-react';

const achievements = [
  {
    title: 'Top 10 - A IDEATHON - 2025',
    date: 'Febrauary 2025',
    description: 'Presented an Idea For the Urban Sustainability ',
    type: 'Ideathon',
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
  },
  // {
  //   title: 'Best Innovation Award',
  //   date: 'December 2023',
  //   description: 'Recognized for developing a revolutionary healthcare solution',
  //   type: 'award',
  //   icon: <Award className="w-6 h-6 text-blue-500" />,
  // },
  // {
  //   title: 'AWS Solutions Architect Certification',
  //   date: 'October 2023',
  //   description: 'Professional certification for cloud architecture',
  //   type: 'certification',
  //   icon: <Certificate className="w-6 h-6 text-green-500" />,
  // },
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Recognition and milestones in my professional journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-px h-full bg-blue-200 dark:bg-blue-800">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 flex items-center justify-center">
                  {achievement.icon}
                </div>
              </div>
              <div className="ml-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    {achievement.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;