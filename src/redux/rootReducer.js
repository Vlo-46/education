import {combineReducers} from "redux";
import {profileReducer,} from "./reducers/profileReducer";
import {blogReducer} from './reducers/blogReducer'

export const rootReducer = combineReducers({
    profile: profileReducer,
    blog: blogReducer
})