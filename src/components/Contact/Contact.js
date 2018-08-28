import React from 'react';
import './Contact.css';
import Color from 'color';

const Contact = () => {
    return (
        <div className="segment-wrapper-contact">
            <div className="segment-arch" />
            <div className="segment-container-con">
                <h1 className="center-align">CONTACT</h1>
                <a href="https://www.linkedin.com/in/milosmarkovic92/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="new-line"
                    style={{ color: Color('#ada9a9').darken(0.2) }}
                    >linkedin.com/in/milosmarkovic92</a>
                <a href="https://github.com/milosmarkovic92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="new-line"
                    style={{ color: Color('#ada9a9').darken(0.2) }}
                    >github.com/milosmarkovic92</a>
                <a href="mailto:milosmarkovic7692@gmail.com" 
                    className="new-line"
                    style={{ color: Color('#ada9a9').darken(0.2) }}
                    >milosmarkovic7692@gmail.com</a>
                <a href="tel:+381652652016" 
                    className="new-line"
                    style={{ color: Color('#ada9a9').darken(0.2) }}
                    >+381 65 265 20 16</a>
            </div>
        </div>
    )
}

export default Contact;