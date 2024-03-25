import sprite from '../../assets/images/sprite.svg';

const StarIcon = ({ size, color }) => {
  return (
    <svg width={size} height={size} fill={color} stroke={color}>
      <use href={`${sprite}#icon-star`}></use>
    </svg>
  );
};

export default StarIcon;
