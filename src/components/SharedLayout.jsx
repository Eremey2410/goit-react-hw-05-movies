import { Container, Link } from './App.styled';
import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
  return (
    <Container>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </Container>
  );
};
