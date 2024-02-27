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
                    <span>
                        Plongez dans l'univers du web avec moi ! En tant qu'intégratrice, développeuse web et mobile, je marie créativité et code pour donner vie à des expériences digitales captivantes. Avec une maîtrise des langages HTML, CSS, JavaScript et React je sculpte des interfaces interactives et intuitives qui séduisent et engagent les utilisateurs. En parcourant mon portfolio vous pourrez ainsi voir les projets que j'ai pu réaliser tout au long de ma formation intensive avec Openclassrooms, ce qui vous donnera un aperçu des compétences et du savoir que j'ai pu acquérir durant celle-ci.<br></br>
                        N'hésitez pas à prendre contact avec moi je serais ravie d'échanger avec vous !
                    </span>
                </div>

                <button className='button i-button'>Contact</button>
                <div className='icons'>
                    <img src={Github} alt='icon github' />
                    <img src={Linkedin} alt='icon linkedin' />
                    <img src={Instagram} alt='icon instagram' />
                </div>
            </div>
            <div className='i-right'>
                <img src={ImgPortfolio} alt='image portfolio' />
                {/*Rond de couleurs de fond */}
                <div className='fondGris' ></div>
            </div>
        </div >
    )
}

export default intro
