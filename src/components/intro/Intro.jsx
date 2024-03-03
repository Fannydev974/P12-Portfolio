import React, { useState } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram (1).png';
import ImgPortfolio from '../../img/img portfolio.jpg';
import Email from '../../img/email.png';


function Intro() {
    const [showContacts, setShowContacts] = useState(false);

    const toggleContacts = () => {
        setShowContacts(!showContacts);
    };

    return (
        <div id="a-propos">
            <div className='intro'>
                <div className='i-left'>
                    <div className='i-name'>
                        <span>Bonjour! Je me présente </span>
                        <span>Fanny Hadji</span>
                        <span>Plongez dans l'univers du web avec moi ! En tant qu'intégratrice, développeuse web et mobile, je marie créativité et code pour donner vie à des expériences digitales captivantes. Avec une maîtrise des langages HTML, CSS, JavaScript et React je sculpte des interfaces interactives et intuitives qui séduisent et engagent les utilisateurs. En parcourant mon portfolio vous pourrez ainsi voir les projets que j'ai pu réaliser tout au long de ma formation intensive avec Openclassrooms, ce qui vous donnera un aperçu des compétences et du savoir que j'ai pu acquérir durant celle-ci.<br></br>N'hésitez pas à prendre contact avec moi je serais ravie d'échanger avec vous !
                        </span>
                    </div>

                    <button onClick={toggleContacts} className='button i-button'>Contacts</button>
                    {showContacts && (
                        <div className="modal-overlay">
                            <div className="modalContact">
                                <h2>Mes Contacts</h2>
                                <ul>
                                    <li><a href="https://github.com/Fannydev974" target="_blank" style={{ textDecoration: 'none' }}><img src={Github} alt='icon github' /> Mon Github</a></li>
                                    <li><img src={Linkedin} alt='icon linkedin' /> Mon LinkedIn</li>
                                    <li><img src={Instagram} alt='icon instagram' /> Mon Instagram</li>
                                    <li><img src={Email} alt='email de fanny' />devfanny91@outlook.com</li>
                                </ul>
                                <button className='contactClose' onClick={toggleContacts}>X</button>
                            </div>
                        </div>
                    )}

                </div>

                <div className='i-right'>
                    <img src={ImgPortfolio} alt='image portfolio' />
                    <div className='fondGris' ></div>
                </div>
            </div >
        </div>
    )
}

export default Intro;



