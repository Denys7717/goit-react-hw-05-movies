import axios from 'axios';

const KEY = 'cdfc08b3296f0164149119b33e9bcc21';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export const getPopularList = async () => {
  const { data } = await instance.get(`/trending/movie/day?api_key=${KEY}`);
  return data;
};

export const getMovieByName = async name => {
  const { data } = await instance.get(
    `/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${name}`
  );
  return data;
};
export const getMovieById = async id => {
  const { data } = await instance.get(
    `/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return data;
};

export const getCastById = async id => {
  const { data } = await instance.get(
    `/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
};

export const getReviewsById = async id => {
  const { data } = await instance.get(
    `/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data;
};
