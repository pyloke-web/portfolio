import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import { programs } from '../data'

const Work = () => {
  return (
    <section className="work">
        <div className="container work__container">
            <div className="work__head">
                <div className="work__wrapper">
                    {
                      programs.map(({id,icon,title,info}) => {
                        return(
                          <Card className="work__work" key = {id} >
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                          </Card>
                        )
                      })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work