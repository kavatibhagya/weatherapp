import React from 'react';
import { Grommet } from 'grommet';
import theme from './theme';

function App() {
  return (
    <Grommet theme={theme}>
      <header>Welcome to weather app!</header>
    </Grommet>
  );
}

export default App;
