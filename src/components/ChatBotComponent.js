import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import CancelIcon from './Icons/cancel';
import '../index.css';


class ChatBotComponent extends Component {
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
                message: 'Do you like my work?',
                trigger: '5',
            },
            {
                id: '5',
                options: [
                    { value: 1, label: 'Yes', trigger: '6' },
                    { value: 2, label: 'No', trigger: '8' },
                ],
            },
            {
                id: '6',
                message: 'Awesome!',
                trigger: '7',
            },
            {
                id: '7',
                message: 'If you want to hire me, please contact me :)',
                end: true,
            },
            {
                id: '8',
                message: 'Thanks for your feedback :)',
                end: true,
            }
        ];
        return (
            <ThemeProvider theme={theme}>
                <div className={button_class}>
                    <ChatBot steps={steps} />
                    <CancelIcon className="close-button" onClick={this.chatBotHandler.bind(this)} />
                </div>
            </ThemeProvider>
        )
    }
}

export default ChatBotComponent;