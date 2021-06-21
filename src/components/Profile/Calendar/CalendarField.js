import React, {useEffect, useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import styles from './calendar.module.css'
import CreateFreeTime from "./CreateFreeTime";
import FreeTime from "./FreeTime";
import Week from "./Week";
import {useDispatch, useSelector} from "react-redux";
import {allFreeHours, saveCreatedTimes} from "../../../redux/actions/profileAction";

const CalendarField = () => {
    const [selectedWeekday, setSelectedWeekday] = useState(null)
    let dispatch = useDispatch()


    useEffect(() => {
        dispatch(allFreeHours())
    }, [])

    let SELECTED_WEEKDAY = day => {
        setSelectedWeekday(day)
    }

    let freeHours = useSelector(state => state.profile.freeHours)
    console.log(freeHours)

    let freeStyle = {
        color: 'red'
    }
    let dontFree = {
        color: "green"
    }

    return (
        <div className={'p-4'}>
            <p style={{fontSize: '18px', color: '#061358'}}>Օրացույց</p>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={`${styles.calendarBox}`}>
                        <table className="table" style={{overflowX: "scroll"}}>
                            <thead>
                            <tr>
                                <th scope="col">ԵՐԿ․</th>
                                <th scope="col">ԵՐՔ․</th>
                                <th scope="col">ՉՐՔ․</th>
                                <th scope="col">ՀՆԳ․</th>
                                <th scope="col">ՈւՐԲ․</th>
                                <th scope="col">ՇԲԹ․</th>
                                <th scope="col">ԿԻՐ․</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {
                                        freeHours['monday'] && freeHours['monday'].length
                                            ? freeHours['monday'].map(time => (
                                                <p key={time.id}>
                                                    <small
                                                        style={time.free ? dontFree : freeStyle}>{time.start_time}-{time.end_time}</small>
                                                </p>
                                            ))
                                            : null
                                    }
                                </td>
                                <td>
                                    {
                                        freeHours['tuesday'] && freeHours['tuesday'].length
                                            ? freeHours['tuesday'].map(time => (
                                                <p key={time.id}>
                                                    <small
                                                        style={time.free ? dontFree : freeStyle}>{time.start_time}-{time.end_time}</small>
                                                </p>
                                            ))
                                            : null
                                    }
                                </td>
                                <td>
                                    {
                                        freeHours['wednesday'] && freeHours['wednesday'].length
                                            ? freeHours['wednesday'].map(time => (
                                                <p key={time.id}>
                                                    <small
                                                        style={time.free ? dontFree : freeStyle}>{time.start_time}-{time.end_time}</small>
                                                </p>
                                            ))
                                            : null
                                    }
                                </td>
                                <td>
                                    {
                                        freeHours['thursday'] && freeHours['thursday'].length
                                            ? freeHours['thursday'].map(time => (
                                                <p key={time.id}>
                                                    <small
                                                        style={time.free ? dontFree : freeStyle}>{time.start_time}-{time.end_time}</small>
                                                </p>
                                            ))
                                            : null
                                    }
                                </td>
                                <td>
                                    {
                                        freeHours['friday'] && freeHours['friday'].length
                                            ? freeHours['friday'].map(time => (
                                                <p key={time.id}>
                                                    <small
                                                        style={time.free ? dontFree : freeStyle}>{time.start_time}-{time.end_time}</small>
                                                </p>
                                            ))
                                            : null
                                    }
                                </td>
                                <td>
                                    {
                                        freeHours['saturday'] && freeHours['saturday'].length
                                            ? freeHours['saturday'].map(time => (
                                                <p key={time.id}>
                                                    <small
                                                        style={time.free ? dontFree : freeStyle}>{time.start_time}-{time.end_time}</small>
                                                </p>
                                            ))
                                            : null
                                    }
                                </td>
                                <td>
                                    {
                                        freeHours['sunday'] && freeHours['sunday'].length
                                            ? freeHours['sunday'].map(time => (
                                                <p key={time.id}>
                                                    <small
                                                        style={time.free ? dontFree : freeStyle}>{time.start_time}-{time.end_time}</small>
                                                </p>
                                            ))
                                            : null
                                    }
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={`${styles.chart}`}>
                        <p>
                            <img src="assets/icons/wall-clock.svg" alt="chart"/>
                            &nbsp;Ժամանակացույց
                        </p>
                        {/*Weekday*/}

                        <Week SELECTED_WEEKDAY={SELECTED_WEEKDAY}/>

                        {/*End Weekday*/}
                        {
                            selectedWeekday
                                ? <>
                                    {/*CREATE FREE TIME FIELD*/}

                                    <CreateFreeTime selectedWeekday={selectedWeekday}/>

                                    {/*END CREATE FREE TIME FIELD*/}
                                    <hr/>

                                    <div className={styles.selectedTimes}>
                                        <div className="row">
                                            {/*ALL FREE TIMES*/}
                                            {
                                                freeHours[selectedWeekday] && freeHours[selectedWeekday].length
                                                    ? freeHours[selectedWeekday].map(weekday => (
                                                        <FreeTime key={weekday.id} weekday={weekday}/>
                                                    ))
                                                    : null
                                            }
                                            {/*END ALL FREE TIMES*/}
                                        </div>
                                    </div>
                                    <div className={'d-flex justify-content-end'}>
                                        <button className={`btn ${styles.applyBtn}`}
                                                disabled
                                                style={{cursor: "no-drop"}}
                                        >
                                            Հաստատել
                                        </button>
                                    </div>
                                </>
                                : null
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarField