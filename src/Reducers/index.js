
import {combineReducers} from 'redux';
import ContactsReducer from './ContactsReducer';
import UserReducer from './UserReducer';
import ActiveUserId from'./activeUserId';
import messages from './messages';
import setTypingValue from './setTypingValue';
const rootReducer =  combineReducers({
    contacts: ContactsReducer,
    user: UserReducer,
    activeUserId : ActiveUserId,
    messages: messages,
    typing: setTypingValue
})
export default rootReducer;