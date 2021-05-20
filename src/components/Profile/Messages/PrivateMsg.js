import React, {useEffect, useState} from 'react'
import styles from "./messages.module.css";
import Message from "./Message";
import openSocket from 'socket.io-client'
import keys from "../../../keys";
import {useDispatch, useSelector} from "react-redux";
import {getAllMessages} from "../../../redux/actions/profileAction";
import axios from "axios";

const PrivateMsg = ({candidateId}) => {
    const [candidate, setCandidate] = useState(null)

    let scrollStyle = {
        overflowY: 'scroll'
    }
    let dispatch = useDispatch()

    const ENDPOINT = 'http://localhost:5000/'
    useEffect(() => {
        let socket = openSocket(ENDPOINT, {transports: ['websocket']})
        let user = JSON.parse(localStorage.getItem(keys.AUTH))
        let data = {
            candidateId,
            someId: user.id
        }
        socket.emit('all messages', data)
        socket.on('get all messages', data => {
            dispatch(getAllMessages(data))
        })

        axios.get(`${keys.BACKEND_URI}/auth/get_user`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            },
            params: {
                id: candidateId
            }
        })
            .then(res => {
                setCandidate(res.data)
            })
            .catch(e => {
                alert('Error')
            })

    }, [candidateId, dispatch])

    const allMessages = useSelector(state => state.profile.messages)

    // console.log(`private message field - ${candidateId}`)

    return (
        <div className={styles.privateMsg}>
            <div className={styles.msgHead}>
                {
                    candidate
                        ? <div className={styles.msgCandidate}>
                            <div>
                                {
                                    candidate.image
                                        ? <img src={candidate.image}
                                               alt={candidate.name}
                                               className={styles.privateMsgCandidateImg}
                                        />
                                        : <img src="assets/images/no-photo.png"
                                               alt="no photo"
                                               className={styles.privateMsgCandidateImg}
                                        />
                                }
                            </div>
                            <div>
                                <span>{candidate.name}&nbsp;{candidate.surname}</span>
                            </div>
                            <div>
                                <img src="assets/icons/online.svg" alt=""/>
                            </div>
                        </div>
                        : null
                }

                <div>
                    <i className={`fa fa-trash ${styles.deleteAllMsgIcon}`}/>
                </div>
            </div>
            <div className={styles.msgBody} style={scrollStyle}>
                {
                    allMessages.length
                        ? allMessages.map(m => <Message key={m.id} message={m} candidateId={candidateId}/>)
                        : null
                }

            </div>
        </div>
    )
}

export default PrivateMsg