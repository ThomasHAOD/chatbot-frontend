import chatIcon from "../../assets/chat.png";
import Tooltip from "@material-ui/core/Tooltip";
import classes from "./ToggleIcon.module.css";

import React from "react";

const ToggleIcon = props => {
  return (
    <div className={classes.ToggleIcon} onClick={props.toggleDisplay}>
      <Tooltip title="Online Help" arrow>
        <img src={chatIcon} alt="click here for online help" />
      </Tooltip>
    </div>
  );
};

export default ToggleIcon;
