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

        <section id="projects" className="bg-white dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={`/api/placeholder/400/200`} 
                    alt={`Project ${project}`} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project {project}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of the project and the technologies used.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">View Project</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Mail className="mr-2" size={20} />
                    john.doe@example.com
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="mr-2" size={20} />
                    +1 (123) 456-7890
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <User className="mr-2" size={20} />
                    @johndoe
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Briefcase className="mr-2" size={20} />
                    Available for freelance
                  </li>
                </ul>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}