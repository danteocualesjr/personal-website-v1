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

        <section id="about" className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="/api/placeholder/300/300" 
                  alt="John Doe" 
                  className="rounded-full w-64 h-64 object-cover mx-auto" 
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Hello! I'm John, a passionate web developer with 5 years of experience in creating beautiful and functional websites. I specialize in React, Next.js, and Tailwind CSS.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}