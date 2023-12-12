import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink, StyledUL } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledUL>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </StyledUL>
        </nav>
        <hr></hr>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
