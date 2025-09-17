import Image from 'next/image'
import Link from 'next/link'

const achievements = [
  {
    title: 'Machine Learning Specialization',
    image: '/images/Machine Learning.jpg',
    description: 'I studied key machine learning concepts such as linear regression, logistic regression, neural networks, and decision trees. Additionally, I learned about clustering, anomaly detection, recommender systems, and reinforcement learning, gaining practical skills to apply these techniques to real-world problems.',
    link: 'https://coursera.org/share/ff0e588da1bce9ed51998e5b68f1f75d',
    delay: 0
  },
  {
    title: "CS50's Introduction to Computer Science",
    image: "/images/HarvardX CS50x CS50's Introduction to Computer Science.jpg",
    description: "I studied the fundamentals of computer science through Harvard's CS50x course. This included learning programming languages like C, Python, and SQL, as well as topics such as algorithms, data structures, web development, and cybersecurity. The course also provided hands-on experience in problem-solving and building software projects.",
    link: 'https://courses.edx.org/certificates/40a315ad3b3144cca9524c9f22106747',
    delay: 300
  },
  {
    title: 'IT Automation with Python Specialization',
    image: '/images/Google IT Automation with Python.jpg',
    description: 'I completed a six-course certificate by Google, gaining skills in Python, Git, and IT automation. The curriculum focused on coding in Python for automating IT tasks and systems administration. I learned to use Git and GitHub, troubleshoot and debug problems, and apply automation using configuration management and the Cloud, preparing me for advanced IT support roles.',
    link: 'https://coursera.org/share/860f8fe005240885ac71b659416af184',
    delay: 600
  }
]

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12" data-aos="fade-up">
          <h6 className="text-blue-500 text-sm uppercase tracking-wider mb-2">Check out my</h6>
          <h1 className="text-4xl md:text-5xl font-bold">ACHIEVEMENTS</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={achievement.delay}
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
                <p className="text-gray-600 mb-4 text-sm">{achievement.description}</p>
                <Link 
                  href={achievement.link}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
                >
                  Check it →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements