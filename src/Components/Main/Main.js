import React, { Component } from 'react'
import './Main.css';
import Empty from '../Empty/Empty';
import ChatWindow from '../../Containers/ChatWindow/ChatWindow';
export default class Main extends Component {
    render() {
    
        let {user, activeUserId} = this.props;
        let renderMain = () => {
            if(!activeUserId){
                return <Empty user={user} activeUserId={activeUserId}/>;
            } else {
                return <ChatWindow  activeUserId={activeUserId}/>
            }
        }
        return (
            <main className="Main">{renderMain()}</main>
        )
    }
}
