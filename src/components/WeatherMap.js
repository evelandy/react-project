import React, { useEffect } from 'react';

function WeatherMap() {
  const api_key = `5490a59fae143d65082c3beeaeaf69821`;
  let city = "Houston";
  useEffect(() => {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then((res) => {
      let data = res.json();
      return data;
    })
    .then((data) => {
      console.log(data.clouds)
    })
  })
  return (
    <div>
      Weather Map
    </div>
  );
}

export default WeatherMap;
