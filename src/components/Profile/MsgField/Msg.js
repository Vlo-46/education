import React from 'react'
import styles from './msg_field.module.css'

const Msg = ({message, user}) => {
    let messageStyle = {
        alignSelf: "flex-end",
        backgroundColor: '#fff',
        color: '#000',
        textAlign: "right"
    }

    return (
        <div className={styles.msgItem} style={message.sender_id === user.id ? messageStyle : null}>
            <span>{message.message}</span>
        </div>
    )
}

export default Msg