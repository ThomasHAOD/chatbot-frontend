import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import classes from "./Input.module.css";

const Input = props => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const newMessage = { content: message, sender: "Client", time: "12.38" };
    props.handleNewMessage(newMessage);
    setMessage("");
  };

  const handleChange = event => {
    setMessage(event.target.value);
  };

  return (
    <form className={classes.Input}>
      <TextField
        label="Message"
        variant="outlined"
        multiline
        value={message}
        onChange={handleChange}
      />
      <SendIcon onClick={handleSubmit} />
    </form>
  );
};

export default Input;
