import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoFavoritesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const Message = styled.p`
  font-size: 28px;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  margin-top: 8px;
  display: inline-block;
`;
