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
  padding: 40px 40px 68px 40px;
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

export const InfoContainer = styled.div`
  margin-top: 44px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 902px;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.2);
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;

export const Button = styled.li`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;

export const SideContent = styled.div`
  overflow-y: auto;
  max-height: 406px;
  margin-right: -16px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* колір фону трека */
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-scroll);
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-main);
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  padding-top: 68px;
  gap: 24px;
`;
