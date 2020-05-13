import { 
    getAllTodosApi, 
    saveTodoApi, 
    editTodoApi, 
    getTodoApi, 
    deleteTodoApi,
    markCompletedApi,
    addAuthUserApi,
    getAuthUserByIdApi,
    getAuthUserApi,
    getTokenApi
} from "../DotnetApi/server.apis";

// todo apis
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

export function deleteTodo(id) {
  return (dispatch) => {
      return dispatch(deleteTodoApi(id))
  }
}

export function markCompleted(id) {
  return (dispatch) => {
      return dispatch(markCompletedApi(id))
  }
}

export function editTodo(id,selectedTodo) {
  return (dispatch) => {
      return dispatch(editTodoApi(id,selectedTodo))
  }
}

//---------------------------------------------------------

// user apis
export function addAuthUser(user) {
  return (dispatch) => {
      return dispatch(addAuthUserApi(user))
  }
}

export function getAuthUserById(id) {
  return (dispatch) => {
      return dispatch(getAuthUserByIdApi(id))
  }
}

export function getAuthUser(user) {
  console.log('=======getAuthUser=========',user)
  return (dispatch) => {
      return dispatch(getAuthUserApi(user))
  }
}

export function getToken(username,password) {  
  return (dispatch) => {
    console.log('=======getAuthUser=========',username,password)  
      return dispatch(getTokenApi(username,password))
  }
}