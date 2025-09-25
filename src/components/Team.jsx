import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const teamMembers = [
    {
      name: "Lucas Isaac De La Fuente",
      image: "assets/lucas.jpeg",
      linkedin: "https://www.linkedin.com/in/lucas-isaac-de-la-fuente-071603287/",
      github: "https://github.com/LucasIsac",
      email: "lisaacdlf21@gmail.com"
    },
    {
      name: "Peralta Martin Emiliano",
      image: "assets/martin.jpg",
      linkedin: "https://www.linkedin.com/in/martin-emiliano-peralta-4a826b236/",
      github: "https://github.com/martinprlt",
      email: "#"
    },
    {
      name: "Soreire Lautaro",
      image: "assets/lautY.jpeg",
      linkedin: "#",
      github: "#",
      email: "#"
    }
  ]

  return (
    <section id="team" className="py-20 px-4 bg-gray-700/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Nuestro <span className="gradient-text">Equipo</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
            Conoce a las personas detrás de FileMate AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-primary-100 group-hover:ring-primary-200 transition-all"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/240/3b82f6/ffffff?text=' + member.name.split(' ').map(n => n[0]).join('')
                    }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors tracking-tight">
                  {member.name}
                </h3>
                
                <p className="text-primary-600 font-semibold mb-6 tracking-tight">
                  {member.role}
                </p>

                <div className="flex justify-center space-x-4">
                  {member.linkedin !== "#" && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-green-100 hover:bg-green-500 text-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team