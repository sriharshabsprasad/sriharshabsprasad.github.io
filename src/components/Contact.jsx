import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => (
  <motion.section
    id="contact"
    className="py-20 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <p className="mb-6">Feel free to reach out for collaborations or project discussions!</p>
    <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
      <motion.a
        href="mailto:sriharshabsp@gmail.com"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
        whileHover={{ scale: 1.05 }}
      >
        Email Me
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/sriharsha-b-s-prasad/"
        target="_blank"
        className="bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        whileHover={{ scale: 1.05 }}
      >
        LinkedIn
      </motion.a>
    </div>
    <motion.p
      className="text-gray-600 dark:text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      © 2025 Sriharsha B S Prasad | Data Science Portfolio
    </motion.p>
  </motion.section>
)

export default Contact
