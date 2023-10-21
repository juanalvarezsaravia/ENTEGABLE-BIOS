import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const goBackToSearch = () => {
        navigate('/');
    };


    return (

        <div className='Login'>
            <h2>Acceso</h2>
            <form action="">
                <TextField
                    label="Email"
                    type='email'
                    size="small"
                />
                <TextField
                    label="Contraseña"
                    type='password'
                    size="small"
                />
                <button>Enviar</button>
            </form>
            <button onClick={goBackToSearch}>Back to Search</button>
        </div>

    )
}

export default Login;