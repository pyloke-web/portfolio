import './home.css'
import MainHeader from '../../components/MainHeader'
import Work from '../../components/Work'
import Projects from '../../components/Projects' 
import RecentProject from '../../components/RecentProject'

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Work/>
    <RecentProject/>
    <Projects/>
    </>
  )
}

export default Home