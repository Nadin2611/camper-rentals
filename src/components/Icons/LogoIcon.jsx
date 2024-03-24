import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';

const StyledSVG = styled.svg`
  &:hover,
  &:focus {
    fill: var(--color-button);
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    fill: var(--color-button);
  `}
`;

const LogoIcon = ({ width, height }) => {
  const location = useLocation();
  const isActive = location.pathname === '/';

  return (
    <StyledSVG width={width} height={height} $isActive={isActive ? 1 : 0}>
      <use href={`${sprite}#icon-van`}></use>
    </StyledSVG>
  );
};

export default LogoIcon;
