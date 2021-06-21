import React from 'react'
import styles from './notifications.module.css'
import {closeWindowMessageField, openWindowMessageField} from "../../../redux/actions/profileAction";
import {useDispatch} from "react-redux";

const OnlineStudent = ({friend}) => {

    let dispatch = useDispatch()

    let OPEN_MESSAGE_FIELD = id => {
        dispatch(closeWindowMessageField(null))
        dispatch(openWindowMessageField(id))
    }

    return (
        <div className={styles.onlineStudentItem} onClick={() => OPEN_MESSAGE_FIELD(friend.id)}>
            <div className={styles.studentImage}>
                {
                    friend.image
                        ? <img src={friend.image} alt={friend.name}/>
                        : <img src="assets/images/no-photo.png" alt={friend.name}/>
                }

            </div>
            <div className={styles.studentInfo}>
                <p>{friend.name} <img src="assets/icons/online.svg" alt=""/></p>
            </div>
        </div>
    )
}

export default OnlineStudent