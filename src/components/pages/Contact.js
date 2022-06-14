import React from 'react';
import '../../styles/style.css';

export default function Contact() {
  return (
    <div>
      <p class='contactp'>If you are interested in seeing more of my work, check out my other projects on Github. Otherwise you can reach me via linkedin, email or phone.</p>
      <ul class='contactul'>
        <li class="contactli">
        <a href="mailto:joku.banks@gmail.com">Email</a>
        </li>  
        <li class="contactli">
        <a href="tel:4255308171">Phone</a>  
        </li>  
      </ul>
    </div>
  );
}
