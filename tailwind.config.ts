// Import Tailwind config type
import type { Config } from "tailwindcss";

// Define Tailwind configuration
const config: Config = {
  darkMode: "class", // Enable dark mode using class strategy
  content: [
    // Specify files to scan for used classes
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Components directory 
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App directory
  ],
  theme: {
    extend: {}, // Extend default theme configuration
  },
  plugins: [], // Array for Tailwind plugins
};

// Export the configuration
export default config;