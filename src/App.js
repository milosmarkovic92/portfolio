import React, { Component } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import ExperienceSegment from './components/Experience/ExperienceSegment';

class App extends Component {
  render() {
    return (
      <div>
        <AboutMe />
        <ExperienceSegment />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
