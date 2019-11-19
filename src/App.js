import React from 'react';
import ReactDOM from "react-dom";
import { WEATHER_API, WEATHER_API_KEY } from "./constants";
import logo from './weather.svg';
import './App.css';

const weatherToText = city => {
  let speechSynthesisUtterance = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();
  speechSynthesisUtterance.voice = voices[0];
  if (sessionStorage[city] !== undefined) {
    speechSynthesisUtterance.text = `The Temperature for ${city} is ${
      sessionStorage[city]
    } degrees`;
    speechSynthesis.speak(speechSynthesisUtterance);
  } else {
    fetch(`${WEATHER_API}&q=${city}`, {
      headers: {
        "X-RapidAPI-Key": WEATHER_API_KEY
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(weatherJSON) {
        sessionStorage[city] = weatherJSON.main.temp;
        speechSynthesisUtterance.text = `The Temperature  for ${city} is ${
          weatherJSON.main.temp
        } degrees`;
        speechSynthesis.speak(speechSynthesisUtterance);
      })
      .catch(function(err) {
        speechSynthesisUtterance.text = `unable to get the Temperature for ${city}`;
        speechSynthesis.speak(speechSynthesisUtterance);
      });
  }
};

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <p>Type a <u>City Name</u> to heard the current weather.</p>
        <input id="city" type="text" placeholder="Enter a city name" />
        <button
          onClick={() => weatherToText(document.getElementById("city").value)}
        >
          Listen
        </button>
      </div>
    </div>
  );
}

export default App;
