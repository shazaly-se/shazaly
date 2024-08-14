// src/components/About.js
import React from 'react';

const About = ({about}) => {
   
  return (
    <div className="intro section" id="about">
      <div className="container">

        <div className="units-row units-split wrap">
          <div className="unit-20">
            <img src="/img/ava.jpg" alt="Avatar" />
          </div>
          <div className="unit-80">
            <h1>Shazaly Abd algadir Ali</h1>
            <h2>Backend Developer </h2>
          </div>
          <p>
           {about.summary}
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
