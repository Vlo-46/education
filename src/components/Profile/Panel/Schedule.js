import React from 'react'
import styles from './panel.module.css'

const Schedule = () => {
    return (
        <div className="col-md-6 mb-3">
            <div className={`shadow ${styles.cardSchedule} p-2`}>
                <p>Ընդհանուր անգլերեն</p>
                <div className={'d-flex justify-content-between align-items-center'}>
                    <small>Արա Գրիգորյան</small>
                    <small>4-րդ պար․</small>
                </div>
                <div className={'d-flex justify-content-between align-items-center'}>
                    <small><img src="assets/icons/calendar.svg" alt="calendar"/>&nbsp;29/03/21</small>
                    <small><img src="assets/icons/wall-clock.svg" alt="clock"/>&nbsp;19:30</small>
                </div>
            </div>
        </div>
    )
}

export default Schedule