import sprite from '../../assets/images/sprite.svg';

const WaterIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#water`}></use>
    </svg>
  );
};

export default WaterIcon;
