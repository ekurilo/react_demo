import React, {Component} from 'react';
import {FlatButton, TextField} from 'material-ui';

export default class ContactForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    phone: ''
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    const {firstName, lastName, phone} = this.state;
    this.props.onSubmit({firstName, lastName, phone});
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact) {
      const {firstName, lastName, phone} = nextProps.contact;
      this.setState({firstName, lastName, phone})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField name="firstName" floatingLabelText="First Name" onChange={this.handleChange} value={this.state.firstName}/>
        </div>
        <div>
          <TextField name="lastName" floatingLabelText="Last Name" onChange={this.handleChange} value={this.state.lastName}/>
        </div>
        <div>
          <TextField name="phone" floatingLabelText="Phone" onChange={this.handleChange} value={this.state.phone}/>
        </div>
        <div>
          <FlatButton primary={true} type="submit">Save</FlatButton>
          <FlatButton>Cancel</FlatButton>
        </div>
      </form>
    )
  }
}