import { Github, Linkedin, Mail, User, Briefcase, Phone, Download, ExternalLink, Calendar } from 'lucide-react'
import Image from 'next/image'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Home() {
  
  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">

        <nav className="container mx-auto px-6 py-3">

          <ul className="flex justify-center space-x-6">
            
            <li><a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Home</a></li>

            <li><a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">About</a></li>

            <li><a href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Experience</a></li>
            
            <li><a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Projects</a></li>

            <li><a href="#blog" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Blog</a></li>

            <li><a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Contact</a></li>
            
          </ul>

        </nav>

      </header>

      <main>
        
        <section id="home" className="bg-white dark:bg-gray-800 py-20">

          <div className="container mx-auto px-6 text-center">
            
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Dante O. Cuales, Jr.</h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Sales & Business Development Manager @ Advisory Collective</p>
            
            <div className="flex justify-center space-x-4 mb-8">

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
            <div className="flex justify-center space-x-4">
              <a 
                href="/resume.pdf" 
                download
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative">
                  <Image 
                    src="/dante.jpg" 
                    alt="Dante O. Cuales, Jr." 
                    className="rounded-full w-80 h-80 object-cover mx-auto hover:scale-105 transition-transform duration-300"
                    width={320}
                    height={320}
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Available for opportunities</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    As a Sales & Business Development Manager at Advisory Collective, I bring my passion for driving growth and creating meaningful impact to a visionary company that provides elite, fractional executive leadership to growing businesses. My role allows me to collaborate with high-level industry leaders and leverage my expertise in sales development, customer success, and strategic partnerships to support founders as they scale their companies.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    At Advisory Collective, we offer a unique model that combines independence and collaboration, empowering businesses to access C-level expertise without the full-time cost. Our focus is on delivering fractional leadership in key areas like Product, Engineering, Design, People Operations, and Customer Success, helping businesses execute world-class strategies with precision and efficiency.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Prior to joining Advisory Collective, my tenure at BloomTech, where I helped drive the growth of an AI program, provided me with a strong foundation in education technology and customer success. I&apos;m passionate about leveraging technology and innovative thinking to solve complex business challenges and empower leaders to thrive.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Beyond my professional endeavors, I am committed to continuous learning and growth, and I remain deeply passionate about education technology, AI, and sales. I also enjoy writing, and I use storytelling as a tool to inspire and engage with customers.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Sales', 'Business Development', 'Leadership', 'Strategy', 'Customer Success'].map((skill) => (
                        <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {['AI', 'EdTech', 'Writing', 'Innovation', 'Technology'].map((interest) => (
                        <span key={interest} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-white dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Professional Experience</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Sales & Business Development Manager</h3>
                    <p className="text-blue-600 dark:text-blue-400">Advisory Collective</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">2023 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Led strategic sales initiatives resulting in 40% revenue growth</li>
                  <li>Developed and maintained relationships with key stakeholders</li>
                  <li>Implemented new sales processes and technologies</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Program Manager</h3>
                    <p className="text-blue-600 dark:text-blue-400">BloomTech</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">2021 - 2023</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Managed AI program growth and development</li>
                  <li>Enhanced student success rates by 25%</li>
                  <li>Collaborated with cross-functional teams</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src="/project1.jpg" 
                    alt="Project 1"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Featured</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Sales Analytics Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A comprehensive dashboard for tracking and analyzing sales performance metrics.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">React</span>
                    <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">D3.js</span>
                    <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">API</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                      <ExternalLink size={16} className="mr-1" />
                      View Project
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 flex items-center">
                      <Github size={16} className="mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Similar project cards with different content */}
              {/* Add more project cards here */}
            </div>
          </div>
        </section>

        <section id="blog" className="bg-white dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Latest Articles</h2>
              <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                View all posts
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src="/blog1.jpg" 
                    alt="Blog post 1"
                    className="object-cover w-full h-full"
                    width={600}
                    height={300}
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">New</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">March 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">The Future of Fractional Leadership</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Exploring how fractional leadership is reshaping the way businesses access executive expertise...</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image 
                        src="/dante-avatar.jpg" 
                        alt="Dante O. Cuales, Jr."
                        className="w-8 h-8 rounded-full mr-2"
                        width={32}
                        height={32}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Dante O. Cuales, Jr.</span>
                    </div>
                    <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                      Read More
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </article>

              {/* Similar blog post cards */}
              {/* Add more blog post cards here */}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Let&apos;s Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m always open to new opportunities and collaborations. Whether you want to discuss business, share ideas, or just say hello, feel free to reach out!
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <Mail className="mr-3" size={20} />
                    <a href="mailto:danteocualesjr@gmail.com">danteocualesjr@gmail.com</a>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <Phone className="mr-3" size={20} />
                    <a href="tel:+639562853231">+639562853231</a>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <User className="mr-3" size={20} />
                    <a href="https://twitter.com/danteocualesjr" target="_blank" rel="noopener noreferrer">@danteocualesjr</a>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Briefcase className="mr-3" size={20} />
                    Sales & Business Development Manager
                  </li>
                </ul>
              </div>
              <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-300">&copy; 2024 Dante O. Cuales, Jr. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <ThemeSwitcher />
    </div>
  )
}