import React, { useState, useEffect } from 'react'

const skills = [
  "Data Scientist",
  "AI Enthusiast",
  "ML Engineer",
  "Big Data Specialist",
  "NLP Practitioner"
]

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Typing effect
  useEffect(() => {
    const currentSkill = skills[index]
    let timeout

    if (!deleting && charIndex <= currentSkill.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 150)
      setText(currentSkill.substring(0, charIndex))
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 100)
      setText(currentSkill.substring(0, charIndex))
    } else if (!deleting && charIndex === currentSkill.length) {
      timeout = setTimeout(() => setDeleting(true), 1000)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % skills.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, index])

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100">
      
      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="absolute top-6 right-6 px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Sriharsha B S Prasad 👋</h1>
      
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">{text}</span>
        <span className="blinking-cursor">|</span> with 10+ years of experience solving real-world problems through Data Science, AI, Big Data & Analytics.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
          Explore Projects
        </a>
        <a href="/resume.pdf" download className="bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
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
