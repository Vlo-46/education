import React from 'react'
import TeacherStudent from "./Student";
import StudentPagination from "./StudentPagination";
import styles from "../Notifications/notifications.module.css";
import OnlineStudent from "../Notifications/OnlineStudent";
import SearchStudents from "../Notifications/SearchStudents";
import {useSelector} from "react-redux";

const Students = () => {
    let friends = useSelector(state => state.profile.friends)
    console.log(friends)

    return (
        <div className={'p-4'}>
            <p style={{fontSize: '18px', color: '#061358'}}>Ուսանողներ</p>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        {
                            friends.length
                                ? friends.map(f => (
                                    <TeacherStudent key={f.id} friend={f}/>
                                ))
                                : <h5 className={'text-center'}>Ընկերներ չկան</h5>
                        }
                    </div>
                    <StudentPagination/>
                </div>
            </div>
        </div>
    )
}

export default Students