import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.scss';
import locations from '../../config/locations';
import api from '../../config/api';
import Current from '../Current';

function Container() {
  const { key, url } = api;
  const [location, setLocation] = useState(locations[0]);
  const [current, setCurrent] = useState();
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${url}?lat=${location.lat}&lon=${location.lon}&appid=${key}&units=imperial&exclude=minutely,alerts`);
      
      console.log(response);
      if(response.data) {
        setCurrent(response.data.current);
      }
    }

    getData();
  }, []);

  return (
    <div className="container">
      <div>Welcome to Weather App!</div>
      {
        current ?
          <Current weather={current} location={location}></Current>
        : ''
      }
    </div>
  )
}

export default Container;