import {combineReducers} from "redux";
import {profileReducer,} from "./reducers/profileReducer";
import {blogReducer} from './reducers/blogReducer'
import {roomChat} from "./reducers/roomChatReducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    blog: blogReducer,
    roomChat: roomChat
})