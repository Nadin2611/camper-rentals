import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/adverts/operations';
import {
  selectAdverts,
  selectAdvertsLoading,
} from '../redux/adverts/selectors';

import AdvertList from 'components/Catalog/AdvertList';
import { CatalogPageContainer } from 'components/Container/Container.styled';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import ModalDetails from 'components/Modal/ModalDetails';
// import { Outlet } from 'react-router-dom';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsLoading);
  const locations = [...new Set(adverts.map(advert => advert.location))];

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(adverts);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  const handleShowModal = () => {
    setIsModalOpen(true);
    console.log(locations);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <CatalogPageContainer>
      <Filter locations={locations} />
      <AdvertList adverts={adverts} onShowMore={handleShowModal} />
      {isModalOpen && (
        <ModalDetails advert={adverts[0]} closeModal={handleModalClose} />
      )}

      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </CatalogPageContainer>
  );
};

export default CatalogPage;
