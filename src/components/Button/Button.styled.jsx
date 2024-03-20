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
  //     background-color: #cccccc; /* Змініть колір для вимкненої кнопки за вашим бажанням */
  //     cursor: not-allowed;
  //   }
`;
