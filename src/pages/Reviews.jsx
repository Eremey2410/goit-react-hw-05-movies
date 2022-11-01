import { fetchReviews } from '../fetch/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviewsId() {
      setLoader(true);
      try {
        const reviewsId = await fetchReviews(movieId);
        setReviews(reviewsId.results);
      } catch (error) {
        setError({ error });
      } finally {
        setLoader(false);
      }
    }
    fetchReviewsId();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Whoops, something went wrong</p>}
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Reviews;
