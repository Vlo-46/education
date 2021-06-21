import React from 'react'
import styles from './panel.module.css'

const ProgressBar = ({candidate}) => {
    let progress = candidate.role === 'teacher' ? 7 : 4
    let progressPercent = 0
    let progressArray = []

    progressArray.push(candidate.image)
    progressArray.push(candidate.TeacherAddresses)
    progressArray.push(candidate.Teacher_certificates)
    progressArray.push(candidate.Teacher_educations)
    progressArray.push(candidate.Teacher_videos)
    progressArray.push(candidate.Teacher_work_experiences)
    progressArray.push(candidate.Teacher_phones)

    progressArray.forEach(i => {
        if(i && i.length) {
            progress = progress - 1
        }
    })

    if (candidate.role === 'teacher') {
        if (progress === 7) {
            progressPercent = 0
        } else if (progress === 6) {
            progressPercent = 15
        } else if (progress === 5) {
            progressPercent = 30
        } else if (progress === 4) {
            progressPercent = 45
        } else if (progress === 3) {
            progressPercent = 60
        } else if (progress === 2) {
            progressPercent = 75
        } else if (progress === 1) {
            progressPercent = 90
        } else if (progress === 0) {
            progressPercent = 100
        }
    }
    if (candidate.role === 'student') {
        if (progress === 4) {
            progressPercent = 0
        } else if (progress === 3) {
            progressPercent = 25
        } else if (progress === 2) {
            progressPercent = 50
        } else if (progress === 1) {
            progressPercent = 75
        } else if (progress === 0) {
            progressPercent = 100
        }
    }

    return (
        <div className="form-group p-3 shadow">
            <p className={styles.progressTitle}><small>Լրացրեք ձեր
                պրոֆիլը</small><small>{progressPercent}%</small></p>
            <div className="progress" style={{height: '8px'}}>
                <div className="progress-bar"
                     role="progressbar"
                     style={{width: `${progressPercent}%`, backgroundColor: '#000D83', height: '8px'}}
                     aria-valuenow="65"
                     aria-valuemin="0"
                     aria-valuemax="100"
                />
            </div>
        </div>
    )
}

export default ProgressBar