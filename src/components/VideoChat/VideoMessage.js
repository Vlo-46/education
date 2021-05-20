import React, {useEffect, useRef} from 'react'
import styles from './videochat.module.css'

const VideoMessage = ({message, candidate}) => {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"})
    useEffect(() => {
        executeScroll()
    }, [])

    const senderStyle = {
        backgroundColor: "#E7F1FD",
        alignSelf: "flex-end"
    }
    return (
        <div className={`${styles.msgField}`}
             style={message.sender_id === candidate.id ? senderStyle : null}
             ref={myRef}>
            {
                message.sender_id !== candidate.id
                    ? <div>
                        {
                            candidate.image
                            ? <img src={candidate.img} alt={candidate.name} className={styles.senderImg}/>
                            : <img src="assets/images/no-photo.png" alt={candidate.name} className={styles.senderImg}/>
                        }
                    </div>
                    : null
            }
            <div className={styles.sendedMsg}>{message.message}</div>
        </div>
    )
}

export default VideoMessage