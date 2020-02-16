import ChatIcon from "@material-ui/icons/Chat";
import classes from "./ToggleIcon.module.css";

import React from "react";

const ToggleIcon = props => {
  return (
    <div className={classes.ToggleIcon} onClick={props.toggleDisplay}>
      <svg height="30" width="30">
        <circle
          cx="15"
          cy="15"
          r="20"
          strokeWidth="3"
          fill="rgb(0, 129, 238)"
        />

        <ChatIcon color="inherit" />
      </svg>
    </div>
  );
};

export default ToggleIcon;
