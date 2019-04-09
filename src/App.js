import React, { Component } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import CancelIcon from './components/Icons/cancel';
import ExperienceSegment from './components/Experience/ExperienceSegment';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      chatBot: true
    }
  }

  chatBotHandler = () => {
    this.setState({ chatBot: !this.state.chatBot })
  }
  render() {

    let button_class = this.state.chatBot ? "show" : "closed";

    const theme = {
      background: '#f5f8fb',
      fontFamily: 'Roboto',
      headerBgColor: '#b3b3b3',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#b3b3b3',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };

    const steps = [
      {
        id: '1',
        message: 'Hi! What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Nice to meet you {previousValue}!',
        trigger: '4',
      },
      {
        id: '4',
        message: 'If you want to hire me, feel free to contact me :]',
        end: true,
      }
    ];
    return (
      <React.Fragment>
        <div className="segment-content">
          <AboutMe />
          <ExperienceSegment />
          <Education />
          <Contact />
        </div>
        <ThemeProvider theme={theme}>
          <div className={button_class}>
            <ChatBot steps={steps} />
            <CancelIcon className="close-button" onClick={this.chatBotHandler.bind(this)}/>
          </div>
        </ThemeProvider>
      </React.Fragment>


    );
  }
}

export default App;
