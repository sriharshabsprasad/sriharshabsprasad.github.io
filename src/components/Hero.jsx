import React, { useState, useEffect } from 'react'

const Hero = () => {
  const textToType = "Data Scientist & Applied AI/ML Engineer"
  const [text, setText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let timeout
    if (!deleting && charIndex <= textToType.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 150)
      setText(textToType.substring(0, charIndex))
    } else if (!deleting && charIndex === textToType.length) {
      timeout = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 100)
      setText(textToType.substring(0, charIndex))
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-20 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm Sriharsha B S Prasad 👋
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">{text}</span>
        <span className="blinking-cursor">|</span> with 10+ years of experience solving real-world problems.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Explore Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        >
          Download Resume
        </a>
      </div>

      {/* Cursor Animation */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          color: inherit;
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default Hero


// import React, { useState, useEffect } from 'react'
// import { FaMoon, FaSun } from 'react-icons/fa'

// const skills = [
//   "Data Scientist",
//   "AI Enthusiast",
//   "ML Engineer",
//   "Big Data Specialist",
//   "NLP Practitioner"
// ]

// const Hero = ({ darkMode, setDarkMode }) => {
//   const [currentSkill, setCurrentSkill] = useState(0)
//   const [displayText, setDisplayText] = useState('')
//   const [charIndex, setCharIndex] = useState(0)
//   const [deleting, setDeleting] = useState(false)

//   // Typing effect
//   useEffect(() => {
//     const skill = skills[currentSkill]
//     let timeout

//     if (!deleting && charIndex <= skill.length) {
//       timeout = setTimeout(() => setCharIndex(charIndex + 1), 150)
//       setDisplayText(skill.substring(0, charIndex))
//     } else if (deleting && charIndex >= 0) {
//       timeout = setTimeout(() => setCharIndex(charIndex - 1), 100)
//       setDisplayText(skill.substring(0, charIndex))
//     } else if (!deleting && charIndex === skill.length) {
//       timeout = setTimeout(() => setDeleting(true), 1000)
//     } else if (deleting && charIndex === 0) {
//       setDeleting(false)
//       setCurrentSkill((prev) => (prev + 1) % skills.length)
//     }

//     return () => clearTimeout(timeout)
//   }, [charIndex, deleting, currentSkill])

//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100">
      
//       {/* Dark Mode Toggle */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="absolute top-6 right-6 p-3 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//       >
//         {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
//       </button>

//       <h1 className="text-4xl md:text-5xl font-bold mb-6">
//         Hi, I'm Sriharsha B S Prasad <span className="wave">👋</span>
//       </h1>

//       <p className="text-lg md:text-xl mb-6 max-w-2xl">
//         A passionate{" "}
//         <span className="font-semibold text-blue-600 dark:text-blue-400">
//           {displayText}
//         </span>
//         <span className="blinking-cursor">|</span> with 10+ years of experience solving real-world problems in Data Science, AI, Big Data & Analytics.
//       </p>

//       {/* Skill badges */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {skills.map((skill, i) => (
//           <span
//             key={i}
//             className={`px-4 py-2 rounded-full text-sm font-medium border border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 transition transform hover:scale-110 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 cursor-default`}
//           >
//             {skill}
//           </span>
//         ))}
//       </div>

//       {/* CTA Buttons */}
//       <div className="flex gap-4 flex-wrap justify-center">
//         <a
//           href="#projects"
//           className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
//         >
//           Explore Projects
//         </a>
//         <a
//           href="/resume.pdf"
//           download
//           className="bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
//         >
//           Download Resume
//         </a>
//       </div>

//       {/* Blinking cursor animation */}
//       <style>{`
//         .blinking-cursor {
//           font-weight: 100;
//           font-size: 1em;
//           color: inherit;
//           animation: blink 0.7s infinite;
//         }
//         @keyframes blink {
//           0% { opacity: 1; }
//           50% { opacity: 0; }
//           100% { opacity: 1; }
//         }
//         .wave {
//           display: inline-block;
//           animation: wave 1.5s infinite;
//           transform-origin: 70% 70%;
//         }
//         @keyframes wave {
//           0% { transform: rotate(0deg); }
//           15% { transform: rotate(14deg); }
//           30% { transform: rotate(-8deg); }
//           45% { transform: rotate(14deg); }
//           60% { transform: rotate(-4deg); }
//           75% { transform: rotate(10deg); }
//           100% { transform: rotate(0deg); }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default Hero
