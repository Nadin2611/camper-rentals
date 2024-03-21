import sprite from '../../assets/images/sprite.svg';

const VanIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-van`}></use>
    </svg>
  );
};

export default VanIcon;
