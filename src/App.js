import React, { Component } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import ExperienceSegment from './components/Experience/ExperienceSegment';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="segment-content">
        <AboutMe />
        <ExperienceSegment />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
