import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Apply dark mode class to html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-6xl mx-auto px-4 space-y-32"> {/* Added vertical spacing between sections */}
        <section id="home" className="pt-20">
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact" className="pt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
