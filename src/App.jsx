import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// 1. HEMOS BORRADO LOS IMPORT DE LOS VIDEOS AQUÍ
import P3Menu from './P3Menu'
import VideoPage from './VideoPage'
import ResumePage from './ResumePage'
import PageTransition from './PageTransition'
import Socials from './Socials'
import AboutMe from './AboutMe'
import './App.css'

function MenuScreen() {
  const navigate = useNavigate()
  return (
    <div id="menu-screen">
      {/* 2. CAMBIADO: src directo a la carpeta public */}
      <video src="/assets/Mainn.mp4" autoPlay loop muted playsInline />
      <P3Menu onNavigate={(page) => {
        if (page === "github") {
          window.open("https://github.com/guillecordel", "_blank")
          return
        }
        navigate(`/${page}`)
      }} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition variant="about"><AboutMe /></PageTransition>
        } />
        <Route path="/resume" element={
          /* 3. CAMBIADO: src como string directo */
          <PageTransition><ResumePage src="/assets/main2.mp4" /></PageTransition>
        } />
        <Route path="/socials" element={
          <PageTransition variant="socials"><Socials /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AnimatedRoutes />
}