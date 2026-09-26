import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import SelectedWork from './components/SelectedWork/SelectedWork.jsx'
import Process from './components/Process/Process.jsx'
import Stack from './components/Stack/Stack.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import ProjectDetail from './components/ProjectDetail/ProjectDetail.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SelectedWork />
      <Process />
      <Stack />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<SelectedWork />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
