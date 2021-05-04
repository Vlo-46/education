import React from 'react'
import styles from './profile_layout.module.css'
import Menu from "../components/Profile/TeacherProfile/Menu/Menu";


const TeacherProfileLayout = ({children}) => {
    return (
        <div style={{backgroundColor: '#FAFAFB'}}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-md-2 position-relative bg-white"
                         style={{boxShadow: '0px 0px 5px 0px #ccc', zIndex: 1}}>
                        <Menu/>
                    </div>
                    <div className="col-md-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherProfileLayout