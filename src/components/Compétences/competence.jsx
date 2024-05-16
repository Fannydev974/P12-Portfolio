import React from 'react'
import './competence.css';
import Html from '../../img/icons/html-icon.png';
import Css from '../../img/icons/css-icon.png';
import JavaScript from '../../img/icons/js-icon.png';
import IconReact from '../../img/icons/react-icon.png';
import Sass from '../../img/icons/sass-icon.png';
import Redux from '../../img/icons/redux-icon.png';
import Swagger from '../../img/icons/swagger-icon.png';
import Github from '../../img/icons/github-icon.png';

const Competences = () => {

    {/* const DownloadCV = () => {
        // pour le téléchargement du CV
        // ouvrir l'URL du CV dans une nouvelle fenêtre
        window.open('chemin de mon fichier cv', 'le nom'); */}



    return (

        <div id="competences">
            <div className='title_competences'>
                <span>Mes Compétences</span>
            </div>
            <div className='works'>
                <div className='awesome'>
                    <div className='title_domaines'><span>DOMAINES DE COMPETENCES</span></div>
                    <div className="competence-description">
                        <div className="competence-item">
                            <span> ▸GESTION DE PROJETS WEB <br />
                                Site vitrine, évènementiels, e-commerce, application web et mobile.</span>
                        </div>
                        <div className="competence-item">
                            <span>▸INTEGRATION <br />
                                Codage à la main tout en respectant les standards du web</span>
                        </div>
                        <div className="competence-item">
                            <span>▸REFERENCEMENT NATUREL SEO <br />
                                Accessibilité & ergonomie des pages web.</span>
                        </div>
                        <div className="competence-item">
                            <span>▸ CONCEPTION MULTI-PLATEFORMES <br />
                                Compatible tous supports, tablettes & mobile.</span>
                        </div>
                    </div>

                    <button className='button s-button'>Télécharger mon cv</button>
                </div>

                <div id='competenceIcons'>
                    <div className='title_icons'>
                        <span>COMPETENCES EN DEVELOPPEMENT</span>
                    </div>
                    <div className='containerIcons'>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Html} alt='' />
                            </div>
                            <span>HTML 5</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Css} alt='' />
                            </div>
                            <span>CSS 3</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={JavaScript} alt='' />
                            </div>
                            <span>JAVASCRIPT</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={IconReact} alt='' />
                            </div>
                            <span>React</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Sass} alt='' />
                            </div>
                            <span>SASS</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Redux} alt='' />
                            </div>
                            <span>REDUX</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Swagger} alt='' />
                            </div>
                            <span>SWAGGER</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Github} alt='' />
                            </div>
                            <span>GITHUB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Competences
