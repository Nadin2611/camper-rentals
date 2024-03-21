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
  position: relative;
  max-width: 982px;
  height: 90vh;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: var(--color-background);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  backgroud-color: transparent;
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
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-inputs);

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
    line-height: 1.25;
  }
`;

export const TextArea = styled.textarea`
height: 114px;
padding: 18px;
border-radius: 10px;
background: rgba(247, 247, 247, 1);
border: none;
outline: none;
letter-spacing: 0em;
text-align: left;
color: rgba(16, 24, 40, 0.6);

&::placeholder {
  letter-spacing: 0em;
  color: rgba(16, 24, 40, 0.6);

`;

export const ImageList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ImageItem = styled.li`
  border-radius: 10px;

  img {
    width: 290px;
    height: 310px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Description = styled.p`
  color: var(--color-main);
`;
