import {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: ''
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST';
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST';



function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_NAME:
            return {...state, name: payload}
        case UPDATE_CATEGORY:
            return {...state, category: payload}
        case UPDATE_AUTHOR_FIRST:
            return {...state, authorFirst: payload}
        case UPDATE_CATEGORY:
            return {...state, authorLast: payload}
        default:
            return state;
    }
}

export default createStore(reducer);
