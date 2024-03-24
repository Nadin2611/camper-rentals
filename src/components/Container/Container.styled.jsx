import styled from 'styled-components';
import backgroundImage from '../../assets/images/bg.jpg';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 64px 100px 64px;
`;

export const HomePageContainer = styled.div`
  background-color: var (--color-main);
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.2),
      rgba(46, 47, 66, 0.6)
    ),
    url(${backgroundImage});
  height: 100vh;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

export const CatalogPageContainer = styled(Container)`
  display: flex;
  gap: 64px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  align-items: center;
  margin-bottom: 100px;
`;
