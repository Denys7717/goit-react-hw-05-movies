import { getReviewsById } from 'components/api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './reviews.css';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsloading(true);
        const result = await getReviewsById(id);
        setItem(result.results);
      } catch (e) {
        setError(true);
      } finally {
        setIsloading(false);
      }
    };
    fetchCast();
  }, [id]);

  const list = item.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <p className="author">Author: {author}</p>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong..</p>}
      {item.length < 1 && <p>We dont have reviews for this movie</p>}
      {item.length > 0 && <ul className="reviews_list">{list}</ul>}
    </>
  );
};

export default Reviews;
