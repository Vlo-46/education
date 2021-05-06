import React from 'react'
import styles from './profile_layout.module.css'
import Menu from "../components/Profile/Menu/Menu";

const ProfileLayout = ({currentComponent, candidate}) => {
    return (
        <div style={{backgroundColor: '#FAFAFB'}}>
            <div className={styles.container}>
                <div className={styles.menuBar} style={{boxShadow: '0 0 5px 0 #ccc'}}>
                    <Menu candidate={candidate}/>
                </div>
                <div className={styles.profileContent}>
                    {currentComponent}
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout