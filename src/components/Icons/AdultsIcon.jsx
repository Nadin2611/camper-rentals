import sprite from '../../assets/images/sprite.svg';

const AdultsIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-adults`}></use>
    </svg>
  );
};

export default AdultsIcon;
