import React from 'react'
import { Link } from 'react-scroll'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = ({ darkMode, setDarkMode }) => (
  <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors duration-500">
    <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
      
      {/* Logo / Name */}
      <h1 className="font-bold text-xl cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition">
        Sriharsha B S Prasad
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
        {['home', 'projects', 'about', 'contact'].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 capitalize transition-all"
            >
              {section}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded hover:bg-gray-700 transition text-white"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li> */}
      </ul>
    </nav>
  </header>
)

export default Header
