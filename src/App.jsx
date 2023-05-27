import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home"
import Project1 from './pages/Projectsall/Project1'
import Project2 from './pages/Projectsall/Project2'
import Project3 from './pages/Projectsall/Project3'
import Navbar from './components/Navbar'
import Resume from './pages/resume/Resume'

const App = () => {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project1" element={<Project1/>} />
        <Route path="/project2" element={<Project2/>} />
        <Route path="/project3" element={<Project3/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      </BrowserRouter>
      )
}

export default App