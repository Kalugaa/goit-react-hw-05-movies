import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;
