import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './image/logo512.png';
import style from './Style.css';

function Nav() {
    return (
        <nav className="nav nav">
            <Link to={"/"} className="navbar-brand Logo" ><img src={Logo} alt="Imagen" className='logo' width="45" height="45"></img></Link>
            <h1>Dulce Antojo</h1>
            
        </nav>
    )
}

export default Nav