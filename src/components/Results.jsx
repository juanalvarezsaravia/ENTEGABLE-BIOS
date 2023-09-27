import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { state } = location; // Cambio de location.state a state

  if (!state?.results) {
    return null;
  }

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {state.results.map((result) => (
          <li key={result.id}>
            <Link to={`/details/${result.id}`}>{result.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
