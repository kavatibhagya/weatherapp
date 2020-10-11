import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.scss';
import locations from '../../config/locations';
import api from '../../config/api';

function Container() {
  const { key, url } = api;
  const [location, setLocation] = useState(locations[0]);
  const [weather, setWeather] = useState();
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${url}?q=${location.cityName},${location.cityCode},${location.countryCode}&appid=${key}&units=imperial&cnt=5`);
      
      console.log(response.data);

      if(response.data) {
        setWeather(response.data);
      }
    }

    getData();
  }, []);

  return (
    <div className="container">
      <div>Welcome to Weather App!</div>
      {
        weather ?
          <div className="current-weather">
            <h1>Temparature at {location.cityName} is {weather.main.temp}</h1>
          </div>
        : ''
      }
    </div>
  )
}

export default Container;