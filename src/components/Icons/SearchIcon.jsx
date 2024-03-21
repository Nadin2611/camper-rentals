import sprite from '../../assets/images/sprite.svg';

const SearchIcon = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#icon-search`}></use>
    </svg>
  );
};

export default SearchIcon;
