import React, {Component} from 'react';
import ContactForm from './ContactForm';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchContact, updateContact} from '../actions/contacts';

class EditContact extends Component {

  state = {
    isUpdated: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchContact(id);
  }

  handleSave = contact => {
    const id = this.props.match.params.id;
    this.props.updateContact(id, contact)
      .then(resp => this.setState({isUpdated: true}));
  };

  render() {
    return (
      <div>
        {this.state.isUpdated ? <Redirect to="/" /> : <ContactForm onSubmit={this.handleSave}/>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contact: state.contactStore.contact
});

export default connect(mapStateToProps, {fetchContact, updateContact})(EditContact)