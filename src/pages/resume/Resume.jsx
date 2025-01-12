import React from 'react'
import './resume.css'
import {FaGraduationCap} from 'react-icons/fa'
import {MdNavigateNext} from 'react-icons/md'
import {SlSocialGithub} from 'react-icons/sl'
import {FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {FaKaggle} from 'react-icons/fa'
import { FaRocket } from "react-icons/fa"
import ScrollToTop from "../../components/ScrollToTop"


const Resume = () => {
  return (
    <>
    <ScrollToTop/>
    <div className="container resume__container">
        <h5>Connect with me!</h5>
        <div className="social__account">
            <a href="https://github.com/pyloke-web" target='_blank'rel='noreferrer noopener'><FaLinkedin/> </a>
            <a href="https://www.linkedin.com/in/lokepak-yen/" target='_blank'rel='noreferrer noopener'><SlSocialGithub/></a>
            <a href="https://www.kaggle.com/pakyenn/code" target='_blank'rel='noreferrer noopener'><FaKaggle/></a>
            <a href = "mailto: pakyenloke@gmail.com"><MdEmail/></a>
        </div>
          <div className="education">
              <div className="resume__header">
              <span><FaGraduationCap/></span> <h4>EDUCATION</h4>
              </div>
              <div className="education__wrapper">

              <h5><MdNavigateNext/>University of London</h5>
              <h6>BSc Data Science and Business Analytics (Hons) | Graduation: 2025</h6>

              <h5> <MdNavigateNext/> University of Nottingham</h5>
              <h6>BSc Psychology (Hons) | First Class Honours </h6>

              <h5><MdNavigateNext/>Stamford Raffles College, Singapore</h5>
              <h6>Executive Diploma in Management</h6>
              
              </div>
          </div>
          <div className="education">
              <div className="resume__header">
              <span><FaRocket /></span> <h4>WORK EXPERIENCE</h4>
              </div>

              <div className="education__wrapper">
              <div className="education__individual">
                <h5> <MdNavigateNext/> Analyst, BowerGroupAsia</h5>
                <h6>August 2023 - Present</h6>
              </div>

              <div className="education__individual">
              <h5><MdNavigateNext/>Youth Sounding Board Member, European Commission</h5>
              <h6>August 2023 - Present</h6>
              </div>

              <div className="education__individual">
              <h5><MdNavigateNext/>Data Science Ambassador, ASEAN Foundation</h5>
              <h6>February 2023 - May 2023</h6>
              </div>

              <div className="education__individual">
              <h5><MdNavigateNext/>Public Policy Associate, Zak Capital</h5>
              <h6>September 2022 - December 2022</h6>
              </div>

              <div className="education__individual">
              <h5><MdNavigateNext/>Policy Research Internship, Khazanah Research Institute</h5>
              <h6>June 2022 - August 2022</h6>
              </div>

              <div className="education__individual">
              <h5><MdNavigateNext/>Co-founder, Skill Defyne Global</h5>
              <h6>February 2021 - May 2022</h6>
              </div>
              </div>
          </div>
    </div>
    </>
  )
}

export default Resume