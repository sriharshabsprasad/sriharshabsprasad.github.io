import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaSun, FaMoon, FaGithub, FaKaggle } from 'react-icons/fa'

const Header = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState('home')

  const sections = ['home', 'projects', 'about', 'contact']

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors duration-500">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="font-bold text-xl cursor-pointer">
          Sriharsha B S Prasad
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className={`cursor-pointer relative capitalize px-1 py-1 hover:text-blue-500 dark:hover:text-blue-400 transition ${
                  active === section ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
                onSetActive={() => setActive(section)}
              >
                {section}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 ${
                    active === section ? 'w-full' : 'w-0'
                  }`}
                ></span>
              </Link>
            </li>
          ))}

          {/* Social Icons */}
          <li>
            <a
              href="https://github.com/sriharshabsprasad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              <FaGithub size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://www.kaggle.com/sriharshabsprasad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              <FaKaggle size={18} />
            </a>
          </li>

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-800 dark:text-gray-100" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
