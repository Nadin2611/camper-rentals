import AdvertItem from './AdvertItem';
import { ListContainer } from './AdvertList.styled';

const AdvertList = ({ adverts, onShowMore }) => {
  return (
    <ListContainer>
      {adverts.map((advert, index) => (
        <AdvertItem key={index} advert={advert} onShowMore={onShowMore} />
      ))}
    </ListContainer>
  );
};

export default AdvertList;
