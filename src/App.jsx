import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

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
