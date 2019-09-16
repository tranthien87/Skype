import React from 'react';
import './App.css';
import Main from '../Components/Main/Main';
import SideBar from '../Components/Sidebar/SideBar';
import store from '../Store';
import _ from "lodash" ;

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <SideBar contacts={_.values(contacts.contacts)} />
      <Main user ={user} activeUserId = {activeUserId}/>
    </div>
  );
}

export default App;
