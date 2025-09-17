'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from './Modal'

const projects = [
  {
    icon: '/images/icons8-sudoku-64.png',
    title: 'SUDOKU SOLVER',
    description: 'I created this sudoku solver using a backtracking algorithm in Python and recorded an explanation video.',
    links: [
      { text: 'explanation video', url: 'https://www.youtube.com/watch?v=MriNywwQp-8&t=1s' },
      { text: 'Check on GitHub', url: 'https://github.com/Mehm3tAk1f/sudoku-solver' }
    ],
    techStack: [
      { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'Tkinter', icon: '🖼️', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
      { name: 'Backtracking', icon: '🧮', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' }
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
    techStack: [
      { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'Tkinter', icon: '🖼️', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
      { name: 'CSV', icon: '📊', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' }
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
    techStack: [
      { name: 'C', icon: '⚡', color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' },
      { name: 'Cryptography', icon: '🔐', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
      { name: 'Algorithms', icon: '🧩', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' }
    ],
    delay: 600
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      <section id="projects" className="min-h-screen py-20 px-4 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h6 className="text-blue-500 dark:text-blue-400 text-sm uppercase tracking-wider mb-2">Browse my</h6>
            <h1 className="text-4xl md:text-5xl font-bold">PROJECTS</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={project.delay}
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image 
                    src={project.icon}
                    alt={project.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h5 className="text-xl font-semibold mb-3">{project.title}</h5>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <span className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        description={selectedProject?.description || ''}
        links={selectedProject?.links || []}
        techStack={selectedProject?.techStack}
      />
    </>
  )
}

export default Projects