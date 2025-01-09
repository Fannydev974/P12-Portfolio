import React, { useState, useEffect } from 'react';
import './loader.css';
import Logoloader from '../img/icons/logofinale.webp';

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Loader monté, début du chargement');

        const timer = setTimeout(() => {
            setLoading(false); // Désactive le loader après 3 secondes
            console.log('Chargement terminé');
        }, 3000); // 3000 ms pour correspondre à la durée de l'animation CSS

        return () => {
            console.log('Cleanup du timer');
            clearTimeout(timer); // Nettoie le timer si le composant est démonté
        };
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <img src={Logoloader} alt="Logo" className="loader-logo" />
            </div>
        );
    }

    return null; // Ne rien rendre après le chargement
}

export default Loader;
