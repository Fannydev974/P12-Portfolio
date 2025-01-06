import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Importer EmailJS
import ProfileIcon from '../img/icons/profile_icon.png';
import MailIcon from '../img/icons/email_icon.png';
import LogoJsj from '../img/icons/logofinale.webp';
import LogoWatsapp from '../img/icons/icone-du-logo-whatsapp-noir.png';
import './contact.css';

function Contact() {
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState(''); // success ou error

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_p1c1wpv', // Remplacez par votre Service ID
                'template_zk8tj5t', // Remplacez par votre Template ID
                e.target,
                '7xLY3MUH-y7L8242l' // Remplacez par votre Public Key
            )
            .then(
                (result) => {
                    setStatusMessage('Message envoyé avec succès !');
                    setStatusType('success'); // Définit le type de succès
                },
                (error) => {
                    setStatusMessage('Erreur lors de l’envoi du message. Veuillez réessayer.');
                    setStatusType('error'); // Définit le type d'erreur
                }
            );

        e.target.reset(); // Réinitialise le formulaire

        // Masquer le message après 5 secondes
        setTimeout(() => {
            setStatusMessage('');
            setStatusType('');
        }, 10000);
    };

    return (
        <div id='Contact'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nom</label>
                <input name="username" type="text" id="username" required />
                <label htmlFor="email">Email</label>
                <input name="email" type="email" id="email" required />
                <label htmlFor="message">Votre message</label>
                <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                <button type="submit">Envoyer</button>
            </form>

            {/* Message animé */}
            {statusMessage && (
                <div className={`status-message ${statusType}`}>
                    {statusMessage}
                </div>
            )}

            {/* Section fondContact et informations */}
            <div className="fondContact">
                <img src={LogoJsj} className="logoFond" alt="logo" />
            </div>
            <div className="contact-infos">
                <div className="contact-infos-name">
                    <img src={ProfileIcon} className="contact-infos-icon" alt="Profile Icon" />
                    <p className="contact-infos-text">Fanny Hadji<br />JSJ Développement</p>
                </div>
                <div className="contact-infos-number">
                    <img src={LogoWatsapp} className="contact-infos-icon" alt="WhatsApp Icon" />
                    <a href="tel:0766360280" aria-label="Lien vers le numéro de téléphone" className="contact-infos-text">
                        +33 7 66 36 02 80
                    </a>
                </div>
                <div className="contact-infos-mail">
                    <img src={MailIcon} className="contact-infos-icon" alt="Mail Icon" />
                    <p className="contact-infos-text">devfanny91@outlook.com</p>

                </div>
            </div>
        </div>



    );
}

export default Contact;

/* <a href="mailto:devfanny91@outlook.com" aria-label="Lien vers l'adresse e-mail" className="contact-infos-text">
                        devfanny91@outlook.com
                    </a>*/