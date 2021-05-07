import React, {useState} from 'react'
import styles from './messages.module.css'
import SearchMsg from "./SearchMsg";
import Candidate from "./Candidate";
import PrivateMsg from "./PrivateMsg";
import TextareaField from "./TextareaField";


const Messages = ({candidate}) => {
    const [candidateId, setCandidateId] = useState(candidate.role === 'teacher' ? 5 : 2)

    let scrollStyle = {
        overflowY: 'scroll'
    }

    return (
        <div className={'p-4'}>
            <div className="row">
                <div className="col-md-3">
                    <div className={`${styles.messagesBox}`}>
                        <p style={{fontSize: '18px', color: '#061358'}}>Նամակներ</p>
                        <SearchMsg/>
                        <div className={styles.candidatesBox} style={scrollStyle}>
                            <Candidate candidateId={candidateId}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <PrivateMsg candidateId={candidateId}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className={`form-group ${styles.addStudentBox}`}>
                        <img src="assets/icons/add.svg" alt="add"/>
                        <span className={'pl-2'}>Ավելացնել օգտատեր</span>
                    </div>
                </div>
                <div className="col-md-9">
                    <TextareaField candidateId={candidateId}/>
                </div>
            </div>
        </div>
    )
}

export default Messages