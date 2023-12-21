import React from 'react';

// Redux
import { Room } from '../../slices/roomSlice';

// Assets
import style from './RoomCard.module.scss';

interface RoomCardProps {
  room: Room
}

const RoomCard = ({ room }: RoomCardProps): JSX.Element => {
  const { picture, id, rent, type, sharing, desc } = room;
  return (
    <div className={style.roomCardWrapper}>
      <img className={style.roomCardImg} src={picture} alt="room" />
      <div className={style.roomCardContent}>
        <div className={style.roomCardData}>
          <span>Room Number: </span>
          <span className={style.value}>{id}</span>
        </div>
        <div className={style.roomCardData}>
          <span>Rent: </span>
          <span className={style.value}>{rent}</span>
        </div>
        <div className={style.roomCardData}>
          <span>Room Type: </span>
          <span className={style.value}>{type}</span>
        </div>
        <div className={style.roomCardData}>
          <span>Sharing: </span>
          <span className={style.value}>{sharing}</span>
        </div>
        <div className={style.roomCardData}>
          <span>Description: </span>
          <span className={style.value}>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
