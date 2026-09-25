import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import SelectedWork from './components/SelectedWork/SelectedWork.jsx'
import ProjectDetail from './components/ProjectDetail/ProjectDetail.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SelectedWork />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
