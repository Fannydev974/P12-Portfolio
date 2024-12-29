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

    return (
        <div id="competences">
            <div className='title_competences'>
                <span>Mon expertise</span>
            </div>
            <div className='works'>
                <div className='awesome'>
                    <div className='title_domaines'>
                        <span>DOMAINES DE COMPETENCES</span>
                    </div>
                    {/* Utilisation de Flexbox pour les 4 domaines côte à côte */}
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
                </div>

                <div id='competenceIcons'>
                    <div className='title_icons'>
                        <span>COMPETENCES EN DEVELOPPEMENT</span>
                    </div>
                    {/* Conteneur des compétences en développement */}
                    <div className='containerIcons'>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Html} alt='html icon' />
                            </div>
                            <span>HTML 5</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Css} alt='css icon' />
                            </div>
                            <span>CSS 3</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={JavaScript} alt='javascript icon' />
                            </div>
                            <span>JAVASCRIPT</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={IconReact} alt='react icon' />
                            </div>
                            <span>React</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Sass} alt='sass icon' />
                            </div>
                            <span>SASS</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Redux} alt='redux icon' />
                            </div>
                            <span>REDUX</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Swagger} alt='swagger icon' />
                            </div>
                            <span>SWAGGER</span>
                        </div>
                        <div className='iconWithText'>
                            <div className='contentIcon'>
                                <img src={Github} alt='github icon' />
                            </div>
                            <span>GITHUB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Competences;
