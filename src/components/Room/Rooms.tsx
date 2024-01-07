import React, { useEffect } from 'react';

// Redux
import { useAppDispatch, useAppSelector } from '../../slices/hooks';
import { fetchRooms } from '../../slices/roomSlice';

// Components
import RoomCard from './RoomCard';
import SectionHeading from '../../common/components/SectionHeading';
import Shimmer from '../../common/components/Shimmer';

// Assets
import styles from './Rooms.module.scss';

const Rooms = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.rooms.rooms);
  const loading = useAppSelector((state) => state.rooms.loading);
  // const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    void dispatch(fetchRooms());
  }, []);

  return (
    <div data-testid="rooms" className={styles.roomsWrapper}>
      <SectionHeading headingText="Rooms" />
      {!loading ? (
        <div className={styles.roomContent}>
          {posts.map((room) => {
            return (
              <RoomCard
                key={room.id}
                room={room}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.roomContent}>
          <Shimmer height={450} width={400}/>
          <Shimmer height={450} width={400}/>
          <Shimmer height={450} width={400}/>
        </div>
      )}
    </div>
  );
};

export default Rooms;
