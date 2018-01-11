import React, {Component} from 'react';
import ContactForm from './ContactForm';
import {Redirect} from 'react-router-dom';

export default class AddContact extends Component {

  state = {
    isAdded: false
  };
  handleSave = contact => {
    fetch('http://localhost:8090/api/contacts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(resp => {
        if (resp.ok) {
          this.setState({isAdded: true})
        }
      })
  };
  render() {
    return (
      <div>
        {this.state.isAdded ? <Redirect to="/"/> : <ContactForm onSubmit={this.handleSave}/>}
      </div>
    )
  }
}