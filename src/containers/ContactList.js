import React, {Component} from 'react';
import {Contact} from '../components/Contact';
import {FlatButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteContact, fetchAllContacts} from '../actions/contacts';

class ContactList extends Component {

  componentDidMount() {
    this.props.fetchAllContacts();
  }

  handleDelete = id => {
    this.props.deleteContact(id)
  };

  render() {
    let contacts = this.props.contacts.map(contact =>
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

const mapStateToProps = state => ({
  contacts: state.contactStore.contacts
});
export default connect(mapStateToProps, {fetchAllContacts, deleteContact})(ContactList)