import {CREATE_ROOM_MESSAGE, ROOM_CHAT, ROOM_USERS} from "../types";

const initialState = {
    roomUsers: [],
    allMessages: []
}

export const roomChat = (state = initialState, action) => {
    switch (action.type) {
        case ROOM_USERS:
            return {...state, roomUsers: action.payload}
        case CREATE_ROOM_MESSAGE:
            return {...state, allMessages: [...state.allMessages, {...action.payload}]}
        case ROOM_CHAT:
            return {...state, allMessages: action.payload}
        default:
            return state
    }
}