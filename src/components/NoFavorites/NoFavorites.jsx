import { Button } from 'components/Button/Button.styled';
import {
  Message,
  NoFavoritesContainer,
  StyledLink,
} from './NoFavorites.styled';

const NoFavoritesMessage = () => {
  return (
    <NoFavoritesContainer>
      <Message>You haven't added any campers to your favorites yet.</Message>
      <Message>Please redistribute to the catalog</Message>
      <StyledLink to="/catalog">
        <Button type="button">Go to Catalog</Button>
      </StyledLink>
    </NoFavoritesContainer>
  );
};

export default NoFavoritesMessage;
