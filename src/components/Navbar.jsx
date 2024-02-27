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
                        <li>A propos</li>
                        <li>Compétences</li>
                        <button className="button n-button">
                            Mes projets
                        </button>
                    </ul>
                </div>

            </div>
        </div >
    )
}

export default Navbar
