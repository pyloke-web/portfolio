import './home.css'
import MainHeader from '../../components/MainHeader'
import Work from '../../components/Work'
import Projects from '../../components/Projects' 
import RecentProject from '../../components/RecentProject'
import DevProjects from '../../components/DevProjects'

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Work/>
    <RecentProject/>
    <Projects/>
    <DevProjects/>
    </>
  )
}

export default Home