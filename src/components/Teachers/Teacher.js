import React from 'react'
import styles from "./teacher.module.css";

const Teacher = ({teacher}) => {
    return (
        <div className="col-sm-6 col-md-3 col-lg-3 mb-3"
             data-aos="fade-up"
             data-aos-anchor-placement="top-center"
             // key={teacher.id}
             // onMouseOver={() => setHovered(true)}
             // onMouseOut={() => setHovered(false)}
        >
            <div className={styles.teacher}>
                <img src={teacher.image}
                     alt={teacher.image}
                     className={styles.teacherImg}
                    // style={hovered ? shadow : null}
                />
                <div className={styles.aboutTeacher}>
                    <p className='text-center'>{teacher.name}</p>
                    <p className='text-center'>{teacher.profession}</p>
                </div>
            </div>
        </div>
    )
}

export default Teacher