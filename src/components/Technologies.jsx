import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Technologies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    {
      name: "Python",
      icon: "🐍",
      description: "Lenguaje principal del backend y herramientas de procesamiento.",
      color: "from-yellow-400 to-green-500"
    },
    {
      name: "Google Gemini",
      icon: "🤖",
      description: "Modelo usado para interpretar y razonar los comandos del usuario.",
      color: "from-blue-400 to-purple-500"
    },
    {
      name: "LangChain",
      icon: "🔗",
      description: "Orquestador entre el LLM y las herramientas del proyecto.",
      color: "from-green-400 to-blue-500"
    },
    {
      name: "Streamlit",
      icon: "⚡",
      description: "Interfaz web rápida para probar la app localmente.",
      color: "from-red-400 to-pink-500"
    },
    {
      name: "CloudConvert",
      icon: "☁️",
      description: "Conversión robusta entre formatos como PDF↔Word.",
      color: "from-purple-400 to-indigo-500"
    },
    {
      name: "Otras librerías",
      icon: "📚",
      description: "Pillow, PyPDF2, python-docx, pdf2docx, SpeechRecognition, ElevenLabs.",
      color: "from-indigo-400 to-cyan-500"
    }
  ]

  return (
    <section id="technologies" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Tecnologías <span className="gradient-text">aplicadas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {tech.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors tracking-tight">
                  {tech.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-medium">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies