import Cardproject from '../UI/Cardproject'
import { projects2 } from '../data'



const DevProjects = () => {
  return (
    <section className="devprojects">
      <h1>Other Projects</h1>
      <p>Project demos available upon requests.</p>
      <div className="devproject">
      <div className="container devproject__container">
        <div className="devproject__wrapper">
          {
            projects2.map(({id, image,title,info,method,tag}) => {
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

export default DevProjects