import { Button } from 'components/Button/Button.styled';
import {
  Message,
  NoFavoritesContainer,
  // StyledLink,
} from './NoFavorites.styled';
import { Link } from 'components/Layout/Layout.styled';

const NoFavoritesMessage = () => {
  return (
    <NoFavoritesContainer>
      <Message>You haven't added any campers to your favorites yet.</Message>
      <Message>Please redistribute to the catalog</Message>
      <Link to="/catalog">
        <Button type="button">Go to Catalog</Button>
      </Link>
    </NoFavoritesContainer>
  );
};

export default NoFavoritesMessage;
