import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { authReducer } from './authReducer';
import  {usersReducer} from './userReducer'
import { todoReducer } from './todoReducer';
import { testOpration } from './testReducer';


const rootReducers = combineReducers({
    counter: counterReducer,
    AuthState: authReducer,
    userState: usersReducer,
    todoState: todoReducer,
    testState: testOpration
});

export default rootReducers;