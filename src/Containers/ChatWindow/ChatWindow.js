import React, { Component } from 'react'
import store from '../../Store';
import Header from '../../Components/Header/Header';
import Chats from '../../Components/Chats/Chats';
import MessageInput from '../messageInput/messageInput';
import _ from 'lodash';
export default class ChatWindow extends Component {
    render() {
        const {activeUserId} = this.props;
        let state = store.getState();
        let activeUser = state.contacts.contacts[activeUserId];  
        const activeMsgs = state.messages[activeUserId];      
        const {typing} = state;
        return (
            <div className="ChatWindow">
                <Header user = {activeUser}/>
                <Chats messages={_.values(activeMsgs)} />
                <MessageInput value={typing} />
                </div>
        )
    }
}
