import React from "react";
import moviepic from "../../images/Movie-1200-630.jpg";
import restaurantimg from "../../images/restaurant-portfolio-img.webp";
import weather from '../../images/weatherimg.jpg'
import quiz from '../../images/quiz.webp';
import password from '../../images/passwordImage.webp';

export default function Project() {
  return (
    <div>
      {/* Restaurant Finder */}
      <section class="card">
        <a href="https://roogle-2022.herokuapp.com/" target="no_blank">
          {" "}
          <img src={restaurantimg} alt="restaurant finder app" />{" "}
        </a>
        <a href="https://github.com/erict001/Restaurant-Finder" target="no_blank" class="gitLink">Github Repository</a>
        <h3>Restaurant Finder</h3>
      </section>
      {/* Movie and Beverage Pairer */}
      <section class="card">
        <a
          href="https://jnbanks.github.io/Project1-Movie-Beverage/"
          target="no_blank"
        >
          {" "}
          <img src={moviepic} alt="movie finder" />{" "}
        </a>
        <a href="https://github.com/Jnbanks/Project1-Movie-Beverage" target="no_blank" class="gitLink">Github Repository</a>
        <h3>Boozy Movies</h3>
      </section>
      {/* Weather Forecast Search */}
      <section class="card">
        {" "}
        <a href="https://jnbanks.github.io/WeatherApp/" target="no_blank">
          {" "}
          <img src={weather} alt="weather" />
        </a>
        <a href="https://github.com/Jnbanks/WeatherApp" target="no_blank" class="gitLink">Github Repository</a>
        <h3>Weather Analysis</h3>
      </section>
      {/* Code Quiz */}
      <section class="card">
        {" "}
        <a href="https://jnbanks.github.io/Code-Quiz/" target="no_blank">
          {" "}
          <img src={quiz} alt="quiz" />
        </a>
        <a href="https://github.com/Jnbanks/Code-Quiz" target="no_blank" class="gitLink">Github Repository</a>
        <h3>Dental Hygiene Quiz</h3>
      </section>
      {/* Password Generator */}
      <section class="card">
        {" "}
        <a href="https://jnbanks.github.io/Password-Generator/" target="no_blank">
          {" "}
          <img src={password} alt="password" />
        </a>
        <a href="https://github.com/Jnbanks/Password-Generator" target="no_blank" class="gitLink">Github Repository</a>
        <h3>Password Generator</h3>
      </section>
    </div>
  );
}
