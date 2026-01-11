import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
        <p>&copy; 2026 Anirban Debnath. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
