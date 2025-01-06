import React from 'react';
import './footer.css';
import Github from '../../img/icons/icone-github-gris.webp';

import Instagram from '../../img/icons//instagram-icone-gris.webp';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-bar">
                <div className='icons'>
                    <a href="https://github.com/Fannydev974"><img src={Github} alt='icon github' /></a>
                    <a href="https://www.instagram.com/jsjdeveloppement/"><img src={Instagram} alt='icon instagram' /></a>
                </div>

            </div>
            <div className='Droits'>
                <p>© 2024 Hadji Fanny - Tous droits réservés -</p>
            </div>
        </footer>
    );
}

export default Footer;

