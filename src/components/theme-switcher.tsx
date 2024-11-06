"use client" // Marks this component as a client-side component in Next.js

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react' // Import icons for theme switching

export function ThemeSwitcher() {
  // Track current theme state
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Get saved theme from localStorage or use system preference as fallback
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    
    setTheme(savedTheme)
    // Add or remove 'dark' class on root element based on theme
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, []) // Empty dependency array means this runs once on mount

  const toggleTheme = () => {
    // Switch between light and dark themes
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme) // Persist theme preference
    document.documentElement.classList.toggle('dark') // Toggle dark mode class
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme" // Accessibility label for screen readers
    >
      {theme === 'light' ? (
        <Moon size={24} className="text-gray-800" /> // Show moon icon in light mode
      ) : (
        <Sun size={24} className="text-yellow-300" /> // Show sun icon in dark mode
      )}
    </button>
  )
}