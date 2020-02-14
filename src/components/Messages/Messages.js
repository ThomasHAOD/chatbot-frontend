import React from "react";

import Message from "./Message/Message";

const messages = props => {
  const messageList = props.messages.map(message => {
    return <Message message={message} />;
  });

  return <div>{messageList}</div>;
};

export default messages;
