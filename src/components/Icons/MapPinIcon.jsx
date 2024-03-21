import sprite from '../../assets/images/sprite.svg';

const MapPinIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-map-pin`}></use>
    </svg>
  );
};

export default MapPinIcon;
