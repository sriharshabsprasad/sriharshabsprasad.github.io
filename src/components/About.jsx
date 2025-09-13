import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/images/profile.JPEG';
import { FaPython, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiScikitlearn, SiPandas, SiSpacy } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
  { name: 'R', icon: FaDatabase, color: 'text-green-500' },
  { name: 'SQL', icon: FaDatabase, color: 'text-blue-600' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
  { name: 'Keras', icon: SiKeras, color: 'text-red-500' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-blue-400' },
  { name: 'Pandas', icon: SiPandas, color: 'text-indigo-400' },
  { name: 'Spacy', icon: SiSpacy, color: 'text-purple-500' },
  { name: 'AWS', icon: FaCloud, color: 'text-blue-300' }
];

const About = () => (
  <motion.section
    id="about"
    className="py-20 flex flex-col md:flex-row items-center gap-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <motion.img
      src={profile}
      alt="Sriharsha B S Prasad"
      className="w-48 h-48 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
    />
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I am a passionate Data Scientist with <strong>10+ years of diverse experience</strong> in cutting-edge technologies and solving real-world problems. Expertise in <strong>Product Design & Development, Data Science, Big Data, and Analytics</strong>.
      </p>

      <h3 className="font-semibold mb-4">⚙️ Technical Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div key={i} className="flex items-center gap-2 p-3 border rounded-lg hover:shadow-lg transition dark:border-gray-700 dark:hover:shadow-gray-600">
              <Icon className={`${skill.color} text-2xl`} />
              <span className="font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>

      <p className="mt-6">
        I thrive on challenging projects and delivering meaningful impact through data-driven insights.
      </p>
    </motion.div>
  </motion.section>
);

export default About;
