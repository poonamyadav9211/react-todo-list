import {INCREMENT, DECREMENT} from '../Actions/type';

const initialState = {
    counter:0
}

export default function (state= initialState.counter, action) {
    switch(action.type){
        case INCREMENT:
            return state +1;
        case DECREMENT:
            return  state -1;
        default:
            return state;    
    }
}


 