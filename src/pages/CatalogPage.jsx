import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/adverts/operations';
import {
  selectAdverts,
  selectAdvertsLoading,
} from '../redux/adverts/selectors';

import AdvertList from 'components/Catalog/AdvertList';
import {
  CatalogPageContainer,
  Wrapper,
} from 'components/Container/Container.styled';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import Modal from 'components/Modal/Modal';
import { LoadMoreBtn } from 'components/Button/Button.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsLoading);
  const [page, setPage] = useState(1);
  const locations = [...new Set(adverts.map(advert => advert.location))];

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <CatalogPageContainer>
      <Filter locations={locations} />
      <Wrapper>
        <AdvertList adverts={adverts} onShowMore={handleShowModal} />
        <LoadMoreBtn type="button" onClick={() => handleLoadMore()}>
          Load more
        </LoadMoreBtn>
      </Wrapper>
      {isModalOpen && (
        <Modal advert={adverts[0]} closeModal={handleModalClose} />
      )}
    </CatalogPageContainer>
  );
};

export default CatalogPage;
