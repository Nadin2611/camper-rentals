// import { useEffect, useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAdverts } from '../redux/adverts/operations';
// import {
//   selectAdverts,
//   selectAdvertsError,
//   selectAdvertsLoading,
//   selectTotalPages,
// } from '../redux/adverts/selectors';
// import { getUniqueLocations, handleScroll } from '../services';

// import AdvertList from 'components/AdvertCatalog/AdvertList';
// import {
//   CatalogPageContainer,
//   Wrapper,
// } from 'components/Container/Container.styled';
// import Filter from 'components/Filter';
// import Loader from 'components/Loader';
// import { LoadMoreBtn } from 'components/Button/Button.styled';

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const adverts = useSelector(selectAdverts);
//   const isLoading = useSelector(selectAdvertsLoading);
//   const error = useSelector(selectAdvertsError);
//   const totalPage = useSelector(selectTotalPages);
//   const containerRef = useRef(null);
//   const [page, setPage] = useState(1);
//   const [showLoadMore, setShowLoadMore] = useState(true);

//   const locations = getUniqueLocations(adverts);

//   useEffect(() => {
//     if (page >= totalPage) {
//       setShowLoadMore(false);
//     }
//     dispatch(getAdverts(page));
//   }, [dispatch, page, totalPage]);

//   const handleLoadMore = event => {
//     event.preventDefault();
//     if (page >= totalPage || adverts.length < 4) {
//       setShowLoadMore(false);
//       return;
//     }
//     setPage(prevPage => prevPage + 1);
//     handleScroll(containerRef.current);
//   };

//   return isLoading ? (
//     <Loader />
//   ) : (
//     <CatalogPageContainer>
//       <Filter locations={locations} />
//       <Wrapper ref={containerRef}>
//         <AdvertList adverts={adverts} />

//         {showLoadMore && !error && adverts.length > 0 && (
//           <LoadMoreBtn type="button" onClick={handleLoadMore}>
//             Load more
//           </LoadMoreBtn>
//         )}
//       </Wrapper>
//     </CatalogPageContainer>
//   );
// };

// export default CatalogPage;

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
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedAdverts, setDisplayedAdverts] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const totalPage = useSelector(selectTotalPages);
  const containerRef = useRef(null);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);

  const locations = getUniqueLocations(adverts);

  console.log(locations);
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
