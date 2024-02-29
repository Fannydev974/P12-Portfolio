import React from 'react'
import './Navbar.css'



function Navbar() {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>FH</div>

            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: 'none' }}> { /* pour enlever les point de liste avant les liens */}
                        <li><a href="#a-propos" style={{ textDecoration: 'none' }}>A Propos</a></li>
                        <li><a href="#competences" style={{ textDecoration: 'none' }}>Compétences</a></li>
                        <button className='button n-button'><li><a href="#mes-projets" style={{ textDecoration: 'none' }}>Mes projets</a></li></button>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
