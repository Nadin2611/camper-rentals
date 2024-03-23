import styled from 'styled-components';
import backgroundImage from '../../assets/images/bg2.jpg';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 64px;
  padding-right: 64px;
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
  padding-top: 100px;
  display: flex;
  gap: 64px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-bottom: 100px;
`;

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
