import React from 'react'
import styles from './course_detail.module.css'

const Certificate = ({certificate}) => {
    return (
        <div className={styles.certificateBox}>
            <img src={certificate.img} alt=""/>
        </div>
    )
}

export default Certificate