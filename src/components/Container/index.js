import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.scss';
import locations from '../../config/locations';
import api from '../../config/api';
import Current from '../Current';
import Hourly from '../Hourly';

function Container() {
  const { key, url } = api;
  const [location, setLocation] = useState(locations[0]);
  const [current, setCurrent] = useState();
  const [hourly, setHourly] = useState();
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${url}?lat=${location.lat}&lon=${location.lon}&appid=${key}&units=imperial&exclude=minutely,alerts`);
      
      if(response.data) {
        setCurrent(response.data.current);
        setHourly(response.data.hourly);
      }
    }

    getData();
  }, []);

  return (
    <div className="container">
      {
        current ?
          <Current weather={current} location={location}></Current>
        : ''
      }
      {
        hourly ? <Hourly weather={hourly}></Hourly> : ''
      }
    </div>
  )
}

export default Container;