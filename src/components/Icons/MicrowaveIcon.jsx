import sprite from '../../assets/images/sprite.svg';

const MicrowaveIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-microwave`}></use>
    </svg>
  );
};

export default MicrowaveIcon;
