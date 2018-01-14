import {combineReducers} from 'redux';

import contactReducer from './contacts'
import {reducer} from 'redux-form';

export const rootReducer = combineReducers({
  contactStore: contactReducer,
  form: reducer
});
