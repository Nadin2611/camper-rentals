import sprite from '../../assets/images/sprite.svg';

const VanIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#van`}></use>
    </svg>
  );
};

export default VanIcon;
