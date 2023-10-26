import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieByName } from 'components/api/api';
import SearchForm from 'components/SearchForm/SearchForm';
import './movies.css';

const Movies = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchFilmByName = async () => {
      try {
        const result = await getMovieByName(name);
        if (!result.results) {
          setNotFound(true);
        } else {
          setNotFound(false);
          setList(result.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (name) fetchFilmByName();
  }, [name]);

  const resultList =
    list &&
    list.map(({ id, original_title }) => {
      return (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }} className="item">
            {original_title}
          </Link>
        </li>
      );
    });

  function getMovie(value) {
    setName(value);
  }

  return (
    <div className="container movies">
      <SearchForm getMovie={getMovie} />
      {notFound && <h2>Nothing found...</h2>}
      {!notFound && <ol className="search_list">{list && resultList}</ol>}
    </div>
  );
};

export default Movies;
