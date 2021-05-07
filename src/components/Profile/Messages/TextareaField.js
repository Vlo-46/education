import React, {useState, useEffect} from 'react'
import styles from "./messages.module.css";
import 'emoji-mart/css/emoji-mart.css'
// import {Picker} from 'emoji-mart'
import axios from "axios";
import keys from "../../../keys";
import openSocket from 'socket.io-client'
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../redux/actions/profileAction";

const TextareaField = ({candidateId}) => {
    // let SET_EMOJI = (emoji, event) => {
    //     console.log(emoji)
    // }

    const ENDPOINT = 'http://localhost:5000/'
    let dispatch = useDispatch()

    useEffect(() => {
        let socket = openSocket(ENDPOINT, {transports: ['websocket']})
        socket.on('sended message', data => {
            dispatch(sendMessage(data))
        })
    }, [])

    const [message, setMessage] = useState('')

    let GET_MESSAGE = e => {
        setMessage(e.target.value)
    }

    let SEND_MSG = e => {
        e.preventDefault()
        let socket = openSocket(ENDPOINT, {transports: ['websocket']})
        let user = JSON.parse(localStorage.getItem(keys.AUTH))
        let post = {
            receiver_id: candidateId,
            message,
            sender_id: user.id
        }
        socket.emit('new message', post)
        document.getElementById('messageField').reset()
    }

    return (
        <form className={`form-group ${styles.msgFooter}`} id={'messageField'}>
            {/*<Picker onClick={SET_EMOJI}/>*/}
            <div className={styles.addBtn}>
                <img src="assets/icons/add-counter.svg" alt="add"/>
            </div>
            <div className={'w-100'}>
                <textarea name="" className={`form-control ${styles.msgTextarea}`} onChange={GET_MESSAGE}/>
            </div>
            <div className={styles.addBtn}>
                <button className={'btn'} type={'submit'} onClick={SEND_MSG}>
                    <img src="assets/icons/sendIcon.svg" alt="send"/>
                </button>
            </div>
        </form>
    )
}

export default TextareaField