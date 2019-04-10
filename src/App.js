import React, { Component } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import ExperienceSegment from './components/Experience/ExperienceSegment';
import ChatBotComponent from './components/ChatBotComponent';
import './index.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="segment-content">
          <AboutMe />
          <ExperienceSegment />
          <Education />
          <Contact />
        </div>
        <ChatBotComponent />
      </React.Fragment>


    );
  }
}

export default App;
