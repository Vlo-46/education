import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calendar.module.css'

const CalendarField = () => {
    const [value, onChange] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState({})
    const [allSelectedTimes, setAllSelectedTimes] = useState([])

    let GET_SELECTED_TIMES = e => {
        selectedTime[e.target.name] = e.target.value;
        setSelectedTime(selectedTime)
    }

    let SAVE_TIME = e => {
        e.preventDefault()
        allSelectedTimes.push(selectedTime)
        setAllSelectedTimes(allSelectedTimes)
    }


    return (
        <div className={'p-4'}>
            <p style={{fontSize: '18px', color: '#061358'}}>Օրացույց</p>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={`${styles.calendarBox}`}>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            locale={'hy-AM'}
                            className={styles.calendar}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={`${styles.chart}`}>
                        <p>
                            <img src="assets/icons/wall-clock.svg" alt="chart"/>
                            &nbsp;Ժամանակացույց
                        </p>
                        <form className={'row'} onChange={GET_SELECTED_TIMES}>
                            <div className={'col-sm-12 col-md-3 col-lg-3'}>
                                <input type="time"
                                       className={'form-control'}
                                       name={'startTime'}
                                />
                            </div>
                            <div className={'col-sm-12 col-md-3 col-lg-3'}>
                                <input type="time"
                                       className={'form-control'}
                                       name={'endTime'}
                                />
                            </div>
                            <div className={'col-sm-12 col-md-3 col-lg-3'}>
                                <button type={'submit'} className={`${styles.addChart} btn`}
                                      onClick={SAVE_TIME}
                                >
                                    Ավելացնել
                                </button>
                            </div>
                        </form>
                        <hr/>
                        <div className={styles.selectedTimes}>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3 d-flex align-items-center">
                                    <input type="text"
                                           className="form-control"
                                           defaultValue={'10:00-11-00'}
                                           disabled
                                    />
                                    <button className={'btn btn-small'}>
                                        <i className={`fa fa-trash ${styles.deleteIcon}`}/>
                                    </button>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3 d-flex align-items-center">
                                    <input type="text"
                                           className="form-control"
                                           defaultValue={'11:00-12-00'}
                                           disabled
                                    />
                                    <button className={'btn btn-small'}>
                                        <i className={`fa fa-trash ${styles.deleteIcon}`}/>
                                    </button>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3 d-flex align-items-center">
                                    <input type="text"
                                           className="form-control"
                                           defaultValue={'13:00-14-00'}
                                           disabled
                                    />
                                    <button className={'btn btn-small'}>
                                        <i className={`fa fa-trash ${styles.deleteIcon}`}/>
                                    </button>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3 d-flex align-items-center">
                                    <input type="text"
                                           className="form-control"
                                           defaultValue={'14:00-15-00'}
                                           disabled
                                    />
                                    <button className={'btn btn-small'}>
                                        <i className={`fa fa-trash ${styles.deleteIcon}`}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={'d-flex justify-content-end'}>
                            <button className={`btn ${styles.applyBtn}`}>Հաստատել</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarField