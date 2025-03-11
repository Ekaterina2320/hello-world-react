import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Hello World App</div>
            <Button text="About" />
        </nav>
    );
};

export default Navbar;