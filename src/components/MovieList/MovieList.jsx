import React from 'react';
import { StyledMovieLink } from './MovieList.styled';

const MovieList = (films, location) => {
  console.log('films', films.films);

  return (
    <ul>
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
    </ul>
  );
};

export default MovieList;
