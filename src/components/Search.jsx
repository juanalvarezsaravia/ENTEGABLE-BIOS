import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      navigate(`/results?q=${query}`, { state: { results: response.data.items } }); // Utiliza navigate para cambiar la ruta
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a GitHub repository"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
