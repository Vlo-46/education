import React from 'react'
import styles from './course_detail.module.css'

const CourseDetailInfo = ({candidate}) => {
    return (
        <div className={styles.infoWrapperBox}>
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className={styles.profileImg}>
                        {
                            candidate.image
                                ? <img src={candidate.image} alt={candidate.name}/>
                                : <img src="assets/images/no-photo.png" alt={candidate.name}/>
                        }
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <p className={styles.nameFiled}>{candidate.name}&nbsp;{candidate.surname}</p>
                                <p>Լեզու։ Անգլերեն</p>
                                <p>Երկիր։ Հայաստան</p>
                                {
                                    candidate.Teacher_phones.length
                                        ? candidate.Teacher_phones.map((p, index) => (
                                            <p key={p.id}>Հեռախոսահամար {index + 1}։&nbsp;{p.phone}</p>
                                        ))
                                        : null
                                }
                            </div>
                            <div className={'mt-3'}>
                                <p><b>Կրթություն</b></p>
                                <ul className={styles.profileEducationField}>
                                    {
                                        candidate.Teacher_educations.length
                                            ? candidate.Teacher_educations.map(e => (
                                                <li key={e.id}>{e.start_date}-{e.end_date},&nbsp;{e.education},&nbsp;{e.university}</li>
                                            ))
                                            : <li>Տեղեկություն ավելացված չէ</li>
                                    }
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