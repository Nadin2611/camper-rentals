import AdvertItem from './AdvertCard';
import { ListContainer } from './AdvertList.styled';

// const AdvertList = ({ adverts }) => {
//   return (
//     <ListContainer>
//       {adverts.map(advert => {
//         console.log('Key:', advert._id);
//         return <AdvertItem key={advert._id} advert={advert} />;
//       })}
//     </ListContainer>
//   );
// };

const AdvertList = ({ adverts }) => {
  return (
    <ListContainer>
      {adverts.map((advert, index) => (
        <AdvertItem key={index} advert={advert} />
      ))}
    </ListContainer>
  );
};

export default AdvertList;
