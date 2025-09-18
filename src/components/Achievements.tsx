'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import { BASE_PATH } from '@/config/constants'

const achievements = [
  {
    title: 'Machine Learning Specialization',
    image: `${BASE_PATH}/images/Machine Learning.jpg`,
    description: 'I studied key machine learning concepts such as linear regression, logistic regression, neural networks, and decision trees. Additionally, I learned about clustering, anomaly detection, recommender systems, and reinforcement learning, gaining practical skills to apply these techniques to real-world problems.',
    fullDescription: 'Through this comprehensive specialization by DeepLearning.AI and Stanford Online, I mastered fundamental machine learning algorithms and gained hands-on experience with real-world applications. The program covered supervised learning (linear/logistic regression, neural networks), unsupervised learning (clustering, dimensionality reduction), and advanced topics like anomaly detection and recommender systems.',
    links: [
      { text: 'View Certificate', url: 'https://coursera.org/share/ff0e588da1bce9ed51998e5b68f1f75d' }
    ],
    techStack: [
      { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'TensorFlow', icon: '🧠', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
      { name: 'NumPy', icon: '🔢', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
      { name: 'Scikit-learn', icon: '📊', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' }
    ],
    delay: 0
  },
  {
    title: "CS50's Introduction to Computer Science",
    image: `${BASE_PATH}/images/HarvardX CS50x CS50's Introduction to Computer Science.jpg`,
    description: "I studied the fundamentals of computer science through Harvard's CS50x course. This included learning programming languages like C, Python, and SQL, as well as topics such as algorithms, data structures, web development, and cybersecurity. The course also provided hands-on experience in problem-solving and building software projects.",
    fullDescription: "Harvard's CS50x provided a comprehensive introduction to computer science and programming. The course covered low-level programming in C, data structures, algorithms, memory management, web development with Python/Flask, SQL databases, and cybersecurity. I completed challenging problem sets and built multiple projects, gaining a deep understanding of how computers and software work.",
    links: [
      { text: 'View Certificate', url: 'https://courses.edx.org/certificates/40a315ad3b3144cca9524c9f22106747' },
      { text: 'Course Website', url: 'https://cs50.harvard.edu/' }
    ],
    techStack: [
      { name: 'C', icon: '⚡', color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' },
      { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'SQL', icon: '🗄️', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
      { name: 'Flask', icon: '🌶️', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
      { name: 'JavaScript', icon: '📝', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
      { name: 'HTML/CSS', icon: '🎨', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' }
    ],
    delay: 300
  },
  {
    title: 'IT Automation with Python Specialization',
    image: `${BASE_PATH}/images/Google IT Automation with Python.jpg`,
    description: 'I completed a six-course certificate by Google, gaining skills in Python, Git, and IT automation. The curriculum focused on coding in Python for automating IT tasks and systems administration. I learned to use Git and GitHub, troubleshoot and debug problems, and apply automation using configuration management and the Cloud, preparing me for advanced IT support roles.',
    fullDescription: 'This Google certificate program taught me to automate IT tasks at scale using Python. I learned to write Python scripts for system administration, use regular expressions for pattern matching, manage code with Git/GitHub, troubleshoot IT issues systematically, and implement configuration management with Puppet. The program also covered cloud automation and prepared me for roles like IT Specialist or Junior Systems Administrator.',
    links: [
      { text: 'View Certificate', url: 'https://coursera.org/share/860f8fe005240885ac71b659416af184' }
    ],
    techStack: [
      { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'Git', icon: '📦', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
      { name: 'Bash', icon: '💻', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
      { name: 'Puppet', icon: '🎭', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
      { name: 'Cloud', icon: '☁️', color: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200' }
    ],
    delay: 600
  }
]

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null)

  return (
    <>
      <section id="achievements" className="min-h-screen py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h6 className="text-blue-500 dark:text-blue-400 text-sm uppercase tracking-wider mb-2">Check out my</h6>
            <h1 className="text-4xl md:text-5xl font-bold">ACHIEVEMENTS</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={achievement.delay}
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{achievement.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">{achievement.description}</p>
                  <span className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium inline-flex items-center">
                    View details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
        title={selectedAchievement?.title || ''}
        description={selectedAchievement?.fullDescription || selectedAchievement?.description || ''}
        links={selectedAchievement?.links || []}
        techStack={selectedAchievement?.techStack}
      />
    </>
  )
}

export default Achievements