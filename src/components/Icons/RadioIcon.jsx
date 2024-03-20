import sprite from '../../assets/images/sprite.svg';

const RadioIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#radio`}></use>
    </svg>
  );
};

export default RadioIcon;
