import { motion } from 'framer-motion'
import { Github, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold tracking-tight">
            <span>FileMate AI</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              ⚡
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <motion.a
              href="https://github.com/LucasIsac/Sem-II.git"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              <span>Repositorio del proyecto</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            
            <span className="text-gray-500">•</span>
            
            <span className="text-gray-300 font-medium">Licencia MIT</span>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span className="font-medium">© 2025 FileMate AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer