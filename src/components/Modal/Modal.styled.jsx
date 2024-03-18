import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 448px;
  height: 532px;
  padding: 24px;
  gap: 24px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: rgba(255, 255, 255, 1);
`;

export const CloseButton = styled.button`
  position: absolute;

  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  padding: 18px;
  border-radius: 10px;
  background: rgba(247, 247, 247, 1);
  border: none;
  outline: none;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(16, 24, 40, 0.6);

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const TextArea = styled.textarea`
height: 114px;
padding: 18px;
border-radius: 10px;
background: rgba(247, 247, 247, 1);
border: none;
outline: none;
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: rgba(16, 24, 40, 0.6);

&::placeholder {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(16, 24, 40, 0.6);

`;

export const Button = styled.button`
  width: 160px;
  height: 56px;
  border-radius: 200px;
  background-color: rgba(228, 72, 72, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5%;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: #45a049; /* Змініть колір при наведенні курсору за вашим бажанням */
  }

  &:active {
    transform: translateY(1px);
  }

  //   &:disabled {
  //     background-color: #cccccc; /* Змініть колір для вимкненої кнопки за вашим бажанням */
  //     cursor: not-allowed;
  //   }
`;
