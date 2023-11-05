import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
