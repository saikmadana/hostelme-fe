import React from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const Header = (): JSX.Element => {
  return (
    <section className={styles.headerWrapper}>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Header;
