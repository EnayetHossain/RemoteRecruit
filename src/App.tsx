import './App.css'
import FAQ from './components/faq'
import Footer from './components/footer'
import GetStarted from './components/getStarted'
import Hero from './components/hero'
import Pricing from './components/pricing'
import Profile from './components/profile'
import Reach from './components/reach'
import Navbar from './components/shared/navbar'
import ScrollToTop from './components/shared/scrollToTop'

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Reach />
      <Pricing />
      <Profile />
      <GetStarted />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
