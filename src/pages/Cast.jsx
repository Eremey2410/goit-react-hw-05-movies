import { fetchCredits } from '../fetch/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Wrapper, Item } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const [error, setError] = useState(null);
  const posterURL = 'https://image.tmdb.org/t/p/w200';
  const noImg = 'https://quotationexpo.com/assets/images/product/avatar.jpg';

  useEffect(() => {
    async function fetchActorsId() {
      setIsLoad(true);
      try {
        const actorsCast = await fetchCredits(movieId);
        setActors(actorsCast.cast);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoad(false);
      }
    }
    fetchActorsId();
  }, [movieId]);

  if (!actors) {
    return null;
  }

  return (
    <div>
      {isLoad && <Loader />}
      {error && <p>Whoops, something went wrong</p>}
      <Wrapper>
        {actors.map(({ id, name, character, profile_path }) => (
          <Item key={id}>
            {profile_path ? (
              <img src={`${posterURL}${profile_path}`} alt={name} />
            ) : (
              <img src={`${noImg}`} alt={name} width="200" />
            )}
            <p>{name}</p>
            <p>{character}</p>
          </Item>
        ))}
      </Wrapper>
    </div>
  );
};
export default Cast;
