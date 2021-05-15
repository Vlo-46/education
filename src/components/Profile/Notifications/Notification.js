import React, {useEffect, useState} from 'react'
import styles from './notifications.module.css'
import axios from "axios";
import keys from "../../../keys";
import {useDispatch} from "react-redux";
import {checkNotificationRequest} from "../../../redux/actions/profileAction";

const Notification = ({notification}) => {
    let checkedStyle = {
        backgroundColor: '#EDF2FB'
    }

    const [user, setUser] = useState({})

    let dispatch = useDispatch()

    useEffect(() => {
        axios.get(`${keys.BACKEND_URI}/auth/get_user`, {
            params: {id: notification.student_id}
        })
            .then(res => {
                setUser(res.data)
            })
            .catch(e => {
                console.log(e)
            })

    }, [notification.student_id])

    // let DELETE_NOTIFICATION = id => {
    //     Alert(<Modal id={id}/>)
    // }

    let CHECK_REQUEST = data => {
        dispatch(checkNotificationRequest(data))
    }

    return (
        <div className={styles.notificationsItem} style={notification.seen ? null : checkedStyle}>
            {
                user
                    ? <div className={styles.notificationStudentField}>
                        <div className={styles.notificationStudentImage}>
                            {
                                user.image
                                    ? <img src={user.image} alt={user.name}/>
                                    : <img src={'assets/images/no-photo.png'} alt={user.name}/>
                            }
                        </div>
                        <div className={'pl-2'}>
                            <span className={styles.notificationUsername}>{user.username}</span>
                            <span className={styles.notificationSendedAt}>{notification.createdAt}</span>
                        </div>
                    </div>
                    : null
            }

            <div className={styles.notificationInfo}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at aut culpa excepturi ipsa
                    iusto
                    laborum natus sit totam voluptate ?
                </p>
            </div>
            <div className={styles.processField}>
                <div className={styles.requestTypeField}>
                    {
                        notification.status === 'during'
                            ? <i className={`fa fa-question ${styles.questionStatus}`}/>
                            : null
                    }
                    {
                        notification.status === 'approved'
                            ? <i className={`fa fa-check ${styles.approvedStatus}`}/>
                            : null
                    }
                    {
                        notification.status === 'denied'
                            ? <i className={`fa fa-times ${styles.deniedStatus}`}/>
                            : null
                    }
                </div>
                {
                    notification.seen
                        ? null
                        : <div className={styles.dotsField}>
                            <img src="assets/icons/dots.svg"
                                 className={`${styles.msgDots} dropdown-toggle dropdown-toggle-split`}
                                 data-bs-toggle="dropdown"
                                 aria-expanded="false"
                                 alt={'dot icon'}
                            />
                            <ul className={`dropdown-menu p-2 ${styles.openedWindow}`}>
                                <li onClick={() => CHECK_REQUEST({status: 'approved', notification_id: notification.id})}>
                                    <small>Ընդունել</small>
                                </li>
                                <li onClick={() => CHECK_REQUEST({status: 'denied', notification_id: notification.id})}>
                                    <small>Մերժել</small>
                                </li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    )
}

export default Notification