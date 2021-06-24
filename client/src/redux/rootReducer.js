import {combineReducers} from 'redux'
import userReducer from './user/userReducer'
import contactReducer from './contact/contactReducer'

const rootReducer = combineReducers({
   userData:userReducer,
   contactData:contactReducer
  });
  
export default rootReducer;
