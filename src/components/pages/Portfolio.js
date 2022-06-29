import React from "react";
import restaurantimg from "../../images/Restaurant_App.png";
import weather from '../../images/Weather_App.png'
import quiz from '../../images/Dental_Quiz_App.png';
import password from '../../images/Password_App.png';

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
        <p class='description'>This application uses the Yelp API to search restuarants by keyword and location. You also have the ability to save your favorite restaurants for later reference. Handlebars are used for page rendering and the languages used are html, css and javascript.</p>
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
        <p class="description">This application lets you look up the current weather and five-day-forecast by the city you type into the input field. Some of the information it provides includes temperature, wind and UV index.</p>
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
        <p class="description">Ready to test your knowledge of dental hygiene? This short timed quiz uses javascript, arrays, css and html to track your knowledge of this medical topic.</p>
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
        <p class="description">Lastly I bring you an application that produces a random password through a series of prompts which determine how complex your password will be. Just plug in your parameters and there you go, password provided!</p>
      </section>
    </div>
  );
}
