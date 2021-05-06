import React from 'react'
import TeacherProfileHead from "../Panel/TeacherProfileHead";
import StudentProfileHead from "../Panel/StudentProfileHead";
import styles from './profile_field.module.css'
import OnlineStudent from "../Notifications/OnlineStudent";
import SearchStudents from "../Notifications/SearchStudents";

const ProfileField = ({candidate}) => {
    let onlineStudents = [
        {id: 1, username: 'Սոնա Սիմոնյան', image: 'assets/images/teacher-1.png'},
        {id: 2, username: 'Նարեկ Խաչատրյան', image: 'assets/images/teacher-2.png'},
        {id: 3, username: 'Աննա Կարապետյան', image: 'assets/images/teacher-1.png'},
    ]


    return (
        <div className={'row'}>
            <div className="col-md-9">
                {
                    candidate.role === 'teacher'
                        ? <TeacherProfileHead/>
                        : <StudentProfileHead/>
                }
                <div className={`shadow p-5 ${styles.profileFieldWrapper}`}>
                    <div className="form-group mb-5">
                        <div className={'d-flex justify-content-between'}>
                            <p className={styles.fieldTitle}>
                                <img src="assets/icons/education.svg" alt="education"/>
                                &nbsp;Կրթություն
                            </p>
                            <p className={'d-flex align-items-center'}>
                                <img src="assets/icons/plus.svg" alt="plus"/>
                            </p>
                        </div>
                        <hr/>
                        <ul style={{listStyle: 'none'}} className={'p-0'}>
                            <li><span>Անգլերենի ուսուցիչ</span></li>
                            <li><span>ԵՊՀ</span></li>
                            <li><span>ՀԱՊՀ</span></li>
                        </ul>
                    </div>
                    <div className="form-group mb-5">
                        <div className={'d-flex justify-content-between'}>
                            <p className={styles.fieldTitle}>
                                <img src="assets/icons/policy.svg" alt="policy"/>
                                &nbsp;Վկայականներ
                            </p>
                            <p className={'d-flex align-items-center'}>
                                <img src="assets/icons/plus.svg" alt="plus"/>
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
                                <img src="assets/icons/suitcase.svg" alt="suitcase"/>
                                &nbsp;Աշխատանքային փորձ
                            </p>
                            <p className={'d-flex align-items-center'}>
                                <img src="assets/icons/plus.svg" alt="plus"/>
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
                                <img src="assets/icons/selectAge.svg" alt="education"/>
                                &nbsp;Ընտրել ըստ տարիքի
                            </p>
                            <p className={'d-flex align-items-center'}>
                                <img src="assets/icons/plus.svg" alt="plus"/>
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
                                <img src="assets/icons/plus.svg" alt="plus"/>
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
                            <p className={'d-flex align-items-center'}>
                                <img src="assets/icons/plus.svg" alt="plus"/>
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
                                <img src="assets/icons/phone-call.svg" alt="phone-call"/>
                                &nbsp;Բջջային
                            </p>
                            <p className={'d-flex align-items-center'}>
                                <img src="assets/icons/plus.svg" alt="plus"/>
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
                                <img src="assets/icons/list.svg" alt="list"/>
                                &nbsp;Անգլերենի տեսակը
                            </p>
                            <p className={'d-flex align-items-center'}>
                                <img src="assets/icons/plus.svg" alt="plus"/>
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
                                <img src="assets/icons/plus.svg" alt="plus"/>
                            </p>
                        </div>
                        <hr/>
                        <div className={'d-flex justify-content-center align-items-center flex-column'}>
                            <p><img src="assets/icons/document.svg" alt="document"/></p>
                            <p>Տվյալներ չեն գտնվել</p>
                        </div>
                    </div>
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