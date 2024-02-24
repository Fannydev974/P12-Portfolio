import React, { useState } from 'react';
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Booki from '../../img/Booki.png';
import Ohmyfood from '../../img/Ohmyfood.png';
import SophieBluel from '../../img/SophieBluel.png';
import Qwenta from '../../img/Qwenta.png';
import Kasa from '../../img/Kasa.png';
import Events from '../../img/724events.png';

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState('');

    const openModal = (image, description) => {
        setSelectedImage(image);
        setSelectedDescription(description);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedDescription('');
        setModalOpen(false);
    };

    return (
        <div className='Portfolio'>

            {/* Titre */}
            <span>Mes Projets</span>
            <span>Portfolio</span>

            {/* Slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='Portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Booki} alt='Photo du site Booki' onClick={() => openModal(Booki, "Description de l'image Booki")} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ohmyfood} alt='Photo du site Ohmyfood' onClick={() => openModal(Ohmyfood, "Description de l'image Ohmyfood")} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SophieBluel} alt='Photo du site Sophie Bluel' onClick={() => openModal(SophieBluel, "Description de l'image SophieBluel")} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Qwenta} alt='Photo du site Qwenta' onClick={() => openModal(Qwenta, "Description de l'image Qwenta")} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Kasa} alt='Photo du site Kasa' onClick={() => openModal(Kasa, "Description de l'image Kasa")} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Events} alt='Photo du site Events' onClick={() => openModal(Events, "Description de l'image Events")} />
                </SwiperSlide>
            </Swiper>

            {/* Modal */}
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(event) => event.stopPropagation()}>
                        <img src={selectedImage} alt="Image" />
                        <p>{selectedDescription}</p>
                        <button onClick={closeModal}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;
