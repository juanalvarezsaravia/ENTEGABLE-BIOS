import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../SearchContext';
import Button from './Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Results = () => {
    const { results } = useContext(SearchContext);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;


    const [searchTerm, setSearchTerm] = useState('');

    const paginatedResults = results.slice((page - 1) * itemsPerPage, page * itemsPerPage);


    const filteredResults = searchTerm
        ? results.filter(repo => repo.name.includes(searchTerm))
        : paginatedResults;

    if (!results || results.length === 0) {
        return <div>No results found.</div>;
    }

    const goBackToSearch = () => {
        navigate('/');
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className='Results'>
            <h2>Search Results</h2>

            {results[0] && (
                <div className="single-avatar">
                    <img src={results[0].owner.avatar_url} alt={`${results[0].owner.login}'s avatar`} className="avatar" />
                </div>
            )}


            <input
                type="text"
                placeholder="Filter by repository name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={() => setSearchTerm('')}>Clear Filter</Button>

            <ul>
                {filteredResults.map((result) => (
                    <li key={result.id}>
                        <Link to={`/details/${result.id}`}>{result.name}</Link>
                    </li>
                ))}
            </ul>

            <Button onClick={goBackToSearch}> Back to Search</Button>

            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination
                    count={Math.ceil(results.length / itemsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                />
            </Stack>
        </div>
    );
}

export default Results;
