import {CHANGE_PROFILE_MENU, GET_CANDIDATE} from "../types";
import keys from "../../keys";
import axios from "axios";

export function getProfileMenu() {

}

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

// GET_CANDIDATE