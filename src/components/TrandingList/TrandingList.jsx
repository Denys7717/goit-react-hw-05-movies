import { getPopularList } from 'components/api/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './trendingList.css';

const TrandingList = () => {
  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const trandingList = async () => {
      try {
        const result = await getPopularList();
        setList(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    trandingList();
  }, []);

  console.log(list);

  return (
    <ol className="trending_list">
      <h2>Trending today</h2>
      {list.map(({ id, title, name }) => {
        return (
          <li key={id} className="item">
            <Link
              to={`movies/${id}`}
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

export default TrandingList;
