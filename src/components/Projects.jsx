import Cardproject from '../UI/Cardproject'
import { projects } from '../data'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from "react-icons/ai"


const Projects = () => {
  return (
    <section className="projects">
      <h1>Data Projects</h1>
      <div className="project">
      <div className="container project__container">
        <div className="project__wrapper">
          {
            projects.map(({id, image,title,info,method,tag,path}) => {
              return(
                <Cardproject className="projects__project" key={id}>
                     <p>{method}</p>
                     
                 <img src={image} alt="Project Image" /><h6>{tag}</h6>
                  <h4>{title}</h4>
                  <h5>{info}</h5>
                  <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>

                </Cardproject>
              )
            }
            
            )
          }
        </div>  </div>
      </div>     
    </section>
  )
}

export default Projects