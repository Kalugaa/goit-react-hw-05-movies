import React from 'react';
import { StyledMovieLink, StyledUL } from './MovieList.styled';

const MovieList = films => {
  return (
    <StyledUL>
      {films.films.length > 0 &&
        films.films.map(film => (
          <StyledMovieLink
            to={`/movies/${film.id}`}
            key={film.id}
            state={{ from: films.location }}
          >
            {film.title}
          </StyledMovieLink>
        ))}
    </StyledUL>
  );
};

export default MovieList;
