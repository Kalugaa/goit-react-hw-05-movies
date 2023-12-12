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

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <ul>
        {movieCast &&
          movieCast.map(actor => (
            <li key={actor.id}>
              <StyledIMG
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
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
