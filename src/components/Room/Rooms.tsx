import React from 'react';

import './Rooms.css';

const Rooms = (): JSX.Element => {
  return (
    <>
    {Array(60)
      .fill(1)
      .map((_v, index) => {
        return (
          <div key={index} className="maincontent">
            This is Rooms
          </div>
        );
      })}
    </>
  );
};

export default Rooms;
