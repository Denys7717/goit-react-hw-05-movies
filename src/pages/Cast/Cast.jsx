import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'components/api/api';
import './cast.css';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsloading(true);
        const result = await getCastById(id);
        setItem(result.cast);
      } catch (e) {
        setError(true);
      } finally {
        setIsloading(false);
      }
    };
    fetchCast();
  }, [id]);

  const list = item.map(({ id, name, profile_path }) => {
    return (
      <li key={id}>
        <div className="profile_img">
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
        </div>
        <p>{name}</p>
      </li>
    );
  });

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong..</p>}
      {item.length > 0 && <ul>{list}</ul>}
    </>
  );
};

export default Cast;
