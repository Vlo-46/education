import React, {useEffect, useState} from 'react'
import styles from './messages.module.css'
import SearchMsg from "./SearchMsg";
import Candidate from "./Candidate";
import PrivateMsg from "./PrivateMsg";
import TextareaField from "./TextareaField";
import {useSelector} from "react-redux";


const Messages = ({candidate}) => {
    const [openPrivate, setOpenPrivate] = useState(false)
    const [userId, setUserId] = useState(null)

    let scrollStyle = {
        overflowY: 'scroll'
    }

    let friends = useSelector(state => state.profile.friends)

    let isOPEN = (data) => {
        setOpenPrivate(data.bool)
        setUserId(data.id)
    }

    return (
        <div className={'p-4'}>
            <div className="row">
                <div className="col-md-3">
                    <div className={`${styles.messagesBox}`}>
                        <p style={{fontSize: '18px', color: '#061358'}}>Նամակներ</p>
                        <SearchMsg/>
                        <div className={styles.candidatesBox} style={scrollStyle}>
                            {
                                friends.length
                                    ? friends.map(friend => <Candidate key={friend.id}
                                                                       friend={friend}
                                                                       isOPEN={isOPEN}
                                    />)
                                    : null
                            }

                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    {
                        openPrivate
                            ? <PrivateMsg userId={userId}/>
                            : null
                    }

                </div>
            </div>
            {
                openPrivate
                    ? <div className="row">
                        <div className="col-md-3">
                            {/*<div className={`form-group ${styles.addStudentBox}`}>*/}
                            {/*    <img src="assets/icons/add.svg" alt="add"/>*/}
                            {/*    <span className={'pl-2'}>Ավելացնել օգտատեր</span>*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-md-9">
                            <TextareaField candidateId={userId}/>
                        </div>
                    </div>
                    : null
            }

        </div>
    )
}

export default Messages