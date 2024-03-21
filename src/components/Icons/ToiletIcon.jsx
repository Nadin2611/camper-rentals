import sprite from '../../assets/images/sprite.svg';

const ToiletIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-toilet`}></use>
    </svg>
  );
};

export default ToiletIcon;
