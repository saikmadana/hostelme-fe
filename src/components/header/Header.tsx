import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const Header = (): JSX.Element => {
  return (
    <section className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <ul className={styles.navItems}>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/tenants">Tenants</Link></li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
