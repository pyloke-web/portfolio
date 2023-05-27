import Cardproject from '../UI/Cardproject'
import { recentprojects } from '../data'
import {AiFillCaretRight} from "react-icons/ai"
import {Link} from 'react-router-dom'

const RecentProject = () => {
  return (
    <section className="recentprojects">
      <h1>Highlights</h1>
      <div className="recentproject">
      <div className="container recentprojects__container">
        <div className="recentprojects__wrapper">
          {
            recentprojects.map(({id, image,title,info,path}) => {
              return(
                <Cardproject className="projects__project" key={id}>
                <img src={image} alt="Project Image" />
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

export default RecentProject