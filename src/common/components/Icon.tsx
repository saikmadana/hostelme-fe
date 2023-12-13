import React from 'react';
import sprite from './../../assets/sprite.svg';

interface IconProps {
  id: string
  width?: number
  height?: number
  color?: string
}

const Icon = ({ id, width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width={width} height={height} color={color}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
