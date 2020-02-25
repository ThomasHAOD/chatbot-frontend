import React from "react";
import classes from "./Message.module.css";

import chatbot from "../../../assets/YS_Blether.png";
import client from "../../../assets/client.png";

const message = props => {
  const messageClasses = [];

  messageClasses.push(classes.Message);

  if (props.message.sender === "Client") {
    messageClasses.push(classes.Client);
  } else {
    messageClasses.push(classes.Chatbot);
  }

  let image = <img src={client} alt="client" />;

  if (props.message.sender === "Chatbot") {
    image = <img src={chatbot} alt="bletherbot" />;
  }

  return props.message.sender === "Chatbot" ? (
    <div className={classes.MessageContainer}>
      {image}
      <div className={messageClasses.join(" ")}>
        <h4>{props.message.text}</h4>
        <p>{props.message.time}</p>
      </div>
    </div>
  ) : (
    <div className={classes.MessageContainer}>
      <div className={messageClasses.join(" ")}>
        <h4>{props.message.text}</h4>
        <p>{props.message.time}</p>
      </div>
      {image}
    </div>
  );
};

export default message;
