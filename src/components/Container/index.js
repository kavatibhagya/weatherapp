import React, { useEffect, useState } from 'react';
import locations from '../../config/locations';

function Container() {
  const [location, setLocation] = useState(locations[0]);

  return (
    <>
      <div>Welcome to Weather App!</div>
    </>
  )
}

export default Container;