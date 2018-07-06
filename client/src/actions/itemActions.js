import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    fetch('/api/items')
        .then(res => res.json())
        .then(data =>  
            dispatch({
                type: GET_ITEMS,
                payload: data
            }))
        
}

export const addItem = item => dispatch => {
    fetch('/api/items', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data =>
        dispatch({
            type: ADD_ITEM,
            payload: data
        }))
        
        
}

export const deleteItem = id => dispatch =>{
    fetch(`/api/items/${id} `, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
}


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}