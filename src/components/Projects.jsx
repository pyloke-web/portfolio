import Cardproject from '../UI/Cardproject'
import { projects } from '../data'

const Projects = () => {
  return (
    <section className="projects">
      <h1>Past projects</h1>
      <div className="project">
      <div className="container project__container">
        <div className="project__wrapper">
          {
            projects.map(({id, image,title,info,method,tag}) => {
              return(
                <Cardproject className="projects__project" key={id}>
                     <p>{method}</p>
                     
                 <img src={image} alt="Project Image" /><h6>{tag}</h6>
                  <h4>{title}</h4>
                  <h5>{info}</h5>
               

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