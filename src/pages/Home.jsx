import { useState, useEffect } from 'react';
import { fetchMovies } from '../fetch/fetchMovies';
import { Link, List } from './Home.styled';
import { toast } from 'react-toastify';
import { Loader } from '../components/Loader/Loader';
const Home = () => {
  const [films, setFilms] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoad(true);
      try {
        const movies = await fetchMovies();
        setFilms(movies.results);
      } catch {
        toast.error('Что-то пошло не так. Попробуйте еще раз!!!');
      } finally {
        setIsLoad(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoad && <Loader />}
      {films && (
        <List>
          {films.map(({ id, name, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title || name}</Link>
            </li>
          ))}
        </List>
      )}
    </main>
  );
};
export default Home;
