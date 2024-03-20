import sprite from '../../assets/images/sprite.svg';

const BedsIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-beds`}></use>
    </svg>
  );
};

export default BedsIcon;
