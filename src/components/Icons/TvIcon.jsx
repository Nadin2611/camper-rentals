import sprite from '../../assets/images/sprite.svg';

const TvIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-tv`}></use>
    </svg>
  );
};

export default TvIcon;
