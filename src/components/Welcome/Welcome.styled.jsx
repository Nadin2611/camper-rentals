import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: var(--color-background);
  max-width: 700px;
  text-align: center;
  align-items: center;
  gap: 30px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 30px;

  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: start;
`;
