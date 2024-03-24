import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/adverts/operations';
import {
  selectAdverts,
  selectAdvertsError,
  selectAdvertsLoading,
  selectTotalPages,
} from '../redux/adverts/selectors';
import { getUniqueLocations, handleScroll } from '../services';

import AdvertList from 'components/AdvertCatalog/AdvertList';
import {
  CatalogPageContainer,
  Wrapper,
} from 'components/Container/Container.styled';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { LoadMoreBtn } from 'components/Button/Button.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);

  const containerRef = useRef(null);

  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const locations = getUniqueLocations(adverts);
  const totalPage = useSelector(selectTotalPages);

  useEffect(() => {
    if (page >= totalPage) {
      setShowLoadMore(false);
    }
    dispatch(getAdverts(page));
  }, [dispatch, page, totalPage]);

  const handleLoadMore = () => {
    if (page >= totalPage || adverts.length < 4) {
      setShowLoadMore(false);
      return;
    }
    setPage(prevPage => prevPage + 1);
    handleScroll(containerRef.current);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <CatalogPageContainer>
      <Filter locations={locations} />
      <Wrapper ref={containerRef}>
        <AdvertList adverts={adverts} />

        {showLoadMore && !error && adverts.length > 0 && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </Wrapper>
    </CatalogPageContainer>
  );
};

export default CatalogPage;
