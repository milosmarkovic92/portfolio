import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="segment-wrapper-contact">
            <div className="segment-arch" />
            <div className="segment-container-con">
                <h1 className="center-align">CONTACT</h1>
                <a href="https://www.linkedin.com/in/milosmarkovic92/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="new-line">linkedin.com/in/milosmarkovic92</a>
                <a href="https://github.com/milosmarkovic92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="new-line">github.com/milosmarkovic92</a>
                <a href="mailto:milosmarkovic7692@gmail.com" className="new-line">milosmarkovic7692@gmail.com</a>
                <a href="tel:+381652652016" className="new-line">+381 65 265 20 16</a>
            </div>
        </div>
    )
}

export default Contact;