import React from "react";
import milos from "../../assets/milos.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="segment-wrapper segment-wrapper-about-me">
      <div className="about-slide">
        <img className="profile-picture" src={milos} alt="Milos Markovic" />
        <div className="name">
          Miloš<strong>Marković</strong>
        </div>
        <div className="profession">
          <strong>Frontend</strong>Developer
        </div>
        <p className="ptag">
          Young and enthusiastic developer with strong communication skills. I
          am very professional, precise and detail oriented. My virtues are
          persistence, reliability, accuracy and responsibility. Two things that
          also stand next to my name are - "outside the box thinker" and "open
          minded". ”. In my spare time I work on my own projects. That helps me
          to learn a lots of new stuff and grow as a developer. I love traveling
          and discovering new places.
        </p>
        <p className="ptag">
          In my free time I like to play basketball, which is my passion, read
          books, watch movies and play guitar. Also I seek for adventure
          exploring beautiful landscapes of Serbia as a member of hiking club.
        </p>
        <p className="ptag download">
          <a href="/files/MilosMarkovicCV.pdf" download>
            You can download my CV here
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
