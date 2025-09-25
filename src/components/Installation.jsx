import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Copy, Check, Terminal, Download } from 'lucide-react'

const Installation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const installationSteps = `git clone https://github.com/LucasIsac/Sem-II.git
cd Sem-II
python -m venv venv

# Windows:
venv\\Scripts\\activate

# Linux / Mac:
source venv/bin/activate

pip install -r requirements.txt
streamlit run app.py`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installationSteps)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="installation" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Cómo <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">probar</span> (rápido)
          </h2>
          <p className="text-xl text-gray-300 font-medium">
            Sigue estos pasos para ejecutar FileMate AI en tu máquina local
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Terminal className="w-6 h-6 text-primary-400" />
                <span className="text-gray-300 font-semibold tracking-tight">Terminal</span>
              </div>
              
              <motion.button
                onClick={copyToClipboard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar</span>
                  </>
                )}
              </motion.button>
            </div>

            <pre className="text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
              <code>{installationSteps}</code>
            </pre>
          </div>



          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <motion.a
              href="https://github.com/LucasIsac/Sem-II.git"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gray-200 text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg tracking-tight"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar desde GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Installation