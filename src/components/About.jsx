import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaRProject, FaDatabase, FaCloud, FaRobot, FaServer } from 'react-icons/fa'
import profile from '../assets/images/profile.JPEG'

const skills = [
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaRProject />, name: 'R' },
  { icon: <FaDatabase />, name: 'SQL' },
  { icon: <FaRobot />, name: 'ML & AI' },
  { icon: <FaServer />, name: 'Flask/Django/FastAPI' },
  { icon: <FaCloud />, name: 'AWS' }
]

const About = () => (
  <motion.section
    id="about"
    className="py-20 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto px-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Profile Image */}
    <motion.img
      src={profile}
      alt="Sriharsha B S Prasad"
      className="w-48 h-48 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow-lg"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
    />

    {/* About Content */}
    <motion.div
      className="flex-1 space-y-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I am a passionate <strong>Data Scientist</strong> with 10+ years of experience building solutions in Data Science, AI, Big Data, and Analytics. I thrive on solving complex problems and delivering actionable insights that make an impact.
      </p>

      <h3 className="text-xl font-semibold mb-3">⚙️ Technical Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 p-3 border rounded hover:shadow-lg transition dark:border-gray-700 dark:hover:shadow-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-500 dark:text-blue-400 text-lg">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-700 dark:text-gray-300">
        I love working on challenging projects that leverage AI, machine learning, and cloud technologies to create meaningful solutions.
      </p>
    </motion.div>
  </motion.section>
)

export default About
