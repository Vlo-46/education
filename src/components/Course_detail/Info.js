import React from 'react'
import styles from './course_detail.module.css'

const CourseDetailInfo = () => {
    return (
        <div className={styles.infoWrapperBox}>
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className={styles.profileImg}>
                        <img src="assets/images/teacher-2.png" alt=""/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <p className={styles.nameFiled}>Արա Գրիգորյան</p>
                                <p>Լեզու։ Անգլերեն</p>
                                <p>Երկիր։ Հայաստան</p>
                            </div>
                            <div className={'mt-3'}>
                                <p><b>Կրթություն</b></p>
                                <ul className={styles.profileEducationField}>
                                    <li>2015-2018 ՀՊՄՀ</li>
                                    <li>2014-2015 Գինկո լեզվի կենտրոն</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.startField}>
                                <img src="assets/icons/star.png" alt=""/>
                                <img src="assets/icons/star.png" alt=""/>
                                <img src="assets/icons/star.png" alt=""/>
                                <img src="assets/icons/star.png" alt=""/>
                                <img src="assets/icons/star.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailInfo