import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (): JSX.Element => {
  return (
    <>
    {Array(60)
      .fill(1)
      .map((_v, index) => {
        return (
          <div key={index} className="maincontent">
            This is Dashboard
            <Link to="/rooms">Contact</Link>
          </div>
        );
      })}
    </>
  );
};

export default Dashboard;
