import React, { Component } from "react";
import classes from "./Chat.module.css";

import Messages from "../../components/Messages/Messages";
import Input from "../../components/Input/Input";

export class Chat extends Component {
  state = {
    messages: [
      { content: "Hello", sender: "Chatbot", time: "12.35" },
      { content: "Hi", sender: "Client", time: "12.36" }
    ]
  };

  render() {
    return (
      <div className={classes.Chat}>
        <Messages />
        <Input />
      </div>
    );
  }
}

export default Chat;
