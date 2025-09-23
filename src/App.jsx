import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Team from './components/Team'
import Installation from './components/Installation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
      <Hero />
      <About />
      <Technologies />
      <Team />
      <Installation />
      <Footer />
    </div>
  )
}

export default App