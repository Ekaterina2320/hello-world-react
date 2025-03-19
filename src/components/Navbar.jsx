import React from 'react';
import Button from './Button';

const Navbar = ({ onNavigate }) => {
    return (
        <nav className="navbar">
            <div className="logo">Hello World App</div>
            <Button text="Header" onClick={() => onNavigate('header')} />
            <Button text="Menu" onClick={() => onNavigate('menu')} />
            <Button text="Content" onClick={() => onNavigate('content')} />
            <Button text="Footer" onClick={() => onNavigate('footer')} />
        </nav>
    );
};

export default Navbar;