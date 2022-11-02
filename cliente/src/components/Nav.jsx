import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './image/logo192.png';
import style from './Style.css';

function Nav() {
    return (
        <nav className="navbar nav">
            
            <Link to={"/"} className="navbar-brand" >Dulce Antojo<img src={Logo} alt="Bootstrap" width="45" height="45"></img></Link>
            
            
        </nav>
    )
}

export default Nav