
const fetchAllContactsRequest = () => ({
  type: 'FETCH_ALL_CONTACTS_REQUEST'
});

const fetchAllContactsSuccess = contacts => ({
  type: 'FETCH_ALL_CONTACTS_SUCCESS',
  contacts
});

const fetchAllContactsFailure = error => ({
  type: 'FETCH_ALL_CONTACTS_FAILURE',
  error
});

const deleteContactRequest = () => ({
  type: 'DELETE_CONTACT_REQUEST'
});

const deleteContactSuccess = id => ({
  type: 'DELETE_CONTACT_SUCCESS',
  id
});

const deleteContactFailure = error => ({
  type: 'DELETE_CONTACT_FAILURE',
  error
});

const createContactRequest = () => ({
  type: 'CREATE_CONTACT_REQUEST'
});

const createContactSuccess = contact => ({
  type: 'CREATE_CONTACT_SUCCESS',
  contact
});

const createContactFailure = error => ({
  type: 'CREATE_CONTACT_FAILURE',
  error
});

const fetchContactRequest = () => ({
  type: 'FETCH_CONTACT_REQUEST'
});

const fetchContactSuccess = contact => ({
  type: 'FETCH_CONTACT_SUCCESS',
  contact
});

const fetchContactFailure = error => ({
  type: 'FETCH_CONTACT_FAILURE',
  error
});

const updateContactRequest = () => ({
  type: 'UPDATE_CONTACT_REQUEST'
});

const updateContactSuccess = contact => ({
  type: 'UPDATE_CONTACT_SUCCESS',
  contact
});

const updateContactFailure = error => ({
  type: 'UPDATE_CONTACT_FAILURE',
  error
});

export const newContact = () => ({
  type: 'NEW_CONTACT'
});

export const fetchAllContacts = () => {
  return dispatch => {
    dispatch(fetchAllContactsRequest());
    return fetch('http://localhost:8090/api/contacts')
      .then(resp => resp.json())
      .then(data => dispatch(fetchAllContactsSuccess(data._embedded.contacts)))
      .catch(error => dispatch(fetchAllContactsFailure(error)))
  }
};

export const deleteContact = id => {
  return dispatch => {
    dispatch(deleteContactRequest());
    return fetch(`http://localhost:8090/api/contacts/${id}`, {
      method: 'delete'
    })
      .then(resp => dispatch(deleteContactSuccess(id)))
      .catch(error => deleteContactFailure(error));
  }
};

export const createContact = contact => {
  return dispatch => {
    dispatch(createContactRequest());
    return fetch('http://localhost:8090/api/contacts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(resp => resp.json())
      .then(data => dispatch(createContactSuccess(data)))
      .catch(error => dispatch(createContactFailure(error)))
  }
};

export const fetchContact = id => {
  return dispatch => {
    dispatch(fetchContactRequest());
    return fetch(`http://localhost:8090/api/contacts/${id}`)
      .then(resp => resp.json())
      .then(data => dispatch(fetchContactSuccess(data)))
      .catch(error => dispatch(fetchContactFailure(error)))
  }
};

export const updateContact = (id, contact) => {
  return dispatch => {
    dispatch(updateContactRequest());
    return fetch(`http://localhost:8090/api/contacts/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(resp => resp.json())
      .then(data => dispatch(updateContactSuccess(data)))
      .catch(error => dispatch(updateContactFailure(error)))
  }
};


