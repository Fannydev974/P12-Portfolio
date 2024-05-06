import { useState, createContext } from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import Header from '../components/header';
import Intro from '../components/intro/Intro';
import Competences from '../components/Compétences/competence';
import Contact from '../components/contact';






export const LanguageContext = createContext();

function Home() {
    const [language, setLanguage] = useState('fr');

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    return (

        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            <div>
                <Header />
                <div>
                    <a className="arrow_up" href="#top">
                        <img src={arrowUp} alt="arrow up" className="arrow_up" />
                    </a>
                    <Starter />
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