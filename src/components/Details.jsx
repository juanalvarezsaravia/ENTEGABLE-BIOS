import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Details = () => {
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
    <div className='Details'>
      <h2>Detalles</h2>
      <h3>{repoDetails.name}</h3>
      <p>{repoDetails.description}</p>
      <p>Estrellas: {repoDetails.stargazers_count}</p>
      <button onClick={goBackToResults}> VOLVER</button>
    </div>
  );
}

export default Details;
