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
    CLEARTODO
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

export const addTodoTitleAction = (title)  => (
    {
        type: ADDTODOTITLE,
        payload: title
    }
);

export const addTodoTextAction = (text)  => (
    {
        type: ADDTODOTEXT,
        payload: text
    }
);

export const markCompletedTodoAction = (id)  => (
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