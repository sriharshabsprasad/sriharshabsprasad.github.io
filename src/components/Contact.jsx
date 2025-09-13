import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => (
  <motion.section
    id="contact"
    className="py-24 px-4 md:px-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center transition-colors duration-500"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <p className="mb-6 text-gray-700 dark:text-gray-300">
      Feel free to reach out for collaborations or project discussions!
    </p>

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
      <motion.a
        href="https://github.com/sriharshabsprasad"
        target="_blank"
        className="bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        whileHover={{ scale: 1.05 }}
      >
        GitHub
      </motion.a>
      <motion.a
        href="https://www.kaggle.com/sriharshabsprasad"
        target="_blank"
        className="bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        whileHover={{ scale: 1.05 }}
      >
        Kaggle
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


// import React from 'react'
// import { motion } from 'framer-motion'
// import { FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa'

// const contacts = [
//   { icon: <FaEnvelope />, label: 'Email', link: 'mailto:sriharshabsp@gmail.com' },
//   { icon: <FaLinkedin />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/sriharsha-b-s-prasad/' },
//   { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/sriharshabsprasad' },
//   { icon: <FaKaggle />, label: 'Kaggle', link: 'https://www.kaggle.com/sriharshabsprasad' }
// ]

// const Contact = () => (
//   <motion.section
//     id="contact"
//     className="py-20 max-w-6xl mx-auto px-4 text-center"
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//   >
//     <h2 className="text-3xl font-bold mb-6">📬 Contact Me</h2>
//     <p className="text-gray-700 dark:text-gray-300 mb-8">
//       Feel free to reach out for collaborations, project discussions, or just to connect!
//     </p>

//     <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//       {contacts.map((c, i) => (
//         <motion.a
//           key={i}
//           href={c.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex flex-col items-center p-4 border rounded hover:shadow-lg transition dark:border-gray-700 dark:hover:shadow-gray-800"
//           whileHover={{ scale: 1.05 }}
//         >
//           <span className="text-2xl text-blue-500 dark:text-blue-400 mb-2">{c.icon}</span>
//           <span className="font-medium">{c.label}</span>
//         </motion.a>
//       ))}
//     </div>

//     <motion.p className="text-gray-500 dark:text-gray-400">
//       © 2025 Sriharsha B S Prasad | Data Science Portfolio
//     </motion.p>
//   </motion.section>
// )

// export default Contact
