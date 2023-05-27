import React from 'react'
import './resume.css'
import {FaGraduationCap} from 'react-icons/fa'
import {MdNavigateNext} from 'react-icons/md'
import {SlSocialGithub} from 'react-icons/sl'
import {FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Resume = () => {
  return (
    <div className="container resume__container">
        <h5>Connect with me!</h5>
        <div className="social__account">
            <a href="https://github.com/pyloke-web" target='_blank'rel='noreferrer noopener'><FaLinkedin/> </a>
            <a href="https://www.linkedin.com/in/lokepak-yen/" target='_blank'rel='noreferrer noopener'><SlSocialGithub/></a>
            <a href = "mailto: pakyenloke@gmail.com"><MdEmail/></a>
        </div>
        <div className="education">
            <div className="resume__header">
            <span><FaGraduationCap/></span> <h4>EDUCATION</h4>
            </div>
            <div className="education__wrapper">
            <h5> <MdNavigateNext/> University of Nottingham</h5>
            <h6>BSc Psychology (Hons) | Graduation: June 2023</h6>
            <h5><MdNavigateNext/>University of London, London School of Economics academic direction </h5>
            <h6>BSc Data Science and Business Analytics (Hons) | Graduation: May 2024</h6>
            <h5><MdNavigateNext/>University of West London</h5>
            <h6>Diploma of the London College of Music | Graduation: May 2024</h6>
            <h5><MdNavigateNext/> Taylor's College Lakeside Campus, Malaysia 	</h5>
            <h6>Cambridge A-levels </h6>
            <h5><MdNavigateNext/>Stamford Raffles College, Singapore</h5>
            <h6>Executive Diploma in Management</h6>
            </div>
        </div>
    </div>
  )
}

export default Resume