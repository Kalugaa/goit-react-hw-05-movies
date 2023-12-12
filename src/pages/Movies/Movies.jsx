import { searchFilmByKey } from 'apiHelpers';
import React, { useEffect, useState } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('movie');

  useEffect(() => {
    const fetchFilms = async () => {
      if (searchQuery) {
        setQuery(searchQuery);
        try {
          const filmsData = await searchFilmByKey(searchQuery);
          setFilms(filmsData);
        } catch (error) {
          console.error('Error searching films:', error);
        }
      }
    };

    fetchFilms();
  }, [searchQuery]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (query !== searchQuery) {
      try {
        const filmsData = await searchFilmByKey(query);
        setFilms(filmsData);
        setSearchParams({ movie: query });
      } catch (error) {
        console.error('Помилка при пошуку фільмів:', error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          type="text"
          name="query"
          onChange={handleChange}
        ></input>
        <button>Search</button>
      </form>
      {films.length > 0 && <MovieList films={films} location={location} />}
    </div>
  );
};

export default Movies;
