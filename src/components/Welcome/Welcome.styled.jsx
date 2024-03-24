import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  padding-left: 100px;
  color: var(--color-background);
  max-width: 800px;
  text-align: center;
  align-items: center;
  gap: 30px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: var(--color-button-hover);
  text-align: center;
  text-shadow: -0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
    0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
    -0.5px 0.5px 0 rgba(255, 255, 255, 0.5),
    0.5px 0.5px 0 rgba(255, 255, 255, 0.5);
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
`;

export const Paragraph = styled.p`
  text-align: start;
  font-size: 20px;
`;
