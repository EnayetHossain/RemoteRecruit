import './App.css'
import FAQ from './components/faq'
import Footer from './components/footer'
import GetStarted from './components/getStarted'
import Hero from './components/hero'
import Pricing from './components/pricing'
import Profile from './components/profile'
import Reach from './components/reach'
import Navbar from './components/shared/navbar'

function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Reach />
      <Pricing />
      <Profile />
      <GetStarted />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
