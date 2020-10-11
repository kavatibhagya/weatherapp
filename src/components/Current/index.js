import React from 'react';
import './styles.scss';

function Current({weather, location}) {
  
  const getDate = (tempDate) => {
    const date = new Date();
    date.setMilliseconds(tempDate);

    return date.toLocaleDateString();
  }

  const tempDescription = (list) => {
    return list.reduce((item, desc) => desc = `${desc}, ${item.description}`, '');
  }


  return (
    <div className="current">
      <div className="current__main">
        <div>
          <h2>{location.cityName}, {location.stateCode}</h2>
          <h1 className="current__temp">{weather.temp}</h1>
          <h2 className="current__desc">{tempDescription(weather.weather)}</h2>
        </div>
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