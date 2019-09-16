import React, { Component } from "react";
import "./messageInput.css";
import store from "../../Store";
import { setTypingValue, sendMessage } from "../../actions";

export default class MessageInput extends Component {
  
  handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  handleSubmit = e => {
      e.preventDefault();
      const { typing, activeUserId } = store.getState();;
      store.dispatch(sendMessage(typing, activeUserId));
    };
  render() {
    
    return (
      <form className="Message" onSubmit={this.handleSubmit}>
        <input
          className="Message__input"
          onChange={this.handleChange}
          value={this.props.value}
          placeholder="write a message"
        />
      </form>
    );
  }
}
