import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { authReducer } from './authReducer';
import  {usersReducer} from './userReducer'


const rootReducers = combineReducers({
    counter: counterReducer,
    AuthState: authReducer,
    userState: usersReducer
});

export default rootReducers;