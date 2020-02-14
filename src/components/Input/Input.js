import React from "react";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import classes from "./Input.module.css";

const input = props => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <form className={classes.Input}>
      <TextField label="Message" variant="outlined" multiline />
      <button onClick={handleSubmit} type="submit">
        <SendIcon />
      </button>
    </form>
  );
};

export default input;
