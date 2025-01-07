import React from 'react'
import './Navbar.css'
//import { useContext } from 'react';
//import { LanguageContext } from '../Pages/homepage';
import LogoJsj from '../img/icons/logofinale.webp';

function Navbar() {
    /*const { language } = useContext(LanguageContext);*/
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>
                    <img src={LogoJsj} alt='logo' />
                </div>

            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: 'none' }}> { /* pour enlever les point de liste avant les liens */}
                        <li><a href="#a-propos" style={{ textDecoration: 'none' }}>A Propos</a></li>
                        <li><a href="#competences" style={{ textDecoration: 'none' }}>Expertise</a></li>
                        <button className='button n-button'><li><a href="#mes-projets" style={{ textDecoration: 'none' }}>Projets</a></li></button>
                        <li><a href="#Contact" style={{ textDecoration: 'none' }}>Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
