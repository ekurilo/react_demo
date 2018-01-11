import React, {Component} from 'react';
import {Contact} from './Contact';
import {FlatButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui';
import {Link} from 'react-router-dom';

export default class ContactList extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll = () => {
    fetch('http://localhost:8090/api/contacts')
      .then(resp => resp.json())
      .then(data => this.setState({contacts: data._embedded.contacts}));
  };

  handleDelete = id => {
    fetch(`http://localhost:8090/api/contacts/${id}`, {
      method: 'delete'
    })
      .then(resp => {
        if (resp.ok) {
          //this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)});
          this.fetchAll();
        }
      });
  };

  render() {
    let contacts = this.state.contacts.map(contact =>
      <Contact contact={contact} key={contact.id} onDelete={this.handleDelete}/>);
    return (
      <div>
        <Link to="/add"><FlatButton primary={true}>Add Contact</FlatButton></Link>
        <Table>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Phone</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts}
          </TableBody>
        </Table>
      </div>
    );
  }
}