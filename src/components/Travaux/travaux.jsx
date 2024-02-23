import React from 'react'
import './travaux.css';
import Html from '../../img/Html.png';
import Css from '../../img/Css.png';
import JavaScript from '../../img/icon JS.png';
import IconReact from '../../img/icon React.png';
import Sass from '../../img/icon sass.png';


const travaux = () => {
    return (
        <div className='works'>
            <div className='awesome'>
                <span>Mes </span>
                <span>réalisations</span>
                <span>vhsdvcshdcbsducjbqudsjchnoqdsijkhcniojdshqnciojdshnicvos</span>

                <button className='button s-button'>Télécharger mon cv</button>
                <div className='fondViolet' style={{ background: '#ABF1FF94' }}></div>
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
                <div className='w-backCircle pinkCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>
        </div>
    )
}

export default travaux
