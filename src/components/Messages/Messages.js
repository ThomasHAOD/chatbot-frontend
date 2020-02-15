import React from "react";

import Message from "./Message/Message";

const messages = props => {
  const messageList = props.messages.map((message, index) => {
    return <Message message={message} key={index} />;
  });

  return <div>{messageList}</div>;
};

export default messages;
