import React from "react";
import classes from "./Input.module.css";

const input = props => {
  return (
    <div className={classes.Input}>
      <input value="Your Message Here" />
      <button>send </button>
    </div>
  );
};

export default input;
