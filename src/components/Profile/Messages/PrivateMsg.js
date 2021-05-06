import React from 'react'
import styles from "./messages.module.css";
import Message from "./Message";

const PrivateMsg = () => {
    let scrollStyle = {
        overflowY: 'scroll'
    }
    return (
        <div className={styles.privateMsg}>
            <div className={styles.msgHead}>
                <div className={styles.msgCandidate}>
                    <div>
                        <img src="assets/images/teacher-2.png" alt="" className={styles.privateMsgCandidateImg}/>
                    </div>
                    <div>
                        <span>Կարեն Կարապետյան</span>
                    </div>
                    <div>
                        <img src="assets/icons/online.svg" alt=""/>
                    </div>
                </div>
                <div>
                    <i className={`fa fa-trash ${styles.deleteAllMsgIcon}`}/>
                </div>
            </div>
            <div className={styles.msgBody} style={scrollStyle}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        </div>
    )
}

export default PrivateMsg