import { 
    MARKCOMPLETED,
    ISBUTTONEDIT,
    CLEARTODO,
    GET_TODO,
    GET_ALL_TODO,
    SAVE_TODO,
    DELETE_TODO,
    EDIT_TODO
} from '../Actions/type';


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

export function getTodoAction(data) {
    return {
      type: GET_TODO,
      payload: data
    }
  }

export function saveTodoAction(data) {
    return {
      type: SAVE_TODO,
      payload: data 
    }
  }

  
export const getAllPosts = (data) => {
    return {
      type: GET_ALL_TODO,
      payload: data 
    }
}


export const deleteTodoAction = (id)  => (
    {
        type: DELETE_TODO,
        payload:id
    }
);

export const editTodoAction = (todo)  => (
    {
        type: EDIT_TODO,
        payload: todo
    }
);


 