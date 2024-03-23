import ReviewsItem from './ReviewsItem';

const ReviewsList = ({ advert }) => {
  const { reviews } = advert;

  return (
    <>
      {reviews.map((review, index) => (
        <ReviewsItem key={index} review={review} />
      ))}
    </>
  );
};

export default ReviewsList;
