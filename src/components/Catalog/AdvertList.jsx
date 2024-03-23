import AdvertItem from './AdvertItem';
import { ListContainer } from './AdvertList.styled';

const AdvertList = ({ adverts, openModal }) => {
  return (
    <ListContainer>
      {adverts.map((advert, _id) => (
        <AdvertItem key={_id} advert={advert} onClick={openModal} />
      ))}
    </ListContainer>
  );
};

export default AdvertList;
