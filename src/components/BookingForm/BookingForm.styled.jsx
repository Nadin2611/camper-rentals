import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 8px;
`;

export const Paragraph = styled.p``;

export const Label = styled.label``;
export const Input = styled.input`
  padding: 18px;
  border-radius: 10px;
  background: rgba(247, 247, 247, 1);
  border: none;
  outline: none;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-text);

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
