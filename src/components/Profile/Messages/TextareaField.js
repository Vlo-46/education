import React, {useState} from 'react'
import styles from "./messages.module.css";
import 'emoji-mart/css/emoji-mart.css'
import {Picker} from 'emoji-mart'
import axios from "axios";
import keys from "../../../keys";

const TextareaField = () => {
    let SET_EMOJI = (emoji, event) => {
        console.log(emoji)
    }

    const [message, setMessage] = useState('')
    const [userMessage, setUserMessage] = useState(null)

    let GET_MESSAGE = e => {
        setMessage(e.target.value)
    }

    let SEND_MSG = e => {
        e.preventDefault()
        let post = {
            receiver_id: 5,
            message
        }
        axios.post(`${keys.BACKEND_URI}/message/send`, post, {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIwMTA3NjYxfQ.qsEXNDEoU9qFYPjqee5SsQSCIF77ptBSCy0nNkj7yDI'
        })
            .then(res => {
                setUserMessage(res.data)
                setMessage('')
            })
            .catch(e => {
                alert(e)
            })
    }

    return (
        <form className={`form-group ${styles.msgFooter}`}>
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
            {
                userMessage
                    ? <pre>{userMessage}</pre>
                    : null
            }
        </form>
    )
}

export default TextareaField