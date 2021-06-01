import React from 'react'
import styles from "./calendar.module.css";
import {useDispatch} from "react-redux";
import {deleteCreatedFreeTime} from "../../../redux/actions/profileAction";

const FreeTime = ({weekday}) => {
    let dispatch = useDispatch()

    let DELETE_CREATED = id => {
        dispatch(deleteCreatedFreeTime({day: weekday.weekday, id}))
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3 d-flex align-items-center">
            <input type="text"
                   className="form-control"
                   defaultValue={`${weekday.start_time}-${weekday.end_time}`}
                   disabled
            />
            <button className={'btn btn-small'} onClick={() => DELETE_CREATED(weekday.id)}>
                <i className={`fa fa-trash ${styles.deleteIcon}`}/>
            </button>
        </div>
    )
}

export default FreeTime