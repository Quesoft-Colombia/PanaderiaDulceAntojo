import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './image/logo192.png'
import './Style.css'

function Footer() {
    return (
        <footer className="footer nav1">
            <Link to="/" className="navbar-brand" >Create From Quesoft Colombia ❤️</Link>
            <img src={Logo} alt="Bootstrap" width="35" height="35"></img>
            

        </footer>
    )
}

export default Footer