import React, { Component } from "react";
import classes from "./Chat.module.css";

import Messages from "../../components/Messages/Messages";
import Input from "../../components/Input/Input";

export class Chat extends Component {
  state = {
    sessionId: 1,
    messages: [
      {
        content:
          "Hi! Welcome to Young Scot. I'm Emily. How can I help you today? ",
        sender: "Chatbot",
        time: "12.35"
      },
      { content: "Hi, I've lost my card.", sender: "Client", time: "12.36" }
    ]
  };

  render() {
    return (
      <div className={classes.Chat}>
        <Messages messages={this.state.messages} />
        <Input />
      </div>
    );
  }
}

export default Chat;
