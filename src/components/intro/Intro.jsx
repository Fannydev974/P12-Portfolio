//import React, { useState } from 'react';
import './Intro.css';
import ImgPortfolio from '../../img/img 4.jpg';



function Intro() {


    return (
        <div id="a-propos">
            <img src={ImgPortfolio} alt='image portfolio' />
            <div className='intro'>
                <div className='i-left'>
                    <div className='i-name'>
                        <span>Développeuse web et mobile </span>
                        <span>Fanny Hadji</span>
                        <div className='description_name'><span>Création de site vitrine, évènementiels, e-commerce, applications web et mobile, Débug et Référencement naturel SEO. </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='i-right'>
                <div className='fondGris' ></div>
            </div>
        </div >

    )
}





export default Intro;

