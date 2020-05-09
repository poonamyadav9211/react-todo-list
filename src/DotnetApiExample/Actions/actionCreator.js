import { 
    getAllTodosApi, 
    saveTodoApi, 
    editTodoApi, 
    getTodoApi 
} from "../DotnetApi/server.apis"


export function getAllTodos() {
    return (dispatch) => {
      return dispatch(getAllTodosApi())
  }
}


function shouldFetchPosts(state, isPost) {
  if (isPost) {
    return true
  } else {
    return false
  }
}

export function saveTodo(todo,isPost) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), isPost)) {
      return dispatch(saveTodoApi(todo))
    }
  }
}

export function updateTodo(id,todo,isPost) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), isPost)) {
      return dispatch(editTodoApi(id,todo))
    }
  }
}

export function getTodoById(id) {
  return (dispatch) => {
      return dispatch(getTodoApi(id))
  }
}