import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/images/profile.JPEG'

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
      <h3 className="font-semibold mb-2">⚙️ Technical Skills</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>Languages:</strong> Python, R, SQL</li>
        <li><strong>Data Science Tools:</strong> TensorFlow, Keras, Scikit-learn, Numpy, Pandas, NLTK, Spacy</li>
        <li><strong>LLMs:</strong> Mistral Instruct, Llama, Zephyr</li>
        <li><strong>Other Tools:</strong> Flask, Django, FastAPI, H2O.ai, Git</li>
        <li><strong>Cloud:</strong> AWS (S3, EC2, SageMaker)</li>
      </ul>
      <p>I thrive on challenging projects and delivering meaningful impact through data-driven insights.</p>
    </motion.div>
  </motion.section>
)

export default About
