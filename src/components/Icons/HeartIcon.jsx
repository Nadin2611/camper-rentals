import sprite from '../../assets/images/sprite.svg';

const HeartIcon = ({ size, fill }) => {
  return (
    <svg width={size} height={size} fill={fill}>
      <use href={`${sprite}#icon-heart`}></use>
    </svg>
  );
};

export default HeartIcon;
