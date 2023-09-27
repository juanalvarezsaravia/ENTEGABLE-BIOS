<<<<<<< HEAD

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      history.push(`/results?q=${query}`, { results: response.data.items });
    } catch (error) {
      console.error(error);
    }
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambio aquí

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Cambio aquí

  const handleSearch = () => {
    // Redirige al componente Results con la consulta de búsqueda como parámetro
    navigate(`/results?q=${query}`); // Cambio aquí
>>>>>>> origin/main
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
