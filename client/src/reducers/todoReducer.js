import { GET_TODOS, ADD_TODO, DELETE_TODO, TODOS_LOADING, CHECK_TODO } from '../actions/types';

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_TODO:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case CHECK_TODO:
            let checkedTodo = state.items.filter(item => item._id === action.payload)[0];
            console.log(checkedTodo);
            checkedTodo.done = true;
            return {
                ...state,
                items: [...state.items.filter(item => item._id !== action.payload), checkedTodo]
            }
        case TODOS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}