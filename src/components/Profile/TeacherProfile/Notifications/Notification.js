import React from 'react'
import styles from './notifications.module.css'
import {Alert} from 'react-st-modal';
import Modal from './Modal'

const Notification = ({notification}) => {
    let checkedStyle = {
        backgroundColor: '#EDF2FB'
    }

    let DELETE_NOTIFICATION = id => {
        Alert(<Modal id={id}/>)
    }

    return (
        <div className={styles.notificationsItem} style={notification.checked ? null : checkedStyle}>
            <div className={styles.notificationStudentField}>
                <div className={styles.notificationStudentImage}><img src={notification.image} alt=""/></div>
                <div className={'pl-2'}>
                    <span className={styles.notificationUsername}>{notification.username}</span>
                    <span className={styles.notificationSendedAt}>{notification.sended_at}</span>
                </div>
            </div>
            <div className={styles.notificationInfo}>
                <p>{notification.description}</p>
            </div>
            <div className={styles.processField}>
                <div className={styles.requestTypeField}>
                    <img src="assets/icons/student-request.svg" alt=""/>
                </div>
                <div className={styles.dotsField}>
                    <img src="assets/icons/dots.svg"
                         className={`${styles.msgDots} dropdown-toggle dropdown-toggle-split`}
                         data-bs-toggle="dropdown"
                         aria-expanded="false"
                    />
                    <ul className={`dropdown-menu p-2 ${styles.openedWindow}`}>
                        <li onClick={() => DELETE_NOTIFICATION(notification.id)}><small>Ջնջել</small></li>
                        <li><small>Վերահասցեավորել</small></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification