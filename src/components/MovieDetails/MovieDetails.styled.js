import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const StyledDiv = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const StyledSpan = styled.span`
  padding-right: 15px;
`;
export const StyledIMG = styled.img`
  max-height: 350px;
`;

export const StyledUL = styled.ul`
  display: flex;
  gap: 10px;
  padding-left: 0;
`;
export const StyledMovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-decoration: none;
`;
