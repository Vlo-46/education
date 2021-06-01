import React, {useState, useEffect} from 'react'
import styles from "./calendar.module.css";
import {useDispatch} from "react-redux";
import {createFreeTime} from "../../../redux/actions/profileAction";

const CreateFreeTime = ({selectedWeekday}) => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    let dispatch = useDispatch()

    useEffect(() => {

    }, [startTime, endTime])

    let START_TIME = e => {
        setStartTime(e.target.value)
        let firstPart = e.target.value.split(':')[0]
        let lastPart = e.target.value.split(':')[1]
        let finishTime = Number(firstPart * 60) + Number(lastPart) + 50;

        let hours = finishTime / 60
        let rHours = Math.floor(hours)
        let minutes = (hours - rHours) * 60
        let rMinutes = Math.round(minutes)
        if (rHours < 10) {
            rHours = `0${String(rHours)}`
        }
        if (rMinutes < 10) {
            rMinutes = `0${String(rMinutes)}`
        }
        setEndTime(`${rHours}:${rMinutes}`)
    }

    let SEND_VALUES = e => {
        e.preventDefault()
        dispatch(createFreeTime({
            start_time: startTime,
            end_time: endTime,
            weekday: selectedWeekday
        }))
        setStartTime(null)
        setEndTime(null)
        document.getElementById('freeTime').reset()
    }

    return (
        <form className={'row'}
              id={'freeTime'}
        >
            <div className={'col-sm-12 col-md-3 col-lg-3'}>
                <input type="time"
                       className={'form-control'}
                       onChange={START_TIME}
                />
            </div>
            {
                endTime
                    ? <div className={'col-sm-12 col-md-3 col-lg-3'}>
                        <input type="time"
                               className={'form-control'}
                               value={endTime}
                               disabled
                        />
                    </div>
                    : null
            }

            <div className={'col-sm-12 col-md-3 col-lg-3'}>
                <button type={'submit'}
                        className={`${styles.addChart} btn`}
                        onClick={SEND_VALUES}
                >
                    Ավելացնել
                </button>
            </div>
        </form>
    )
}

export default CreateFreeTime