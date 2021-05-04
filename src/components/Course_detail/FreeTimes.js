import React from 'react'
import styles from './course_detail.module.css'

const FreeTimes = () => {
    let free_times = [
        {id: 1, start_time: '15:00', end_time: '15:55'},
        {id: 2, start_time: '16:00', end_time: '16:55'},
        {id: 3, start_time: '17:00', end_time: '17:55'},
        {id: 4, start_time: '18:00', end_time: '18:55'},
        {id: 5, start_time: '19:00', end_time: '19:55'},
        {id: 6, start_time: '20:00', end_time: '20:55'},
    ]

    return (
        <div className={styles.freeTimesBox}>
            <div className={'d-flex align-items-center mb-3'}>
                <span><img src="assets/icons/calendar.svg" alt="chart"/>&nbsp;&nbsp;</span>
                <span>27.04.2021</span>
            </div>
            <div className={'row'}>
                {
                    free_times.map(f => (
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3" key={f.id}>
                            <div className={'d-flex align-items-center'}>
                                <input type="checkbox" name="" id=""/>
                                &nbsp;
                                &nbsp;
                                <span>{f.start_time}-{f.end_time}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={'d-flex justify-content-end mt-2 mb-2'}>
                <button className={`btn ${styles.sendBtn}`}>Ուղարկել հայտ</button>
            </div>
        </div>
    )
}

export default FreeTimes