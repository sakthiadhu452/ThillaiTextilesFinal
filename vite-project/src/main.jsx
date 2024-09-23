import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ParallaxProvider } from "react-scroll-parallax";
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </StrictMode>,
)
