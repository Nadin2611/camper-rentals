import sprite from '../../assets/images/sprite.svg';

const FullyIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-fully`}></use>
    </svg>
  );
};

export default FullyIcon;
