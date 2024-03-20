import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/adverts/operations';
import {
  selectAdverts,
  selectAdvertsLoading,
} from '../redux/adverts/selectors';

import AdvertList from 'components/Catalog/AdvertList';
import { Container } from 'components/Container/Container.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsLoading);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  console.log(adverts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <AdvertList adverts={adverts} />
    </Container>
  );
};

export default CatalogPage;
