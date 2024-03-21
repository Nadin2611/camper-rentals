import sprite from '../../assets/images/sprite.svg';

const PetrolIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-petrol`}></use>
    </svg>
  );
};

export default PetrolIcon;
