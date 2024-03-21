import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  color: var(--color-background);
  max-width: 800px;
  text-align: center;
  align-items: center;
  gap: 30px;
`;

export const TextContainer = styled.div`
  margin-top: 80px;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;

  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: start;
`;
