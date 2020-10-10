import React from 'react';
import './styles.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__logo">
          Weather App
        </h2>
      </div>
    </header>
  )
}

export default Header;