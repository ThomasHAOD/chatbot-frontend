import React from "react";
import classes from "./Message.module.css";

const message = props => {
  return <div className={classes.Message}>{props.message.content}</div>;
};

export default message;
