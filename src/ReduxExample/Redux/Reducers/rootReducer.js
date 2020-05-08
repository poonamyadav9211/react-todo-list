import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { authReducer } from './authReducer';
import  {usersReducer} from './userReducer'
import { todoReducer } from './todoReducer';
import { testOpration } from './testReducer';
import { dotnetTodoReducer } from '../../../DotnetApiExample/Reducers/dotnetTodoReducr';


const rootReducers = combineReducers({
    counter: counterReducer,
    AuthState: authReducer,
    userState: usersReducer,
    todoState: todoReducer,
    testState: testOpration,
    dotnetState:dotnetTodoReducer
});

export default rootReducers;