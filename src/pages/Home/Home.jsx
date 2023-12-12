import React, { useEffect, useState } from 'react';
import { getTrending } from 'apiHelpers';
import { useLocation } from 'react-router-dom';
import { StyledH2, StyledMovieLink } from './Home.styled';
import MovieList from 'components/MovieList/MovieList';

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
      {movies.length > 0 && <MovieList films={movies} location={location} />}
    </div>
  );
};

export default Home;
1;
