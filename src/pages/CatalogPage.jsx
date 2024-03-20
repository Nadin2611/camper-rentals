import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/adverts/operations';
import {
  selectAdverts,
  selectAdvertsLoading,
  selectAdvertsError,
} from '../redux/adverts/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(adverts);
  return (
    <div>
      <h2>Catalog Page</h2>
      {/* <ul>
        {adverts.map(advert => (
          <li key={advert._id}>{advert.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default CatalogPage;
