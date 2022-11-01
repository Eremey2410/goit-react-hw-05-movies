import { fetchDetails } from '../fetch/fetchMovies';
import { Wrapper } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import {
  Outlet,
  useParams,
  useLocation,
  NavLink,
  Link,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmId, setFilmId] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const [error, setError] = useState(null);
  const location = useLocation();
  const link = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMoviesId() {
      setIsLoad(true);
      try {
        const films = await fetchDetails(movieId);
        setFilmId(films);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoad(false);
      }
    }
    fetchMoviesId();
  }, [movieId]);

  if (!filmId) {
    return null;
  }

  const { poster_path, title, overview, genres, release_date, vote_average } =
    filmId;
  const posterURL = 'https://image.tmdb.org/t/p/w300';
  const noImg = 'https://quotationexpo.com/assets/images/product/avatar.jpg';

  return (
    <div>
      {isLoad && <Loader />}
      {error && <p>Whoops, something went wrong</p>}
      <section>
        <NavLink to={link}>Go back</NavLink>
      </section>
      <Wrapper>
        <div>
          {poster_path ? (
            <img src={`${posterURL}${poster_path}`} alt={title} />
          ) : (
            <img src={`${noImg}`} alt={title} width="300" />
          )}
        </div>

        <div>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User score {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <div>
            {genres.map(({ name, id }) => (
              <p key={id}>{name}</p>
            ))}
          </div>
        </div>
      </Wrapper>
      <section>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to="Cast" state={{ from: link }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="Reviews" state={{ from: link }}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
