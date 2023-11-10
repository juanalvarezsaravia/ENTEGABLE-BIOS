import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

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
                    label="Full Name"
                    type='email'
                    size="small"
                />
                <TextField
                    label="Email"
                    type='email'
                    size="small"
                />

                <Button type="submit">Enviar</Button>
            </form>
            <Button onClick={goBackToSearch}> Volver</Button>
        </div>
    );
}

export default Login;
