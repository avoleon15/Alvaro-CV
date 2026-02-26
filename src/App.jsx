import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import ScrollToTop from './utils/ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project/:projectName" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App
