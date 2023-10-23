import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SearchContext } from '../SearchContext';
import Button from './Button';

const Search = () => {

  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { setResults, language, setLanguage, sortBy, setSortBy } = useContext(SearchContext);

  const handleSearch = async () => {
    try {
      let query = `https://api.github.com/search/repositories?q=`;

      if (username) {
        query += `user:${username}+`;
      }

      if (language) {
        query += `language:${language}+`;
      }

      if (sortBy) {
        query += `&sort=${sortBy}`;
      }

      const response = await axios.get(query);
      setResults(response.data.items);
      navigate(`/results`);
    } catch (error) {
      alert('An error occurred.');
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

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">Select Language</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="updated">Recently Updated</option>
        <option value="stars">Stars</option>
      </select>

      <Button onClick={handleSearch}> SEARCH</Button>
    </div>
  );
}

export default Search;

