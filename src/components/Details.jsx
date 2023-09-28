import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Details() {
  const { id } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repositories/${id}`);
        setRepoDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepoDetails();
  }, [id]);

  const goBackToResults = () => {
    navigate('/results');
  };

  if (!repoDetails) {
    return null;
  }

  return (
    <div>
      <h2>Repository Details</h2>
      <h3>{repoDetails.name}</h3>
      <p>{repoDetails.description}</p>
      <p>Stars: {repoDetails.stargazers_count}</p>
      <button onClick={goBackToResults}>Back to Results</button>
    </div>
  );
}

export default Details;