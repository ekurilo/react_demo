
export default (state = {contacts: [], isLoading: false, hasError: false, contact: {}}, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CONTACTS_REQUEST':
      return {
        ...state,
        contacts: [],
        isLoading: true
      };

    case 'FETCH_ALL_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.contacts,
        isLoading: false
      };

    case 'FETCH_ALL_CONTACTS_FAILURE':
      return {
        ...state,
        contacts: [],
        isLoading: false,
        hasError: true
      };

    case 'DELETE_CONTACT_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'DELETE_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        contacts: state.contacts.filter(contact => contact.id !== action.id),
        hasError: false
      };

    case 'DELETE_CONTACT_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasError: true
      };

    case 'CREATE_CONTACT_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'CREATE_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        contacts: [...state.contacts, action.contact],
        hasError: false
      };

    case 'CREATE_CONTACT_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasError: true
      };

    case 'FETCH_CONTACT_REQUEST':
      return {
        ...state,
        isLoading: true,
        contact: {}
      };

    case 'FETCH_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        contact: action.contact
      };

    case 'FETCH_CONTACT_FAILURE':
      return {
        ...state,
        isLoading: false,
        contact: {},
        hasError: true
      };

    case 'UPDATE_CONTACT_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'UPDATE_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        contacts: state.contacts.map(contact => contact.id === action.contact.id ? action.contact : contact)
      };

    case 'UPDATE_CONTACT_FAILURE':
      return {
        ...state,
        isLoading:false,
        hasError: true
      };

    case 'NEW_CONTACT':
      return {
        ...state,
        contact: {}
      };

    default:
      return state;
  }
}