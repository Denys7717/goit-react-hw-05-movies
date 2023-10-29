import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';
import './movieDetails.css';
import Loader from 'components/Loader/Loader';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const locationForBack = useRef(location.state?.from ?? '/');
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieById(id)
      .then(data => {
        setIsloading(true);
        setMovie(data);
      })
      .catch(e => setError(true))
      .finally(() => setIsloading(false));
  }, [id]);

  function handleBack() {
    navigate(locationForBack.current);
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong..</p>}
      <>
        <div className="movie_card container">
          <button onClick={handleBack} className="btn_back">
            Go back
          </button>
          <div className="wrapper_card">
            <div className="poster_box">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title || movie.name}
                width={400}
              />
            </div>
            <div className="description">
              <p className="title_movie">{movie.title || movie.name}</p>
              <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>
              <p>Overview</p>
              <p>{movie.overview}</p>
              <p>Genres</p>
              <p>
                {movie.genres &&
                  movie.genres.map(({ id, name }) => (
                    <span key={id}>{name} </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
        <MovieInfo />
      </>
    </>
  );
};

export default MovieDetails;
