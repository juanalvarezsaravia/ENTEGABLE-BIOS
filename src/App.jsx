import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    try {
      const response = await axios.get("https://api.github.com/users");
      setUsuarios(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = usuarios.filter((elemento) => {
      return (
        elemento.login.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
    });
    setUsuarios(resultadosBusqueda);
  };

  return (
    <div className="containerInput">
      <input
        className="form-control inputBuscar"
        value={busqueda}
        placeholder="Búsqueda por Nombre de Usuario"
        onChange={handleChange}
      />
      <button className="btn btn-success" onClick={peticionGet}>
        Buscar
      </button>

      <div className="resultados">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="usuario">
            <p>Nombre de usuario: {usuario.login}</p>
            {usuario.name && <p>Nombre: {usuario.name}</p>}
            {usuario.repos_url && <p>Repository: {usuario.repos_url}</p>}

          </div>

        ))}
      </div>



    </div>
  );
}

export default App;
