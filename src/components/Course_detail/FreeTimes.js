import React, {useState} from 'react'
import styles from './course_detail.module.css'
import keys from "../../keys";
import openSocket from "socket.io-client";

const FreeTimes = ({freeHours, candidateId}) => {
    const [initialDay, setInitialDay] = useState(null)
    const [freeTimes, setFreeTimes] = useState(null)
    const [selectedHours, setSelectedHours] = useState([])

    let weekdays = [
        {id: 1, day: "Երկուշաբթի", name: "monday"},
        {id: 2, day: "Երեքշաբթի", name: "tuesday"},
        {id: 3, day: "Չորեքշաբթի", name: "wednesday"},
        {id: 4, day: "Հինգշաբթի", name: "thursday"},
        {id: 5, day: "Ուրբաթ", name: "friday"},
        {id: 6, day: "Շաբաթ", name: "saturday"},
        {id: 7, day: "Կիրակի", name: "sunday"},
    ]

    let free_hours = {}
    let filteredFreeHours = freeHours.filter(i => i.free !== false)
    filteredFreeHours.forEach(f => {
        if (f.weekday in free_hours) {
            free_hours[f.weekday].push(f);
        } else {
            free_hours[f.weekday] = [];
            free_hours[f.weekday].push(f);
        }
    })

    let GET_WEEKDAY = e => {
        if (e.target.value in free_hours) {
            setFreeTimes(free_hours[e.target.value])
        } else {
            setFreeTimes(null)
        }
        setInitialDay(e.target.value)
    }

    let SELECT_FREE_HOURS = e => {
        if (!selectedHours.length) {
            const item = freeTimes.find(i => i.id == e.target.value)
            const cloned = [...selectedHours, item];
            setSelectedHours(cloned)
        } else {
            const bool = selectedHours.some(i => i.id == e.target.value)
            if (bool) {
                const newArray = selectedHours.filter(i => i.id != e.target.value)
                const cloned = [...newArray]
                setSelectedHours(cloned)
            } else {
                const item = freeTimes.find(i => i.id == e.target.value)
                const cloned = [...selectedHours, item];
                setSelectedHours(cloned)
            }
        }
    }

    let DELETE_SELECTED_HOURS = id => {
        const newArray = selectedHours.filter(i => i.id !== id)
        const cloned = [...newArray]
        setSelectedHours(cloned)
    }

    let SEND_REQUEST_HANDLER = () => {
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})
        let user = JSON.parse(localStorage.getItem(keys.AUTH))
        let obj = {
            token: user.token,
            candidateId,
            selected_hours: selectedHours
        }
        socket.emit('send course request', obj)
    }

    return (
        <div className={styles.freeTimesBox}>
            <div className={'d-flex align-items-center mb-3'}>
                <span><img src="assets/icons/calendar.svg" alt="chart"/>&nbsp;&nbsp;</span>
                <span>Ընտրեք ձեզ հարմար օրերը և ժամերը</span>
            </div>
            <div className={'form-group'}>
                <select name="weekday"
                        className="form-control"
                        defaultValue={'default'}
                        onChange={GET_WEEKDAY}
                >
                    <option value="default">Խնդրում ենք ընտրել շաբաթվա օրը</option>
                    {
                        weekdays.map(day => (
                            <option value={day.name} key={day.id}>{day.day}</option>
                        ))
                    }
                </select>
            </div>
            {
                initialDay
                    ? <div className={'row'}>
                        {
                            freeTimes
                                ? freeTimes.map(free => (
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3" key={free.id}>
                                        <div className={'d-flex align-items-center'}>
                                            <span>Ժ․ {free.start_time} - {free.end_time}</span>
                                            &nbsp;
                                            &nbsp;
                                            <input type="checkbox"
                                                   value={free.id}
                                                   onChange={SELECT_FREE_HOURS}
                                            />
                                        </div>
                                    </div>
                                ))
                                : <div className="col-md-12 mb-3">
                                    <p>Այս օրվա համար ժամեր չկան</p>
                                </div>
                        }
                    </div>
                    : null
            }
            <hr/>
            {
                selectedHours.length
                    ? <div className={'row mt-3'}>
                        {
                            selectedHours.map(hours => (
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-2" key={hours.id}>
                                    <div className={'d-flex align-items-center justify-content-between'}>
                                        <small>Ժ․ {hours.start_time}-{hours.end_time}</small>
                                        <span style={{color: 'red', cursor: "pointer"}}
                                              onClick={() => DELETE_SELECTED_HOURS(hours.id)}
                                        >
                                            &times;
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    : null
            }
            <div className={'d-flex justify-content-end mt-2 mb-2'}>
                <button className={`btn ${styles.sendBtn}`}
                        onClick={SEND_REQUEST_HANDLER}
                >
                    Ուղարկել հայտ
                </button>
            </div>
        </div>
    )
}

export default FreeTimes