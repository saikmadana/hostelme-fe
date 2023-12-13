import React from 'react';
import style from './RoomCard.module.scss';

interface RoomCardProps {
  room: {
    id: number
    pic: string
    rent: number
    type: string
    sharing: number
    desc: string
  }
}

const RoomCard = ({ room }: RoomCardProps): JSX.Element => {
  const { pic, id, rent, type, sharing, desc } = room;
  return (
    <div className={style.roomCardWrapper}>
      <img className={style.roomCardImg} src={pic} alt="room" />
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
