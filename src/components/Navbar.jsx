import React, { useState } from 'react';
import './Navbar.css';
import LogoJsj from '../img/icons/logofinale.webp';

function Navbar() {
    const [isAboutModalOpen, setAboutModalOpen] = useState(false);

    // Fonction pour ouvrir et fermer la modale "À Propos"
    const toggleAboutModal = () => setAboutModalOpen(!isAboutModalOpen);

    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>
                    <img src={LogoJsj} alt='logo' />
                </div>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: 'none' }}>
                        <li><a href="#competences" style={{ textDecoration: 'none' }}>Expertise</a></li>
                        <button className='button n-button'><li><a href="#mes-projets" style={{ textDecoration: 'none' }}>Projets</a></li></button>
                        <li><a href="#Contact" style={{ textDecoration: 'none' }}>Contact</a></li>
                        {/* Bouton pour ouvrir la modale À Propos */}
                        <li onClick={toggleAboutModal} style={{ cursor: 'pointer', textDecoration: 'none' }}>À Propos</li>
                    </ul>
                </div>
            </div>

            {/* Modale spécifique pour "À Propos" */}
            {isAboutModalOpen && (
                <div className='about-modal-overlay'>
                    <div className='about-modal-content'>
                        <h2>À Propos de moi</h2>
                        <p>
                            🎯 Boostez votre présence digitale avec une développeuse passionnée et créative !<br></br>
                            <strong>BONJOUR !</strong> Je m'appelle FANNY, développeuse web et mobile spécialisée dans la création de solutions sur-mesure et performantes.<br></br> Avec une expertise en conception, refonte de sites web, développement d'applications mobiles et SEO naturel, je transforme vos idées en projets concrets qui captivent et engagent vos utilisateurs.
                            <br></br>
                            ✨ Pourquoi travailler avec moi ?<br></br>

                            <strong>Un design moderne et responsif:</strong><br></br> Vos sites et applications seront aussi beaux qu'efficaces, sur tous les écrans.<br></br>
                            <strong>Un code propre et optimisé :</strong><br></br> Performances garanties pour une expérience utilisateur fluide.<br></br>
                            <strong>Un accompagnement personnalisé :</strong><br></br> Je vous guide à chaque étape, du brainstorming à la mise en ligne.<br></br>
                            <strong>Une vision orientée résultats :</strong><br></br> Votre projet ne se limite pas à une belle vitrine, il attire et convertit vos clients.<br></br>
                            💡 Vous avez une idée en tête ? Un projet à lancer ou un site à améliorer ?<br></br>
                            Contactez-moi dès aujourd’hui et démarquons votre entreprise dans l’univers digital !<br></br>

                            📩 devfanny91@outlook.com<br></br> 📱 +33 7 66 36 02 80<br></br>
                            📍 Je travaille avec des clients partout en France (et au-delà).


                        </p>
                        <button onClick={toggleAboutModal} className='about-close-modal'>
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
