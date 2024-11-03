// Mark this component as a client-side component for Next.js
"use client"

// Import necessary React hooks and icons
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeSwitcher() {
  // State to track current theme ('light' or 'dark')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') || 
      // Check system preference for dark mode if no saved theme exists
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    
    // Set the theme state and update DOM accordingly
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, []) // Empty dependency array means this runs once on mount

  // Handler function to toggle between light and dark themes
  const toggleTheme = () => {
    // Switch to opposite theme
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    // Persist theme preference to localStorage
    localStorage.setItem('theme', newTheme)
    // Toggle dark class on root element for Tailwind dark mode
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggleTheme}
      // Fixed position button with theme-aware styling
           className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {/* Show moon icon for light theme, sun icon for dark theme */}
      {theme === 'light' ? (
        <Moon size={24} className="text-gray-800" />
      ) : (
        <Sun size={24} className="text-yellow-300" />
      )}
    </button>
  )
}