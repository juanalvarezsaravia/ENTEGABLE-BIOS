import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SearchContext } from '../SearchContext';


const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { setResults } = useContext(SearchContext);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      setResults(response.data.items);
      navigate(`/results`);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className='Search'>
      <h1>BUSCAR</h1>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Search;

