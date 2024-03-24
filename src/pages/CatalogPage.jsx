import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/adverts/operations';
import {
  selectAdverts,
  selectAdvertsError,
  selectAdvertsLoading,
  selectTotalPages,
} from '../redux/adverts/selectors';
import { handleScroll } from '../services';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedAdverts, setDisplayedAdverts] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const totalPage = useSelector(selectTotalPages);
  const containerRef = useRef(null);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);

  useEffect(() => {
    dispatch(getAdverts(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (adverts.length > 0) {
      setDisplayedAdverts(prevAdverts => [...prevAdverts, ...adverts]);
      setIsLoadingMore(false);
    }
  }, [adverts]);

  const handleLoadMore = () => {
    if (currentPage >= totalPage) {
      setShowLoadMore(false);
      return;
    }
    setIsLoadingMore(true);
    setCurrentPage(prevPage => prevPage + 1);
    handleScroll(containerRef.current);
  };

  return (
    <CatalogPageContainer>
      <Filter />
      <Wrapper ref={containerRef}>
        <AdvertList adverts={displayedAdverts} />

        {showLoadMore && !error && (
          <LoadMoreBtn
            type="button"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? 'Loading...' : 'Load more'}
          </LoadMoreBtn>
        )}
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
      </Wrapper>
    </CatalogPageContainer>
  );
};

export default CatalogPage;
