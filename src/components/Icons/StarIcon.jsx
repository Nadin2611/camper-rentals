import sprite from '../../assets/images/sprite.svg';

const StarIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#star`}></use>
    </svg>
  );
};

export default StarIcon;
