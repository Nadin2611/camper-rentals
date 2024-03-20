import sprite from '../../assets/images/sprite.svg';

const FreezerIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-freezer`}></use>
    </svg>
  );
};

export default FreezerIcon;
