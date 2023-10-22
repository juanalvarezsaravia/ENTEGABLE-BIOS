import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

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
                <Button type="submit">Enviar</Button>
            </form>
            <Button onClick={goBackToSearch}> Back to Search</Button>
        </div>

    )
}

export default Login;