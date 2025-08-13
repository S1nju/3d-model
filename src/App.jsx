import { useState } from 'react'

import './App.css'
import Hero from './components/sections/hero/Hero'
import { About } from './components/sections/about/About'
import { Skills } from './components/sections/skills/Skills'
import { ReactLenis } from 'lenis/react';
import Experience from './components/sections/experience/Experience'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ReactLenis root>
      <Hero />
      <About />
      <Skills />
      <Experience />
    </ReactLenis>
    </>
  )
}

export default App
