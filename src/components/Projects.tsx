import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    icon: '/images/icons8-sudoku-64.png',
    title: 'SUDOKU SOLVER',
    description: 'I created this sudoku solver using a backtracking algorithm in Python and recorded an explanation video.',
    links: [
      { text: 'explanation video', url: 'https://www.youtube.com/watch?v=MriNywwQp-8&t=1s' },
      { text: 'Check on GitHub', url: 'https://github.com/Mehm3tAk1f/sudoku-solver' }
    ],
    delay: 0
  },
  {
    icon: '/images/book.png',
    title: 'LIBRARY SYSTEM',
    description: 'I created a Library Management System using Python and Tkinter, featuring book management, search, status checks, and CSV-based data storage.',
    links: [
      { text: 'Check on GitHub', url: 'https://github.com/Mehm3tAk1f/Library_Project' }
    ],
    delay: 300
  },
  {
    icon: '/images/icons8-encryption-68.png',
    title: 'TEXT ENCRYPTION',
    description: 'This project encrypts the plain text or decrypts the encrypted text by the given key in C.',
    links: [
      { text: 'Check on GitHub', url: '#' }
    ],
    delay: 600
  }
]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-12" data-aos="fade-up">
          <h6 className="text-blue-500 text-sm uppercase tracking-wider mb-2">Browse my</h6>
          <h1 className="text-4xl md:text-5xl font-bold">PROJECTS</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Image 
                  src={project.icon}
                  alt={project.title}
                  width={40}
                  height={40}
                />
              </div>
              <h5 className="text-xl font-semibold mb-3">{project.title}</h5>
              <p className="text-gray-600 mb-4">
                {project.description.split('explanation video').map((part, i) => (
                  i === 0 ? part : (
                    <span key={i}>
                      <Link 
                        href={project.links[0].url}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        explanation video
                      </Link>
                      {part}
                    </span>
                  )
                ))}
              </p>
              {project.links.map((link, linkIndex) => (
                link.text !== 'explanation video' && (
                  <Link 
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.text} →
                  </Link>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects