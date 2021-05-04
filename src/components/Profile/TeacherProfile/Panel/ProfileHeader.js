import React from 'react'
import styles from './panel.module.css'

const ProfileHead = () => {
    return (
        <div className={styles.profileHead}>
            <div className={styles.profileBody}
                 style={{backgroundImage: "url('assets/images/background-teacher.jpg')"}}
            >
                <div className={styles.profileAccount}>
                    <div>
                        <img src="assets/images/teacher-2.png" alt="teacher"/>
                    </div>
                    <div className={styles.accountInfo}>
                        <p>Արա Գրիգորյան</p>
                        <span>@english_teacher</span>
                    </div>
                </div>
            </div>
            <div className={styles.profileFooter}>
                <div>
                    <p>Ուսանողներ</p>
                    <span>12</span>
                </div>
                <div>
                    <p>Վարկանիշ</p>
                    <span><img src="assets/icons/star.png" alt="start"/>&nbsp;3․6</span>
                </div>
                <div>
                    <p>Հաշիվ</p>
                    <span>4500 Դ</span>
                </div>
                <div>
                    <p>Միավորներ</p>
                    <span>16</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileHead