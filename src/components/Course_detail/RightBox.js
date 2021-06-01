import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './course_detail.module.css'
import FreeTimes from "./FreeTimes";
import Certificates from "./Certificates";

const CourseDetailRightBox = ({candidate}) => {
    const [value, onChange] = useState(new Date());

    let ONCHANGE_HANDLER = date => {
        console.log(date)
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <Calendar onChange={ONCHANGE_HANDLER}
                      value={value}
                      locale={'hy-AM'}
                      className={styles.calendar}
            />
            {
                candidate.Free_hours && candidate.Free_hours.length
                    ? <FreeTimes freeHours={candidate.Free_hours} candidateId={candidate.id}/>
                    : null
            }

            {
                candidate.Teacher_certificates && candidate.Teacher_certificates.length
                    ? <Certificates certificates={candidate.Teacher_certificates}/>
                    : null
            }
        </div>
    )
}

export default CourseDetailRightBox