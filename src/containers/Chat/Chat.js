import React, { Component, Fragment } from "react";
import classes from "./Chat.module.css";
import axios from "axios";

import ToggleIcon from "../../components/ToggleIcon/ToggleIcon";
import Messages from "../../components/Messages/Messages";
import Input from "../../components/Input/Input";

import Header from "../../components/Header/Header";

export class Chat extends Component {
  state = {
    sessionId: 1,
    messages: [],
    hidden: true,
    loadingNewResponse: false,
    showFeedback: false,
    feedbackRecieved: false
  };

  componentDidMount() {
    const initialPost = { text: "Hello" };
    this.handlePost(initialPost);
  }

  getTime = () => {
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    let timeString = "" + (hours > 12 ? hours - 12 : hours);
    timeString += (minutes < 10 ? ":0" : ":") + minutes;
    hours > 12 ? (timeString += " pm") : (timeString += " am");
    return timeString;
  };

  handlePost = message => {
    const timeString = this.getTime();

    const number = Math.floor(Math.random() * 5000);

    setTimeout(() => {
      this.setState({ loadingNewResponse: true });
      axios
        .post("https://localhost:5001/api/chatbot/detectintent", null, {
          params: { text: message.text, sessionId: this.state.sessionId }
        })
        .then(res => {
          console.log(res);
          if (res.data.action === "collect_feedback") {
            this.setState({ showFeedback: true });
          }
          const response = {
            text: res.data.fulfillmentText,
            sender: "Chatbot",
            time: timeString
          };
          const messageArrayWithRes = [...this.state.messages, response];

          setTimeout(() => {
            this.setState({ messages: messageArrayWithRes });
            this.setState({ loadingNewResponse: false });
          }, number);
        })
        .catch(err => {
          console.log(err);
        });
    }, number);
  };

  toggleFeedback = () => {
    const showFeedback = !this.state.showFeedback;
    this.setState({ showFeedback: showFeedback });
  };

  handleFeedback = feedback => {
    const timeString = this.getTime();

    this.setState({
      loadingNewResponse: true,
      showFeedback: false,
      feedbackRecieved: true
    });

    setTimeout(() => {
      const feedbackConfirmationMessage = {
        sender: "Chatbot",
        text: "Thanks for your feedback!",
        time: timeString
      };
      const messagesWithFeedbackConfirmation = [
        ...this.state.messages,
        feedbackConfirmationMessage
      ];
      this.setState({
        messages: messagesWithFeedbackConfirmation,
        loadingNewResponse: false
      });
    }, 1500);
    console.log(feedback);
  };

  handleNewMessage = newMessage => {
    const newMessageArray = [...this.state.messages, newMessage];

    this.setState({ messages: newMessageArray });
    this.handlePost(newMessage);
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
          <Header
            toggleFeedback={this.toggleFeedback}
            handleToggleDisplay={this.handleToggleDisplay}
          />
          <Messages
            messages={this.state.messages}
            loadingNewResponse={this.state.loadingNewResponse}
            showFeedback={this.state.showFeedback}
            handleFeedback={this.handleFeedback}
            toggleFeedback={this.toggleFeedback}
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
