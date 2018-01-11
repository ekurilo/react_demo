import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList';
import {Route} from 'react-router-dom';
import AddContact from './AddContact';
import EditContact from './EditContact';

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
