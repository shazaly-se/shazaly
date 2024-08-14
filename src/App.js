import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Experiences from './Experiences';
import Achievements from './Achievements';
import Skills from './Skills';
import Typed from 'typed.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Projects from './Projects';
import Contacts from './Contacts';

function App() {
  const [about,setAbout] = useState({})
  const [experiences,setExperiences] = useState([])
  const [educations,setEducations] = useState([])
  const [skills,setSkills] = useState([])
  const [projects,setProjects] = useState([])
  useEffect(() => {
    axios.get("https://b-prof.onrender.com/cv")
    .then((res)=>{
      if(res.data.success){
      setAbout(res.data.about)
      setEducations(res.data.about.educations)
      setExperiences(res.data.about.experiences)
      setSkills(res.data.about.skills)
      setProjects(res.data.about.projects)
      }
    })
  },[])
  useEffect(() => {
    const options = {
      strings: ["far northern sky", "your galaxy", "everywhere"],
      typeSpeed: 90,
      backDelay: 700,
      contentType: "html",
      loop: true,
    };

    // Ensure element exists before initializing Typed
    const typedElement = document.getElementById('typed');
    if (typedElement) {
      const typed = new Typed(typedElement, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  // Ensure smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const target = event.target.closest('a[href^="#"]');
      if (target) {
        event.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);


  return (
    <div className="App">
      <div className=''>
      <NavBar />
      <About about={about} />
      
      <Experiences experiences={experiences} />
      <Achievements educations={educations} />
      <Skills skills={skills} />
      {/* <Projects projects={projects} /> */}
      <Contacts />
      
      </div>
    </div>
  );
}

export default App;
