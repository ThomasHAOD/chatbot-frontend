import React from "react";

import Message from "./Message/Message";
import classes from "./Messages.module.css";

const messages = props => {
  const messageList = props.messages.map((message, index) => {
    return <Message message={message} key={index} />;
  });

  return <div className={classes.Messages}>{messageList}</div>;
};

export default messages;
