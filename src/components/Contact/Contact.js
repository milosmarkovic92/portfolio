import React from 'react';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import gmail from '../../assets/gmail.png';
import telephone from '../../assets/telephone.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className="segment-wrapper-contact">
            <div className="segment-arch" />
            <div className="segment-container-con contact-slide">
                <h1 className="center-align">CONTACT</h1>
                <div className="contact-icons">
                    <a href="https://www.linkedin.com/in/milosmarkovic92/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={linkedin} alt=""/></a>
                    <a href="https://github.com/milosmarkovic92"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={github} alt=""/></a>
                    <a href="mailto:milosmarkovic7692@gmail.com">
                    <img src={gmail} alt=""/></a>
                    <a href="tel:+381652652016">
                    <img src={telephone} alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;