import { useEffect, useState } from 'react';
import { getMovieByName } from 'api/api';
import SearchForm from 'components/SearchForm/SearchForm';
import './movies.css';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    const fetchFilmByName = async () => {
      try {
        setIsloading(true);
        const result = await getMovieByName(query);
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
    if (query) fetchFilmByName();
  }, [query]);

  function getMovie(value) {
    value ? setSearchParams({ search: value }) : setSearchParams({});
  }

  return (
    <div className="container movies">
      <SearchForm getMovie={getMovie} />
      {isLoading && <Loader />}
      {error && <p>Something went wrong..</p>}
      {notFound && <h2>Nothing found...</h2>}
      {list.length > 0 && <MoviesList list={list} />}
    </div>
  );
};

export default Movies;
