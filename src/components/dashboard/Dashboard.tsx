import React from 'react';

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
          </div>
        );
      })}
    </>
  );
};

export default Dashboard;
