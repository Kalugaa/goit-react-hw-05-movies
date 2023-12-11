import axios from 'axios';

export const getTrending = async () => {
  const API_KEY = '10dfd75432fed76cb010e40fe6cfce74';
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const movies = data.results;
  return movies;
};

export const getMovieByID = async id => {
  const API_KEY = '10dfd75432fed76cb010e40fe6cfce74';
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`
  );

  return data;
};

export const getMovieCredits = async id => {
  const API_KEY = '10dfd75432fed76cb010e40fe6cfce74';
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getReviews = async id => {
  const API_KEY = '10dfd75432fed76cb010e40fe6cfce74';
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return data;
};

export const searchFilmByKey = async query => {
  const API_KEY = '10dfd75432fed76cb010e40fe6cfce74';
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data.results;
};
