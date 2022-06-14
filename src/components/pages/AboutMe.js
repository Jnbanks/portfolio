import React from "react";
import '../../styles/style.css';
import background from '../../images/UtahBackground.jpg';
import profilePic from '../../images/ProfPic.JPG';

export default function AboutMe() {
  return (
    <div class="homediv">
      <img class="profpic"  src={profilePic} alt="Profile Picture"></img>
      <img class="background" src={background} alt="Utah-landscape"></img>
      <main class="homemain">
        <p class="Aboutp">
          Hi! <br />
          Enjoy a light history of my professional life... I started working at
          Starbucks when I was 16. There I learned to be patient with myself and
          customers in order to provide quality beverages and a pleasant service
          experience. I still run into and catch up with some of the customers I
          met while working there. <br />
          I went to community college out of high school and initially studied
          for nursing. After two years I realized that nursing was not the best
          fit and so I pivoted for dental hygiene. The hours, wage, flexibility
          and different kind of patient interaction was much more alluring to
          me. <br /> After graduating I had a lot of fun working as a temp and
          going from clinic to clinic all around the Seattle area. I eventually
          wound up in a permanent position at Kirkland Family Dentistry where I
          worked for three years. My passion was always geared towards
          motivation and education and I sold many clients not only on better
          home care but also various dental products, in particular the
          Waterpik. I loved answering questions and seeing clients in their
          realization moments. I also loved seeing the many good results in
          their health not just from the treatment that I provided but in their
          implementation of better habits. That is most motivating and
          rewarding. <br />
          As rewarding as the client relationships are in dental hygiene, there
          are risks with this work such as neck and back pain from the
          repetitive movements, and mental fatigue from repetition as well. For
          this reason I chose to embark on the educational path to computer
          programming, as it is a delight to learn new languages, create and
          improve applications and problem solve on a daily basis. <br />
          So here I am, about to graduate UW's full stack web development boot
          camp and continue as a student of software as I embark on this new
          career path.
        </p>
        </main>

        {/* <a
          class="about-a"
          href="https://docs.google.com/document/d/17monuyLkmYIE0LXkNCoTKoaMZb0lcI5Ed78j7IMPODI/edit?usp=sharing"
          target="no_blank"
        >
          Resume
        </a> */}
    </div>
  );
}
