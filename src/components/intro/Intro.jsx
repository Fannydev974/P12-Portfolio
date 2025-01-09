//import React, { useState } from 'react';
import './Intro.css';
import ImgPortfolio from '../../img/icons/Fond-header.webp';



function Intro() {


    return (
        <div id="a-propos">
            <img src={ImgPortfolio} alt='image portfolio' />
            <div className='intro'>
                <div className='i-left'>
                    <div className='i-name'>
                        <span>Développeuse Front-End web et mobile </span>
                        <span>Fanny Hadji</span>
                        <div className='description_name'><span>Conception et refonte de site web, Applications web et mobile, Débug, Audit et Référencement naturel SEO.</span>

                        </div>
                    </div>
                </div>
            </div>

            <div className='i-right'>
                <div className='fondGris' ></div>
            </div>
            {/* Animation Circle and Arrow */}
            <div className="scroll-indicator">
                <div className="circle">
                    <div className="arrow"></div>
                </div>
            </div>
        </div >

    )
}





export default Intro;

/*Conception et refonte de site web, Applications web et mobile, Débug, Audit et Référencement naturel SEO.*/