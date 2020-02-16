import React from "react";
import classes from "./App.module.css";

import Chat from "./containers/Chat/Chat";

function App() {
  return (
    <div className={classes.App}>
      <Chat />
    </div>
  );
}

export default App;
