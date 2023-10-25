import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <h1>Buscador GitHub</h1>
            <nav>
                <Button onClick={() => navigate('/about')}> Nosotros</Button>
                <Button onClick={() => navigate('/contact')}> Contacto</Button>
                <Button onClick={() => navigate('/login')}> Iniciar sesion</Button>
                <Button onClick={() => navigate('/register')}> Registrarse</Button>
            </nav>
        </header>
    );
};

export default Header;