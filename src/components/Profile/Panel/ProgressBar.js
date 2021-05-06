import React from 'react'
import styles from './panel.module.css'

const ProgressBar = () => {
    return (
        <div className="form-group p-3 shadow">
            <p className={styles.progressTitle}><small>Լրացրեք ձեր
                պրոֆիլը</small><small>90%</small></p>
            <div className="progress" style={{height: '8px'}}>
                <div className="progress-bar"
                     role="progressbar"
                     style={{width: '65%', backgroundColor: '#000D83', height: '8px'}}
                     aria-valuenow="65"
                     aria-valuemin="0"
                     aria-valuemax="100"
                />
            </div>
        </div>
    )
}

export default ProgressBar