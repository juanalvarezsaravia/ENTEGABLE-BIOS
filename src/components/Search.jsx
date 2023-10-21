import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SearchContext } from '../SearchContext';


const Search = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { setResults } = useContext(SearchContext);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      setResults(response.data);
      navigate(`/results`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Search'>
      <h1>SEARCH</h1>
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
}

export default Search;

