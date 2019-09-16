import React, { Component } from 'react'
import './Sidebar.css';
import User from '../../Containers/User/User';
export default class SideBar extends Component {
    render() {
        let {contacts} = this.props; 
        let elmUser  = contacts.map((contact) => {
            return  <User  className="Sidebar" user ={contact} key ={contact.user_id}></User>
        })
        return (
            <aside className="Sidebar">{elmUser}</aside>
             
        )
    }
}
