import React from 'react'
import styles from './notifications.module.css'

const OnlineStudent = ({student}) => {
    return (
        <div className={styles.onlineStudentItem}>
            <div className={styles.studentImage}>
                <img src={student.image} alt={student.username}/>
            </div>
            <div className={styles.studentInfo}>
                <p>{student.username} <img src="assets/icons/online.svg" alt=""/></p>
            </div>
        </div>
    )
}

export default OnlineStudent