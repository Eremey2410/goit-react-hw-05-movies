import { Outlet, useLocation, useSearchParams, Link } from 'react-router-dom';
import { fetchSearch } from '../fetch/fetchMovies';
import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper } from './Movies.styled';
export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const query = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [queryMovies, setQueryFilms] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const handleChange = evt => {
    setSearchQuery(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Введите запрос!!!');
      return;
    }

    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchQueryFilms() {
      try {
        setIsLoad(true);
        const movies = await fetchSearch(query);
        setQueryFilms(movies.results);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoad(false);
      }
    }
    fetchQueryFilms();
  }, [query]);

  return (
    <Wrapper>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {isLoad && <Loader />}
      {error && <p>Something went wrong</p>}
      <div>
        {queryMovies.length !== 0 && (
          <ul>
            {queryMovies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Outlet />
    </Wrapper>
  );
};
