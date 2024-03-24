import { StarIcon } from 'components/Icons';
import {
  NameWrap,
  RatingWrap,
  Avatar,
  Name,
  Rating,
  Comment,
  StarsList,
  ReviewsWrap,
} from './ReviewsItem.styled';

const ReviewsItem = ({ review }) => {
  const letterIcon = review.reviewer_name ? review.reviewer_name.charAt(0) : '';

  return (
    <ReviewsWrap>
      <NameWrap>
        <Avatar>{letterIcon}</Avatar>
        <RatingWrap>
          <Name>{review.reviewer_name}</Name>
          <Rating>
            <StarsList>
              {Array(5)
                .fill(0)
                .map((star, index) => (
                  <li key={index}>
                    <StarIcon
                      size={20}
                      fillColor={
                        Math.round(review.reviewer_rating) < index + 1
                          ? 'var(--color-block)'
                          : 'var(--color-rating)'
                      }
                    />
                  </li>
                ))}
            </StarsList>
          </Rating>
        </RatingWrap>
      </NameWrap>
      <Comment>{review.comment}</Comment>
    </ReviewsWrap>
  );
};

export default ReviewsItem;
