import React from 'react';

import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = (): JSX.Element => {
  return (
    <section className="header-wrapper">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Header;
