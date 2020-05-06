
export const AddText = (text) => {
    return{
        type: 'ADD_TEXT',
        payload: text
    }
}

export const GetText = (id) => {
    return{
        type: 'GET_TEXT',
        payload: id
    }
}

export const DeleteText = (id) => {
    return{
        type: 'DELETE_TEXT',
        payload: id
    }
}

export const EditText = (id, todo) => {
    return{
        type: 'EDIT_TEXT',
        payload: todo,
        id        
    }
}