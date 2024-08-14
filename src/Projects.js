import React from 'react'
import './project.css'
export default function Projects({projects}) {
  return (
    <div className="section " id="projects">
    <div className="container">
      <h1>Projects</h1>
      {projects && projects.map((project,index)=>(
 <ul key={index} className="skill-list list-flat">
 
 <li>
    <a target='_blank' href={project.url}>{project.title}</a>
    
    </li>
</ul>
    ))}
    
    <hr />
    </div>
  </div>
    // <div className='section' >
    //       <h1  style={{margin: 'auto',
    //     maxWidth: '662px',
    //     padding: '0 20px',paddingBottom:'15px'}}>Projects</h1>
   
    // <div className='container'  id="projects">
     
    //  {projects && projects.map((project,index) =>(
    //            <div className='project-card' >
    //            <img style={{height:'180px',width:'100%'}} src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt=""  />
    //            <div className='card-content'>
    //              <h3 className='card-title'>{project.title}</h3>
    //              <p className='card-description'>{project.description}</p>
    //              <a href={project.url} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
    //                View 
    //              </a>
    //            </div>
    //          </div>
            
    //  ))}
    //      </div>
       
    
      
         
      
    // </div>
  )
}
