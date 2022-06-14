import React from 'react';
import '../../styles/style.css';
import background from '../../images/UtahBackground.jpg';
import profilePic from '../../images/ProfPic.JPG';


export default function Resume() {
  return (
    <div class="homediv">
      <main class="homemain">
      <p class="homep">
      HTML, CSS, Javascript, Github, APIs, Node.js, Object-Oriented Programming (OOP), bootstrap, Express.js, SQL, sequelize, Object-Relational Mapping, Mongodb, Model-View Controller (MVC), NoSQL, Progressive Web Applications (PWA), React, MERN, REST  
      </p>
      <a
          class="about-a"
          href="https://docs.google.com/document/d/17monuyLkmYIE0LXkNCoTKoaMZb0lcI5Ed78j7IMPODI/edit?usp=sharing"
          target="no_blank"
        >
          Resume
        </a>
      </main>
    </div>
  );
}
