import React from 'react'
import styles from './profile_layout.module.css'

const StudentProfileLayout = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default StudentProfileLayout