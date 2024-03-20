import sprite from '../../assets/images/sprite.svg';

const HobIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-hob`}></use>
    </svg>
  );
};

export default HobIcon;
