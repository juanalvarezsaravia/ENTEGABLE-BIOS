import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../SearchContext';
import Button from './Button';

const Results = () => {
    const { results } = useContext(SearchContext);
    const navigate = useNavigate();


    if (!results || results.length === 0) {
        return <div>No results found.</div>;
    }

    const goBackToSearch = () => {
        navigate('/');
    };
    return (
        <div className='Results'>
            <h2>Search Results</h2>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>
                        <Link to={`/details/${result.id}`}>{result.name}</Link>
                    </li>
                ))}
            </ul>
            <Button onClick={goBackToSearch}> Back to Search</Button>


        </div>
    );
}

export default Results;

