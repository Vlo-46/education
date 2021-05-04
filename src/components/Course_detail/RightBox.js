import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './course_detail.module.css'
import FreeTimes from "./FreeTimes";
import Certificates from "./Certificates";


const CourseDetailRightBox = () => {
    const [value, onChange] = useState(new Date());

    let ONCHANGE_HANDLER = e => {

    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <Calendar onChange={ONCHANGE_HANDLER}
                      value={value}
                      locale={'hy-AM'}
                      className={styles.calendar}
            />
            <FreeTimes/>
            <Certificates/>
        </div>
    )
}

export default CourseDetailRightBox