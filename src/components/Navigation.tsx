'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About Me' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-64 lg:flex lg:flex-col">
      <div className="container mx-auto px-4 lg:px-0 lg:h-full lg:flex lg:flex-col">
        <div className="flex justify-between items-center h-16 lg:h-auto lg:flex-col lg:justify-start lg:pt-12">
          <Link href="#" className="flex items-center lg:flex-col lg:mb-8">
            <span className="text-xl font-bold lg:hidden">Mehmet Akif Ufacik</span>
            <Image 
              src="/images/person.jpg" 
              alt="Mehmet Akif Ufacik" 
              width={120} 
              height={120}
              className="hidden lg:block rounded-full"
            />
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} lg:block lg:flex-1`}>
          <ul className="flex flex-col space-y-2 py-4 lg:py-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-4 py-2 hover:bg-gray-800 transition-colors lg:text-center"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation