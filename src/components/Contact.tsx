'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement email functionality
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h6 className="text-blue-500 text-sm uppercase tracking-wider mb-2">CONTACT</h6>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Would you like to work together? Let's talk!
          </h1>
        </div>

        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Contact me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact