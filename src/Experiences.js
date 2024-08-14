import React from 'react'

 function Experiences({experiences}) {
   
  return (
   <div className="intro section" id="experiences">
  <div className="container">
    <h1>Experiences</h1>

    {experiences && experiences.map((experience,index) =>(
        <div key={index}>
  <ul className="work-list">
  
  <h3>{experience.company} - {experience.title}</h3>
  
  <p>{experience.dur}</p>

 
</ul>
<div dangerouslySetInnerHTML={{ __html: experience.description }} />
</div>
    ))}
  
  <hr />
  </div>
</div>

  )
}


export default Experiences