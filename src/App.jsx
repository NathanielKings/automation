import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import SelectedWork from './components/SelectedWork/SelectedWork.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
      </main>
    </>
  )
}

export default App
