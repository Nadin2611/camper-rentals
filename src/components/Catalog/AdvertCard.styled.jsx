import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding: 24px;

  gap: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;
  width: 888px;
`;

export const ImageWrapper = styled.div``;

export const InfoWrapper = styled.div`
  display: flex;
  width: 526px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const Price = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-left: auto;
`;

export const FavoriteButton = styled.button`
  background: none;
  margin-left: 11px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  text-decoration-line: underline;
`;

export const Location = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--color-main);
  text-overflow: ellipsis;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-self: stretch;
`;

export const DetailItem = styled.div`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: #f2f4f7;
  mix-blend-mode: multiply;
`;
