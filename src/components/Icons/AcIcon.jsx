import sprite from '../../assets/images/sprite.svg';

const AcIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-ac`}></use>
    </svg>
  );
};

export default AcIcon;
