import React from 'react';
import {FlatButton, TableRow, TableRowColumn} from 'material-ui';
import {Link} from 'react-router-dom';

export const Contact = ({contact, onDelete}) => (
    <TableRow>
      <TableRowColumn>{contact.firstName}</TableRowColumn>
      <TableRowColumn>{contact.lastName}</TableRowColumn>
      <TableRowColumn>{contact.phone}</TableRowColumn>
      <TableRowColumn>
        <Link to={`/edit/${contact.id}`}><FlatButton primary={true}>Edit</FlatButton></Link>
        <FlatButton secondary={true} onClick={() => onDelete(contact.id)}>Delete</FlatButton>
      </TableRowColumn>
    </TableRow>
);