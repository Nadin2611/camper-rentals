import sprite from '../../assets/images/sprite.svg';

const Kitchen = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-kitchen`}></use>
    </svg>
  );
};

export default Kitchen;
