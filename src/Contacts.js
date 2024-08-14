import React from 'react'
import { LinkedinOutlined,GithubOutlined } from '@ant-design/icons';

export default function Contacts() {
  return (
    <div style={{paddingTop:'50px',paddingBottom:'50px'}} className="section " id="contacts">
    <div className="container">
      <h1>Contacts</h1>
     
          <div >
   Email: shazaly.se@gmail.com
   <br />
   Mobile: 00971529931288
   
   
   <br />
   <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:'20px'}}>
   <div style={{display:'flex',flexDirection:'row',alignItems:'center',paddingTop:'20px'}}>
   <a href="https://www.linkedin.com/in/shazaly-abd-algadir-ali-a8266a138" target='_blank' rel='noopener noreferrer' >
   <LinkedinOutlined style={{ color: '#0077B5', fontSize: '30px' }} />
                     
                  </a>


                  <a href="https://github.com/shazaly-se" target='_blank' rel='noopener noreferrer' >
                  <GithubOutlined style={{ color: '#333', fontSize: '30px',paddingLeft:'5px' }}  /> 
                  </a>
                  </div>

                 
                  <a href="/shazaly-abdalgadir.pdf" target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                  Download cv 
                  </a>
                  </div>
  <div  />
  </div>
      
    
     
    </div>
  </div>
  )
}
