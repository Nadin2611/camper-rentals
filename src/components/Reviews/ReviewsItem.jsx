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
  console.log('Кількість зірочок:', Math.round(review.reviewer_rating));
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
                .map((_, index) => (
                  <li key={index}>
                    <StarIcon
                      size={20}
                      color={
                        Math.round(review.reviewer_rating) > index
                          ? 'var(--color-rating)'
                          : 'var(--color-block)'
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
