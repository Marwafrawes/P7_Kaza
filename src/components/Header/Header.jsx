import './header.scss';
import React from 'react';
import Logo from '../../assets/LOGO.png';

import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
    //Les traitements necessaires

    return(
        <div className='header'>
            <img src={Logo} alt="kasa, location d'appartements, logo"/>
            <nav>
                <Link to={"/"}>Acceuil</Link>
                <Link to="/about">A propos</Link>
            </nav>
            <Outlet />
        </div>
    );
}