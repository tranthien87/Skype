import React, { Component } from "react";
import './Header.css';
export default class Header extends Component {
  render() {
      let {name, status} = this.props.user;
    return (
      <header className="Header">
        <h1 className="Header__name">{name}</h1>
        <p className="Header__status">{status}</p>
      </header>
    );
  }
}
