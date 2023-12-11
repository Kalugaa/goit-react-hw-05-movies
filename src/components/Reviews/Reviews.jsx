import { getReviews } from 'apiHelpers';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieID } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    const getMovieReviews = async movieID => {
      try {
        const movieCastDetails = await getReviews(movieID);
        setMovieReviews(movieCastDetails.results);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };
    getMovieReviews(movieID);
  }, [movieID]);

  return (
    <div>
      {movieReviews.length > 0 && (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {movieReviews.length === 0 && (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
