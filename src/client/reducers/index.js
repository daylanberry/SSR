import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
})