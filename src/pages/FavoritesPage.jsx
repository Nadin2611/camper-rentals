import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites } from '../redux/adverts/selectors';
import { clearFavorites } from '../redux/adverts/slice';
import { getUniqueLocations } from 'utilities/utilities';
import AdvertItem from 'components/Catalog/AdvertItem';
import AdvertList from 'components/Catalog/AdvertList';
import { Button } from 'components/Button/Button.styled';

import {
  CatalogPageContainer,
  FavoriteContainer,
} from 'components/Container/Container.styled';
import Filter from 'components/Filter';
import NoFavorites from 'components/NoFavorites';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const locations = getUniqueLocations(favorites);
  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };
  return (
    <CatalogPageContainer>
      <Filter locations={locations} />
      {favorites && favorites.length > 0 ? (
        <FavoriteContainer>
          <AdvertList adverts={favorites}>
            {favorites.map((advert, _id) => (
              <AdvertItem key={_id} advert={advert} />
            ))}
          </AdvertList>
          <Button type="button" onClick={handleClearFavorites}>
            Clear all
          </Button>
        </FavoriteContainer>
      ) : (
        <FavoriteContainer>
          <NoFavorites />
        </FavoriteContainer>
      )}
    </CatalogPageContainer>
  );
};

export default FavoritesPage;
