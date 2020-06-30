import React from 'react';
import { set_search } from '../actions';
import { useDispatch } from 'react-redux';

const Search = () => {
  const [searchField, setSearchField] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(set_search(searchField));
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className='search-bar'>
      <form className='search' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' onChange={handleChange} />
        <input type='submit' />
      </form>
    </div>
  );
};
export default Search;
