import React from 'react';

function Current({weather, location}) {
  return (
    <div className="current">
      <h1>Current temparature at {location.cityName}, {location.stateCode} is {weather.temp}</h1>
    </div>
  )
}

export default Current;