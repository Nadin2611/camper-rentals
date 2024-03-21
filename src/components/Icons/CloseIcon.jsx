import sprite from '../../assets/images/sprite.svg';

const CloseIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-close`}></use>
    </svg>
  );
};

export default CloseIcon;
