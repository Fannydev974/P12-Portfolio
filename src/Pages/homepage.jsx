import { useState, createContext, useEffect } from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import Header from '../components/header';
import Intro from '../components/intro/Intro';
import Competences from '../components/Compétences/competence';
import Contact from '../components/contact';
import Loader from '../components/loader';
import Footer from '../components/footer';

export const LanguageContext = createContext();

function Home() {
    const [language, setLanguage] = useState('fr');
    const [loading, setLoading] = useState(true); // Pour gérer l'affichage du loader

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    // Déclencher la fin du chargement après 3 secondes
    useEffect(() => {
        console.log("Le loader va démarrer.");
        const timer = setTimeout(() => {
            setLoading(false); // Fin du chargement après 3 secondes
            console.log("Le loader a été désactivé.");
        }, 3000);

        return () => clearTimeout(timer); // Nettoyage du timer lors du démontage du composant
    }, []);
    console.log("Loader est-il affiché ?", loading);
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            <div>
                {/* Affichage du loader avant le contenu principal */}
                {loading && <Loader />}

                <Header />
                <div>
                    <a className="arrow_up" href="#top">
                        <img src={arrowUp} alt="arrow up" className="arrow_up" />
                    </a>
                    <Intro id="intro" />
                    <Competences id="competences" />
                    <Portfolio id="portfolio" />
                    <Contact id="contact" />
                </div>
                <Footer />
            </div>
        </LanguageContext.Provider>
    );
}

export default Home;
