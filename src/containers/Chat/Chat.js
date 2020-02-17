import React, { Component, Fragment } from "react";
import classes from "./Chat.module.css";
import axios from "axios";

import ToggleIcon from "../../components/ToggleIcon/ToggleIcon";
import Messages from "../../components/Messages/Messages";
import Input from "../../components/Input/Input";
import CloseIcon from "@material-ui/icons/Close";

export class Chat extends Component {
  state = {
    sessionId: 1,
    messages: [],
    hidden: true,
    loadingNewResponse: false
  };

  componentDidMount() {
    const initialPost = { text: "Hello" };
    this.handlePost(initialPost);
  }

  handlePost = message => {
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    let timeString = "" + (hours > 12 ? hours - 12 : hours);
    timeString += (minutes < 10 ? ":0" : ":") + minutes;

    axios
      .post("https://localhost:5001/api/chatbot/detectintent", null, {
        params: { text: message.text, sessionId: this.state.sessionId }
      })
      .then(res => {
        console.log(res);
        const response = {
          text: res.data.fulfillmentText,
          sender: "Chatbot",
          time: timeString
        };
        const messageArrayWithRes = [...this.state.messages, response];
        this.setState({ messages: messageArrayWithRes });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleNewMessage = newMessage => {
    this.setState({ loadingNewResponse: true });

    this.handlePost(newMessage);

    const number = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      this.setState({ loadingNewResponse: false });

      const newMessageArray = [...this.state.messages, newMessage];

      this.setState({ messages: newMessageArray });
    }, number);
  };

  handleToggleDisplay = () => {
    const display = !this.state.hidden;
    this.setState({ hidden: display });
  };

  render() {
    let attachedClasses = [classes.Chat, classes.Close];
    if (!this.state.hidden) {
      attachedClasses = [classes.Chat, classes.Open];
    }

    return (
      <Fragment>
        <div className={attachedClasses.join(" ")}>
          <CloseIcon
            onClick={this.handleToggleDisplay}
            style={{ cursor: "pointer", margin: "5px" }}
          />

          <Messages
            messages={this.state.messages}
            loadingNewResponse={this.state.loadingNewResponse}
          />
          <Input handleNewMessage={this.handleNewMessage} />
        </div>
        <ToggleIcon
          className={classes.ToggleIcon}
          toggleDisplay={this.handleToggleDisplay}
        />
      </Fragment>
    );
  }
}

export default Chat;
