import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const goBackToSearch = () => {
        navigate('/');
    };


    return (
        <div className='About'>
            <h2>About GitHub Search App</h2>
            <p>This app allows users to search for GitHub repositories using a username. Explore and find your favorite repositories here!</p>
            <button onClick={goBackToSearch}>Back to Search</button>
        </div>

    );
};

export default About;