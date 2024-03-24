import { useSelector } from 'react-redux';
import {
  selectAdvertsError,
  selectAdvertsLoading,
} from '../redux/adverts/selectors';
import { HomePageContainer } from 'components/Container/Container.styled';
import Welcome from 'components/Welcome';

import Loader from 'components/Loader';

const HomePage = () => {
  const isLoading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);
  return (
    <HomePageContainer>
      <Welcome />

      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
    </HomePageContainer>
  );
};

export default HomePage;
