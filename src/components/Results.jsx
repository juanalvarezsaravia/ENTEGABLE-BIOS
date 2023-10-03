import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../SearchContext';

function Results() {
  const { results } = useContext(SearchContext);
  const navigate = useNavigate();


  if (!results || results.length === 0) {
    return <div>No se encontro resultado.</div>;
  }

  const goBackToSearch = () => {
    navigate('/');
  };
  return (
    <div className='Results'>
      <h2>Resultados de busqueda.</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <Link to={`/details/${result.id}`}>{result.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={goBackToSearch}>VOLVER</button>


    </div>
  );
}

export default Results;
