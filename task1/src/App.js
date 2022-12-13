import Blog from "./components/Blog/Blog"
import Contacts from "./components/Contacts/Contacts"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import Socials from "./components/Socials/Socials"

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
        <Socials />
      </main>
      <Footer />
    </>
  )
}

export default App