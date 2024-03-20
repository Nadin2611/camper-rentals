import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--color-button);
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  font-size: 24px;
  font-weight: bold;
`;

export const Link = styled(NavLink)`  

  align-items: center;
  padding: 6px 10px;
  border-radius: 10px;
  text-decoration: none;
  transition: box-shadow 0.3s, color 0.3s, transform 0.3s;

  &.active {
  }


    &:hover,
    &:focus {
      transform: scale(1.1);
      color: var(--color-button);
    }
  }
`;
