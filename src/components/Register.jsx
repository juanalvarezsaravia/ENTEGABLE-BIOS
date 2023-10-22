import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Register = () => {
    const navigate = useNavigate();

    const goBackToSearch = () => {
        navigate('/');
    };

    return (
        <div className='Register'>
            <h2>Registro</h2>
            <form >
                <TextField
                    label="Nombre completo"
                    size="small"
                />
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
                <TextField
                    label="Confirmar contraseña"
                    type='password'
                    size="small"
                />
                <Button type="submit">Enviar</Button>

            </form>
            <Button onClick={goBackToSearch}> Back to Search</Button>

        </div>
    )
}

export default Register;