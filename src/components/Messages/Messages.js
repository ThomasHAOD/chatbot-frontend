import React, { Component } from "react";

import Message from "./Message/Message";
import classes from "./Messages.module.css";
import TypingIndicator from "../TypingIndicator/TypingIndicator";

class Messages extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messageList = this.props.messages.map((message, index) => {
      return <Message message={message} key={index} />;
    });

    let typing = null;

    if (this.props.loadingNewResponse) {
      typing = <TypingIndicator />;
    }
    return (
      <div className={classes.Messages}>
        {messageList}
        {typing}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }
}

export default Messages;
