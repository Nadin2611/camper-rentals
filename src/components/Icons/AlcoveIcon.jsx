import sprite from '../../assets/images/sprite.svg';

const AlcoveIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-alcove`}></use>
    </svg>
  );
};

export default AlcoveIcon;
