const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12" data-aos="fade-up">
          <h6 className="text-blue-500 text-sm uppercase tracking-wider mb-2">Get to know more</h6>
          <h1 className="text-4xl md:text-5xl font-bold">ABOUT ME</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up" data-aos-delay="300">
              Education
            </h3>
            <div className="space-y-6">
              <div 
                className="bg-gray-50 p-6 rounded-lg shadow"
                data-aos="fade-up" 
                data-aos-delay="600"
              >
                <h4 className="text-xl font-semibold mb-2">Bachelor in Computer Systems</h4>
                <p className="text-blue-500 mb-1">Riga Technical University (2024 - Current)</p>
                <p className="text-gray-600">Riga, Latvia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About