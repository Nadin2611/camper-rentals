// import { StarIcon } from 'components/Icons';
import {
  NameWrap,
  RatingWrap,
  Icon,
  Name,
  Rating,
  Comment,
} from './ReviewsItem.styled';

const ReviewsItem = ({ review }) => {
  const letterIcon = review.reviewer_name ? review.reviewer_name.charAt(0) : '';

  return (
    <>
      <NameWrap>
        <Icon>{letterIcon}</Icon>
        <RatingWrap>
          <Name>{review.reviewer_name}</Name>
          <Rating></Rating>
        </RatingWrap>
      </NameWrap>
      <Comment>{review.comment}</Comment>
    </>
  );
};

export default ReviewsItem;
