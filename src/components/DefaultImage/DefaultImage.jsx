import defaultImage from '../../assets/images/no-photo.jpg';
const DefaultImage = ({ alt }) => {
  return <img src={defaultImage} alt={alt} />;
};

export default DefaultImage;
