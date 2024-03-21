import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/adverts/operations';
import {
  selectAdverts,
  selectAdvertsLoading,
} from '../redux/adverts/selectors';

import AdvertList from 'components/Catalog/AdvertList';
import { CatalogPageContainer } from 'components/Container/Container.styled';
import SideBar from 'components/SideBar';
import Loader from 'components/Loader';
import ModalDetails from 'components/Modal/ModalDetails';

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
      <SideBar locations={locations} />
      <AdvertList adverts={adverts} onShowMore={handleShowModal} />
      {isModalOpen && (
        <ModalDetails advert={adverts[0]} closeModal={handleModalClose} />
      )}
    </CatalogPageContainer>
  );
};

export default CatalogPage;
