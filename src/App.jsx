import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import SelectedWork from './components/SelectedWork/SelectedWork.jsx'
import Approach from './components/Approach/Approach.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import ProjectDetail from './components/ProjectDetail/ProjectDetail.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SelectedWork />
      <Approach />
      <About />
      <Contact />
    </>
  )
}

function ProjectsPage() {
  return <SelectedWork />
}

function ProjectDetailPage() {
  return <ProjectDetail />
}

function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
