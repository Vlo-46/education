import React from 'react'
import styles from './notifications.module.css'

const Modal = ({id}) => {
    return (
        <div>
            <p className={styles.modalTitle}>Ինչու՞ եք ցանկանում մերժել հայտը</p>
            <span className={'mb-2'}>Նշել պատճառը ՝ </span>
            <textarea className={`form-control ${styles.reason}`}/>
        </div>
    )
}

export default Modal