import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import classes from "./Input.module.css";

const Input = props => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log(message);
  };

  const handleChange = event => {
    setMessage(event.target.value);
    console.log(message);
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
