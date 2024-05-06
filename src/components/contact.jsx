import React from 'react';
import ProfileIcon from '../img/icons/profile_icon.png';
import PhoneIcon from '../img/icons/phone_icon.png';
import MailIcon from '../img/icons/email_icon.png';
import './contact.css';

function Contact() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData.entries());
        console.log(formDataObject);
    };

    return (
        <div id="contact">
            <h2 className="contact-title"></h2>
            <div className="form_infos-container"></div>

            <section className="contact_form">
                <div className="contact_form-content">
                    <form className="contact_form-content-container" method="POST" onSubmit={handleFormSubmit} action="/">

                        <input type="hidden" name="form-name" value="contact" />

                        <div className="contact_form-content-container-input">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" required autoComplete="name" />
                        </div>
                        <div className="contact_form-content-container-input">
                            <label htmlFor="subject"></label>
                            <input type="text" name="subject" id="subject" required="" />
                        </div>

                        <div className="contact_form-content-container-input text">
                            <label htmlFor="message"></label>
                            <textarea name="message" id="message" cols="30" rows="10" required=""></textarea>
                        </div>

                        <input className="contact_form-content-container-button" type="submit" />
                    </form>
                </div>
            </section>

            <div className="contact-infos">
                <div className="contact-infos-name">
                    <img src={ProfileIcon} className="contact-infos-icon" alt="Profile Icon" />
                    <p className="contact-infos-text">Fanny Hadji</p>
                </div>
                <div className="contact-infos-number">
                    <img src={PhoneIcon} className="contact-infos-icon" />
                    <a href="tel:0766360280" aria-label="Lien vers le numéro de téléphone" className="contact-infos-text">0766360280</a>
                </div>
                <div className="contact-infos-mail">
                    <img src={MailIcon} className="contact-infos-icon" />
                    <a href="devfanny91@outlook.com" aria-label="Lien vers l'adresse e-mail" className="contact-infos-text">devfanny91@outlook.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
