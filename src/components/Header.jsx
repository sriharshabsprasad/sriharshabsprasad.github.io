import React from 'react'
import { Link } from 'react-scroll'

const Header = ({ darkMode, setDarkMode }) => (
  <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50 transition-colors duration-500">
    <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="font-bold text-xl">Sriharsha B S Prasad</h1>
      <ul className="flex gap-6 items-center">
        {['home', 'projects', 'about', 'contact'].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 capitalize"
            >
              {section}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
