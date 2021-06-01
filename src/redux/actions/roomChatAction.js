import {CREATE_ROOM_MESSAGE, ROOM_CHAT, ROOM_USER, ROOM_USERS, ROOM_VIDEO} from "../types";

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

export function roomUser(user) {
    return dispatch => {
        dispatch({type: ROOM_USER, payload: user})
    }
}

export function roomVideo(data) {
    return dispatch => {
        dispatch({type: ROOM_VIDEO, payload: data})
    }
}