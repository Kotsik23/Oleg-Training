import Blog from "./components/blog/Blog"
import Contacts from "./components/contacts/Contacts"
import Features from "./components/features/Features"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Portfolio from "./components/portfolio/Portfolio"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Blog />
        <Contacts />
      </main>
    </>
  )
}

export default App