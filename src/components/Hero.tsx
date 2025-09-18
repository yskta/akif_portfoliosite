import Image from 'next/image'
import Link from 'next/link'
import { BASE_PATH } from '@/config/constants'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-4 lg:px-8">
      <div className="container mx-auto">
        <Image 
          src={`${BASE_PATH}/images/person.jpg`}
          alt="Mehmet Akif Ufacik" 
          width={150} 
          height={150}
          className="rounded-full mx-auto mb-8 lg:hidden"
        />
        
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-aos="fade-up">
            I&apos;M A STUDENT AT<br />
            <Link 
              href="https://www.rtu.lv/en" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              RIGA TECHNICAL UNIVERSITY
            </Link>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="300">
            Hi! I am Mehmet Akif Ufacik, a software enthusiast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="600">
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors text-center"
            >
              Get in Touch
            </a>
            <Link 
              href="https://www.linkedin.com/in/mehmet-akif-ufacik-216807234/" 
              target="_blank"
              className="inline-block px-6 py-3 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-center"
            >
              Let&apos;s connect on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero