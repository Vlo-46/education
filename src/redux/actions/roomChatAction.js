import {CREATE_ROOM_MESSAGE, ROOM_CHAT, ROOM_USERS} from "../types";

export function roomUsers(roomUsers) {
    return dispatch => {
        dispatch({type: ROOM_USERS, payload: roomUsers})
    }
}

export function createMsg(msg) {
    return dispatch => {
        dispatch({type: CREATE_ROOM_MESSAGE, payload: msg})
    }
}

export function allRoomMessages(data) {
    return dispatch => {
        dispatch({type: ROOM_CHAT, payload: data})
    }
}