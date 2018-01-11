import React, {Component} from 'react';
import ContactForm from './ContactForm';
import {Redirect} from 'react-router-dom';

export default class EditContact extends Component {

  state = {
    contact: {},
    isUpdated: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:8090/api/contacts/${id}`)
      .then(resp => resp.json())
      .then(data => this.setState({contact: data}))
  }

  handleSave = contact => {
    const id = this.props.match.params.id;
    fetch(`http://localhost:8090/api/contacts/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(resp => {
        if (resp.ok) {
          this.setState({isUpdated: true})
        }
      })
  };

  render() {
    return (
      <div>
        {this.state.isUpdated ? <Redirect to="/" /> : <ContactForm contact={this.state.contact} onSubmit={this.handleSave}/>}
      </div>
    )
  }
}