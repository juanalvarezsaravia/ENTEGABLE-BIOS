import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const SignUP = () => {
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
                <Button type="submit">Enviar</Button>

            </form>
            <Button onClick={goBackToSearch}> Volver</Button>

        </div>
    )
}

export default SignUp;