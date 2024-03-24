import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { getAdverts } from '../redux/adverts/operations';
import AdvertList from 'components/AdvertCatalog/AdvertList';
import {
  CatalogPageContainer,
  Wrapper,
} from 'components/Container/Container.styled';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { LoadMoreBtn } from 'components/Button/Button.styled';
import { handleScroll } from '../services';
import {
  selectAdverts,
  selectAdvertsError,
  selectAdvertsLoading,
} from '../redux/adverts/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const containerRef = useRef(null);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (adverts.length < 4 || adverts.length % 4 !== 0) {
      setShowLoadMore(false);
      if (adverts.length > 0) {
        toast.success("You've reached the last page!");
      }
    } else {
      setShowLoadMore(true);
    }
  }, [adverts]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    handleScroll(containerRef.current);
  };

  return (
    <CatalogPageContainer>
      <Filter />
      <Wrapper ref={containerRef} id="scroll-to-element">
        <AdvertList adverts={adverts} />
        {showLoadMore && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreBtn>
        )}
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
      </Wrapper>
    </CatalogPageContainer>
  );
};

export default CatalogPage;
