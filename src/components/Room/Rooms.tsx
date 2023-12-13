import React from 'react';

import RoomCard from './RoomCard';
import styles from './Rooms.module.scss';
import SectionHeading from '../../common/components/SectionHeading';

const Rooms = (): JSX.Element => {
  return (
    <div className={styles.roomsWrapper}>
      <SectionHeading headingText="Tenants" />
      <div className={styles.roomContent}>
        {Array(60)
          .fill(1)
          .map((_v, index) => {
            return (
              <RoomCard key={index} room={ { id: 1, pic: 'https://picsum.photos/400/300', rent: 123, type: '', sharing: 2, desc: '' } } />
            );
          })}
      </div>
    </div>
  );
};

export default Rooms;
