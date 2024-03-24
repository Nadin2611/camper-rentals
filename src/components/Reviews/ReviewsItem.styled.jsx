import styled from 'styled-components';

export const NameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--color-block);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-button);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const RatingWrap = styled.div``;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.333;
`;

export const Rating = styled.div``;

export const Comment = styled.p`
  color: var(--color-main);
`;

export const StarsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ReviewsWrap = styled.div`
  margin-bottom: 24px;
`;
