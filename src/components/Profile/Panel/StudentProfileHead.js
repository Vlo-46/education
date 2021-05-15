import React from 'react'
import styles from './panel.module.css'

const StudentProfileHead = ({tab, candidate}) => {
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
                    </div>
                    <div className="media-body text-white">
                        <h4 className={`mt-0 mb-3 ${styles.accountInfo}`}>{candidate.name}</h4>
                    </div>
                </div>
            </div>

            <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item ml-4">
                        <span className={`${styles.accountBodyText}`}>
                            Հաշիվ
                        </span>
                        <p className={`mb-0 d-block pt-2 ${styles.accountBodyText}`}>4500&nbsp;Դ</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default StudentProfileHead