import React, {useState} from 'react'
import styles from './courses.module.css'

const Choice = ({choice, index}) => {
    let [hovered, setHovered] = useState(false)

    let background = {
        backgroundColor: '#fff',
        transition: '0.5s',
        color: '#0038E3',
    }

    return (
        <div className={styles.choice}
             onMouseOver={() => setHovered(true)}
             onMouseOut={() => setHovered(false)}
             data-aos="zoom-in-right"
        >
            <div>
                <span className={styles.choiceNumber} style={hovered ? background : null}>{index + 1}</span>
            </div>
            <div>
                <span className={styles.choiceTitle}>{choice.title}</span>
                <span className={styles.choiceSubTitle}>{choice.subTitle}</span>
            </div>
        </div>
    )
}

export default Choice