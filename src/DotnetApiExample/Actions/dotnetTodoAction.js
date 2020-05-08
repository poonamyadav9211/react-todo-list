import { 
    GETTODO,
    GETALLTODO,
    ADDTODO,
    EDITTODO,
    DELETETODO,
    ADDTODOTITLE,
    ADDTODOTEXT,
    MARKCOMPLETED,
    ISBUTTONEDIT,
    CLEARTODO,
    RECEIVE_POSTS
} from '../Actions/type';

export const getTodoAction = (id)  => (
    {
        type: GETTODO,
        payload: id
    }
);

export const getAllTodoAction = (users)  => (
    {
        type: GETALLTODO,
        payload: users
    }
);

export const addTodoAction = (todo)  => (
    {
        type: ADDTODO,
        payload: todo
    }
);

export const editTodoAction = (todo)  => (
    {
        type: EDITTODO,
        payload: todo
    }
);

export const deleteTodoAction = (id)  => (
    {
        type: DELETETODO,
        payload: id
    }
);

export const markCompletedAction = (id)  => (
    {
        type: MARKCOMPLETED,
        payload: id
    }
);

export const isButtonEditAction = (isButtonEdit)  => (
    {
        type: ISBUTTONEDIT,
        payload: isButtonEdit
    }
);

export const clearTodoAction = ()  => (
    {
        type: CLEARTODO
    }
);

export const receivedPosts = json => (
    {
    type: RECEIVE_POSTS,
    payload: json,
});