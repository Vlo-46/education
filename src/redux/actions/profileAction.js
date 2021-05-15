import {
    CHANGE_PROFILE_MENU, CHECK_NOTIFICATION,
    DELETE_MESSAGE,
    GET_CANDIDATE,
    GET_MESSAGES,
    SEND_MESSAGE, TEACHER_CREATE_ADDRESS,
    TEACHER_CREATE_CERTIFICATE,
    TEACHER_CREATE_EDUCATION, TEACHER_CREATE_PHONE, TEACHER_CREATE_VIDEO,
    TEACHER_CREATE_WORK_EXPERIENCE,
    TEACHER_DELETE_CERTIFICATE,
    TEACHER_DELETE_EDUCATION, TEACHER_DELETE_PHONE, TEACHER_DELETE_VIDEO,
    TEACHER_DELETE_WORK_EXPERIENCE, TEACHER_SET_LANGUAGE_OF_INSTRUCTION, TEACHER_UPDATE_LANGUAGE_OF_INSTRUCTION
} from "../types";
import keys from "../../keys";
import axios from "axios";
import Swal from "sweetalert2";

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

// TEACHER PROFILE INFORMATION

export function getTeacher(auth) {
    return dispatch => {
        axios.get(`${keys.BACKEND_URI}/profile/teacher/get_teacher`, {
            headers: {
                'Authorization': `Bearer ${auth.token}`
            }
        })
            .then(res => {
                dispatch({type: GET_CANDIDATE, payload: res.data})
            })
            .catch(e => {
                console.log(e)
            })
    }

}

export function teacherCreateEducation(data) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/create_education`, data, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_CREATE_EDUCATION, payload: res.data})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherDeleteEducation(id) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/delete_education`, {id}, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                console.log(res.data)
                dispatch({type: TEACHER_DELETE_EDUCATION, payload: id})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherCreateCertificate(data) {
    let candidate = localStorage.getItem(keys.AUTH)
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/create_certificates`, data, {
            headers: {
                Authorization: candidate.token
            }
        })
            .then(res => {
                dispatch({type: TEACHER_CREATE_CERTIFICATE, payload: res.data})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherDeleteCertificate(id) {
    let candidate = localStorage.getItem(keys.AUTH)
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/delete_certificate`, id, {
            headers: {
                Authorization: candidate.token
            }
        })
            .then(res => {
                dispatch({type: TEACHER_DELETE_CERTIFICATE, payload: id})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherCreateWorkExperience(data) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/create_work_experience`, data, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_CREATE_WORK_EXPERIENCE, payload: res.data})
                console.log(res.data)
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                console.log(e)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherDeleteWorkExperience(id) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/delete_work_experience`, {id}, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_DELETE_WORK_EXPERIENCE, payload: id})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherSetLanguageOfInstruction(data) {
    let candidate = localStorage.getItem(keys.AUTH)
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/create_language_of_instruction`, data, {
            headers: {
                Authorization: candidate.token
            }
        })
            .then(res => {
                dispatch({type: TEACHER_SET_LANGUAGE_OF_INSTRUCTION, payload: res.data})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherUpdateLanguageOfInstruction(data) {
    let candidate = localStorage.getItem(keys.AUTH)
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/update_language_of_instruction`, data, {
            headers: {
                Authorization: candidate.token
            }
        })
            .then(res => {
                dispatch({type: TEACHER_UPDATE_LANGUAGE_OF_INSTRUCTION, payload: data})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherCreateAddress(data) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/create_address`, {address: data}, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_CREATE_ADDRESS, payload: res.data})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherUpdateAddress(data) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/update_address`, data, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_CREATE_ADDRESS, payload: data})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherCreatePhone(data) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/create_phone`, data, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_CREATE_PHONE, payload: res.data})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherDeletePhone(id) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/delete_phone`, {id}, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_DELETE_PHONE, payload: id})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherCreateVideo(data) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/create_video`, data, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_CREATE_VIDEO, payload: res.data})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                console.log(e)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function teacherDeleteVideo(id) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/delete_video`, {id}, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                dispatch({type: TEACHER_DELETE_VIDEO, payload: id})
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

// notifications

export function checkNotificationRequest(data) {
    let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
    return dispatch => {
        axios.post(`${keys.BACKEND_URI}/profile/teacher/check_request`, data, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                if (res.data.msg === 'ok') {
                    dispatch({type: CHECK_NOTIFICATION, payload: data})
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        timer: 1500
                    })
                }
            })
            .catch(e => {
                console.log(e)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}