import sprite from '../../assets/images/sprite.svg';

const DateIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-date`}></use>
    </svg>
  );
};

export default DateIcon;
