import {Link} from 'react-router-dom'
import {SlSocialGithub} from 'react-icons/sl'
import {FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {MdOutlineWavingHand} from 'react-icons/md'

const MainHeader = () => {
  return (
    <header className="main__header">
    <div className="container main__header-container">
      <div className="main__header-content">
      <div className="main__header-circle2"></div>
      <div className="main__header-circle3"></div>
        <h4>REACT PORTFOLIO</h4>
        <h1>Hello, I'm Yen  <MdOutlineWavingHand/></h1>
        <p>Heyya! I am a student wiht a background in psychology, data science and business analytics with a passion towards the intersections of people and technology. This is a portfolio of the work I've done - scroll to explore!
        </p>
        <div className="social__account">
            <a href="https://github.com/pyloke-web" target='_blank'rel='noreferrer noopener'><FaLinkedin/> </a>
            <a href="https://www.linkedin.com/in/lokepak-yen/" target='_blank'rel='noreferrer noopener'><SlSocialGithub/></a>
            <a href = "mailto: pakyenloke@gmail.com"><MdEmail/></a>
        </div>
        <div className="main__header-circle"></div>
      </div>
    </div>
  </header>
  )
}

export default MainHeader