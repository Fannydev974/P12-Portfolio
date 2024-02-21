import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram (1).png';
import ImgPortfolio from '../../img/img portfolio.jpg';


function intro() {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Bonjour! Je me présente </span>
                    <span>Fanny Hadji</span>
                    <span>Développeuse web,
                        Plongez dans l'univers du web avec moi ! En tant que développeuse web front-end junior passionnée, je marie créativité et code pour donner vie à des expériences digitales captivantes. Avec une maîtrise des langages HTML, CSS et JavaScript, React, NexJs je sculpte des interfaces interactives et intuitives qui séduisent et engagent les utilisateurs. Parcourez mon portfolio et laissez-vous emporter par mes projets.
                        Ensemble, créons un web vibrant et innovant, où chaque clic est une expérience mémorable."</span>
                </div>

                <button className='button i-button'>Refléchie</button>
                <div className='icons'>
                    <img src={Github} alt='icon github' />
                    <img src={Linkedin} alt='icon linkedin' />
                    <img src={Instagram} alt='icon instagram' />
                </div>
            </div>
            <div className='i-right'>
                <img src={ImgPortfolio} alt='image portfolio' />
                {/*Rond de couleurs de fond */}
                <div className='fondViolet' style={{ background: "rgb(238 210 255)" }}></div>
                <div className='fondViolet' style={{ background: '#c1F5FF', top: '41rem', width: '37rem', height: '6rem', left: '10rem' }}></div>
            </div>
        </div>
    )
}

export default intro
