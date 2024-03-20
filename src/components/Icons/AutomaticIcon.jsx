import sprite from '../../assets/images/sprite.svg';

const AutomaticIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-automatic`}></use>
    </svg>
  );
};

export default AutomaticIcon;
