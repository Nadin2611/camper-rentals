import sprite from '../../assets/images/sprite.svg';

const CdIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-cd`}></use>
    </svg>
  );
};

export default CdIcon;
