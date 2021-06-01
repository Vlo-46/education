import {HIDE_PROFILE_LOADER, SHOW_PROFILE_LOADER} from "../types";

const initialState = {
    profileLoader: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROFILE_LOADER:
            return {...state, profileLoader: true}
        case HIDE_PROFILE_LOADER:
            return {...state, profileLoader: false}
        default:
            return state
    }
}