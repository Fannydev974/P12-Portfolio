import React from 'react';
import './footer.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram (1).png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-bar">
                <div className='icons'>
                    <a href="https://github.com/Fannydev974"><img src={Github} alt='icon github' /></a>
                    <a href="lien_linkedin"><img src={Linkedin} alt='icon linkedin' /></a>
                    <a href="https://www.instagram.com/jsjdeveloppement/"><img src={Instagram} alt='icon instagram' /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

