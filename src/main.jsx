import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const initLenis = () => {
  if (typeof window === 'undefined' || typeof window.Lenis !== 'function') return () => {}

  const lenis = new window.Lenis({
    smoothWheel: true,
    syncTouch: true,
    duration: 1.1,
  })

  let frameId
  const raf = (time) => {
    lenis.raf(time)
    frameId = requestAnimationFrame(raf)
  }

  frameId = requestAnimationFrame(raf)

  return () => {
    cancelAnimationFrame(frameId)
    lenis.destroy()
  }
}

const cleanupLenis = initLenis()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
