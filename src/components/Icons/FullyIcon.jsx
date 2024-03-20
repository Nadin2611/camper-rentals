import sprite from '../../assets/images/sprite.svg';

const FullyIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-fully`}></use>
    </svg>
  );
};

export default FullyIcon;
