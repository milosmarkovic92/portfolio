import React from 'react';
import LinkedinIcon from '../Icons/linkedin';
import GithubIcon from '../Icons/github';
import GmailIcon from '../Icons/gmail';
import PhoneIcon from '../Icons/phone';
import './Contact.css';

const Contact = () => {
    return (
        <div className="segment-wrapper-contact">
            <div className="segment-arch" />
            <div className="segment-container-con">
                <div className="contact-slide">
                    <h1 className="center-align">CONTACT</h1>
                    <div className="contact-icons">
                        <a href="https://www.linkedin.com/in/milosmarkovic92/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <LinkedinIcon className="contact" /></a>
                        <a href="https://github.com/milosmarkovic92"
                            target="_blank"
                            rel="noopener noreferrer">
                            <GithubIcon className="contact" /></a>
                        <a href="mailto:milosmarkovic7692@gmail.com">
                            <GmailIcon className="contact" /></a>
                        <a href="tel:+381652652016">
                            <PhoneIcon className="contact" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;