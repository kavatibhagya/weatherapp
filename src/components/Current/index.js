import React from 'react';
import './styles.scss';

function Current({weather, location}) {
  
  const getDate = (tempDate) => {
    const date = new Date();
    date.setMilliseconds(tempDate);

    return date.toLocaleDateString();
  }


  return (
    <div className="current">
      <div className="current__main">
        <h1>Current temparature at {location.cityName}, {location.stateCode} is {weather.temp}</h1>
        <h2>as of {getDate(weather.dt)}</h2>
      </div>
      <div className="current__additional">
        <div>
          <div className="current__item">
            <div>Feels like: </div>
            <div>{weather.feels_like} </div>
          </div>
          <div className="current__item">
            <div>Humidity: </div>
            <div>{weather.humidity}%</div>
          </div>
          <div className="current__item">
            <div>Wind speed: </div>
            <div>{weather.wind_speed} mph</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Current;