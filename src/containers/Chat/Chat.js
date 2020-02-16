import React, { Component } from "react";
import classes from "./Chat.module.css";
import axios from "axios";

import Messages from "../../components/Messages/Messages";
import Input from "../../components/Input/Input";

export class Chat extends Component {
  state = {
    sessionId: 1,
    messages: [
      {
        text:
          "Hi! Welcome to Young Scot. I'm Emily. How can I help you today? ",
        sender: "Chatbot",
        time: "12.35"
      },
      { text: "Hi, I've lost my card.", sender: "Client", time: "12.36" },
      {
        text:
          "Oh, I'm sorry to hear that. To help get you a new one, could you tell me your name?",
        sender: "Chatbot",
        time: "12.37"
      }
    ]
  };

  handleNewMessage = newMessage => {
    const newMessageArray = [...this.state.messages, newMessage];

    this.setState({ messages: newMessageArray });

    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    let timeString = "" + (hours > 12 ? hours - 12 : hours);
    timeString += (minutes < 10 ? ":0" : ":") + minutes;

    axios
      .post("https://localhost:5001/api/chatbot/detectintent", null, {
        params: { text: newMessage.text, sessionId: this.state.sessionId }
      })
      .then(res => {
        console.log(res);
        const response = {
          text: res.data.fulfillmentText,
          sender: "Chatbot",
          time: timeString
        };
        const messageArrayWithRes = [...this.state.messages, response];
        this.setState({ messages: messageArrayWithRes });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className={classes.Chat}>
        <Messages messages={this.state.messages} />
        <Input handleNewMessage={this.handleNewMessage} />
      </div>
    );
  }
}

export default Chat;
