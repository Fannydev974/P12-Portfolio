import React from 'react'
import './Navbar.css'



function Navbar() {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Fanny</div>
                <span>toggle</span>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: 'none' }}> { /*pour enlever les point de liste avant les liens  */}
                        <li>Accueil</li>
                        <li>A propos</li>
                        <li>Compétences</li>
                        <li>Mes projets</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contactez moi
                </button>
            </div>
        </div >
    )
}

export default Navbar
