import '../Footer/Footer.scss';
import React from 'react';
import Logo from '../../assets/Footer.png';
export const Footer = ({Footer}) =>{
    return (
        <div className='footerBloc'>
            <img src={Logo} alt="kasa, location d'appartements, logo Footer"/>
            <label className="footerBloc__text">© 2020 Kasa. All rights reserved</label>
        </div>
    ); 
}