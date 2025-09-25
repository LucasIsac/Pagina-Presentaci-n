import { motion } from 'framer-motion'
import { Github, Play, FileText } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <img 
                src="../assets/logo2.png" 
                alt="Eva Files Logo" 
                className="w-16 h-16 object-contain rounded-xl"
              />
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Eva Files</h1>
                <p className="text-gray-300 font-medium">Asistente inteligente de archivos</p>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Manipula archivos con
            <span className="gradient-text block">comandos de voz</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 leading-relaxed max-w-lg font-medium"
          >
            FileMate AI interpreta tus comandos usando Google Gemini y ejecuta conversiones 
            y operaciones sobre archivos con herramientas especializadas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#installation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl tracking-tight"
            >
              <Play className="w-5 h-5 mr-2" />
              Probar en local
            </motion.a>
            
            <motion.a
              href="https://github.com/LucasIsac/Sem-II.git"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-400 transition-colors tracking-tight"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver en GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Project Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Estructura del Proyecto</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-600/50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <code className="text-sm font-mono text-gray-100">app.py</code>
                  <span className="text-xs text-gray-300 ml-auto">Streamlit</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-600/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <code className="text-sm font-mono text-gray-100">agent.py</code>
                  <span className="text-xs text-gray-300 ml-auto">LangChain + Gemini</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-600/50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <code className="text-sm font-mono text-gray-100">tools.py</code>
                  <span className="text-xs text-gray-300 ml-auto">Pillow, PyPDF2</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-200 bg-gray-600/30 p-3 rounded-lg">
                Lista para ejecutarse localmente con Streamlit
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero