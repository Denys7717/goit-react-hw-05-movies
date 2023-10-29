import { getPopularList } from 'api/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trandingList = async () => {
      try {
        setIsloading(true);
        const result = await getPopularList();
        setList(result.results);
      } catch (e) {
        setError(true);
      } finally {
        setIsloading(false);
      }
    };
    trandingList();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {error && <p>Something went wrong..</p>}
      {list.length > 0 && <MoviesList list={list} />}
    </>
  );
};

export default Home;
