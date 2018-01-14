import React, { Component } from 'react';
import './App.css';
import ContactList from './containers/ContactList';
import {Route} from 'react-router-dom';
import AddContact from './containers/AddContact';
import EditContact from './containers/EditContact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ContactList} exact/>
        <Route path="/add" component={AddContact}/>
        <Route path="/edit/:id" component={EditContact}/>
      </div>
    );
  }
}

export default App;
