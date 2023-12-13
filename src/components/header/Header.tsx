import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Icon from '../../common/components/Icon';

const Header = (): JSX.Element => {
  const prevScrollOffset = useRef(0);
  const [scrolled, setScrolled] = useState('');

  useEffect(() => {
    const animateScroll = (): void => {
      if (prevScrollOffset.current > scrollY) {
        setScrolled('');
      } else {
        setScrolled('scrolled');
      }
      prevScrollOffset.current = scrollY;
    };

    let throttleTimer = true;
    const handleScroll = (): void => {
      if (throttleTimer) {
        animateScroll();
        throttleTimer = false;
        setTimeout(() => {
          throttleTimer = true;
        }, 100);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${styles.headerWrapper} ${scrolled}`}>
      <div className={styles.headerContent}>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <ul className={styles.navItems}>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/tenants">Tenants</Link></li>
          <li className={styles.userIcon}><Icon id="icon-user" height={20} width={20}/></li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
