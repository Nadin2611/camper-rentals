import sprite from '../../assets/images/sprite.svg';

const ShowerIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#shower`}></use>
    </svg>
  );
};

export default ShowerIcon;
