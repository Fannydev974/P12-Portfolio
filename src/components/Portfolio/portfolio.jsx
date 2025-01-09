import React, { useState, useRef } from 'react';
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Booki from '../../img/booki.png';
import Ohmyfood from '../../img/ohmyfood.png';
import SophieBluel from '../../img/sophiebluel.png';
import ArgentBank from '../../img/argentbank.png';
import Kasa from '../../img/kasa.png';
import NinaCarducci from '../../img/ninacarducci.png';
import Events from '../../img/724events.png';
import Printit from '../../img/printit.png';
import ArrowLeft from '../../img/flecheroseGauche.webp';
import ArrowRight from '../../img/flecherose.png'

import BookiModal from '../../img/bookiModal.webp';
import ModalOhmyfood from '../../img/Modal-ohmyfood1.webp';
import ModalPrintit from '../../img//Modal-printit.png';
import ModalSophie from '../../img/ModalSophie.webp';
import ModalArgent from '../../img/ModalArgent.webp'
import ModalNina from '../../img/ModalNina.webp';
import ModalKasa from '../../img/ModalKasa.webp';
import Modal724 from '../../img/Modal724.webp';

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedGithubLink, setSelectedGithubLink] = useState('');
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const swiperRef = useRef(null);

    const openModal = (image, description, githubLink) => {
        setSelectedImage(image);
        setSelectedDescription(description);
        setSelectedGithubLink(githubLink);
        setModalOpen(true);
    };

    const closeModal = () => {
        /* setSelectedImage(null);
         setSelectedDescription('');*/
        setModalOpen(false);
    };

    const handleSlideChange = (swiper) => {
        const isBeginning = swiper.isBeginning;
        const isEnd = swiper.isEnd;

        setShowLeftArrow(!isBeginning);
        setShowRightArrow(!isEnd);
    };


    // Définition du composant ModalContent
    function ModalContent({ description, githubLink }) {
        const handleGithubClick = () => {
            window.open(githubLink, '_blank'); // '_blank' signifie ouvert dans un nouvel onglet
        };
        return (
            <div className="modal-content">
                <div>{description}</div>
                {<button className='lienGithub' onClick={handleGithubClick}>Lien Github</button>}
            </div>
        );
    }
    return (
        <div id="mes-projets">
            <div className='Portfolio'>

                {/* Titre */}
                <span>Mes Projets</span>


                {showLeftArrow && (

                    <img
                        src={ArrowLeft}
                        alt="Flèche de gauche"
                        className="navigation-arrow left-arrow"
                        onClick={() => {
                            console.log('Left arrow clicked');
                            if (swiperRef && swiperRef.current) {
                                if (!swiperRef.current.isBeginning) {
                                    swiperRef.current.slidePrev();
                                } else {
                                    console.log('Swiper reference is not defined');
                                }
                            }
                        }
                        }


                    />

                )}

                {/* Slider swiper pour le 'carrousel' d'images */}

                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className='Portfolio-slider'
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => {
                        console.log('Swiper instance:', swiper);
                        swiperRef.current = swiper; (swiperRef.current = swiper)
                    }}
                >
                    {/*<img src={ArrowLeft} alt='Flèche de gauche'></img>
                    <img src={ArrowRight} alt='Flèche de droite'></img>*/}
                    <SwiperSlide>
                        <img src={Booki} alt='Photo du site Booki' onClick={() => openModal(BookiModal, (
                            <p>
                                <strong>Client : </strong>
                                L'Entreprise souhaite développer un site web pour la recherche d'hébergements et d'activités.
                                <br></br><strong>Présentation : </strong> Booki est un projet web qui vise à simplifier la recherche d'hébergements et d'activités dans la ville de choix de l'utilisateur. Mon rôle en tant que développeuse Front-End était de prendre les maquettes fournies par l'UI designer, et de les intégrer en utilisant HTML et CSS.<br></br>
                                <strong>Objectifs : </strong> Le défi pour cette mission était de rendre le projet responsif. Pour cela j'ai utilisé flexbox, cela a permis de pouvoir créer une expérience maximale pour les utilisateurs ainsi qu'une mise en page qui s'adapte à toutes sortes de taille d'écran différents (mobile, tablette, ordianteur).<br></br>
                                <strong>Pour cela j'ai utilisée: "HTML", "CSS", "Responsive".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/Booki')
                        } />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={Ohmyfood} alt='Photo du site Ohmyfood' onClick={() => openModal(ModalOhmyfood, (
                            <p>
                                <strong>Client : </strong>
                                OhMyFood est une Startup de restauration.
                                <br></br>
                                <strong>Présentation : </strong> OhMyFood souhaite développer un site répertoriant les menus de restaurants gastronomiques parisien. Mon rôle en tant que développeuse était de créer le site en respectant les maquettes fournies par l'équipe UX designer.<br></br>
                                <strong>Objectifs : </strong> L'objectif est de développer le site OhMyFood en "Mobile First" et de le dynamiser avec des animations CSS en utilisant le préprocesseur Sass. De plus, il fallais permettre la réservation en ligne et la composition de menus.<br></br>
                                <strong>Pour cela j'ai utilisée: "HTML", "CSS", "Responsive".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/projetohmyfood')} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Printit} alt='Photo du site Print-it' onClick={() => openModal(ModalPrintit, (
                            <p>
                                <strong>Client : </strong>
                                Print-it imprimerie familiale
                                <br></br>
                                <strong>Présentation : </strong>
                                Dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it.<br></br>
                                <strong>Objectif : </strong>
                                Dynamiser le site Internet statique d’une petite imprimerie familiale, en ajoutant a celui-ci un carrousel d'images qui défile avec des images chisies à l'avance par le gérant de cette imprimerie.<br></br>
                                <strong>Pour cela j'ai utilisée: "JavaScript", "DOM".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/Print-it')} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SophieBluel} alt='Photo du site Sophie Bluel' onClick={() => openModal(ModalSophie, (
                            <p>
                                <strong>Client : </strong>
                                Sophie Bluel architecte d'intèrieur.
                                <br></br>
                                <strong>Présentation : </strong>
                                Sophie Bluel souhaite rendre son portfolio dynamique en utilisant JavaScript.<br></br>
                                <strong>Objectif : </strong>
                                Récupérer dynamiquement les données des travaux via une API, Permettre de trier/filtrer les projets par catégorie dans la galerie de photos. Permettre a Sophie Bluel de se connecter pour éditer son site. Créer la modale lui permettant de gérer ses projets : ajout, suppression de projets.<br></br>
                                <strong>Pour cela j'ai utilisée: "JavaScript", "Swagger","NodeJS".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P06-Sophie-Bluel')} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ArgentBank} alt='Photo du site ArgentBank' onClick={() => openModal(ModalArgent, (
                            <p>
                                <strong>Client : </strong>
                                ArgentBank, Nouveau sur le marché des banque en ligne
                                <br></br>
                                <strong>Présentation : </strong>
                                ArgentBank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire.<br></br>
                                <strong>Objectif : </strong>
                                Créer l’application web complète et responsive avec React.Responsable de la configuration du tableau de bord utilisateur pour notre nouvelle application web React chez ArgentBank.
                                Collaboration avec Mila, la cheffe de projet, pour répondre aux exigences fixées par le client et terminer les tâches dans les délais impartis.<br></br>
                                <strong>Pour cela j'ai utilisée: "React", "Redux", "Green Code", "MongoDB".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P11-ArgentBank')} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Kasa} alt='Photo du site Kasa' onClick={() => openModal(ModalKasa, (
                            <p>
                                <strong>Client : </strong>
                                Kasa,  startup spécialisée dans la location d'appartements entre particuliers.
                                <br></br>
                                <strong>Présentation : </strong>
                                Kasa souhaite faire une refonte totale de leurs site. Mon rôle était de concevoir une plateforme web en utilisant React pour le côté front-end, et Node.js pour le côté backend, ainsi que des maquettes fournies par le designer.<br></br>
                                <strong>Objectif : </strong>
                                Développer l'ensemble de l'application, Utiliser les composants React, Créer les routes avec React Router, Utiliser Sass pour le design, Site responsive.<br></br>
                                <strong>Pour cela j'ai utilisée: "React", "Sass", "Figma".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P7-Kasa',)} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={NinaCarducci} alt='Photo du site Nina Carducci' onClick={() => openModal(ModalNina, (
                            <p>
                                <strong>Client : </strong>
                                Nina Carducci, photographe professionnelle.
                                <br></br>
                                <strong>Présentation : </strong>
                                Nina Carducci, par le biais de son site souhaite présenter son portfolio pour mettre en valeur ses réalisations. Elle souhaite également améliorer le référencement naturel (SEO) de son site.<br></br>
                                <strong>Objectif : </strong>
                                Ma mission visait à améliorer la performance globale du site en optimisant les images du site trop lourdes qui rendent la page très longue à charger, Optimiser le code et sa structure afin d'améliorer le chargement et l'accessibilité du site, Produire un rapport d'optimisation présentant les améliorations mises en place.<br></br>
                                <strong>Pour cela j'ai utilisée: "SEO", "Lighthouse", "Wave".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P9-Nina-Carducci',)} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={Events} alt='Photo du site Events' onClick={() => openModal(Modal724, (
                            <p>
                                <strong>Client : </strong>
                                Agence évènementielle 724events.
                                <br></br>
                                <strong>Présentation : </strong>
                                724events, une agence événementielle, a fait une refonte de son site vitrine. Il on fait appel a moi pour résoudre les problèmes techniques et optimiser le site pour répondre pleinement aux besoins de l'agence.<br></br>
                                <strong>Objectif : </strong>
                                Effectuer un débogage complet et optimiser le site web de 724events, plus précisement Réparer le carrousel en affichant les évènements par date en ordre décroissant. Réaliser le filtrage de "Nos réalisations". Afficher les bons mois des réalisations de "Nos réalisations". Corriger le formulaire, et afficher un message de confirmation. Et Ajouter le dernier évènement au footer avec l'image et la date.<br></br>
                                <strong>Pour cela j'ai utilisée: "Débogage", "Test unitaire", "Optimisation".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P10-724Events',)} />
                    </SwiperSlide>
                </Swiper>
                {showRightArrow && (
                    <img
                        src={ArrowRight}
                        alt="Flèche de droite"
                        className="navigation-arrow right-arrow"
                        onClick={() => {
                            console.log('Right arrow clicked');
                            if (swiperRef && swiperRef.current) {
                                if (!swiperRef.current.isEnd) {
                                    swiperRef.current.slideNext();
                                } else {
                                    console.log('Swiper reference is not defined');
                                }
                            }
                        }}


                    />
                )}
            </div>



            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(event) => event.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-left">
                                {/* Utilisation de l'image sélectionnée dynamiquement */}
                                <img src={selectedImage} alt="Aperçu du projet" />
                            </div>
                            <div className="modal-right">
                                <ModalContent
                                    description={selectedDescription}
                                    githubLink={selectedGithubLink}
                                />
                            </div>
                        </div>
                        <button className="close-button" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </div>




    );
}





export default Portfolio;
