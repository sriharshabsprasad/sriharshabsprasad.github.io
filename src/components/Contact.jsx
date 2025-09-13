import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';

const Contact = () => (
  <motion.section
    id="contact"
    className="py-24 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    <p className="mb-8">Feel free to reach out for collaborations or project discussions!</p>

    <div className="flex flex-wrap justify-center gap-6 mb-8">
      <motion.a
        href="mailto:sriharshabsp@gmail.com"
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
      >
        <FaEnvelope /> Email Me
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/sriharsha-b-s-prasad/"
        target="_blank"
        className="flex items-center gap-2 bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        whileHover={{ scale: 1.05 }}
      >
        <FaLinkedin /> LinkedIn
      </motion.a>

      <motion.a
        href="https://github.com/sriharshabsprasad"
        target="_blank"
        className="flex items-center gap-2 bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        whileHover={{ scale: 1.05 }}
      >
        <FaGithub /> GitHub
      </motion.a>

      <motion.a
        href="https://www.kaggle.com/sriharshabsprasad"
        target="_blank"
        className="flex items-center gap-2 bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        whileHover={{ scale: 1.05 }}
      >
        <FaKaggle /> Kaggle
      </motion.a>
    </div>

    <motion.p
      className="text-gray-500 dark:text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      © 2025 Sriharsha B S Prasad | Data Science Portfolio
    </motion.p>
  </motion.section>
);

export default Contact;


// import React from 'react'
// import { motion } from 'framer-motion'
// import { FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa'

// const Contact = () => (
//   <motion.section
//     id="contact"
//     className="py-20 px-4 md:px-0 flex flex-col items-center gap-8"
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//   >
//     <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
//     <p className="text-center max-w-xl mb-6">
//       Feel free to reach out for collaborations, project discussions, or just to say hi!
//     </p>

//     <div className="flex flex-wrap justify-center gap-6 text-2xl md:text-3xl">
//       <motion.a
//         href="mailto:sriharshabsp@gmail.com"
//         whileHover={{ scale: 1.2 }}
//         className="text-blue-600 dark:text-blue-400 transition"
//         title="Email"
//       >
//         <FaEnvelope />
//       </motion.a>
//       <motion.a
//         href="https://www.linkedin.com/in/sriharsha-b-s-prasad/"
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-blue-700 dark:text-blue-500 transition"
//         title="LinkedIn"
//       >
//         <FaLinkedin />
//       </motion.a>
//       <motion.a
//         href="https://github.com/sriharshabsprasad"
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-gray-800 dark:text-gray-100 transition"
//         title="GitHub"
//       >
//         <FaGithub />
//       </motion.a>
//       <motion.a
//         href="https://www.kaggle.com/sriharshabsprasad"
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-orange-500 dark:text-orange-400 transition"
//         title="Kaggle"
//       >
//         <FaKaggle />
//       </motion.a>
//     </div>
//   </motion.section>
// )

// export default Contact
