import { Link, Outlet } from 'react-router-dom';
import './movieInfo.css';

const MovieInfo = () => {
  return (
    <div className="movie_info">
      <p>Additional information</p>
      <ul className="movie_info_list">
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieInfo;
