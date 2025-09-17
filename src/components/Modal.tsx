'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  icon: string
  links: Array<{
    text: string
    url: string
  }>
  technologies?: string[]
  features?: string[]
}

const Modal = ({ isOpen, onClose, title, description, icon, links, technologies, features }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
              <Image src={icon} alt={title} width={50} height={50} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>

          {technologies && technologies.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {features && features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Key Features</h4>
              <ul className="list-disc list-inside space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 border-t">
            <h4 className="text-lg font-semibold mb-3">Links</h4>
            <div className="flex flex-wrap gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {link.text}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal