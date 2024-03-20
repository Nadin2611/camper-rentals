import sprite from '../../assets/images/sprite.svg';

const ConditionerIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-conditioner`}></use>
    </svg>
  );
};

export default ConditionerIcon;
