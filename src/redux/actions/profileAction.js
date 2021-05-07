import {CHANGE_PROFILE_MENU, DELETE_MESSAGE, GET_CANDIDATE, GET_MESSAGES, SEND_MESSAGE} from "../types";
import keys from "../../keys";
import axios from "axios";

export function changeProfileMenu(name) {
    return dispatch => {
        dispatch({type: CHANGE_PROFILE_MENU, payload: name})
    }
}

export function getCandidate(auth) {
    return dispatch => {
        axios.get(`${keys.BACKEND_URI}/auth/get_auth`, {
            headers: {
                'Authorization': `Bearer ${auth.token}`
            }
        })
            .then(res => {
                // res.data.teacher ? setCandidate(res.data.teacher) : setCandidate(res.data.teacher)
                // let candidate = res.data.teacher ? res.data.teacher : res.data.student
                dispatch({type: GET_CANDIDATE, payload: res.data})
            })
            .catch(e => {
                alert(e)
            })
    }
}

export function getAllMessages(data) {
    return dispatch => {
        dispatch({type: GET_MESSAGES, payload: data})
    }
}

export function sendMessage(msg) {
    return dispatch => {
        dispatch({type: SEND_MESSAGE, payload: msg})
    }
}

export function deleteMessage(id) {
    return dispatch => {
        dispatch({type: DELETE_MESSAGE, payload: id})
    }
}