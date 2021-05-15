import React from 'react'
import styles from './panel.module.css'


const TeacherProfileHead = ({tab, candidate, teacherProfession}) => {
    return (
        <div className="bg-white shadow rounded overflow-hidden">
            <div className={`px-4 pt-0 pb-4 pt-5 ${styles.cover}`}
                 style={{backgroundImage: "url('assets/images/background-teacher.jpg')"}}
            >
                <div className="media align-items-end profile-header">
                    <div className="profile mr-3">
                        {
                            candidate.image
                                ? <img
                                    src={candidate.image} alt={candidate.name}
                                    className={`mb-2 img-thumbnail ${styles.accountImg}`}
                                />
                                : <img
                                    src="assets/images/no-photo.png" alt={candidate.name}
                                    className={`mb-2 img-thumbnail ${styles.accountImg}`}
                                />
                        }

                        {/*{*/}
                        {/*    tab === 'profile'*/}
                        {/*        ? <button>Փոփոխել նկարը</button>*/}
                        {/*        : null*/}
                        {/*}*/}
                    </div>
                    <div className="media-body text-white">
                        <h4 className={`mt-0 mb-3 ${styles.accountInfo}`}>{candidate.name}</h4>
                        {
                            teacherProfession
                                ? <p className={`small mb-4 ${styles.profession}`}>@{teacherProfession.name}</p>
                                : null
                        }

                    </div>
                </div>
            </div>

            <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item ml-4">
                        <span className={`${styles.accountBodyText}`}>
                            Ուսանողներ
                        </span>
                        <p className={`mb-0 d-block pt-2 ${styles.accountBodyText}`}>16</p>
                    </li>
                    <li className="list-inline-item ml-4">
                        <span className={`${styles.accountBodyText}`}>
                            Վարկանիշ
                        </span>
                        <p className={`mb-0 d-block pt-2 ${styles.accountBodyText}`}>
                            <img src="assets/icons/star.png" alt="start"/>&nbsp;3․6&nbsp;Դ
                        </p>
                    </li>
                    <li className="list-inline-item ml-4">
                        <span className={`${styles.accountBodyText}`}>
                            Հաշիվ
                        </span>
                        <p className={`mb-0 d-block pt-2 ${styles.accountBodyText}`}>4500&nbsp;Դ</p>
                    </li>
                    <li className="list-inline-item ml-4">
                        <span className={`${styles.accountBodyText}`}>
                            Միավորներ
                        </span>
                        <p className={`mb-0 d-block pt-2 ${styles.accountBodyText}`}>16</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TeacherProfileHead