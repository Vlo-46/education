import keys from "../../keys";
import axios from "axios";
import {FRONTEND_GET_BLOGS} from "../types";

export function createBlogComment(comment) {
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/blog/create_comment`, {comment})
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export function getBlogs() {
    return dispatch => {
        axios.get(`${keys.BACKEND_URI}/blog/get_all`)
            .then(res => {
                dispatch({type: FRONTEND_GET_BLOGS, payload: res.data.blogs})
            })
            .catch(e => {
                console.log(e)
            })
    }
}