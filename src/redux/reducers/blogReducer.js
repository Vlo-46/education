import {FRONTEND_GET_BLOGS} from "../types";

const initialState = {
    blogs: []
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRONTEND_GET_BLOGS:
            return {...state, blogs: action.payload}
        default:
            return state
    }
}