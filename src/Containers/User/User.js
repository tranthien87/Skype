import React, { Component } from "react";
import store from '../../Store';
import {setActiveUserId} from '../../actions';
import "./User.css";
export default class User extends Component {
  handleClick(user_id){
    store.dispatch(setActiveUserId(user_id))
  }
  render() {
    const { name, profile_pic, status, user_id } = this.props.user;
    return (
      <div className="User" onClick={this.handleClick.bind(this, user_id)}>
        <img src={profile_pic} alt={name} className="User__pic" />
        <div className="User__details">
          <p className="User__details-name">{name}</p>
          <p className="User__details-status">{status}</p>
        </div>
      </div>
    );
  }
}
