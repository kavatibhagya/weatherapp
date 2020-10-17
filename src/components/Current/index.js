import React from 'react';
import './styles.scss';

function Current({weather, location}) {
  
  const getDate = (tempDate) => {
    const date = new Date();
    date.setMilliseconds(tempDate);

    return date.toLocaleDateString();
  }

  const tempDescription = (list) => {
    return list.reduce((desc, item) => {
      desc = desc.length ? `${desc}, ${item.description}` : item.description;
      return desc;
    }, '');
  }


  return (
    <div className="current">
      <div className="current__main">
        <div>
          <h2>{location.cityName}, {location.stateCode}</h2>
          <h4>as of {getDate(weather.dt)}</h4>
          <h1 className="current__temp">{weather.temp}</h1>
          <h2 className="current__desc">{tempDescription(weather.weather)}</h2>
        </div>
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
          <div className="current__item">
            <div>Visibiltiy: </div>
            <div>{weather.visibility/1000} mi</div>
          </div>
        </div>
        <div>
        <div className="current__item">
            <div>Dew Point: </div>
            <div>{weather.dew_point}</div>
          </div>
          <div className="current__item">
            <div>UV Index: </div>
            <div>{weather.uvi}</div>
          </div>
          <div className="current__item">
            <div>Pressure: </div>
            <div>{weather.pressure}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Current;