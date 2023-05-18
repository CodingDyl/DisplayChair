import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { CustomizationProvider } from './contexts/Customization'
import Configurator from './components/Configurator'

function App() {

  return (
    <CustomizationProvider>
    <div className="App">
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={['\#213547']} />
        <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience />
      </Canvas>
      <Configurator />
    </div>
    </CustomizationProvider>
  )
}

export default App
