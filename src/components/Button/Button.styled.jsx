import styled from 'styled-components';

export const Button = styled.button`
  width: 160px;
  height: 56px;
  border-radius: 200px;
  background-color: var(--color-button);
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.5%;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  &:hover,
  &:focus {
    background-color: var(--color-button-hover);
  }

  //   &:disabled {
  //     background-color: #cccccc;
  //     cursor: not-allowed;
  //   }
`;

export const LoadMoreBtn = styled.button`
  padding: 16px 32px;
  width: 147px;
  align-items: center;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
`;
