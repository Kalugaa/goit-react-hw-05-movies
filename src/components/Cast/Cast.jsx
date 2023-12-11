import { getMovieCredits } from 'apiHelpers';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledIMG } from './Cast.styled';

const Cast = () => {
  const { movieID } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async movieID => {
      try {
        const movieCastDetails = await getMovieCredits(movieID);
        setMovieCast(movieCastDetails.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };
    getMovieCast(movieID);
  }, [movieID]);

  return (
    <div>
      <ul>
        {movieCast &&
          movieCast.map(actor => (
            <li key={actor.id}>
              <StyledIMG
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
