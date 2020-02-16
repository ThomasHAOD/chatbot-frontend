import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import classes from "./Input.module.css";

const Input = props => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message) {
      const timeNow = new Date();
      const hours = timeNow.getHours();
      const minutes = timeNow.getMinutes();
      let timeString = "" + (hours > 12 ? hours - 12 : hours);
      timeString += (minutes < 10 ? ":0" : ":") + minutes;
      const newMessage = {
        text: message,
        sender: "Client",
        time: timeString
      };
      props.handleNewMessage(newMessage);

      setMessage("");
    }
  };

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleSubmit();
      setTimeout(() => {
        setMessage("");
      }, 1);
    }
  };

  return (
    <form className={classes.Input}>
      <TextField
        label="Message"
        variant="outlined"
        multiline
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <SendIcon onClick={handleSubmit} className={classes.Icon} />
    </form>
  );
};

export default Input;
