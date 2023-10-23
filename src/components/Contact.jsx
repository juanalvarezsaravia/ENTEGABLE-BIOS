import React from 'react';
import { useNavigate } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import Button from './Button';

const Contact = () => {
    const navigate = useNavigate();

    const goBackToSearch = () => {
        navigate('/');
    };


    return (
        <div className='Contact'>
            <h2>Contactos</h2>
            <CallIcon />
            <p>Telefono</p>
            <p>098369587</p>
            <MailIcon />
            <p>Email</p>
            <p>nazareno@gmail.com</p>
            <LocationOnIcon />
            <p>Dirección</p>
            <p>Av.Italia 1987</p>
            <Button onClick={goBackToSearch}> Back to Search</Button>
        </div>
    );
};

export default Contact;

