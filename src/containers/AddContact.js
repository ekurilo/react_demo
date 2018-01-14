import React, {Component} from 'react';
import ContactForm from './ContactForm';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createContact, newContact} from '../actions/contacts';

class AddContact extends Component {

  state = {
    isAdded: false
  };
  handleSave = contact => {
    this.props.createContact(contact)
      .then(resp => {
        this.setState({isAdded: true})
      });
  };

  componentDidMount() {
    this.props.newContact();
  }

  render() {
    return (
      <div>
        {this.state.isAdded ? <Redirect to="/"/> : <ContactForm onSubmit={this.handleSave}/>}
      </div>
    )
  }
}

export default connect(state => state.contactStore, {createContact, newContact})(AddContact)