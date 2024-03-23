import sprite from '../../assets/images/sprite.svg';

const HeartIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-heart`}></use>
    </svg>
  );
};

export default HeartIcon;
