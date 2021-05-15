import React, {useState} from 'react'
import TeacherProfileHead from "../Panel/TeacherProfileHead";
import StudentProfileHead from "../Panel/StudentProfileHead";
import styles from './profile_field.module.css'
import OnlineStudent from "../Notifications/OnlineStudent";
import SearchStudents from "../Notifications/SearchStudents";
import {useDispatch, useSelector} from "react-redux";
import ProfileModal from "./ProfileModal";
import {
    teacherCreateAddress,
    teacherDeleteEducation, teacherDeletePhone, teacherDeleteVideo,
    teacherDeleteWorkExperience,
    teacherUpdateAddress
} from "../../../redux/actions/profileAction";


const ProfileField = ({candidate, tab, teacherProfession}) => {
    const [addressInput, setAddressInput] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [modalType, setModalType] = useState(null)
    const [addressValue, setAddressValue] = useState('')

    let dispatch = useDispatch()

    let onlineStudents = [
        {id: 1, username: 'Սոնա Սիմոնյան', image: 'assets/images/teacher-1.png'},
        {id: 2, username: 'Նարեկ Խաչատրյան', image: 'assets/images/teacher-2.png'},
        {id: 3, username: 'Աննա Կարապետյան', image: 'assets/images/teacher-1.png'},
    ]

    let education = useSelector(state => state.profile.teacherEducation)
    let certificates = useSelector(state => state.profile.teacherCertificate)
    let workExperience = useSelector(state => state.profile.teacherWorkExperience)
    let phones = useSelector(state => state.profile.teacherPhone)
    let candidateAddress = useSelector(state => state.profile.teacherAddress)
    let videos = useSelector(state => state.profile.teacherVideo)

    let inputStyle = {
        border: 'none',
        background: '#fafafb'
    }

    let CHANGE_ADDRESS_POSITION = () => {
        setAddressInput(true)
    }

    let GET_ADDRESS = e => {
        setAddressValue(e.target.value)
    }

    let SAVE_ADDRESS = (id) => {
        setAddressInput(false)
        dispatch(teacherUpdateAddress({address: addressValue, id}))
    }

    let CREATE_ADDRESS = e => {
        e.preventDefault()
        dispatch(teacherCreateAddress(addressValue))
    }


    let OPEN_MODAL = type => {
        setModalType(type)
        setOpenModal(true)
    }

    let CLOSE_MODAL = bool => {
        setOpenModal(bool)
    }

    return (
        <div className={'row'}>
            <div className="col-md-9">
                {
                    openModal
                        ? <ProfileModal type={modalType} CLOSE_MODAL={CLOSE_MODAL}/>
                        : null
                }
                {
                    candidate.role === 'teacher'
                        ? <TeacherProfileHead tab={tab} teacherProfession={teacherProfession} candidate={candidate}/>
                        : <StudentProfileHead tab={tab} candidate={candidate}/>
                }
                <div className={`shadow p-5 ${styles.profileFieldWrapper}`}>
                    {/*teacher*/}

                    {
                        candidate.role === 'teacher'
                            ? <>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/education.svg" alt="education"/>
                                            &nbsp;Կրթություն
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('education')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    {
                                        education.length
                                            ? <ul style={{listStyle: 'none'}} className={'p-0'}>
                                                {education.map(e => (
                                                    <li key={e.id}
                                                        className={'d-flex justify-content-between align-items-center'}>
                                                        <span>{e.university}, {e.start_date}-{e.end_date}&nbsp;թթ․ {e.education}</span>
                                                        <span className={styles.deleteIcon}
                                                              onClick={() => dispatch(teacherDeleteEducation(e.id))}
                                                        >
                                                            &times;
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            :
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                <p>Տվյալներ չեն գտնվել</p>
                                            </div>
                                    }
                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/policy.svg" alt="policy"/>
                                            &nbsp;Վկայականներ
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('certificate')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    {
                                        certificates.length
                                            ? <div className={`row`}>
                                                <div className={`col-md-4`}>
                                                    <div className={`${styles.certificateField}`}>
                                                        <img src="assets/images/certificate.png"
                                                             alt="certificate"
                                                             className={styles.certificateImg}
                                                        />
                                                        <span className={styles.certificateDeleteIcon}>
                                                            &times;
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={`col-md-4`}>
                                                    <div className={`${styles.certificateField}`}>
                                                        <img src="assets/images/certificate.png"
                                                             alt="certificate"
                                                             className={styles.certificateImg}
                                                        />
                                                        <span className={styles.certificateDeleteIcon}>&times;</span>
                                                    </div>
                                                </div>
                                                <div className={`col-md-4`}>
                                                    <div className={`${styles.certificateField}`}>
                                                        <img src="assets/images/certificate.png"
                                                             alt="certificate"
                                                             className={styles.certificateImg}
                                                        />
                                                        <span className={styles.certificateDeleteIcon}>&times;</span>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                <p>Տվյալներ չեն գտնվել</p>
                                            </div>
                                    }
                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/suitcase.svg" alt="suitcase"/>
                                            &nbsp;Աշխատանքային փորձ
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('work')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    {
                                        workExperience.length
                                            ? <ul style={{listStyle: 'none'}} className={'p-0'}>
                                                {
                                                    workExperience.map(w => (
                                                        <li key={w.id}
                                                            className={'d-flex justify-content-between align-items-center'}>
                                                            <span>{w.company}, {w.start_date}-{w.end_date}, {w.profession}</span>
                                                            <span className={styles.deleteIcon}
                                                                  onClick={() => dispatch(teacherDeleteWorkExperience(w.id))}
                                                            >
                                                                &times;
                                                            </span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            :
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                <p>Տվյալներ չեն գտնվել</p>
                                            </div>
                                    }

                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/selectAge.svg" alt="education"/>
                                            &nbsp;Ընտրել ըստ տարիքի
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('by_age')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                        <p><img src="assets/icons/document.svg" alt="document"/></p>
                                        <p>Տվյալներ չեն գտնվել</p>
                                    </div>
                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/earth.svg" alt="earth"/>
                                            &nbsp;Դասավանդման լեզուն
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('language')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                        <p><img src="assets/icons/document.svg" alt="document"/></p>
                                        <p>Տվյալներ չեն գտնվել</p>
                                    </div>
                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/address.svg" alt="address"/>
                                            &nbsp;Հասցե
                                        </p>
                                        {
                                            candidateAddress.length
                                                ? null
                                                : <p className={'d-flex align-items-center'}>
                                                    <img src="assets/icons/plus.svg" alt="plus" style={{cursor: 'pointer'}}/>
                                                </p>
                                        }

                                    </div>
                                    <hr/>
                                    {
                                        candidateAddress.length
                                            ? <form className={`d-flex justify-content-between align-items-center`}>
                                                <input type="text"
                                                       className="form-control"
                                                       defaultValue={candidateAddress[0].address}
                                                       disabled={addressInput ? null : 'disabled'}
                                                       style={addressInput ? null : inputStyle}
                                                       name={'address'}
                                                       onChange={GET_ADDRESS}
                                                />
                                                {
                                                    addressInput
                                                        ? <button className={'btn'}
                                                                  onClick={() => SAVE_ADDRESS(candidateAddress[0].id)}
                                                                  type={'submit'}
                                                        >
                                                            <i className={`fa fa-check ${styles.deleteIcon}`}/>
                                                        </button>
                                                        : <span onClick={CHANGE_ADDRESS_POSITION}>
                                                            <i className={`fa fa-edit ${styles.deleteIcon}`}/>
                                                        </span>
                                                }
                                            </form>
                                            :
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                <p>Տվյալներ չեն գտնվել</p>
                                            </div>
                                    }
                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/phone-call.svg" alt="phone-call"/>
                                            &nbsp;Բջջային
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('phone')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    {
                                        phones.length
                                            ? <ul style={{listStyle: 'none'}} className={'p-0'}>
                                                {phones.map((p, index) => (
                                                    <li key={p.id}
                                                        className={'d-flex justify-content-between align-items-center'}>
                                                        <span><b>{index + 1}.</b> &nbsp; {p.phone}</span>
                                                        <span className={styles.deleteIcon}
                                                              onClick={() => dispatch(teacherDeletePhone(p.id))}
                                                        >
                                                            &times;
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            :
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                <p>Տվյալներ չեն գտնվել</p>
                                            </div>
                                    }

                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/list.svg" alt="list"/>
                                            &nbsp;Անգլերենի տեսակը
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('language_type')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                        <p><img src="assets/icons/document.svg" alt="document"/></p>
                                        <p>Տվյալներ չեն գտնվել</p>
                                    </div>
                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/youtube.svg" alt="youtube"/>
                                            &nbsp;Ներբեռնել հոլովակ
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('video')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    {
                                        videos.length
                                            ? <div className={`row`}>
                                                {videos.map(v => (
                                                    <div className={`col-md-6 position-relative`} key={v.id}>
                                                        <div className={`${styles.certificateField}`}
                                                             dangerouslySetInnerHTML={{__html: v.video}}
                                                             style={{height: '220px'}}
                                                        >

                                                        </div>
                                                        <button
                                                            className={`${styles.certificateDeleteIcon} btn-small btn-danger`}
                                                            style={{color: '#fff', borderRadius: '50%', border: 'none'}}
                                                            onClick={() => dispatch(teacherDeleteVideo(v.id))}
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                            :
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                <p>Տվյալներ չեն գտնվել</p>
                                            </div>
                                    }
                                </div>
                            </>
                            : null
                    }
                    {/*student*/}

                    {
                        candidate.role === 'student'
                            ? <>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/education.svg" alt="education"/>
                                            &nbsp;Կրթություն
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('education')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    {
                                        education.length
                                            ? <ul style={{listStyle: 'none'}} className={'p-0'}>
                                                {education.map(e => (
                                                    <li key={e.id}
                                                        className={'d-flex justify-content-between align-items-center'}>
                                                        <span>{e.university}, {e.start_date}-{e.end_date}&nbsp;թթ․ {e.education}</span>
                                                        <span className={styles.deleteIcon}
                                                              onClick={() => dispatch(teacherDeleteEducation(e.id))}
                                                        >
                                                            &times;
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            :
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                <p>Տվյալներ չեն գտնվել</p>
                                            </div>
                                    }
                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/address.svg" alt="address"/>
                                            &nbsp;Հասցե
                                        </p>
                                        {
                                            candidateAddress.length
                                                ? null
                                                : <p className={'d-flex align-items-center'}>
                                                    <img src="assets/icons/plus.svg" alt="plus" style={{cursor: 'pointer'}}/>
                                                </p>
                                        }

                                    </div>
                                    <hr/>
                                    {
                                        candidateAddress.length
                                            ? <form className={`d-flex justify-content-between align-items-center`}>
                                                <input type="text"
                                                       className="form-control"
                                                       defaultValue={candidateAddress[0].address}
                                                       disabled={addressInput ? null : 'disabled'}
                                                       style={addressInput ? null : inputStyle}
                                                       name={'address'}
                                                       onChange={GET_ADDRESS}
                                                />
                                                {
                                                    addressInput
                                                        ? <button className={'btn'}
                                                                  onClick={() => SAVE_ADDRESS(candidateAddress[0].id)}
                                                                  type={'submit'}
                                                        >
                                                            <i className={`fa fa-check ${styles.deleteIcon}`}/>
                                                        </button>
                                                        : <span onClick={CHANGE_ADDRESS_POSITION}>
                                                            <i className={`fa fa-edit ${styles.deleteIcon}`}/>
                                                        </span>
                                                }
                                            </form>
                                            : <>
                                                <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                    <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                    <p>Տվյալներ չեն գտնվել</p>
                                                </div>
                                                <form className={`d-flex justify-content-between align-items-center`}>
                                                    <input type="text"
                                                           className="form-control"
                                                        // style={addressInput ? null : inputStyle}
                                                           name={'address'}
                                                           onChange={GET_ADDRESS}
                                                    />
                                                    <button className={'btn'}
                                                            onClick={CREATE_ADDRESS}
                                                            type={'submit'}
                                                    >
                                                        <i className={`fa fa-check ${styles.deleteIcon}`}/>
                                                    </button>
                                                </form>

                                            </>

                                    }
                                </div>
                                <div className="form-group mb-5">
                                    <div className={'d-flex justify-content-between'}>
                                        <p className={styles.fieldTitle}>
                                            <img src="assets/icons/phone-call.svg" alt="phone-call"/>
                                            &nbsp;Բջջային
                                        </p>
                                        <p className={'d-flex align-items-center'}>
                                            <img src="assets/icons/plus.svg"
                                                 alt="plus"
                                                 style={{cursor: 'pointer'}}
                                                 onClick={() => OPEN_MODAL('phone')}
                                            />
                                        </p>
                                    </div>
                                    <hr/>
                                    {
                                        phones.length
                                            ? <ul style={{listStyle: 'none'}} className={'p-0'}>
                                                {phones.map((p, index) => (
                                                    <li key={p.id}
                                                        className={'d-flex justify-content-between align-items-center'}>
                                                        <span><b>{index + 1}.</b> &nbsp; {p.phone}</span>
                                                        <span className={styles.deleteIcon}
                                                              onClick={() => dispatch(teacherDeletePhone(p.id))}
                                                        >
                                                            &times;
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            :
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <p><img src="assets/icons/document.svg" alt="document"/></p>
                                                <p>Տվյալներ չեն գտնվել</p>
                                            </div>
                                    }

                                </div>
                            </>
                            : null
                    }
                </div>
            </div>
            <div className="col-md-3  position-relative bg-white p-3" style={{boxShadow: '0 0 5px 0 #ccc'}}>
                <p className={styles.chatTitle}>Ուսանողներ</p>
                <div className={`${styles.onlineStudentsField}`}>
                    {
                        onlineStudents.map(student => <OnlineStudent student={student} key={student.id}/>)
                    }
                </div>
                <SearchStudents/>
            </div>
        </div>
    )
}

export default ProfileField