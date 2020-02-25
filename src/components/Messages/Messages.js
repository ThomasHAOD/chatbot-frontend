import React, { Component } from "react";

import Message from "./Message/Message";
import classes from "./Messages.module.css";
import TypingIndicator from "../TypingIndicator/TypingIndicator";
import Feedback from "../Feedback/Feedback";

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

    let feedback = null;

    if (this.props.showFeedback) {
      feedback = (
        <Feedback
          handleFeedback={this.props.handleFeedback}
          toggleFeedback={this.props.toggleFeedback}
        />
      );
    }
    return (
      <div className={classes.Messages}>
        {messageList}
        {typing}
        {feedback}
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
