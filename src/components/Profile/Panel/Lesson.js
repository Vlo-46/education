import React from 'react'
import styles from './panel.module.css'

const Lesson = () => {
    return (
        <div className="col-md-6 mb-3">
            <div className={`shadow ${styles.cardLesson} p-2`}>
                <span className={styles.dots}><img src="assets/icons/dots.svg" alt="dots"/></span>
                <div className={'p-2'}>
                    <div className={'d-flex justify-content-between mt-3'}>
                        <small><img src="assets/icons/paperclip.svg" alt="paperclip"/>&nbsp;20</small>
                        <small>7 պար․</small>
                    </div>
                    <div className="progress mt-3" style={{height: '4px'}}>
                        <div className="progress-bar"
                             role="progressbar"
                             style={{width: '65%', backgroundColor: '#FFA726', height: '4px'}}
                             aria-valuenow="65"
                             aria-valuemin="0"
                             aria-valuemax="100"
                        />
                    </div>
                    <p className={styles.lessonName}>Ընդհանուր անգլերեն</p>
                </div>
            </div>
        </div>
    )
}

export default Lesson