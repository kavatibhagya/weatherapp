import React from 'react';
import './styles.scss';

function Hourly({ weather }) {
  return(
    <div className="hourly">
      {
        weather.map((forecast) => (
          <div className="hourly__card">
            <div className="hourly__temp">{forecast.temp}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Hourly;