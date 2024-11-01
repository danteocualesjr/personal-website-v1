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
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Dante O. Cuales, Jr.</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Sales & Business Development Manager @ Advisory Collective</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/danteocualesjr" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/danteocualesjr/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:danteocualesjr@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
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
                  src="/dante.jpg" 
                  alt="Dante O. Cuales, Jr." 
                  className="rounded-full w-96 h-96 object-cover mx-auto" 
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  As a Sales & Business Development Manager at Advisory Collective, I bring my passion for driving growth and creating meaningful impact to a visionary company that provides elite, fractional executive leadership to growing businesses. My role allows me to collaborate with high-level industry leaders and leverage my expertise in sales development, customer success, and strategic partnerships to support founders as they scale their companies.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  At Advisory Collective, we offer a unique model that combines independence and collaboration, empowering businesses to access C-level expertise without the full-time cost. Our focus is on delivering fractional leadership in key areas like Product, Engineering, Design, People Operations, and Customer Success, helping businesses execute world-class strategies with precision and efficiency.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Prior to joining Advisory Collective, my tenure at BloomTech, where I helped drive the growth of an AI program, provided me with a strong foundation in education technology and customer success. I'm passionate about leveraging technology and innovative thinking to solve complex business challenges and empower leaders to thrive.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Beyond my professional endeavors, I am committed to continuous learning and growth, and I remain deeply passionate about education technology, AI, and sales. I also enjoy writing, and I use storytelling as a tool to inspire and engage with customers.
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
                <div key={project} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project {project}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of the project and the technologies used.</p>
                  <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">View Project</a>
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
                    danteocualesjr@gmail.com
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="mr-2" size={20} />
                    +639562853231
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <User className="mr-2" size={20} />
                    @danteocualesjr
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Briefcase className="mr-2" size={20} />
                    Sales & Business Development Manager
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
          <p className="text-gray-600 dark:text-gray-300">&copy; 2024 Dante O. Cuales, Jr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}