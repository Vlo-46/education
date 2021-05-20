import React, {useState, useEffect} from 'react'
import styles from './videochat.module.css'
import VideoMessage from "./VideoMessage";
import {useSelector, useDispatch} from "react-redux";
import {allRoomMessages} from "../../redux/actions/roomChatAction";
import openSocket from "socket.io-client";
import keys from "../../keys";
import shortid from 'shortid'

const VideoMessagesField = ({candidate}) => {
    const [message, setMessage] = useState('')

    let dispatch = useDispatch()

    let roomUsers = useSelector(state => state.roomChat.roomUsers)
    let allMessages = useSelector(state => state.roomChat.allMessages)

    useEffect(() => {
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})
        socket.on('room all messages', data => {
            dispatch(allRoomMessages(data))
        })
    }, [])

    let CREATE_MSG = e => {
        e.preventDefault()
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})

        let post = {
            id: shortid.generate(),
            message: message,
            sender_id: candidate.id,
        }
        socket.emit('room msg', post)
        setMessage('')
        document.getElementById('msgForm').reset()
    }

    return (
        <div className={`${styles.videoMessagesField} shadow`}>
            {
                roomUsers.length
                    ? roomUsers.map(user => {
                        if (user.id !== candidate.id) {
                            return <div className={`${styles.userInfo}`} key={user.id}>
                                <div className={styles.userItem}>
                                    <div className={styles.userImgField}>
                                        {
                                            user.image
                                                ? <img src={user.image} alt="user"/>
                                                : <img src="assets/images/no-photo.png" alt="user"/>
                                        }
                                    </div>
                                    <div>
                                        <span>{user.name}&nbsp;{user.surname}</span>
                                    </div>
                                    <div>
                                        <img src="assets/icons/online.svg" alt="online"/>
                                    </div>
                                </div>
                            </div>
                        }
                    })
                    : null
            }
            <div className={styles.allMessages} style={allMessages.length > 7 ? {overflowY: "scroll"} : null}>
                {
                    allMessages.length
                        ? allMessages.map(message => (
                            <VideoMessage message={message}
                                          key={message.id}
                                          candidate={candidate}
                            />
                        ))
                        : null

                }
            </div>
            <form className={`${styles.sendMessageField}`} id={'msgForm'}>
                <div className={`${styles.addBtn}`}>
                    <img src="assets/icons/add-counter.svg" alt="add"/>
                </div>
                <div className={`${styles.textareaField}`}>
                    <textarea className={`form-control ${styles.textarea} shadow`}
                              onChange={e => setMessage(e.target.value)}
                    />
                </div>
                <div className={`${styles.addBtn}`}>
                    <button className={'btn'}
                            type={'submit'}
                            onClick={CREATE_MSG}
                    >
                        <img src="assets/icons/sendIcon.svg" alt="send"/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default VideoMessagesField