import ReviewsList from './ReviewsList';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = ({ advert }) => {
  return (
    <ReviewsContainer>
      <ReviewsList advert={advert} />
    </ReviewsContainer>
  );
};

export default Reviews;
