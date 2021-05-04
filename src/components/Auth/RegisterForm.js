import React, {useState, useEffect} from 'react'
import styles from './auth.module.css'
import Student from "./Student";
import Teacher from "./Teacher";
import axios from "axios";
import keys from "../../keys";

const RegisterForm = () => {
    let [tab, setTab] = useState('student')
    let [subjects, setSubjects] = useState([])

    useEffect(() => {
        function getSubjects() {
            axios.get(`${keys.BACKEND_URI}/subject/get_subject`)
                .then(res => {
                    setSubjects(res.data.subjects)
                })
                .catch(e => console.log(e))
        }

        getSubjects()
    }, [])

    let activeBtn = {
        backgroundColor: '#0B2E99',
        color: '#fff'
    }

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.formField} mt-5 mb-5`}>
                <h5 className={'text-center'}>Գրանցվել</h5>
                <div className={'pl-5 pr-5 mt-5'}>
                    <div className={`mt-3 ${styles.tab}`}>
                        <button className={`btn ${styles.tabBtn}`}
                                onClick={() => setTab('student')}
                                style={tab === 'student' ? activeBtn : null}
                        >
                            Աշակերտ
                        </button>
                        <button className={`btn ${styles.tabBtn}`}
                                onClick={() => setTab('teacher')}
                                style={tab === 'teacher' ? activeBtn : null}
                        >
                            Դասավանդող
                        </button>
                    </div>
                </div>
                {
                    tab === 'student'
                        ? <Student/>
                        : <Teacher subjects={subjects}/>
                }
            </div>
        </div>
    )
}

export default RegisterForm