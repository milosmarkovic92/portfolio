import React from 'react';
import milos from '../../assets/milos.jpg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="segment-wrapper segment-wrapper-about-me">
            <div className="about-slide">
                <img className="profile-picture" src={milos} alt="Milos Markovic" />
                <div className="name">Miloš<strong>Marković</strong></div>
                <div className="profession"><strong>FrontEnd</strong>Developer</div>
                <p className="ptag">Young and enthusiastic developer with strong communication
                    skills. I
                    am very professional, precise and detail oriented. My virtues are persistence, reliability, accuracy and responsibility. Two things that also stand
                    next to my name are - "outside the box thinker" and "open minded". Due to constant technology growth, I am ready to learn new things and to improve my current
                    knowledge. Also, I tend to observe things from a different
                    perspective.
            </p>
                <p className="ptag">
                    In my free time I like to play basketball, which is my passion, read books, watch movies and 
                    play guitar. Also I seek for adventure exploring beautiful landscapes of Serbia as a member of hiking club.
            </p>
            </div>
        </div>
    )
}

export default AboutMe;