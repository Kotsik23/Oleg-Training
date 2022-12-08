import Features from "./components/features/Features"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Portfolio from "./components/portfolio/Portfolio"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
    </>
  )
}

export default App