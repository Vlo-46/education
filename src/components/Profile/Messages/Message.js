import React, {useEffect} from 'react'
import styles from './messages.module.css'
import openSocket from 'socket.io-client'
import keys from "../../../keys";
import {useDispatch} from "react-redux";
import {deleteMessage} from "../../../redux/actions/profileAction";

const Message = ({candidateId, message}) => {
    let messageStyle = {
        justifyContent: 'flex-end'
    }
    let dispatch = useDispatch()
    useEffect(() => {
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})
        socket.on('deleted message', id => {
            dispatch(deleteMessage(id))
        })
    }, [dispatch])

    let DELETE_MESSAGE_HANDLER = id => {
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})
        socket.emit('delete message', id)
    }

    // let EDIT_MESSAGE_HANDLER = id => {
    //
    // }

    return (
        <div className={`form-group ${styles.messageField} mt-2 mb-2 p-3`}
             style={candidateId === message.sender_id ? messageStyle : null}
        >
            <div className={styles.candidateImg}>
                <img src="assets/images/teacher-2.png" alt="teacher"/>
            </div>
            <div className={`${styles.singleMsg}`}>
                {message.message}
            </div>
            {
                message.sender_id !== candidateId
                    ? <div className={'p-2'}>
                        <img src="assets/icons/dots.svg"
                             alt="dots icon"
                             className={`${styles.msgDots} dropdown-toggle dropdown-toggle-split`}
                             data-bs-toggle="dropdown"
                             aria-expanded="false"
                        />
                        <ul className={`dropdown-menu p-2 ${styles.openedWindow}`}>
                            {/*<li onClick={() => EDIT_MESSAGE_HANDLER(message.id)}><small>Փոփոխել</small></li>*/}
                            <li onClick={() => DELETE_MESSAGE_HANDLER(message.id)}><small>Ջնջել</small></li>
                        </ul>
                    </div>
                    : null
            }

        </div>
    )
}

export default Message