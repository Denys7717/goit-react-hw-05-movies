import { useState } from 'react';
import './searchForm.css';

const SearchForm = ({ getMovie }) => {
  const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getMovie(name);
  };

  return (
    <form onSubmit={handleSubmit} className="search_form">
      <input type="text" onChange={handleChange} value={name || ''} />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
