import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <h1>GitHub Search App</h1>
            <nav>
                <button onClick={() => navigate('/about')}>Nosotros</button>
                <button onClick={() => navigate('/contact')}>Contacto</button>
                <button onClick={() => navigate('/login')}>Iniciar sesión</button>
                <button onClick={() => navigate('/register')}>Registrarse</button>
            </nav>
        </header>
    );
};

export default Header;
