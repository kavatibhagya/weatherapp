import React from 'react';
import './styles.scss';
import dateTime from '../../utils/date';
const { getDate, getTime } = dateTime;

function Hourly({ weather }) {
  return(
    <div className="hourly">
      {
        weather.map((forecast, index) => (
          <div key={index} className="hourly__card">
            <div className="hourly__temp">{forecast.temp}</div>
            <div>{getDate(forecast.dt)}</div>
            <div className="hourly__time">{getTime(forecast.dt)}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Hourly;