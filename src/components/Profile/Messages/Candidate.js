import React from 'react'
import styles from './messages.module.css'

const Candidate = ({friend, isOPEN}) => {

    let OPEN_CANDIDATE_MSG = id => {
        isOPEN({bool: true, id})
    }

    return (
        <div className={styles.candidate} onClick={() => OPEN_CANDIDATE_MSG(friend.id)}>
            <div className={styles.candidateImg}>
                {
                    friend.image
                        ? <img src={friend.image} alt={friend.name} className={styles.candidateImg}/>
                        : <img src='assets/images/no-photo.png' alt={friend.name} className={styles.candidateImg}/>
                }

            </div>
            <div className={styles.candidateInfo}>
                <p>{friend.name}&nbsp;{friend.surname}</p>
            </div>
        </div>
    )
}
// <img src="assets/icons/online.svg" alt=""/>
export default Candidate