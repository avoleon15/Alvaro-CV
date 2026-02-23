import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Brownies from './pages/Brownies'
import ClashRoyale from './pages/ClashRoyale'
import Home from './pages/Home'
import MathGame from './pages/MathGame'
import Quetzalink from './pages/Quetzalink'


function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/Quetzalink" element={<Quetzalink />} />
        <Route path="/project/ClashRoyale" element={<ClashRoyale />} />
        <Route path="/project/Brownies" element={<Brownies />} />
        <Route path="/project/MathGame" element={<MathGame />} />
      </Routes>
    </>
  )
}

export default App
