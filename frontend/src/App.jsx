import './App.css'
import HeroSection from './components/HeroSection'
import Sidebar from './components/Sidebar'
function App() {

  return (
    <>
     <div className="flex">
      <Sidebar />
      <HeroSection />
    </div>
    </>
  )
}

export default App
