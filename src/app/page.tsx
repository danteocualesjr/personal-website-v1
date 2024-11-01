import { Github, Linkedin, Mail, User, Briefcase, Phone } from 'lucide-react'

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-6">
            <li><a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Home</a></li>
            <li><a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">About</a></li>
            <li><a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="bg-white dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">John Doe</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Web Developer & Designer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>