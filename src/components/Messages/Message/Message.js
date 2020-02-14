import React from "react";
import classes from "./Message.module.css";

const message = props => {
  const messageClasses = [];

  messageClasses.push(classes.Message);

  if (props.message.sender === "Client") {
    messageClasses.push(classes.Client);
  } else {
    messageClasses.push(classes.Chatbot);
  }

  return (
    <div className={messageClasses.join(" ")}>
      <h4>{props.message.content}</h4>
      <p>{props.message.time}</p>
    </div>
  );
};

export default message;
