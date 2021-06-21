import React, {useEffect, useState} from 'react'
import styles from './msg_field.module.css'
import Msg from "./Msg";
import {useDispatch, useSelector} from "react-redux";
import {closeWindowMessageField, getAllMessages, sendMessage} from "../../../redux/actions/profileAction";
import openSocket from "socket.io-client";
import keys from "../../../keys";

const MsgField = ({user}) => {
    console.log(user)
    const [message, setMessage] = useState('')

    let dispatch = useDispatch()
    const ENDPOINT = 'http://localhost:5000/'

    useEffect(() => {
        let socket = openSocket(ENDPOINT, {transports: ['websocket']})
        let someId = JSON.parse(localStorage.getItem(keys.AUTH))
        let data = {
            candidateId: user.id,
            someId: someId.id
        }
        socket.emit('all messages', data)
        socket.on('get all messages', data => {
            dispatch(getAllMessages(data))
        })

        socket.on('sended message', data => {
            dispatch(sendMessage(data))
        })
    }, [])



    let CLOSE_MSG_FIELD = bool => {
        dispatch(closeWindowMessageField(bool))
    }

    const messages = useSelector(state => state.profile.messages)

    let GET_MESSAGE = e => {
        setMessage(e.target.value)
    }

    let SEND_MSG = e => {
        e.preventDefault()
        let socket = openSocket(ENDPOINT, {transports: ['websocket']})
        let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
        let post = {
            receiver_id: user.id,
            message,
            sender_id: candidate.id
        }
        socket.emit('new message', post)
        setMessage('')
        document.getElementById('messageField').reset()
    }


    return (
        <div className={`${styles.msgField} shadow`}>
            <div className={`${styles.infoBox} border-bottom`}>
                {
                    user.image
                        ? <img src={user.image} alt={user.name}/>
                        : <img src="assets/images/no-photo.png" alt={user.name}/>
                }

                <span>{user.name}&nbsp;{user.surname}</span>
                <span className={styles.closeBtn} onClick={() => CLOSE_MSG_FIELD(null)}>&times;</span>
            </div>
            <div className={styles.messages}>
                {
                    messages.length
                        ? messages.map(message => (<Msg key={message.id} message={message} user={user}/>))
                        : null
                }

            </div>
            <form className={styles.sendBox} id={'messageField'} onChange={GET_MESSAGE}>
                <textarea className={`form-control ${styles.textarea}`}/>
                <button className={styles.sendBtn} onClick={SEND_MSG}>
                    <img src="assets/icons/sendIcon.svg" alt="send"/>
                </button>
            </form>
        </div>
    )
}

export default MsgField