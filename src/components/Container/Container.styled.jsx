import styled from 'styled-components';
import backgroundImage from '../../assets/images/bg2.jpg';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
`;
