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
                    <span> ▸GESTION DE PROJETS WEB <br></br>
                        Site vitrine, évènementiels, e-commerce, application web et mobile.</span>
                    <span>▸INTEGRATION <br></br>
                        Codage à la main tout en respectant les standars du web</span>
                    <span>▸REFERENCEMENT NATUREL SEO <br></br>
                        Accessibilité & ergonomie des pages web.</span>
                    <span>▸ CONCEPTION MULTI-PLATEFORMES <br></br>
                        Compatible tous supports, tablettes & mobile.
                    </span>



                    {/* <a> pour le téléchargement du CV 
                    <a href="" download="mon cv" className='button s-button' onClick={DownloadCV}>
                        Télécharger mon CV
                    </a> */}
                    <button className='button s-button'>Télécharger mon cv</button>

                </div>


                {/* right */}

                <div id='competenceIcons'>
                    <div className='title_icons'><span>Compétences</span>
                        <span>en développement</span></div>
                    <div className='containerIcons'>
                        <div className='contentIcon'>
                            <img src={Html} alt='' />
                        </div>
                        <div className='contentIcon'>
                            <img src={Css} alt='' />
                        </div>
                        <div className='contentIcon'>
                            <img src={JavaScript} alt='' />
                        </div>{""}
                        <div className='contentIcon'>
                            <img src={IconReact} alt='' />
                        </div>
                        <div className='contentIcon'>
                            <img src={Sass} alt='' />
                        </div>

                        <div className='contentIcon'>
                            <img src={Redux} alt='' />
                        </div>
                        <div className='contentIcon'>
                            <img src={Swagger} alt='' />
                        </div>
                        <div className='contentIcon'>
                            <img src={Github} alt='' />
                        </div>
                        {/* Background Circles */}

                        <div className='w-backCircle beigeCircle'></div>
                        <div className='w-backCircle greyCircle'></div>
                    </div>
                </div>
            </div >
        </div>
    )
}


export default Competences
