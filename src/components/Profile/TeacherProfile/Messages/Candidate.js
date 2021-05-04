import React from 'react'
import styles from './messages.module.css'

const Candidate = ({user}) => {
    return (
        <div className={styles.candidate}>
            <div className={styles.candidateImg}>
                <img src='assets/images/teacher-2.png' alt={'candidate'} className={styles.candidateImg}/>
            </div>
            <div className={styles.candidateInfo}>
                <p>{user.name}&nbsp;{user.surname}<img src="assets/icons/online.svg" alt=""/></p>
            </div>
        </div>
    )
}

export default Candidate