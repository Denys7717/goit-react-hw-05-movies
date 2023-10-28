import { useEffect, useState } from 'react';
import { getMovieByName } from 'components/api/api';
import SearchForm from 'components/SearchForm/SearchForm';
import './movies.css';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchFilmByName = async () => {
      try {
        setIsloading(true);
        const result = await getMovieByName(name);
        if (result.results.length === 0) {
          setNotFound(true);
        } else {
          setNotFound(false);
          setList(result.results);
        }
      } catch (e) {
        setError(true);
      } finally {
        setIsloading(false);
      }
    };
    if (name) fetchFilmByName();
  }, [name]);

  function getMovie(value) {
    setName(value);
  }

  return (
    <div className="container movies">
      <SearchForm getMovie={getMovie} />
      {isLoading && <Loader />}
      {error && <p>Something went wrong..</p>}
      {notFound && <h2>Nothing found...</h2>}
      {list.length > 0 && <MoviesList list={list} movie />}
    </div>
  );
};

export default Movies;
