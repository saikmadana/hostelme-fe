import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Dashboard.module.scss';

const Dashboard = (): JSX.Element => {
  return (
    <>
    {Array(60)
      .fill(1)
      .map((_v, index) => {
        return (
          <div key={index} className={styles.test}>
            This is Dashboard
            <Link to="/rooms">Contact</Link>
          </div>
        );
      })}
    </>
  );
};

export default Dashboard;
