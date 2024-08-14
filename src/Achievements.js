import React from 'react'

export default function Achievements({educations}) {

  return (
    
<div className="section" id="achievements">
  <div className="container">
    <h1>Education</h1>
    {educations && educations.map((education,index)=>(
  <ul className="work-list">
 
  <h3><a target='_blank' href="https://neelain.edu.sd/">{education.school} - {education.location}</a></h3>
  <li>{education.degree} - {education.year}</li>
  

 
</ul>
    ))}
  
 
  <hr />
  </div>
</div>

  )
}
