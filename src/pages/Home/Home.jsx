import React, { useEffect, useState } from 'react';
import { getTrending } from 'apiHelpers';
import { useLocation } from 'react-router-dom';
import { StyledH2, StyledMovieLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const trendMovies = await getTrending();
        setMovies(trendMovies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <StyledH2>Trending Today</StyledH2>
      <ul>
        {movies.map(movie => (
          <StyledMovieLink
            to={`movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
          >
            {movie.title}
          </StyledMovieLink>
        ))}
      </ul>
    </div>
  );
};

export default Home;
