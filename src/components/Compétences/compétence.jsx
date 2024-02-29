import React from 'react'
import './compétence.css';
import Html from '../../img/Html.png';
import Css from '../../img/Css.png';
import JavaScript from '../../img/icon JS.png';
import IconReact from '../../img/icon React.png';
import Sass from '../../img/icon sass.png';


const travaux = () => {

    {/* const DownloadCV = () => {
        // pour le téléchargement du CV
        // ouvrir l'URL du CV dans une nouvelle fenêtre
        window.open('chemin de mon fichier cv', 'le nom'); */}



    return (
        <div id="competences">
            <div className='works'>
                <div className='awesome'>
                    <span>Mes </span>
                    <span>Compétences</span>
                    <span>▸ Référencement SEO,</span>
                    <span> ▸ Méthode agile,</span>
                    <span>▸ Accessibilité</span>
                    <span>▸ Résolution de bug</span>
                    <span>---------------------------</span>
                    <span>▸ Rigueur ▸ Autonomie ▸ Adaptibilité ▸ Curiosité</span>

                    {/* <a> pour le téléchargement du CV 
                    <a href="" download="mon cv" className='button s-button' onClick={DownloadCV}>
                        Télécharger mon CV
                    </a> */}
                    <button className='button s-button'>Télécharger mon cv</button>

                </div>

                {/* right */}
                <div className='w-right'>
                    <div className='w-mainCircle'>
                        <div className='w-secCircle'>
                            <img src={Html} alt='' />
                        </div>
                        <div className='w-secCircle'>
                            <img src={Css} alt='' />
                        </div>
                        <div className='w-secCircle'>
                            <img src={JavaScript} alt='' />
                        </div>{""}
                        <div className='w-secCircle'>
                            <img src={IconReact} alt='' />
                        </div>
                        <div className='w-secCircle'>
                            <img src={Sass} alt='' />
                        </div>
                    </div>
                    {/* Background Circles */}

                    <div className='w-backCircle beigeCircle'></div>
                    <div className='w-backCircle greyCircle'></div>
                </div>
            </div>
        </div>
    )
}

export default travaux
