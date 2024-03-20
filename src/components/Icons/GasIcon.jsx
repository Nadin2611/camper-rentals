import sprite from '../../assets/images/sprite.svg';

const GasIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-gas`}></use>
    </svg>
  );
};

export default GasIcon;
