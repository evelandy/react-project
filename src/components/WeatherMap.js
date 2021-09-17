import React, { useEffect, useState } from 'react';
import '../styles/meetingcard.css';

function WeatherMap({date}) {
  const [weather, setWeather] = useState('');
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  const api_key = `5490a59fae143d65082c3beeaeaf6982`;
  let city = "Houston";
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then(res => res.json())
    .then((data) => {
      if(today === date){
        if(data.weather[0].description === 'clear sky'){
          setWeather('The skies are clear GREAT day for meetings!')
        } else if(data.weather[0].description === 'rain') {
          setWeather("It's raining take an umbrella!")
        } else if(data.weather[0].description === 'thunderstorm') {
          setWeather("It's thunderstorming prepare for delays!")
        } else if(data.weather[0].description === 'snow') {
          setWeather('Brr its cold! dress warm.')
        }
      }
    })
  }, [])
  return (
    <div className="weather">
      {weather}
    </div>
  );
}

export default WeatherMap;

// this pulls weather from OWM api and checks date to see if today is the meeting day if it is it sets state to the message for the weather match