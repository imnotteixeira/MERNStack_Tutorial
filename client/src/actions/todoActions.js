import { GET_TODOS, ADD_TODO, DELETE_TODO, CHECK_TODO, TODOS_LOADING } from './types';

export const getTodos = () => dispatch => {
    dispatch(setTodosLoading());
    fetch('/api/todos')
        .then(res => res.json())
        .then(data =>  
            dispatch({
                type: GET_TODOS,
                payload: data
            }))
        
}

export const addTodo = todo => dispatch => {
    fetch('/api/todos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(data =>
        dispatch({
            type: ADD_TODO,
            payload: data
        }))
        
        
}

export const deleteTodo = id => dispatch =>{
    fetch(`/api/todos/${id} `, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>
        dispatch({
            type: DELETE_TODO,
            payload: id
        }))
}

export const checkTodo = id => dispatch =>{
    fetch(`/api/todos/${id} `, {
        method: 'POST'
    })
    .then(res => res.json())
    .then(data =>
        dispatch({
            type: CHECK_TODO,
            payload: id
        }))
}


export const setTodosLoading = () => {
    return {
        type: TODOS_LOADING
    }
}