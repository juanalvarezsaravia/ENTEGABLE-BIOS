import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambio aquí

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Cambio aquí

  const handleSearch = () => {
    // Redirige al componente Results con la consulta de búsqueda como parámetro
    navigate(`/results?q=${query}`); // Cambio aquí
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
