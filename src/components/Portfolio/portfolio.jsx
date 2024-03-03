import React, { useState } from 'react';
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Booki from '../../img/Booki.png';
import Ohmyfood from '../../img/Ohmyfood.png';
import SophieBluel from '../../img/SophieBluel.png';
import Qwenta from '../../img/Qwenta.png';
import Kasa from '../../img/Kasa.png';
import NinaCarducci from '../../img/NinaCarducci.png';
import Events from '../../img/724events.png';

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedGithubLink, setSelectedGithubLink] = useState('');


    const openModal = (image, description, githubLink) => {
        setSelectedImage(image);
        setSelectedDescription(description);
        setSelectedGithubLink(githubLink);

        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedDescription('');
        setModalOpen(false);
    };
    // Définition du composant ModalContent
    function ModalContent({ description, githubLink }) {
        const handleGithubClick = () => {
            window.open(githubLink, '_blank'); // '_blank' signifie ouvert dans un nouvel onglet
        };
        return (
            <div className="modal-content">
                <div>{description}</div>
                <button className='lienGithub' onClick={handleGithubClick}>Lien Github</button>
            </div>
        );
    }
    return (
        <div id="mes-projets">
            <div className='Portfolio'>

                {/* Titre */}
                <span>Mes Projets</span>
                <span>Portfolio</span>

                {/* Slider swiper pour le 'carrousel' d'images */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className='Portfolio-slider'
                >
                    <SwiperSlide>
                        <img src={Booki} alt='Photo du site Booki' onClick={() => openModal(Booki, (
                            <p>
                                <strong>Client :</strong>
                                L'Entreprise souhaite développer un site web pour la recherche d'hébergements et d'activités.
                                <br></br><strong>Présentation :</strong> Booki est un projet web qui vise à simplifier la recherche d'hébergements et d'activités dans la ville de choix de l'utilisateur. Mon rôle en tant que développeuse Front-End était de prendre les maquettes fournies par l'UI designer, et de les intégrer en utilisant HTML et CSS.
                                <strong>Objectifs :</strong> Le défi pour cette mission était de rendre le projet responsif. Pour cela j'ai utilisé flexbox, cela a permis de pouvoir créer une expérience maximale pour les utilisateurs ainsi qu'une mise en page qui s'adapte à toutes sortes de taille d'écran différents (mobile, tablette, ordianteur).
                                <strong>Pour cela j'ai utilisée: "HTML", "CSS", "Responsive".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/Booki')
                        } />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={Ohmyfood} alt='Photo du site Ohmyfood' onClick={() => openModal(Ohmyfood, (
                            <p>
                                <strong>Client :</strong>
                                OhMyFood est une Startup de restauration.
                                <br></br>
                                <strong>Présentation :</strong> OhMyFood souhaite développer un site répertoriant les menus de restaurants gastronomiques parisien. Mon rôle en tant que développeuse était de créer le site en respectant les maquettes fournies par l'équipe UX designer.
                                <strong>Objectifs :</strong> L'objectif est de développer le site OhMyFood en "Mobile First" et de le dynamiser avec des animations CSS en utilisant le préprocesseur Sass. De plus, il fallais permettre la réservation en ligne et la composition de menus.
                                <strong>Pour cela j'ai utilisée: "HTML", "CSS", "Responsive".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/projetohmyfood')} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SophieBluel} alt='Photo du site Sophie Bluel' onClick={() => openModal(SophieBluel, (
                            <p>
                                <strong>Client :</strong>
                                Sophie Bluel architecte d'intèrieur.
                                <br></br>
                                <strong>Présentation :</strong>
                                Sophie Bluel souhaite rendre son portfolio dynamique en utilisant JavaScript.
                                <strong>Objectif :</strong>
                                Récupérer dynamiquement les données des travaux via une API, Permettre de trier/filtrer les projets par catégorie dans la galerie de photos. Permettre a Sophie Bluel de se connecter pour éditer son site. Créer la modale lui permettant de gérer ses projets : ajout, suppression de projets.
                                <strong>Pour cela j'ai utilisée: "JavaScript", "Swagger","NodeJS".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P06-Sophie-Bluel')} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Qwenta} alt='Photo du site Qwenta' onClick={() => openModal(Qwenta, (
                            <p>
                                <strong>Client :</strong>
                                Qwenta, il s'agit d'une application de création de menu pour restaurateurs.
                                <br></br>
                                <strong>Présentation :</strong>
                                Dans l'Agence Webgencia, ma mission pour ce projet est d'étudier la demande d'un client pour le développement d'une application web permettant aux restaurateurs de créer facilement leurs menus.
                                <strong>Objectif :</strong>
                                Veille technologique pour rester informé des dernières tendances et technologies en développement web pertinentes au projet.
                                Définition des spécifications techniques en fonction de l'aspect visuel du site et des fonctionnalités requises.
                                Rédaction d'un rapport et création d'une présentation visuelle pour présenter les spécifications au client.
                                Utilisation d'un tableau Kanban pour organiser la gestion de projet suivant les méthodologies agiles.
                                <strong>Pour cela j'ai utilisée: "Kanban", "Feedly", "Notion".</strong>
                            </p>
                        ),)} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Kasa} alt='Photo du site Kasa' onClick={() => openModal(Kasa, (
                            <p>
                                <strong>Client :</strong>
                                Kasa,  startup spécialisée dans la location d'appartements entre particuliers.
                                <br></br>
                                <strong>Présentation :</strong>
                                Kasa souhaite faire une refonte totale de leurs site. Mon rôle était de concevoir une plateforme web en utilisant React pour le côté front-end, et Node.js pour le côté backend, ainsi que des maquettes fournies par le designer.
                                <strong>Objectif :</strong>
                                Développer l'ensemble de l'application, Utiliser les composants React, Créer les routes avec React Router, Utiliser Sass pour le design, Site responsive.
                                <strong>Pour cela j'ai utilisée: "React", "Sass", "Figma".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P7-Kasa',)} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={NinaCarducci} alt='Photo du site Nina Carducci' onClick={() => openModal(NinaCarducci, (
                            <p>
                                <strong>Client :</strong>
                                Nina Carducci, photographe professionnelle.
                                <br></br>
                                <strong>Présentation :</strong>
                                Nina Carducci, par le biais de son site souhaite présenter son portfolio pour mettre en valeur ses réalisations. Elle souhaite également améliorer le référencement naturel (SEO) de son site.
                                <strong>Objectif :</strong>
                                Ma mission visait à améliorer la performance globale du site en optimisant les images du site trop lourdes qui rendent la page très longue à charger, Optimiser le code et sa structure afin d'améliorer le chargement et l'accessibilité du site, Produire un rapport d'optimisation présentant les améliorations mises en place.
                                <strong>Pour cela j'ai utilisée: "SEO", "Lighthouse", "Wave".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P9-Nina-Carducci',)} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={Events} alt='Photo du site Events' onClick={() => openModal(Events, (
                            <p>
                                <strong>Client :</strong>
                                Agence évènementielle 724events.
                                <br></br>
                                <strong>Présentation :</strong>
                                724events, une agence événementielle, a fait une refonte de son site vitrine. Il on fait appel a moi pour résoudre les problèmes techniques et optimiser le site pour répondre pleinement aux besoins de l'agence.
                                <strong>Objectif :</strong>
                                Ma mission a été d'effectuer un débogage complet et d'optimiser le site web de 724events, plus précisement Réparer le carrousel en affichant les évènements par date en ordre décroissant. Réaliser le filtrage de la section "Nos réalisations". Afficher les bons mois des réalisations de la section "Nos réalisations". Corriger le formulaire, et afficher un message de confirmation. Et Ajouter le dernier évènement au footer avec l'image et la date.
                                <strong>Pour cela j'ai utilisée: "Débogage", "Test unitaire", "Optimisation".</strong>
                            </p>
                        ), 'https://github.com/Fannydev974/P10-724Events',)} />
                    </SwiperSlide>
                </Swiper>
            </div>

            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(event) => event.stopPropagation()}>
                        <img src={selectedImage} alt="Image" />
                        <ModalContent
                            description={selectedDescription}
                            githubLink={selectedGithubLink}

                        />
                        <button className="close-button" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}





export default Portfolio;
