import AdvertItem from './AdvertItem';
import { ListContainer } from './AdvertList.styled';

const AdvertList = ({ adverts, onShowMore }) => {
  return (
    <ListContainer>
      {adverts.map((advert, _id) => (
        <AdvertItem key={_id} advert={advert} onShowMore={onShowMore} />
      ))}
    </ListContainer>
  );
};

export default AdvertList;
