import {CREATE_ROOM_MESSAGE, ROOM_CHAT, ROOM_USER, ROOM_USERS, ROOM_VIDEO} from "../types";


const initialState = {
    roomUsers: [],
    allMessages: [],
    roomVideo: []
}

export const roomChat = (state = initialState, action) => {
    switch (action.type) {
        case ROOM_USERS:
            return {...state, roomUsers: action.payload}
        case CREATE_ROOM_MESSAGE:
            return {...state, allMessages: [...state.allMessages, {...action.payload}]}
        case ROOM_CHAT:
            return {...state, allMessages: action.payload}
        case ROOM_USER:
            return {
                ...state, roomUsers: state.roomUsers.forEach(user => {
                    if (user.id === action.payload.id) {
                        user['stream'] = action.payload.stream
                    }
                })
            }
        case ROOM_VIDEO:
            return {...state, roomVideo: action.payload}
        default:
            return state
    }
}