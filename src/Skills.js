import React from 'react'

export default function Skills({skills}) {
  
  return (
 <div className="skills section second" id="skills">
  <div className="container">
    <h1>Skills</h1>
    {skills && skills.map((skill,index)=>(
 <ul key={index} className="skill-list list-flat">
 
 <li>
 <div dangerouslySetInnerHTML={{ __html: skill.name }} />
</li>
</ul>
    ))}
   
   <hr />
  </div>
</div>

  )
}
