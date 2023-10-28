import { Link, useLocation } from 'react-router-dom';
import './moviesList.css';

const MoviesList = ({ list, movie }) => {
  const location = useLocation();

  return (
    <ol className="trending_list">
      {list.map(({ id, title, name }) => {
        return (
          <li key={id} className="item">
            <Link
              to={movie ? `${id}` : `movies/${id}`}
              state={{ from: location }}
              className="item"
            >
              {title || name}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default MoviesList;
