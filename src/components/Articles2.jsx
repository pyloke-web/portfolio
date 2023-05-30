import React from 'react'
import {article2} from '../data'

const Articles = () => {
        return (    
        <div className="container article-container">
        {
            article2.map(({image,title,info,summary,problem,solution,conclusion})=>
            {
                return(
                    <div className="article__article" >
                        <h2>{title}</h2>
                        <p>{info}</p>
                        <img src={image} alt='Project Photo'></img>
                        <div className="article__article-wrap">
                            <h5>Summary</h5>
                            <p>{summary}</p>
                            <h5>Problem Statement</h5>    
                            <p>{problem}</p>
                            <h5>Solution</h5>    
                            <p>{solution}</p>
                            <h5>Conclusion</h5>    
                            <p>{conclusion}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Articles