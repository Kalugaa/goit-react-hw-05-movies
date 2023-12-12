import { getMovieByID } from 'apiHelpers';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Container,
  StyledButton,
  StyledDiv,
  StyledIMG,
  StyledLink,
  StyledMovieLink,
  StyledSpan,
  StyledUL,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backLinkRef =
    location?.state?.from?.state?.from || location?.state?.from || '/';

  useEffect(() => {
    const getMovieDetails = async movieID => {
      try {
        const movieDetails = await getMovieByID(movieID);
        setMovieInfo(movieDetails);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    getMovieDetails(movieID);
  }, [movieID]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <Container>
      <StyledButton>
        <StyledLink to={backLinkRef}>Go Back</StyledLink>
      </StyledButton>
      <StyledDiv>
        <div>
          <StyledIMG
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
                : defaultImg
            }
            alt={movieInfo.title}
          />
        </div>
        <div>
          <h2>{movieInfo.title}</h2>
          <p>User Score: {movieInfo.vote_average}%</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <p>
            {movieInfo.genres &&
              movieInfo.genres.map(genre => (
                <StyledSpan key={genre.id}>{genre.name}</StyledSpan>
              ))}
          </p>
        </div>
      </StyledDiv>
      <div>
        <p>Additional information</p>
        <StyledUL>
          <StyledMovieLink to={'cast'} state={{ from: location }}>
            Cast
          </StyledMovieLink>
          <StyledMovieLink to={'reviews'} state={{ from: location }}>
            Reviews
          </StyledMovieLink>
        </StyledUL>
      </div>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
