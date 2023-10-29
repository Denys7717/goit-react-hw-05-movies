import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'api/api';
import './cast.css';
import Loader from 'components/Loader/Loader';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : defaultImg
            }
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
