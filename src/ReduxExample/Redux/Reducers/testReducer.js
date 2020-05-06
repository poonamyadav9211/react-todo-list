
const initialState = {
    text: '',
    items:[]
}

export const testOpration = (state= initialState, action) => {
    console.log( "actions : ",action)
     switch(action.type){
        case 'ADD_TEXT': 
            return {
                items:[...state.items,action.payload]
            }
        case 'GET_TEXT':
            return {
                ...state,
                item: state.items.find(item=> item.id === action.payload)                
            }
        case 'EDIT_TEXT':
            return{
                items: state.items.map(item => 
                    {
                        if(item.id === action.payload.id)
                        {
                            item.name = action.payload.name
                        } 
                        return item
                    })
            } 
        case 'DELETE_TEXT':
            // remove item useing "splice" method.
            return {
                items: [
                    ...state.items.slice(0, action.payload),
                    ...state.items.slice(action.payload+1)
                ]
            }
            //// remove element useing "filter" method.
            // return {
            //     ...state.items,
            //     items: state.items.filter(item => item.id != action.payload)                    
            // }               
        default:
            return state;
    }
}

